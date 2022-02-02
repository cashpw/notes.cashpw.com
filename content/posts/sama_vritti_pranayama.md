+++
title = "Sama Vritti Pranayama"
author = ["Cash Weaver"]
date = 2022-01-31T10:32:00-08:00
lastmod = 2022-01-31T17:37:45-08:00
draft = false
roam_refs = ["https://www.yogabasics.com/practice/sama-vritti-pranayama"]
+++

A four-part breathing technique:

1.  Inhale
2.  Hold
3.  Exhale
4.  Hold

The practitioner should perform each part for the same duration (eg: inhale four seconds, hold four seconds, etc).

```emacs-lisp
(defun cashweaver-org-roam--mirror-roam-aliases-to-hugo-aliases ()
  "Copy the list of ROAM_ALIASES into HUGO_ALIASES."
  (interactive)
  (when (org-roam-file-p)
    (when-let*
        ((option
          "HUGO_ALIASES")
                       (raw-roam-aliases
         (read (format "(%s)"
          (org-export-get-node-property
            :ROAM_ALIASES
            (org-element-parse-buffer)))))
         (roam-aliases
          (mapcar
           #'downcase
           (mapcar
            (lambda (alias)
              (replace-regexp-in-string
               " "
               "_"
               alias))
            raw-roam-aliases))))
      ;;roam-aliases
     roam-aliases
      )))

(cashweaver-org-roam--mirror-roam-aliases-to-hugo-aliases)
```
