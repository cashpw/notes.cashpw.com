+++
title = "How to export an image gallery into Hugo using Emacs, Org-mode, and Ox-Hugo"
author = ["Cash Prokop-Weaver"]
date = 2023-12-14T10:57:00-08:00
lastmod = 2023-12-22T22:31:06-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "283113ee-a98b-4688-91ca-56db7f0948cb"
+++

I write notes using Emacs and export them into Hugo using [ox-hugo]({{< relref "ox_hugo.md" >}}) ([How I write notes]({{< relref "how_i_write_notes.md" >}})) and wanted to include an image gallery while retaining the utility of searching images (as `org-mode` headings) by tag. After everything's said and done, I want the exported markdown to look like:

```md
{{</* gallery */>}}

{{</* figure src="/ox-hugo/..." attr="<attribution>" class="hugo-gallery-image" attrlink="<attribution link>" */>}}

{{</* figure src="/ox-hugo/..." attr="<attribution>" class="hugo-gallery-image" attrlink="<attribution link>" */>}}

{{</* figure src="/ox-hugo/..." attr="<attribution>" class="hugo-gallery-image" attrlink="<attribution link>" */>}}

{{</* /gallery */>}}
```

While the `org-mode` would look like:

```org
...

* [[file:...]] :foo:bar:
* [[file:...]] :bar:
* [[file:...]] :foo:baz:

...
```


## Code {#code}


### Emacs {#emacs}

