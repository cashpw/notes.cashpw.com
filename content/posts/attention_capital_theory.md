+++
title = "Attention Capital Theory"
author = ["Cash Weaver"]
date = 2021-12-03T12:17:00-08:00
lastmod = 2021-12-04T09:50:52-08:00
tags = ["@cal-newport", "attention"]
categories = ["cal-newport", "attention"]
draft = false
roam_refs = ["https://www.calnewport.com/about/"]
+++

```emacs-lisp

  (when (org-roam-file-p)
    (when-let*
        ((keyword
          "HUGO_CUSTOM_FRONT_MATTER")
         (raw-roam-refs
          (org-export-get-node-property
           :ROAM_REFS
           (org-element-parse-buffer)))
         (refs
          (split-string
           raw-roam-refs
           " +"))
         (quote-wrapped-refs
          (string-join
           (mapcar
            (lambda (ref)
              (format "\"%s\"" ref))
            refs)
           " "))
         (current-roam-refs
         (or
          (org-roam-get-keyword
           keyword))
         "")
         )
      quote-wrapped-refs
      ;;(if (not (string=
                ;;roam-refs
                ;;current-roam-refs))
          ;;(org-roam-set-keyword
           ;;(downcase keyword)
           ;;(format
            ;;"roam_refs '(%s)"
            ;;roam-refs)))
      ))
```

> In modern knowledge work, the primary capital resource is human brains; or, more specifically, these brains’ ability to create new value through sustained attention. At the moment, most individuals and organizations are terrible at optimizing this resource, prioritizing instead the convenience and flexibility of persistent, unstructured messaging (e.g.,  email and IM). I predict that as this sector evolves, we’ll get better at optimizing attention capital, and accordingly leave behind our current culture of communication overload.