```emacs-lisp
;; Include (package! org-special-block-extras) in packages file.
(use-package! org-special-block-extras
  :after org
  :hook (org-mode . org-special-block-extras-mode)
  :custom
  (o-docs-libraries
   '("~/org-special-block-extras/documentation.org")
   "The places where I keep my '#+documentation'")
  (org-defblock hugogallery
                (editor "Editor HugoGallery") ()
                "Wraps content in Hugo gallery shortcode."
                (if (not (equal backend 'hugo))
                    contents
                  (format "{{</* gallery */>}}%s{{</* /gallery */>}}"
                          ;; Remove duplicate ":class"
                          (replace-regexp-in-string ":class:class"
                                                    ":class"
                                                    ;; Add "hugo-gallery-image" to list of classes
                                                    (replace-regexp-in-string "\\(attr_html: \\(.*:class\\)?\\)"
                                                                              "\\1:class hugo-gallery-image "
                                                                              contents))))))
(defun cashpw/org-roam--export-gallery (backend)
  "Transform a list of headings into a list of files compatible with {{</* gallery */>}}.

Only run when BACKEND is `'hugo'."
  (when (and (org-roam-file-p)
             (equal backend 'hugo))
    (let ((gallery-tag "gallery")
          (org-use-tag-inheritance nil))
      (save-excursion
        (goto-char (point-min))
        (org-map-entries
         (lambda ()
           (let* ((sub-heading-level (1+ (org-outline-level)))
                  (match (s-lex-format "LEVEL=${sub-heading-level}"))
                  ;; Speed up `org-entry-properties' (see `org-map-entries')
                  (org-trust-scanner-tags t)
                  (image-lines '()))
             (org-narrow-to-subtree)
             (org-map-entries
              (lambda ()
                (let* ((file (org-entry-get nil "ITEM"))
                       (citation-property-name "CITATION")
                       (citation-key (when-let ((citation-property-alist (org-entry-properties nil citation-property-name)))
                                       (replace-regexp-in-string "\\[cite.*:@\\([^;]*\\)\\(;\\)?.*\\]"
                                                                 "\\1"
                                                                 (cdr (assoc citation-property-name
                                                                             citation-property-alist)))))
                       (citar-entry (citar-get-entry citation-key))
                       (attr (cdr (assoc "author" citar-entry)))
                       (attrlink (cdr (assoc "url" citar-entry)))
                       (attr-html (concat
                                   "#+attr_html: "
                                   (cond
                                    ((and attr attrlink)
                                     (s-lex-format " :attr ${attr} :attrlink ${attrlink}}"))
                                    (attr
                                     (s-lex-format " :attr ${attr}"))
                                    (t
                                     ""))))
                       (line (s-lex-format "
${attr-html}
${file}
")))
                  (push line
                        image-lines)
                  ))
              match
              'tree)
             (end-of-line)
             (newline)
             (delete-region (point) (point-max))
             (newline)
             (insert "#+begin_hugogallery")
             (newline)
             (insert (s-join "" (nreverse image-lines)))
             (insert "#+end_hugogallery")
             (newline)
             (widen)))
         gallery-tag)))))

(add-hook! 'org-export-before-processing-hook
           'cashpw/org-roam--export-gallery)

(defun cashpw/org-hugo--set-gallery-item-citation ()
  "Based on `citar-org-roam-ref-add."
  (interactive)
  (let ((citation (with-temp-buffer (org-cite-insert nil)
                                    (buffer-string))))
    (org-set-property "CITATION" citation)))
```


### Hugo {#hugo}


#### CSS and JS {#css-and-js}

Install static files from [hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery).


#### Shortcodes {#shortcodes}

<!--list-separator-->

-  `figure`

    Use this modified version of the `figure` from [hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery) to create thumbnails. You'll need to change the sizes (e.g. 240x and 240x240 below) to match the size on your site.

    ```html
    <!--
    Put this file in /layouts/shortcodes/figure.html
    NB this overrides Hugo's built-in "figure" shortcode but is backwards compatible
    Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
    -->

    {{- if not ($.Page.Scratch.Get "figurecount") }}
      {{- partial "load_photoswipe.html" -}}
      <link rel="stylesheet" href={{ "css/hugo-easy-gallery.css" | relURL }} />
    {{ end }}
    {{- $.Page.Scratch.Add "figurecount" 1 -}}

    {{ .Scratch.Set "thumb" (.Get "src" | default (printf "%s." (.Get "thumb") | replace (.Get "link") ".")) }}
    {{- if (in (split (.Get "class") " ") "hugo-gallery-image") -}}
      {{ $original := resources.Get (.Get "src") }}
      {{ if and ($original) (not (eq $original.MediaType.SubType "svg")) }}
        {{ .Scratch.Set "thumb" (($original.Resize "240x").Crop "240x240").RelPermalink }}
      {{ end }}
    {{- end -}}
    {{- $thumb := .Scratch.Get "thumb" -}}

    <div class="box{{ with .Get "caption-position" }} fancy-figure caption-position-{{.}}{{end}}{{ with .Get "caption-effect" }} caption-effect-{{.}}{{end}}" {{ with .Get "width" }}style="max-width:{{.}}"{{end}}>
      <figure {{ with .Get "class" }}class="{{.}}"{{ end }} itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <div class="img"{{ if .Parent }} style="background-image: url('{{ $thumb | relURL }}');"{{ end }}{{ with .Get "size" }} data-size="{{.}}"{{ end }}>
          <img itemprop="thumbnail" src="{{ $thumb | relURL }}" {{ with .Get "alt" | default (.Get "caption") }}alt="{{.}}"{{ end }}/><!-- <img> hidden if in .gallery -->
        </div>
        {{ with .Get "link" | default (.Get "src") }}<a href="{{ . | relURL }}" itemprop="contentUrl"></a>{{ end }}
        {{- if or (or (.Get "title") (.Get "caption")) (.Get "attr")}}
          <figcaption>
            {{- with .Get "title" }}<h4>{{.}}</h4>{{ end }}
            {{- if or (.Get "caption") (.Get "attr")}}
              <p>
                {{- .Get "caption" -}}
                {{- if .Get "attrlink" }}
                  <a href="{{ .Get `attrlink` }}">{{ .Get "attr" }}</a>
                {{- else -}}
                  {{ .Get "attr"}}
                {{- end -}}
              </p>
            {{- end }}
          </figcaption>
        {{- end }}
      </figure>
    </div>
    ```

<!--list-separator-->

-  `gallery`

    Use as-is from [hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery).


## Example {#example}

I add the citations by manually running `cashpw/org-hugo--set-gallery-item-citation` which pulls from my bibliography (generated from [Zotero]({{< relref "zotero.md" >}})).

Take the following `org-mode` sample for example.

```org
...

* Gallery :gallery:
** [[file:2023-12-13_07-21-42_0qr85syd5kab1.jpg.jpeg]] :glaze:mug:
:PROPERTIES:
:CITATION: [cite:@gummiibear8260sFlowerPatternProgress2023]
:END:
** [[file:2023-12-13_07-21-50_e8gd68ntpcab1.jpg.jpeg]] :glaze:plate:
:PROPERTIES:
:CITATION: [cite:@gummiibear8260sFloralinspiredPlatePainted2023]
:END:
** [[file:2023-12-13_07-23-29_vblmbsyqklab1.jpg.jpeg]] :glaze:bowl:
:PROPERTIES:
:CITATION: [cite:@rutabaga4lifeMyNewestPeacockBowl2023]
:END:
** [[file:2023-12-13_08-30-05_rhcv5y37fs7b1.jpg.jpeg]] :glaze:bowl:
:PROPERTIES:
:CITATION: [cite:@colopotter35ServingBowl2023]
:END:

...
```

I export this using `org-hugo-export-wim-to-md` and the output is:

```md
...

{{</* gallery */>}}

{{</* figure src="/ox-hugo/2023-12-13_07-21-42_0qr85syd5kab1.jpg.jpeg" class="hugo-gallery-image" attr="Gummiibear82" attrlink="www.reddit.com/r/Ceramics/comments/14t9rlz/60s_flower_pattern_in_progress/" */>}}

{{</* figure src="/ox-hugo/2023-12-13_07-21-50_e8gd68ntpcab1.jpg.jpeg" class="hugo-gallery-image" attr="Gummiibear82" attrlink="www.reddit.com/r/Ceramics/comments/14sa6z0/60s_floralinspired_plate_i_painted/" */>}}

{{</* figure src="/ox-hugo/2023-12-13_07-23-29_vblmbsyqklab1.jpg.jpeg" class="hugo-gallery-image" attr="rutabaga4life" attrlink="www.reddit.com/r/Ceramics/comments/14thf4z/my_newest_peacock_bowl/" */>}}

{{</* /gallery */>}}

...
```


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>
