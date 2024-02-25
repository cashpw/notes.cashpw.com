+++
title = "Anki Import"
author = ["Cash Prokop-Weaver"]
lastmod = 2024-02-24T11:43:18-08:00
tags = ["hastodo", "hastodo"]
categories = ["hastodo"]
draft = true
slug = "482a1d27-d3a8-40eb-b171-e9938c57985c"
+++

```emacs-lisp
(setq org-anki-model-fields
  '(("Basic" "Front" "Back")
    ("Basic (and reversed card)" "Front" "Back")
    ("Basic (and reversed card)+" "Front" "Back")
    ("Basic (optional reversed card)" "Front" "Back")
    ("NameDescr" "Name" "Descr")
    ("Cloze" "Text" "Extra")))

(defun cashpw/org-clear-subtree ()
  "Delete the subtree.

Reference: https://emacs.stackexchange.com/a/38352/37010"
  (org-mark-subtree)
  (forward-line)
  (let* ((last-char-is-newline (char-equal (char-before (region-end))
                                          10))
        (end (if last-char-is-newline
                 (1- (region-end))
               (region-end))))
    (delete-region (region-beginning)
                   end)))

(defun cashpw/org-get-subtree-contents ()
  "Get the content text of the subtree at point and add it to the `kill-ring'.
Excludes the heading and any child subtrees.

Reference: https://hungyi.net/posts/org-mode-subtree-contents/"
  ;; (org-mark-subtree)
  ;; (forward-line)
  ;; (buffer-substring-no-properties (region-beginning)
  ;; (region-end))
  (unless (org-before-first-heading-p)
    (save-excursion
      ;; If inside heading contents, move the point back to the heading
      ;; otherwise `org-agenda-get-some-entry-text' won't work.
      (unless (org-on-heading-p)
        (org-previous-visible-heading 1))
      (substring-no-properties
       (org-agenda-get-some-entry-text
        (point-marker)
        most-positive-fixnum))))
  )

(defun cashpw/foo ()
  ;; Don't bother with this; it's outrageously slow. Just do it in vim.with a macro, then run `org-fc-type-double-init' when importing them into the file.
  ;; (org-map-entries (lambda ()
  ;;                    (let* ((headline-text (org-entry-get (point) "ITEM"))
  ;;                           (file-path (replace-regexp-in-string " "
  ;;                                                                "-"
  ;;                                                                (replace-regexp-in-string ".*:\\(.*\\)\\]"
  ;;                                                                                          "\\1"
  ;;                                                                                          headline-text)))
  ;;                           (front-text (s-lex-format "[[file:aslu-aslu-$--file-path--][ASL]]"--
  ;;                           (back-text (cashpw/org-get-subtree-contents))
  ;;                           (padded-lesson-number (replace-regexp-in-string ":Lesson_\\(.*\\):"
  ;;                                                                           "\\1"
  ;;                                                                           (org-get-tags-string)))
  ;;                           (get-source (lambda (padded-lesson-number)
  ;;                                         (s-lex-format "[cite:@asluniversityLesson${padded-lesson-number}]"))))
  ;;                      (org-edit-headline "ASL")

  ;;                      (org-delete-property "ANKI_NOTE_ID")
  ;;                      (org-delete-property "ANKI_NOTE_TYPE")

  ;;                      (cashpw/org-clear-subtree)
  ;;                      (newline)
  ;;                      (insert front-text)

  ;;                      (org-insert-subheading nil)
  ;;                      (org-demote-subtree)
  ;;                      (insert "Back")
  ;;                      (newline)
  ;;                      (newline)
  ;;                      (insert back-text)

  ;;                      (org-insert-heading-respect-content)
  ;;                      (insert "Source")
  ;;                      (newline)
  ;;                      (insert (funcall get-source padded-lesson-number))

  ;;                      (org-previous-visible-heading 3)
  ;;                      (org-fc-type-double-init)
  ;;                      (org-set-tags (append
  ;;                                     '("suspended")
  ;;                                     (org-get-tags (point) t)))
  ;;                      ))
  ;;                  "+ANKI_NOTE_ID={.}")
  )
;; (cashpw/foo)

(org-map-entries (lambda ()
                   (org-fc-type-double-init)))
```

```emacs-lisp
(let ((org-use-tag-inheritance nil))
(org-map-entries 'org-fc-type-double-init
                 "Lesson_01"))
```


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOY_LIFEPRINT-ASL.mp4)


### Back {#back}

BOY


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROTHER-YOU-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

BROTHER YOU how-MANY


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROTHER_LIFEPRINT-ASL.mp4)


### Back {#back}

BROTHER


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN YOU


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILD_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILD


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DAD


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIVORCE_LIFEPRINT-ASL.mp4)


### Back {#back}

DIVORCE


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINGERSPELL_LIFEPRINT-ASL.mp4)


### Back {#back}

FINGERSPELL


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-girl---FEMALE-SHORT-version---little-girl-female-child_LIFEPRINT-ASL.mp4)


### Back {#back}

girl-[FEMALE-SHORT-version] _ little girl _ female child


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRANDMA_LIFEPRINT-ASL.mp4)


### Back {#back}

GRANDMA


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRANDPA_LIFEPRINT-ASL.mp4)


### Back {#back}

GRANDPA


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAVE---1h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAVE-[1h version]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAVE---possess-2-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAVE-[possess-2-hand-version]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEY--NAME-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

HEY, NAME YOU


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEY---visual-method-of-getting-attention--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEY-[visual-method-of-getting-attention]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-many_LIFEPRINT-ASL.mp4)


### Back {#back}

how many


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-version_LIFEPRINT-ASL.mp4)


### Back {#back}

how version


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how_LIFEPRINT-ASL.mp4)


### Back {#back}

how


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-husband_LIFEPRINT-ASL.mp4)


### Back {#back}

husband


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-lady_woman_LIFEPRINT-ASL.mp4)


### Back {#back}

lady_woman


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-man_LIFEPRINT-ASL.mp4)


### Back {#back}

man


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MARRIAGE-marry-married_LIFEPRINT-ASL.mp4)


### Back {#back}

MARRIAGE-marry-married


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARENTS---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PARENTS-[casual-version]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARENTS_LIFEPRINT-ASL.mp4)


### Back {#back}

PARENTS


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-possessive-adjective---his_her_hers_its-----belongs-to-that-person-----singular-THEY_THEIR--_LIFEPRINT-ASL.mp4)


### Back {#back}

possessive-adjective-[his_her_hers_its]-[belongs-to-that-person]-[singular-THEY_THEIR]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POSSESSIVES----MY--MINE_LIFEPRINT-ASL.mp4)


### Back {#back}

POSSESSIVES - MY, MINE


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POSSESSIVES----OUR_LIFEPRINT-ASL.mp4)


### Back {#back}

POSSESSIVES - OUR


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINGLE---alone-something-someone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINGLE-[alone-something-someone]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SISTER-YOU-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

SISTER YOU HOW-MANY


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SISTER_LIFEPRINT-ASL.mp4)


### Back {#back}

SISTER


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-T-H-E-Y-HOW-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

T-H-E-Y HOW SIGN


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-their_LIFEPRINT-ASL.mp4)


### Back {#back}

their


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-HIS_HERS_theirs_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS HIS_HERS_theirs


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-W-E-HOW-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

W-E HOW SIGN


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wife_LIFEPRINT-ASL.mp4)


### Back {#back}

wife


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORK-labor-employment_LIFEPRINT-ASL.mp4)


### Back {#back}

WORK _ labor _ employment


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DIVORCED-YOU---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DIVORCED YOU-[initialized-version]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-SISTER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE SISTER


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE WHERE


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MEET-MY-BROTHER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MEET MY BROTHER YOU


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-NAME-B-O-B-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU NAME B-O-B YOU


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD DEAF


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-NAME--FINGERSPELL-SLOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD NAME, FINGERSPELL SLOW


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDMA-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDMA what-NAME


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-NAME-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM NAME WHAT


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SISTER-SINGLE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SISTER SINGLE-[version]


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-WIFE-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR WIFE what-NAME


### Source {#source}

(<a href="#citeproc_bib_item_1">ASL University n.d.</a>)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE---affection-for--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE-[affection-for]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-LEARN-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE LEARN SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WORK-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WORK WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A-L-L-HOW-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

A-L-L HOW SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL---lexicalized--_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-[lexicalized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASK-to---that-person---NAME.--Ask-him_her_that-person-his_her_their-name.-_LIFEPRINT-ASL.mp4)


### Back {#back}

ASK-to-[that-person] NAME. (Ask him_her_that-person his_her_their name.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASK-to_LIFEPRINT-ASL.mp4)


### Back {#back}

ASK-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bad_LIFEPRINT-ASL.mp4)


### Back {#back}

bad


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATHROOM-toilet-restroom_LIFEPRINT-ASL.mp4)


### Back {#back}

BATHROOM _ toilet _ restroom


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-best_LIFEPRINT-ASL.mp4)


### Back {#back}

best


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BETTER_LIFEPRINT-ASL.mp4)


### Back {#back}

BETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN--YOU-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN, YOU HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CITY-YOU-LIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

CITY YOU LIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-city_LIFEPRINT-ASL.mp4)


### Back {#back}

city


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-come-to-here_LIFEPRINT-ASL.mp4)


### Back {#back}

come to here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-critical-must_LIFEPRINT-ASL.mp4)


### Back {#back}

critical-must


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](aslu-DON'T---version_2h---no-more-that's-it---neg---discontinue_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T-[version_2h] _ no more _ that's it [neg] _ discontinue


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-entire-all-whole_LIFEPRINT-ASL.mp4)


### Back {#back}

entire all whole


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-F-I-N-E-HOW-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

F-I-N-E HOW SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINE---good--_LIFEPRINT-ASL.mp4)


### Back {#back}

FINE-[good]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOOD---well--_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD-[well]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GROW-UP---RAISED--_LIFEPRINT-ASL.mp4)


### Back {#back}

GROW-UP-[RAISED]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-house-version_LIFEPRINT-ASL.mp4)


### Back {#back}

house version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-house_LIFEPRINT-ASL.mp4)


### Back {#back}

house


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-large--non-inflected-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

large (non inflected version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-little-small_LIFEPRINT-ASL.mp4)


### Back {#back}

little small


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEED---1-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

NEED-[1-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-negative_minus_LIFEPRINT-ASL.mp4)


### Back {#back}

negative_minus


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](aslu-not-like--don't-like--dislike_LIFEPRINT-ASL.mp4)


### Back {#back}

not like, don't like, dislike


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NO_LIFEPRINT-ASL.mp4)


### Back {#back}

NO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](aslu-NYB!---None-of-your-business!--_LIFEPRINT-ASL.mp4)


### Back {#back}

NYB!-[None of your business!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-request_LIFEPRINT-ASL.mp4)


### Back {#back}

request


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SO-SO_LIFEPRINT-ASL.mp4)


### Back {#back}

SO-SO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-think_LIFEPRINT-ASL.mp4)


### Back {#back}

think


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WANT-MORE-CHILDREN-YOU---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

WANT MORE CHILDREN YOU-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-CHILDREN-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU CHILDREN HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FROM-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FROM WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-to-SCHOOL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO-to SCHOOL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-YOUR-WORK_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE YOUR WORK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-HERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE HERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-NEED-BATHROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU NEED BATHROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-I-SIGN-BAD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK I SIGN BAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-I-SIGN-GOOD---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK I SIGN GOOD-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-BATHROOM-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE BATHROOM how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-BIG-cha_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE BIG-cha


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-SMALL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE SMALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson03)


## ASL {#asl}

[ASL](aslu-NICE-to-me-MEET-you--IT'S-NICE-TO-MEET-YOU-_LIFEPRINT-ASL.mp4)


### Back {#back}

NICE-to me-MEET-you (IT'S NICE TO MEET YOU)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MARRIED_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MARRIED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-want_LIFEPRINT-ASL.mp4)


### Back {#back}

want


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A-S-K--T-O-HOW-YOU-SIGN--HOW-DO-YOU-SIGN-ASK-TO-_LIFEPRINT-ASL.mp4)


### Back {#back}

A-S-K--T-O HOW YOU SIGN (HOW DO YOU SIGN ASK-TO)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-aid---HELP--_LIFEPRINT-ASL.mp4)


### Back {#back}

aid-[HELP]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANGRY----anger--rage--_LIFEPRINT-ASL.mp4)


### Back {#back}

ANGRY -[anger, rage]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AUNT-YOU--HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

AUNT YOU, HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AUNT_LIFEPRINT-ASL.mp4)


### Back {#back}

AUNT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BABY_LIFEPRINT-ASL.mp4)


### Back {#back}

BABY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEDROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

BEDROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BED_LIFEPRINT-ASL.mp4)


### Back {#back}

BED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRUSH-TEETH_LIFEPRINT-ASL.mp4)


### Back {#back}

BRUSH-TEETH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---GET-UP--V-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - GET-UP (V version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---JUMP_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - JUMP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---LIE-DOWN_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - LIE DOWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---TOSS-AND-TURN_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - TOSS AND TURN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---WALK-TO---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - WALK-TO-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRY---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CRY-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAUGHTER_LIFEPRINT-ASL.mp4)


### Back {#back}

DAUGHTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dive---CL--V-----version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

dive-[CL -V]-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dive---CL--V-----version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

dive-[CL -V]-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](aslu-don't-WANT_LIFEPRINT-ASL.mp4)


### Back {#back}

don't-WANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXCUSE_LIFEPRINT-ASL.mp4)


### Back {#back}

EXCUSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feeling_LIFEPRINT-ASL.mp4)


### Back {#back}

feeling


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-friend_LIFEPRINT-ASL_1656573811183.mp4)


### Back {#back}

friend


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-H-E-A-R-I-N-G-how-SIGN--HOW-DO-YOU-SIGN-HEARING-_LIFEPRINT-ASL.mp4)


### Back {#back}

H-E-A-R-I-N-G how-SIGN (HOW DO YOU SIGN HEARING)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAPPY_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-NEED-BRUSH-TEETH_LIFEPRINT-ASL.mp4)


### Back {#back}

I NEED BRUSH-TEETH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IDEA_LIFEPRINT-ASL.mp4)


### Back {#back}

IDEA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IF-TEACHER-SPELL-SLOW--YOU-UNDERSTAND-S_HE_LIFEPRINT-ASL.mp4)


### Back {#back}

IF TEACHER SPELL SLOW, YOU UNDERSTAND S_HE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEARN-SIGN--NEED-HELP-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

LEARN SIGN, NEED HELP YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-love_LIFEPRINT-ASL.mp4)


### Back {#back}

love


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](aslu-MY-NAME-BILL-YOU-what-NAME--My-name-is-Bill.-What's-your-name-_LIFEPRINT-ASL.mp4)


### Back {#back}

MY NAME BILL YOU what-NAME (My name is Bill. What's your name)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pain_jab-version--hurt_LIFEPRINT-ASL.mp4)


### Back {#back}

pain_jab version, hurt


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-room_LIFEPRINT-ASL.mp4)


### Back {#back}

room


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAD_LIFEPRINT-ASL.mp4)


### Back {#back}

SAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMALL-CITY--YOU-LIKE--DO-YOU-LIKE-SMALL-CITIES-_LIFEPRINT-ASL.mp4)


### Back {#back}

SMALL CITY, YOU LIKE (DO YOU LIKE SMALL CITIES)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-son_LIFEPRINT-ASL.mp4)


### Back {#back}

son


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SORRY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SORRY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SORRY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SORRY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-stand---CL--V--_LIFEPRINT-ASL.mp4)


### Back {#back}

stand-[CL -V]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOP_LIFEPRINT-ASL.mp4)


### Back {#back}

STOP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENTS-HERE--YOU-LIKE-ALL-YOU--DO-YOU-LIKE-ALL-OF-THE-STUDENTS-HERE-_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENTS HERE, YOU LIKE ALL YOU (DO YOU LIKE ALL OF THE STUDENTS HERE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CITY--YOU-THINK-NICE--DO-YOU-THINK-THIS-CITY-IS-NICE-_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CITY, YOU THINK NICE (DO YOU THINK THIS CITY IS NICE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNCLE--YOU-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

UNCLE, YOU HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNCLE_LIFEPRINT-ASL.mp4)


### Back {#back}

UNCLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-W-A-S-H-how-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

W-A-S-H how-SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WANT-MEET-MY-MOM--DO-YOU-WANT-TO-MEET-MY-MOTHER-_LIFEPRINT-ASL.mp4)


### Back {#back}

WANT MEET MY MOM (DO YOU WANT TO MEET MY MOTHER)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WASH_LIFEPRINT-ASL.mp4)


### Back {#back}

WASH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-HAPPY--WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL HAPPY, WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-WANT-CRY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL WANT CRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FROM-HERE--ARE-YOU-FROM-HERE-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FROM HERE (ARE YOU FROM HERE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAPPY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAPPY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-BABY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE BABY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-EXCUSE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE EXCUSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HURT-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HURT WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-BIG-CITY-do-YOU--DO-YOU-LIKE-BIG-CITIES-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE BIG CITY do-YOU (DO YOU LIKE BIG CITIES)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-COME+-HERE--DO-YOU-LIKE-COMING-HERE-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE COME+ HERE (DO YOU LIKE COMING HERE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-GO-WORK--DO-YOU-LIKE-GOING-TO-WORK-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE GO WORK (DO YOU LIKE GOING TO WORK)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-SHE---POINT-AT-A-STUDENT----DO-YOU-LIKE-HER-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE SHE [POINT AT A STUDENT] (DO YOU LIKE HER)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE---HE_SHE---TEACHER--DO-YOU-LIKE-THE-TEACHER-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE [HE_SHE] TEACHER (DO YOU LIKE THE TEACHER)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-WHERE---Where-do-you-live--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE WHERE [Where do you live]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LOVE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LOVE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SAD-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SAD WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SINGLE-are-YOU--ARE-YOU-SINGLE-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SINGLE are-YOU (ARE YOU SINGLE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SORRY-COME-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SORRY COME CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-BABY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT BABY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-STOP-LEARN-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT STOP LEARN SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WORK-what-CITY--IN-WHAT-CITY-DO-YOU-WORK-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WORK what-CITY (IN WHAT CITY DO YOU WORK)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BEDROOM-BIG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BEDROOM BIG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BOY-FRIEND-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BOY-FRIEND NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-EXCUSE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR EXCUSE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FATHER--HOW-MANY-SONS_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FATHER, HOW-MANY SONS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NAME--how-SPELL--HOW-DO-YOU-SPELL-YOUR-NAME-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NAME, how-SPELL (HOW DO YOU SPELL YOUR NAME)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TEACHER-HAVE-DAUGHTER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TEACHER HAVE DAUGHTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson04)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---signing-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[signing-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNDERSTAND-got-it-I-get-it-comprehend-grasp-fathom_LIFEPRINT-ASL.mp4)


### Back {#back}

UNDERSTAND _ got it _ I get it _ comprehend _ grasp _ fathom


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-UNDERSTAND-HE_SHE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU UNDERSTAND HE_SHE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIVE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIVE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOM_LIFEPRINT-ASL.mp4)


### Back {#back}

MOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FROM_LIFEPRINT-ASL.mp4)


### Back {#back}

FROM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HERE_LIFEPRINT-ASL.mp4)


### Back {#back}

HERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer--favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer, favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ADDRESS_LIFEPRINT-ASL.mp4)


### Back {#back}

ADDRESS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIKE-BICYCLE_LIFEPRINT-ASL.mp4)


### Back {#back}

BIKE _ BICYCLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOB-SIT-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

BOB SIT WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bus---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

bus-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bus_bent-v-hand-version_LIFEPRINT-ASL.mp4)


### Back {#back}

bus_bent v hand version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-YOU-DRIVE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN YOU DRIVE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-chess-you-like-play_LIFEPRINT-ASL.mp4)


### Back {#back}

chess you like play


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHURCH_LIFEPRINT-ASL.mp4)


### Back {#back}

CHURCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DESKTOP-COMPUTER_LIFEPRINT-ASL.mp4)


### Back {#back}

DESKTOP COMPUTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-what-what-DO-What-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

Do what _ what-DO _ What to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-drive-to-here_LIFEPRINT-ASL.mp4)


### Back {#back}

drive to here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRIVE-there---drive-to--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRIVE-there [drive to]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMAIL--flat-c-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL (flat c hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRIEND_LIFEPRINT-ASL_1656573811183.mp4)


### Back {#back}

FRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](aslu-GIVE-you---give-you-from-me--a-gift-to-you-from-me-----GIVE--_LIFEPRINT-ASL.mp4)


### Back {#back}

GIVE-you [give you from me, a gift to you from me] [GIVE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-internet--contact-in-passing-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

internet (contact in passing version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERNET-S-I-T-E-YOUR-FAVORITE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERNET S-I-T-E YOUR FAVORITE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IN_LIFEPRINT-ASL.mp4)


### Back {#back}

IN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE--YOUR-FAVORITE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE, YOUR FAVORITE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-movie_LIFEPRINT-ASL.mp4)


### Back {#back}

movie


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-need_LIFEPRINT-ASL.mp4)


### Back {#back}

need


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-network-internet-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

network internet version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nurse_LIFEPRINT-ASL.mp4)


### Back {#back}

nurse


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-out_LIFEPRINT-ASL.mp4)


### Back {#back}

out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAY----playing--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAY -[playing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAY-YOU-LIKE-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAY YOU LIKE what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-possible--can--double-movement-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

possible, can (double movement version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](aslu-PRONOUN---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PRONOUN - YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-seat-sit_LIFEPRINT-ASL.mp4)


### Back {#back}

seat sit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN-WITH-FRIEND--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN WITH FRIEND, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-site_LIFEPRINT-ASL.mp4)


### Back {#back}

site


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STAND_LIFEPRINT-ASL.mp4)


### Back {#back}

STAND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STAY_LIFEPRINT-ASL.mp4)


### Back {#back}

STAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORE_LIFEPRINT-ASL.mp4)


### Back {#back}

STORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-video-movie_LIFEPRINT-ASL.mp4)


### Back {#back}

video movie


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-video-RECORD--webcam-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

video-RECORD (webcam version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-video---a-video_MOVIE--_LIFEPRINT-ASL.mp4)


### Back {#back}

video-[a-video_MOVIE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WALK_LIFEPRINT-ASL.mp4)


### Back {#back}

WALK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH---casual--_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH-[casual]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656573811183.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656573811183.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WITH-together-side-by-side-alongside-beside_LIFEPRINT-ASL.mp4)


### Back {#back}

WITH _ together _ side-by-side _ alongside _ beside


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-would-like---want--_LIFEPRINT-ASL.mp4)


### Back {#back}

would-like-[want]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRISTWATCH--WHO-GIVE-you_LIFEPRINT-ASL.mp4)


### Back {#back}

WRISTWATCH, WHO GIVE-you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRISTWATCH_LIFEPRINT-ASL.mp4)


### Back {#back}

WRISTWATCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-COME-HERE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU COME HERE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRIVE-HERE-FROM-HOME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRIVE HERE FROM HOME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-how-FEEL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU how-FEEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-SIGN-WITH-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE SIGN WITH WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-NEED-GO-DOCTOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU NEED GO DOCTOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WALK-SCHOOL-YOU---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WALK SCHOOL YOU-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WALK-SCHOOL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WALK SCHOOL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-GO-to-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT GO-to WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-COMPUTER-HAVE-WEB-CAM_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR COMPUTER HAVE WEB-CAM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-EMAIL-ADDRESS-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR EMAIL ADDRESS WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-STORE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE STORE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOME-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOME WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson05)


## ASL {#asl}

[ASL](/ox-hugo/aslu-black_LIFEPRINT-ASL.mp4)


### Back {#back}

black


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLUE_LIFEPRINT-ASL.mp4)


### Back {#back}

BLUE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-brown_LIFEPRINT-ASL.mp4)


### Back {#back}

brown


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-color_LIFEPRINT-ASL.mp4)


### Back {#back}

color


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-do-YOU-WANT-GO-HOME-NOW_LIFEPRINT-ASL.mp4)


### Back {#back}

do-YOU WANT GO HOME NOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-draw_LIFEPRINT-ASL.mp4)


### Back {#back}

draw


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINISH---done--_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH-[done]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUTURE---WILL--_LIFEPRINT-ASL.mp4)


### Back {#back}

FUTURE-[WILL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-green_LIFEPRINT-ASL.mp4)


### Back {#back}

green


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-SIGN-W-A-I-T_LIFEPRINT-ASL.mp4)


### Back {#back}

how-SIGN W-A-I-T


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LONG----length--_LIFEPRINT-ASL.mp4)


### Back {#back}

LONG -[length]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME-SOMETHING-ITSELF-BLACK-WHITE._LIFEPRINT-ASL.mp4)


### Back {#back}

NAME SOMETHING ITSELF BLACK WHITE.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOW---1-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOW-[1-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD---age--_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD-[age]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ORANGE_LIFEPRINT-ASL.mp4)


### Back {#back}

ORANGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-page---PAPER--_LIFEPRINT-ASL.mp4)


### Back {#back}

page-[PAPER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RED_LIFEPRINT-ASL.mp4)


### Back {#back}

RED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF-itself-automatically-on-its-own-auto---self--_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF _ itself _ automatically _ on its own _ auto-[self]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-YOU-GO-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW YOU GO SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAIT_LIFEPRINT-ASL.mp4)


### Back {#back}

WAIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-white_LIFEPRINT-ASL.mp4)


### Back {#back}

white


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YELLOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YELLOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRAW-well---GOOD--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRAW well-[GOOD]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FINISH-WATCH-MOVIE-TITANIC_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FINISH WATCH MOVIE TITANIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-DOCTOR--WAIT---long----YOU-SIT-anxious-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO DOCTOR, WAIT-[long], YOU SIT-anxious YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-COLOR-BROWN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE COLOR BROWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-RED-CAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE RED CAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-BIG-CITY-PAST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE BIG CITY PAST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-HERE-HOW-MANY-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE HERE HOW-MANY YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-THERE---point-index---HOW-LONG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE THERE-[point-index] HOW-LONG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-what-CITY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE what-CITY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-WHERE--WHERE-DO-YOU-LIVE-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE WHERE (WHERE DO YOU LIVE)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MOVE---to-here---WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MOVE-[to-here] WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-FUTURE-YOU-TEACH-ASL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK FUTURE YOU TEACH ASL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CHAIR-GREEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CHAIR GREEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-COLOR--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE COLOR, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PAPER-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PAPER what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PARENTS-DIVORCED---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PARENTS DIVORCED-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson06)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AND_LIFEPRINT-ASL.mp4)


### Back {#back}

AND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPLE--GREEN--YOU-LIKE-EAT_LIFEPRINT-ASL.mp4)


### Back {#back}

APPLE, GREEN, YOU LIKE EAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPLE--RED--YOU-LIKE-EAT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

APPLE, RED, YOU LIKE EAT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPLE_LIFEPRINT-ASL.mp4)


### Back {#back}

APPLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANDY--treat-_LIFEPRINT-ASL.mp4)


### Back {#back}

CANDY (treat)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANDY--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

CANDY, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CEREAL--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

CEREAL, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CEREAL_LIFEPRINT-ASL.mp4)


### Back {#back}

CEREAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEESE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEESE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COOKIE--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

COOKIE, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COOKIE_LIFEPRINT-ASL.mp4)


### Back {#back}

COOKIE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUP-GLASS--drink--CAN--container-_LIFEPRINT-ASL.mp4)


### Back {#back}

CUP _ GLASS-(drink) _ CAN-(container)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRINK---C-hand-version-----general-sign-for-non-alcoholic-drinks--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRINK-[C-hand-version]-[general-sign-for-non-alcoholic-drinks]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EGG_LIFEPRINT-ASL.mp4)


### Back {#back}

EGG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERYDAY-YOU-DRINK--WATER-HOW-MANY-CUP_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERYDAY YOU DRINK, WATER HOW-MANY CUP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fed-up-had-it-up-to-here---idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

fed up _ had it up to here _ [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FULL---stomach--_-stuffed_LIFEPRINT-ASL.mp4)


### Back {#back}

FULL-[stomach]\_ stuffed


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FULL_LIFEPRINT-ASL.mp4)


### Back {#back}

FULL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GREEN-EGG-AND-H-A-M-YOU-LIKE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

GREEN EGG AND H-A-M YOU LIKE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAMBURGER_LIFEPRINT-ASL.mp4)


### Back {#back}

HAMBURGER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOTDOG----sausage--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOTDOG -[sausage]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HUNGRY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

HUNGRY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HUNGRY-starving-famished-desire-appetite-wish_LIFEPRINT-ASL.mp4)


### Back {#back}

HUNGRY _ starving _ famished _ desire _ appetite _ wish


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MILK_LIFEPRINT-ASL.mp4)


### Back {#back}

MILK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ORANGES--YOU-LIKE-EAT-do-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

ORANGES, YOU LIKE EAT do-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POPCORN_LIFEPRINT-ASL.mp4)


### Back {#back}

POPCORN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-EAT-3-HAMBURGER--WILL-FULL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU EAT 3 HAMBURGER, WILL FULL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-GO-MOVIE--YOU-LIKE-EAT-POPCORN_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU GO MOVIE, YOU LIKE EAT POPCORN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-taste_take-a-taste_LIFEPRINT-ASL.mp4)


### Back {#back}

taste_take a taste


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-water_LIFEPRINT-ASL.mp4)


### Back {#back}

water


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](aslu-YOU-DON'T-LIKE-CANDY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DON'T LIKE CANDY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](aslu-YOU-FAVORITE---prefer---APPLE---bodyshift-'or'---ORANGES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FAVORITE-[prefer] APPLE [bodyshift-'or'] ORANGES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](aslu-YOU-FAVORITE---prefer----HAMBURGER---body-shift-'or'---HOTDOG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FAVORITE-[prefer], HAMBURGER [body-shift-'or'] HOTDOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FULL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FULL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-COOKIES-WITH-MILK_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE COOKIES WITH MILK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-FOOD-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE FOOD WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SISTER-LIKE-EGG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SISTER LIKE EGG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson07)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK--YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK, YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK---A-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK-[A-hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK---C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK-[C-hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK---modified-C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK-[modified-C-hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK---small-C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK-[small-C-hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BACKPACK---straps-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BACKPACK-[straps version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASKET---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BASKET-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATTERY--ELECTRIC_LIFEPRINT-ASL.mp4)


### Back {#back}

BATTERY, ELECTRIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-belt-tie-on_pockets_LIFEPRINT-ASL.mp4)


### Back {#back}

belt-tie-on_pockets


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BELT_LIFEPRINT-ASL.mp4)


### Back {#back}

BELT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOTHES-DIRTY--SHOULD-PUT-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

CLOTHES DIRTY, SHOULD PUT WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-clothes_LIFEPRINT-ASL.mp4)


### Back {#back}

clothes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOCTOR-L-A-B-COAT--COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCTOR L-A-B COAT, COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRESS_LIFEPRINT-ASL.mp4)


### Back {#back}

DRESS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GALLAUDET_LIFEPRINT-ASL.mp4)


### Back {#back}

GALLAUDET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GLASSES_LIFEPRINT-ASL.mp4)


### Back {#back}

GLASSES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEARING-AID--WHO-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

HEARING-AID, WHO HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-jacket_LIFEPRINT-ASL.mp4)


### Back {#back}

jacket


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-laundry--washing-machine--wash-fabric_LIFEPRINT-ASL.mp4)


### Back {#back}

laundry, washing-machine, wash fabric


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-locate--find_LIFEPRINT-ASL.mp4)


### Back {#back}

locate, find


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFF---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

OFF-[fingerspelled version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ON---fingerspelled-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

ON-[fingerspelled version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PANTS--SPELL_LIFEPRINT-ASL.mp4)


### Back {#back}

PANTS, SPELL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PANTS_LIFEPRINT-ASL.mp4)


### Back {#back}

PANTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---bodyshift---OR-HAMBURGER-YOU-FAVORITE---prefer---WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA [bodyshift]-OR HAMBURGER YOU FAVORITE-[prefer] WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-reform-change_LIFEPRINT-ASL.mp4)


### Back {#back}

reform-change


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SASH---tie-belt-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SASH-[tie-belt-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL-FINISH--YOUR-MOM-PICK-UP-YOU--what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL FINISH, YOUR MOM PICK-UP YOU, what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHIRT_LIFEPRINT-ASL.mp4)


### Back {#back}

SHIRT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOES--YOU-HAVE-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOES, YOU HAVE HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-shoes_LIFEPRINT-ASL.mp4)


### Back {#back}

shoes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOCKS_LIFEPRINT-ASL.mp4)


### Back {#back}

SOCKS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-GO-CHURCH--PANTS---bodyshift---OR-DRESS-WHICH-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU GO CHURCH, PANTS [bodyshift]-OR DRESS WHICH YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-ROOM-WHO-HAVE-GLASSES_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS ROOM WHO HAVE GLASSES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNDERWEAR--version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

UNDERWEAR (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNDERWEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

UNDERWEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-which_LIFEPRINT-ASL.mp4)


### Back {#back}

which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-CHANGE-CLOTHES--WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU CHANGE CLOTHES, WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-WASHING-MACHINE-CLOTHES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE WASHING-MACHINE CLOTHES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-CHILDREN-SHOULD-CHANGE-UNDERWEAR-DAILY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK CHILDREN SHOULD CHANGE UNDERWEAR DAILY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-GO-GALLAUDET-FUTURE---someday--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT GO GALLAUDET FUTURE-[someday]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BACKPACK-HAVE-ZIPPER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BACKPACK HAVE ZIPPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BELT--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BELT, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HEARING-AID--BATTERY--WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HEARING-AID, BATTERY, WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](aslu-YOUR-HOUSE--CLOTHES-DIRTY--PUT-in-BASKET-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, CLOTHES DIRTY, PUT-in BASKET WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SHIRT-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SHIRT what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SOCKS--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SOCKS, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ZIP-LIPS---zip-your-lips--_LIFEPRINT-ASL.mp4)


### Back {#back}

ZIP-LIPS-[zip-your-lips]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ZIP-up---general-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ZIP-up-[general-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ZIP-up---jacket-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ZIP-up-[jacket version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ZIP---Z-I-P--_LIFEPRINT-ASL.mp4)


### Back {#back}

ZIP-[Z-I-P]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson08)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

what-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AMBULANCE-BEFORE-past-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

AMBULANCE BEFORE-past YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AMBULANCE_LIFEPRINT-ASL.mp4)


### Back {#back}

AMBULANCE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASEMENT_LIFEPRINT-ASL.mp4)


### Back {#back}

BASEMENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATH--SHOWER--YOU-PREFER-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

BATH, SHOWER, YOU PREFER WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATHTUB_LIFEPRINT-ASL.mp4)


### Back {#back}

BATHTUB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRIGHT---clearly_clear_obvious--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRIGHT-[clearly_clear_obvious]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-HAVE-DOORS-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR HAVE DOORS HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-close-door_LIFEPRINT-ASL.mp4)


### Back {#back}

close door


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-close-window_LIFEPRINT-ASL.mp4)


### Back {#back}

close window


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOSET---DOOR--_LIFEPRINT-ASL.mp4)


### Back {#back}

CLOSET [DOOR]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](aslu-couch--sectional-couch-configuration---01--ASL-depiction--cl-cc--classifier-c_LIFEPRINT-ASL.mp4)


### Back {#back}

couch (sectional couch configuration) (01) ASL depiction (cl-cc) classifier-c


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-couch--sectional-couch-configuration---02--ASL-depiction--cl-cc--classifier-c_LIFEPRINT-ASL.mp4)


### Back {#back}

couch (sectional couch configuration) (02) ASL depiction (cl-cc) classifier-c


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

COUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUPBOARD---CABINET--_LIFEPRINT-ASL.mp4)


### Back {#back}

CUPBOARD [CABINET]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-PREFER-KITCHEN--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF PREFER KITCHEN, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-door_LIFEPRINT-ASL.mp4)


### Back {#back}

door


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRAWER---DRESSER--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRAWER [DRESSER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRYER---DRY-DRY-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRYER-[DRY-DRY-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRYER---DRY-spin-around-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRYER-[DRY-spin-around-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRY_LIFEPRINT-ASL.mp4)


### Back {#back}

DRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GARAGE-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

GARAGE HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-garage_LIFEPRINT-ASL.mp4)


### Back {#back}

garage


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GARBAGE_LIFEPRINT-ASL.mp4)


### Back {#back}

GARBAGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEADLIGHTS-two-lights-signing-forward_LIFEPRINT-ASL.mp4)


### Back {#back}

HEADLIGHTS _ two lights signing forward


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](aslu-KITCHEN--'cook'-variation-_LIFEPRINT-ASL.mp4)


### Back {#back}

KITCHEN ('cook' variation)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KITCHEN---one-handed-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

KITCHEN-[one-handed-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAMP_LIFEPRINT-ASL.mp4)


### Back {#back}

LAMP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-light-a-match-strike-a-match_LIFEPRINT-ASL.mp4)


### Back {#back}

light a match _ strike a match


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHT--light-device--lighting--a-light--low-context-sign-for-light--vs-overhead-lighting_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHT, light device, lighting, a light (low context sign for light) vs overhead lighting


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHT-weight_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHT-weight


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHT---off--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHT-[off]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHTS-FLASH---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHTS-FLASH-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHTS-FLASH_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHTS-FLASH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHTS-ON_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHTS-ON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MICROWAVE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MICROWAVE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-open-door_LIFEPRINT-ASL.mp4)


### Back {#back}

open door


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-open_LIFEPRINT-ASL.mp4)


### Back {#back}

open


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REFRIGERATOR---R-E-F--_LIFEPRINT-ASL.mp4)


### Back {#back}

REFRIGERATOR-[R-E-F]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAY_LIFEPRINT-ASL.mp4)


### Back {#back}

SAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOWER_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINK---version-2---to-become-submerged-to-descend-into-liquid_LIFEPRINT-ASL.mp4)


### Back {#back}

SINK [version 2] _ to become submerged _ to descend into liquid


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINK---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINK-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME---something_someone_single_just_alone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME-[something_someone_single_just_alone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOVE_LIFEPRINT-ASL.mp4)


### Back {#back}

STOVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-table_LIFEPRINT-ASL.mp4)


### Back {#back}

table


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THAT-TABLE--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

THAT TABLE, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-there_LIFEPRINT-ASL.mp4)


### Back {#back}

there


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](aslu-TOOTHPASTE-YOU--what-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

TOOTHPASTE YOU, what-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOOTHPASTE_LIFEPRINT-ASL.mp4)


### Back {#back}

TOOTHPASTE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WINDOW-OPEN_LIFEPRINT-ASL.mp4)


### Back {#back}

WINDOW-OPEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-window_LIFEPRINT-ASL.mp4)


### Back {#back}

window


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WITH-together-side-by-side-alongside-beside_LIFEPRINT-ASL.mp4)


### Back {#back}

WITH _ together _ side-by-side _ alongside _ beside


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY-YOU-SHOWER_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY YOU SHOWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-BASEMENT-APT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE BASEMENT APT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-STOVE--MICROWAVE--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER STOVE, MICROWAVE, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TOGETHER---with-long-term_go-steady---SOMEONE-are-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TOGETHER-[with-long-term_go-steady] SOMEONE are-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BATHROOM-HAVE-TUB_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BATHROOM HAVE TUB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BEDROOM-HAVE-WINDOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BEDROOM HAVE WINDOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-COUCH--COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR COUCH, COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DRYER--G-A-S----bodyshift---ELECTRIC-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DRYER, G-A-S, [bodyshift] ELECTRIC WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-BATHROOM-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE BATHROOM how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](aslu-YOUR-HOUSE--GARBAGE--WHO-'throw-out'_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, GARBAGE, WHO 'throw out'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](aslu-YOUR-PANTS--YOU-PUT-DRESSER--'HANG-UP'-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PANTS, YOU PUT DRESSER, 'HANG-UP' WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-REFRIGERATOR--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR REFRIGERATOR, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-S-I-N-K-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR S-I-N-K what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson09)


## ASL {#asl}

[ASL](/ox-hugo/aslu-3-o-clock-version_LIFEPRINT-ASL.mp4)


### Back {#back}

3 o clock version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A-S-L-CLASS--YOU-PAST-TAKE_LIFEPRINT-ASL.mp4)


### Back {#back}

A-S-L CLASS, YOU PAST TAKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-aspect-part-some_LIFEPRINT-ASL.mp4)


### Back {#back}

aspect-part-some


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRD-LIKE-EAT-FISH_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRD LIKE EAT FISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRD_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK-YOU-LIKE-READ--WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOOK YOU LIKE READ, WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-book_LIFEPRINT-ASL.mp4)


### Back {#back}

book


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUG--insect--ANT+-context---critter_LIFEPRINT-ASL.mp4)


### Back {#back}

BUG, insect, ANT+(context), critter


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](aslu-CAT--'F'-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT ('F'-hand-version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAT-LIKE-EAT-BIRD_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT LIKE EAT BIRD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COW_LIFEPRINT-ASL.mp4)


### Back {#back}

COW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dog---Lexicalized-fingerspelling-version---#DOG--_LIFEPRINT-ASL.mp4)


### Back {#back}

dog [Lexicalized fingerspelling version - #DOG]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH-LIKE-EAT-BUG_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH LIKE EAT BUG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GET_LIFEPRINT-ASL.mp4)


### Back {#back}

GET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAVE-PET-YOU---if-so---NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

HAVE PET YOU [if so] NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HORSE-LIKE-EAT-FISH_LIFEPRINT-ASL.mp4)


### Back {#back}

HORSE LIKE EAT FISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HORSE-YOU-WANT_LIFEPRINT-ASL.mp4)


### Back {#back}

HORSE YOU WANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HORSE_LIFEPRINT-ASL.mp4)


### Back {#back}

HORSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-like-same-same-as-similar-to_LIFEPRINT-ASL.mp4)


### Back {#back}

like-same same as-similar to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MILK--WHERE-FROM--HOW-GET_LIFEPRINT-ASL.mp4)


### Back {#back}

MILK, WHERE FROM, HOW GET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME-SOMETHING-DOG-CHASE._LIFEPRINT-ASL.mp4)


### Back {#back}

NAME SOMETHING DOG CHASE.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PET---fingerspell--_LIFEPRINT-ASL.mp4)


### Back {#back}

PET-[fingerspell]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PET_LIFEPRINT-ASL.mp4)


### Back {#back}

PET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pony---SMALL-HORSE--_LIFEPRINT-ASL.mp4)


### Back {#back}

pony [SMALL HORSE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-READ-bodyshift-OR-WATCH-casual-TV--YOU-PREFER-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

READ bodyshift-OR WATCH-casual TV, YOU PREFER WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-READ_LIFEPRINT-ASL.mp4)


### Back {#back}

READ


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME-CAT-LIKE-WATER_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME CAT LIKE WATER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-up_evaporate_adopt_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-up_evaporate_adopt


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER-HIS_HER-WIFE--YOU-KNOW-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

TEACHER HIS_HER WIFE, YOU KNOW NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TELL-me-HOW-YOU-FEEL._LIFEPRINT-ASL.mp4)


### Back {#back}

TELL-me HOW YOU FEEL.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TELL---tell-to--TELL-you--_LIFEPRINT-ASL.mp4)


### Back {#back}

TELL-[tell-to, TELL-you]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-time_LIFEPRINT-ASL.mp4)


### Back {#back}

time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-truly--true_LIFEPRINT-ASL.mp4)


### Back {#back}

truly, true


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-ASL-CLASS--what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO ASL CLASS, what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LOOK-LIKE-YOUR-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LOOK-LIKE YOUR DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PAST-TAKE-up-COOK-CLASS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PAST TAKE-up COOK CLASS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-COW-GOOD-PET_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK COW GOOD PET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BEDROOM-UPSTAIRS_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BEDROOM UPSTAIRS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-BOOK--NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE BOOK, NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson10)


## ASL {#asl}

[ASL](/ox-hugo/aslu-#BACK---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

\#BACK-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---flat-O-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[flat-O-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---index-fingers-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[index-fingers-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AH-OH-I-SEE---ah_uh-huh--_LIFEPRINT-ASL.mp4)


### Back {#back}

AH-OH-I-SEE-[ah_uh-huh]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALWAYS_LIFEPRINT-ASL.mp4)


### Back {#back}

ALWAYS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANY-YOUR-FAMILY-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

ANY YOUR FAMILY DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-any_LIFEPRINT-ASL.mp4)


### Back {#back}

any


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPROXIMATELY---around--about--_LIFEPRINT-ASL.mp4)


### Back {#back}

APPROXIMATELY-[around, about]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK-YOU-THINK-WONDERFUL-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

BOOK YOU THINK WONDERFUL what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-but--different--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

but, different (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CALL-by-phone-called-CALL-you---Hearing-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CALL-by-phone _ called _ CALL-you [Hearing version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CALL-to---via-TTY--_LIFEPRINT-ASL.mp4)


### Back {#back}

CALL-to [via TTY]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cant_LIFEPRINT-ASL.mp4)


### Back {#back}

cant


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHAT-WITH---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHAT-WITH-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHAT-WITH_LIFEPRINT-ASL.mp4)


### Back {#back}

CHAT-WITH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS-FINISH--BACK-HOME-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS FINISH, BACK HOME YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-CAN-CALL-HEARING---people---HOW---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF CAN CALL HEARING-[people] HOW-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-device_thing_LIFEPRINT-ASL.mp4)


### Back {#back}

device_thing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-folk_people_LIFEPRINT-ASL.mp4)


### Back {#back}

folk_people


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for_LIFEPRINT-ASL.mp4)


### Back {#back}

for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-generate_make-create_LIFEPRINT-ASL.mp4)


### Back {#back}

generate_make create


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GREAT---WONDERFUL--_LIFEPRINT-ASL.mp4)


### Back {#back}

GREAT-[WONDERFUL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-YOU-FEEL_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW YOU FEEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEARN-NEW-THING-YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LEARN NEW THING YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LITTLE-BIT---thumb-flicking-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LITTLE-BIT-[thumb-flicking-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-LIKE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME_LIFEPRINT-ASL_1656574430553.mp4)


### Back {#back}

NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NERVOUS-shaking-rattled-unsteady-hands_LIFEPRINT-ASL.mp4)


### Back {#back}

NERVOUS _ shaking _ rattled _ unsteady-hands


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEVER_LIFEPRINT-ASL.mp4)


### Back {#back}

NEVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-new_LIFEPRINT-ASL.mp4)


### Back {#back}

new


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OH-I-SEE_LIFEPRINT-ASL.mp4)


### Back {#back}

OH-I-SEE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR_LIFEPRINT-ASL.mp4)


### Back {#back}

OR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE-YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIT-ANXIOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

SIT-ANXIOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP--YOU-KNOW-HOW-MAKE_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP, YOU KNOW HOW MAKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMON-call-upon-subpoena-draft-into-service-drafted_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMON _ call-upon _ subpoena _ draft into service _ drafted


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-UP-ASL-FOR-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-UP ASL FOR-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TALK---front-and-side-view--_LIFEPRINT-ASL.mp4)


### Back {#back}

TALK-[front-and-side-view]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TELL-me-ABOUT-YOUR-TEACHER._LIFEPRINT-ASL.mp4)


### Back {#back}

TELL-me ABOUT YOUR TEACHER.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](aslu-YOU-CAN'T-UNDERSTAND-HE_SHE-TEACHER--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU CAN'T UNDERSTAND HE_SHE TEACHER, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-ANXIOUS--WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL ANXIOUS, WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-CLASS-ON-TIME-ALWAYS_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO CLASS ON TIME ALWAYS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-DOG-AND-CAT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE DOG AND CAT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-CHAT-WITH-DEAF--Do-you-like-to-chat-with-deaf-people-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE CHAT-WITH DEAF (Do you like to chat with deaf people)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-MEET-NEW-PEOPLE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE MEET NEW PEOPLE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-NEVER-EAT-CANDY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU NEVER EAT CANDY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-PIZZA-OR-HAMBURGER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER PIZZA OR HAMBURGER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BEDROOM-DIRTY-LITTLE-BIT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BEDROOM DIRTY LITTLE-BIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson11)


## ASL {#asl}

[ASL](/ox-hugo/aslu-1-WEEK-HAVE-how-MANY-DAY--one-week-has-how-many-days-_LIFEPRINT-ASL.mp4)


### Back {#back}

1-WEEK HAVE how-MANY DAY (one week has how many days)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AFTERNOON--WORK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

AFTERNOON, WORK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-afternoon_LIFEPRINT-ASL.mp4)


### Back {#back}

afternoon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL-MORNING_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-MORNING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANNUALLY---version-----every-year--_LIFEPRINT-ASL.mp4)


### Back {#back}

ANNUALLY-[version]-[every-year]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-daily--everyday_LIFEPRINT-ASL.mp4)


### Back {#back}

daily, everyday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-what-what-DO-What-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

Do what _ what-DO _ What to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EQUAL-tie-fair-justice-_equitable-equity_LIFEPRINT-ASL.mp4)


### Back {#back}

EQUAL _ tie _ fair _ justice \_equitable _ equity


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-evening-night_LIFEPRINT-ASL.mp4)


### Back {#back}

evening night


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-afternoon_LIFEPRINT-ASL.mp4)


### Back {#back}

every afternoon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-morning_LIFEPRINT-ASL.mp4)


### Back {#back}

every morning


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-AFTERNOON_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-AFTERNOON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-MORNING_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-MORNING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-NIGHT----every-evening--every-night--_LIFEPRINT-ASL.mp4)


### Back {#back}

every-NIGHT -[every evening, every night]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-SATURDAY-WHAT-DO-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-SATURDAY WHAT-DO YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRIDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

FRIDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HABIT-ANY-YOU---if-so---WHAT-huh_LIFEPRINT-ASL.mp4)


### Back {#back}

HABIT ANY YOU [if so] WHAT-huh


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HABIT_LIFEPRINT-ASL.mp4)


### Back {#back}

HABIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-moment---a_moment_minute--_LIFEPRINT-ASL.mp4)


### Back {#back}

moment-[a_moment_minute]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

MONDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONTHLY_LIFEPRINT-ASL.mp4)


### Back {#back}

MONTHLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-month_LIFEPRINT-ASL.mp4)


### Back {#back}

month


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE--GO-TUESDAY-NIGHT--GOOD--WHY--Why-are-Tuesday-nights-a-good-time-to-go-to-the-movies-_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE, GO TUESDAY NIGHT, GOOD, WHY (Why are Tuesday nights a good time to go to the movies)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-next-month_LIFEPRINT-ASL.mp4)


### Back {#back}

next month


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-next-week--future-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

next week (future version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEXT-WEEK--underneath-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

NEXT-WEEK (underneath version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEXT-WEEK-YOU-COME-SCHOOL-are-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

NEXT-WEEK YOU COME SCHOOL are-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-noon_LIFEPRINT-ASL.mp4)


### Back {#back}

noon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-DAY-EQUAL-HOW-MANY-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE DAY EQUAL HOW-MANY HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-MINUTE-HAVE-HOW-MANY-S-E-C---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE MINUTE HAVE HOW-MANY S-E-C [version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-MONTH-EQUAL-HOW-MANY-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE MONTH EQUAL HOW-MANY DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-YEAR-EQUAL-HOW-MANY-MONTH---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE YEAR EQUAL HOW-MANY MONTH [version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OVERNIGHT---variation-of-ALL-NIGHT--_LIFEPRINT-ASL.mp4)


### Back {#back}

OVERNIGHT [variation of ALL-NIGHT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-WEEKEND-WHAT-DO-YOU--What-did-you-do-last-weekend-_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST WEEKEND WHAT-DO YOU (What did you do last weekend)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](aslu-PEOPLE-GO-CHURCH--WHAT-DAY--'On-what-day-do-people-go-to-church.'-_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE GO CHURCH, WHAT DAY ('On what day do people go to church.')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Rent_LIFEPRINT-ASL.mp4)


### Back {#back}

Rent


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY-NIGHT-I-GO-to-PARTY--WANT-ACCOMPANY-me_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY NIGHT I GO-to PARTY, WANT ACCOMPANY-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECOND---S-E-C-----unit-of-time---a-second-seconds_LIFEPRINT-ASL.mp4)


### Back {#back}

SECOND-[S-E-C]-[unit of time] a second _ seconds


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUNDAY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUNDAY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUNDAY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUNDAY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUNDAY---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUNDAY-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-morning_now-morning_LIFEPRINT-ASL.mp4)


### Back {#back}

this morning_now morning


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THURSDAY---H-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THURSDAY-[H-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THURSDAY---TH-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THURSDAY-[TH-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY-YOU-FINISH-BRUSH-TEETH-YOU--Did-you-brush-your-teeth-today-_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY YOU FINISH BRUSH-TEETH YOU (Did you brush your teeth today)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-today--currently--y-hands-double-movement--now-at-this-time_LIFEPRINT-ASL.mp4)


### Back {#back}

today, currently (y hands double movement) now at this time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY---now-day-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY-[now-day-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TUESDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

TUESDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wednesday_LIFEPRINT-ASL.mp4)


### Back {#back}

wednesday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---flat-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[flat-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---W-E-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[W-E-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY--YOU-EAT-HOW-MANY-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY, YOU EAT HOW-MANY TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-MONDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE MONDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SCHOOL-WHICH-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SCHOOL WHICH DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SHOWER-EVERYDAY-YOU--Do-you-shower-everyday-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SHOWER EVERYDAY YOU (Do you shower everyday)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-LIFE-FAIR-ALL-PEOPLE--Do-you-think-life-is-fair-for-all-people-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK LIFE FAIR ALL PEOPLE (Do you think life is fair for all people)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson12)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALMOST_LIFEPRINT-ASL.mp4)


### Back {#back}

ALMOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-article-version_LIFEPRINT-ASL.mp4)


### Back {#back}

article version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOSED-CAPTION---CC-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CLOSED-CAPTION-[CC-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE--YOU-GRADUATE-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE, YOU GRADUATE WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-COLLEGE-STUDENT-SOMETIMES-USE-NOTE-TAKER--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF COLLEGE STUDENT SOMETIMES USE NOTE-TAKER, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](aslu-DEAF---bodyshift-'or'---HEARING-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF [bodyshift-'or'] HEARING YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](aslu-DEAF-SCHOOL-YOU------version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF-SCHOOL YOU -- [version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-SCHOOL---state-residential-school-for-the-Deaf-----campus-----institute--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF-SCHOOL-[state-residential-school-for-the-Deaf]-[campus]-[institute]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOCUMENT-put-down-on-paper-note-make-a-record-of_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCUMENT _ put down on paper _ note _ make a record of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-easily_easy_LIFEPRINT-ASL.mp4)


### Back {#back}

easily_easy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GALLAUDET_LIFEPRINT-ASL.mp4)


### Back {#back}

GALLAUDET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hard-of-hearing_LIFEPRINT-ASL.mp4)


### Back {#back}

hard of hearing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HARD-tough-to-do-difficult-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

HARD _ tough to do _ difficult to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEARING---a-culturally-hearing-person--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEARING-[a culturally hearing person]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIGH-SCHOOL--YOU-GRADUATE-WHEN--When-did-you-graduate-high-school-_LIFEPRINT-ASL.mp4)


### Back {#back}

HIGH-SCHOOL, YOU GRADUATE WHEN (When did you graduate high school)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIGH-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

HIGH-SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERPRETER-LIST--YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERPRETER LIST, YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERPRETER_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERPRETER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-list_LIFEPRINT-ASL.mp4)


### Back {#back}

list


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAPER_LIFEPRINT-ASL.mp4)


### Back {#back}

PAPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-TEST-THIS-CLASS-YOU-WRONG-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST TEST THIS CLASS YOU WRONG how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH-ARTICLE--YOU-LIKE-READ--Do-you-like-to-read-research-articles-_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH ARTICLE, YOU LIKE READ (Do you like to read research articles)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH-PAPER--YOU-LIKE-WRITE_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH PAPER, YOU LIKE WRITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH---non-initialized-----version--_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH-[non-initialized]-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH---non-initialized--_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH-[non-initialized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---street-sign--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[street-sign]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SQUARE---board----YOU-THINK-HE_SHE-TEACHER-SHOULD-WRITE-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

SQUARE-[board], YOU THINK HE_SHE TEACHER SHOULD WRITE MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER-FLASH-LIGHTS-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

TEACHER FLASH LIGHTS WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST-----quiz--exam----version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST - [quiz, exam] (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST_QUIZ--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST_QUIZ (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRUE-FALSE-TEST--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

TRUE FALSE TEST, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WANT-BECOME-INTERPRETER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WANT BECOME INTERPRETER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH-MOVIE--YOU-LIKE-CLOSE-CAPTION_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH MOVIE, YOU LIKE CLOSE-CAPTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRITE_LIFEPRINT-ASL.mp4)


### Back {#back}

WRITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRONG---a-mistake-----an-error--_LIFEPRINT-ASL.mp4)


### Back {#back}

WRONG-[a-mistake]-[an-error]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GALLAUDET-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GALLAUDET YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-HARD-OF-HEARING-SHOULD-MARRY-DEAF-O-R-HEARING_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK HARD-OF-HEARING SHOULD MARRY DEAF O-R HEARING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-THIS-CLASS-EASY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK THIS CLASS EASY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-THIS-CLASS-HARD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK THIS CLASS HARD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TV-CLOSE-CAPTIONED_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TV CLOSE-CAPTIONED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson13)


## ASL {#asl}

[ASL](aslu-AUTUMN--WIND---light----COOL--YOU-LIKE-CL--1-'go-for-a-stroll'_LIFEPRINT-ASL.mp4)


### Back {#back}

AUTUMN, WIND-[light], COOL, YOU LIKE CL -1-'go for a stroll'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREEZE---wind--_LIFEPRINT-ASL.mp4)


### Back {#back}

BREEZE-[wind]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL--1---go-for-a-stroll_wander-----classifier-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

CL -1-[go-for-a-stroll_wander]-[classifier-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLD-PIZZA--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

COLD PIZZA, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cold-temperature_LIFEPRINT-ASL.mp4)


### Back {#back}

cold temperature


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLD-WEATHER---initialized----YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

COLD WEATHER-[initialized], YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLD_WINTER_LIFEPRINT-ASL.mp4)


### Back {#back}

COLD_WINTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cool_temperature_LIFEPRINT-ASL.mp4)


### Back {#back}

cool_temperature


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEODORANT_LIFEPRINT-ASL.mp4)


### Back {#back}

DEODORANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-element_weather_LIFEPRINT-ASL.mp4)


### Back {#back}

element_weather


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY---appreciate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY-[appreciate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FALL--AUTUMN_LIFEPRINT-ASL.mp4)


### Back {#back}

FALL, AUTUMN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAVORITE-TIME-YEAR-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

FAVORITE TIME YEAR WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FEEL-SICK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FEEL SICK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-TO-BED_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-TO-BED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-growing_grow--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

growing_grow (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOT-WEATHER--YOU-LIKE---initialized--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOT WEATHER, YOU LIKE [initialized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hot_LIFEPRINT-ASL.mp4)


### Back {#back}

hot


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ice_freeze_LIFEPRINT-ASL.mp4)


### Back {#back}

ice_freeze


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAKE-SNOW+MAN--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

MAKE SNOW+MAN, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-man_LIFEPRINT-ASL.mp4)


### Back {#back}

man


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOON---modified-C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MOON-[modified-C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLANT--GROW-GROW-_LIFEPRINT-ASL.mp4)


### Back {#back}

PLANT-(GROW-GROW)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

RAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SICK_LIFEPRINT-ASL.mp4)


### Back {#back}

SICK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEP-IN---over-sleep--_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEP-IN [over sleep]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEP-IN--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEP-IN, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOW---verb-form---Snow-is-gently-falling--_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOW [verb form - Snow is gently falling]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPRING---plant--spring-time--garden_LIFEPRINT-ASL.mp4)


### Back {#back}

SPRING - plant, spring time, garden


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER-VACATION--YOU-GO-TO-BED-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER VACATION, YOU GO-TO-BED what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER-VACATION--YOU-WAKE-UP-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER VACATION, YOU WAKE UP what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER---bodyshift---OR-WINTER--YOU-LIKE-BETTER-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER [bodyshift]-OR WINTER, YOU LIKE BETTER WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUN---C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUN-[C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUNRISE_LIFEPRINT-ASL.mp4)


### Back {#back}

SUNRISE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](aslu-SUPPOSE-RAIN--CL--1-'GO-OUT'-PLAY--WILL-SICK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE RAIN, CL -1-'GO OUT' PLAY, WILL SICK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-SICK--YOU-THINK-GO-TO-BED-HELP_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE SICK, YOU THINK GO-TO-BED HELP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use--palm-back-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

use (palm back version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use--palm-forward-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

use (palm forward version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](aslu-VACATION_'take-time-off-work'---one-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

VACATION_'take-time-off-work'-[one-movement-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

WAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARM----warmth--heat--_LIFEPRINT-ASL.mp4)


### Back {#back}

WARM -[warmth, heat]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARM-COOKIE-AND-MILK--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

WARM COOKIE AND MILK, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WINTER-HERE-SNOW_LIFEPRINT-ASL.mp4)


### Back {#back}

WINTER HERE SNOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

WOMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORK-YOU-SICK-DAY-VACATION-YOU-CAN-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

WORK YOU SICK DAY VACATION YOU CAN HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY-YOU-WAKE-UP--what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY YOU WAKE-UP, what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TONIGHT-FREEZE-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TONIGHT FREEZE QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-USE-DEODORANT-do-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU USE DEODORANT do-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-REFRIGERATOR-FULL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR REFRIGERATOR FULL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson14)


## ASL {#asl}

[ASL](/ox-hugo/aslu-talk-with-CONVERSE_LIFEPRINT-ASL.mp4)


### Back {#back}

talk with CONVERSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASSISTANT-aide_LIFEPRINT-ASL.mp4)


### Back {#back}

ASSISTANT _ aide


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-babysitter---BABY-KEEP-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

babysitter-[BABY-KEEP-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-babysitter---BABY-SIT-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

babysitter-[BABY-SIT-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOSS---captain_capitol_coach_chief_person-in-charge_academic-chair--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOSS-[captain_capitol_coach_chief_person-in-charge_academic-chair]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROTHER-IN-LAW-YOU-HAVE-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

BROTHER-IN-LAW YOU HAVE HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROTHER-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

BROTHER-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-camera_LIFEPRINT-ASL.mp4)


### Back {#back}

camera


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---1---WALK_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - 1 - WALK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER-PROGRAM-YOU-USE-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER PROGRAM YOU USE WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COOK---basic-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COOK-[basic-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cop---POLICE-----C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

cop-[POLICE]-[C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAUGHTER-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

DAUGHTER-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FARM+AREA_-rural-area_-farming-area_LIFEPRINT-ASL.mp4)


### Back {#back}

FARM+AREA\_ rural area\_ farming area


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FARM---upright-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FARM-[upright-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FARM_LIFEPRINT-ASL.mp4)


### Back {#back}

FARM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FATHER-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

FATHER-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-himself--herself--itself_LIFEPRINT-ASL.mp4)


### Back {#back}

himself, herself, itself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-SIGN-S-C-I-E-N-T-I-S-T---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW SIGN S-C-I-E-N-T-I-S-T [version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MUCH---1-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MUCH-[1-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIBRARY_LIFEPRINT-ASL.mp4)


### Back {#back}

LIBRARY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAJOR---academic---main-discipline-field-line-of-work-career_LIFEPRINT-ASL.mp4)


### Back {#back}

MAJOR [academic] _ main _ discipline _ field _ line of work _ career


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTHER-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTHER-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-neighbor_near-person_LIFEPRINT-ASL.mp4)


### Back {#back}

neighbor_near person


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEWSPAPER--YOU-LIKE-READ_LIFEPRINT-ASL.mp4)


### Back {#back}

NEWSPAPER, YOU LIKE READ


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-YOU-BOY-LITTLE--YOU-WANT-GROW-UP-FUTURE-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST YOU BOY LITTLE, YOU WANT GROW UP FUTURE what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PHOTOGRAPHER_LIFEPRINT-ASL.mp4)


### Back {#back}

PHOTOGRAPHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE-YOUR-FAMILY-YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE YOUR FAMILY YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE_PHOTOGRAPH_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE_PHOTOGRAPH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POLICE-he_she_they-HELP-you-BEFORE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

POLICE he_she_they-HELP-you BEFORE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-police_LIFEPRINT-ASL.mp4)


### Back {#back}

police


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRESIDENT---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRESIDENT-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRESIDENT_LIFEPRINT-ASL.mp4)


### Back {#back}

PRESIDENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRINTER---publish----in_context_PRINT_can_mean_printer-_LIFEPRINT-ASL.mp4)


### Back {#back}

PRINTER-[publish]-(in_context_PRINT_can_mean_printer)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-program_LIFEPRINT-ASL.mp4)


### Back {#back}

program


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCIENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

SCIENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECRETARY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SECRETARY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECRETARY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SECRETARY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECRETARY---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

SECRETARY-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECRETARY---version-4--_LIFEPRINT-ASL.mp4)


### Back {#back}

SECRETARY-[version-4]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---MYSELF_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - MYSELF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---OURSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - OURSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SISTER-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

SISTER-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SON-IN-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

SON-IN-LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPFATHER--what-MEANING_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPFATHER, what-MEANING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPFATHER---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPFATHER-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPFATHER---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPFATHER-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPFATHER---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPFATHER-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPMOTHER---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPMOTHER-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPMOTHER---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPMOTHER-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEPMOTHER---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

STEPMOTHER-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOUR-DAD-DIVORCE--MARRY-NEW-WOMAN--SHE-YOUR-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOUR DAD DIVORCE, MARRY NEW WOMAN, SHE YOUR WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-take-a-picture_click-a-camera_LIFEPRINT-ASL.mp4)


### Back {#back}

take a picture_click a camera


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THEMSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

THEMSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK-SELF--it-is-up-to-you--you-decide--as-you-wish----idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK-SELF, it is up to you, you decide, as you wish, [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-U-S--PRESIDENT--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

U-S, PRESIDENT, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAITER_SERVER_LIFEPRINT-ASL.mp4)


### Back {#back}

WAITER_SERVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAITRESS--YOU-SHOULD-TIP-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

WAITRESS, YOU SHOULD TIP HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-worth-how-much_LIFEPRINT-ASL.mp4)


### Back {#back}

worth how much


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-COOK_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE COOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-USE-BABYSITTER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU USE BABYSITTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WISH-YOURSELF-HAVE-SECRETARY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WISH YOURSELF HAVE SECRETARY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BOSS-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BOSS NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY-ANY-LIBRARY+PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY ANY LIBRARY+PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDPA-FARMER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDPA FARMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MAJOR-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MAJOR WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NEIGHBOR-NAME--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NEIGHBOR NAME, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TEACHER-HAVE-AIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TEACHER HAVE AIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson15)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALWAYS---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ALWAYS-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALWAYS_LIFEPRINT-ASL.mp4)


### Back {#back}

ALWAYS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE--prior-to--CLASS--YOU-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-(prior to) CLASS, YOU WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---CLASS-YOU-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] CLASS YOU WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-BEFORE---version----prior-to--beforehand--preceding--coming-before-something-in-time--in-advance-of_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[version], prior-to, beforehand, preceding, coming before something in time, in advance of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-best_LIFEPRINT-ASL.mp4)


### Back {#back}

best


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BETTER_LIFEPRINT-ASL.mp4)


### Back {#back}

BETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-center--bent-middle-finger-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

center (bent middle finger version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-center-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

center version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CENTER---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

CENTER [version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-CHANGE--'A'-hands-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE ('A' hands version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHANGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILD_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLOR---wh-q--_LIFEPRINT-ASL.mp4)


### Back {#back}

COLOR-[wh-q]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-COME-GO_LIFEPRINT-ASL.mp4)


### Back {#back}

COME _ GO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-come-to-here_LIFEPRINT-ASL.mp4)


### Back {#back}

come to here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COOK---basic-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COOK-[basic-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-CENTER--YOU-KNOW-WHERE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF CENTER, YOU KNOW WHERE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISDAIN-_look-down-upon-throw-shade-on-disrespect-condescension-disparage_LIFEPRINT-ASL.mp4)


### Back {#back}

DISDAIN-_look-down-upon _ throw-shade-on _ disrespect _ condescension _ disparage


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DO---behavior_action--_LIFEPRINT-ASL.mp4)


### Back {#back}

DO-[behavior_action]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-DOCTOR-APPOINTMENT--YOU-HAVE--Do-you-have-a-doctor's-appointment-_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCTOR APPOINTMENT, YOU HAVE (Do you have a doctor's appointment)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Electric----electricity--battery--power--electric-charge--charge--_LIFEPRINT-ASL.mp4)


### Back {#back}

Electric -[electricity, battery, power, electric charge, charge]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-END_weekend_LIFEPRINT-ASL.mp4)


### Back {#back}

END_weekend


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FALL--AUTUMN_LIFEPRINT-ASL.mp4)


### Back {#back}

FALL, AUTUMN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---non-initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [non-initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FEW---A-hand---4-hand-version---_SEVERAL_LIFEPRINT-ASL.mp4)


### Back {#back}

FEW-[A-hand - 4-hand-version] \_SEVERAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FEW_LIFEPRINT-ASL.mp4)


### Back {#back}

FEW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRST_primary_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRST_primary


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-TO-BED_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-TO-BED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HALF-HOUR---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HALF-HOUR-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HALF-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

HALF-HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEARING-AID-BATTERY--YOU-NOT-YET-CHANGE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

HEARING-AID BATTERY, YOU NOT-YET CHANGE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEARING-AID_LIFEPRINT-ASL.mp4)


### Back {#back}

HEARING-AID


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MUCH---1-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MUCH-[1-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-KITCHEN--'cook'-variation-_LIFEPRINT-ASL.mp4)


### Back {#back}

KITCHEN ('cook' variation)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KNOW---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

KNOW-[casual-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAST-final-least_LIFEPRINT-ASL.mp4)


### Back {#back}

LAST _ final _ least


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LATE-CLASS-ALWAYS-YOU--Are-you-always-late-to-class-_LIFEPRINT-ASL.mp4)


### Back {#back}

LATE CLASS ALWAYS YOU (Are you always late to class)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LATER_LIFEPRINT-ASL.mp4)


### Back {#back}

LATER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LATE_LIFEPRINT-ASL.mp4)


### Back {#back}

LATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIBRARY--YOU-GO-HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

LIBRARY, YOU GO HOW-OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIBRARY_LIFEPRINT-ASL.mp4)


### Back {#back}

LIBRARY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](aslu-LOOK--'Everybody-looking-at...'-'Many-people-looking-at...'-_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-('Everybody looking at...' _ 'Many people looking at...')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-AT---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-AT-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-AT_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-AT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-DOWN_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-DOWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-UP---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-UP-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK---looking-over--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-[looking over]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAN-bodyshift-OR-WOMAN--YOU-THINK-BETTER-DRIVER-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

MAN bodyshift-OR WOMAN, YOU THINK BETTER DRIVER WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-man_LIFEPRINT-ASL.mp4)


### Back {#back}

man


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MIDDLE---version-1---center_LIFEPRINT-ASL.mp4)


### Back {#back}

MIDDLE-[version-1] _ center


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-midnight_LIFEPRINT-ASL.mp4)


### Back {#back}

midnight


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mostly-most-facial-morpheme-_LIFEPRINT-ASL.mp4)


### Back {#back}

mostly most(facial morpheme)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-next--general-sign-_LIFEPRINT-ASL.mp4)


### Back {#back}

next (general sign)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-not-YET_LIFEPRINT-ASL.mp4)


### Back {#back}

not-YET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR---bodyshift-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

OR-[bodyshift-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OVER---across_cross_after--_LIFEPRINT-ASL.mp4)


### Back {#back}

OVER-[across_cross_after]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-SATURDAY-YOU-GO-TO-BED--what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST SATURDAY YOU GO-TO-BED, what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-WEEKEND-YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST WEEKEND YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-recall-look-back_LIFEPRINT-ASL.mp4)


### Back {#back}

recall-look back


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Reservation_-Appointment-APPOINTMENT_-RESERVATION_LIFEPRINT-ASL.mp4)


### Back {#back}

Reservation\_ Appointment _ APPOINTMENT\_ RESERVATION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEE-you-LATER_LIFEPRINT-ASL.mp4)


### Back {#back}

SEE-you-LATER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEE_VISION_LIFEPRINT-ASL.mp4)


### Back {#back}

SEE_VISION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEVERAL---pinkie-version---a-few_LIFEPRINT-ASL.mp4)


### Back {#back}

SEVERAL-[pinkie version] _ a few


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOES--YOU-HAVE-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOES, YOU HAVE HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-shoes_LIFEPRINT-ASL.mp4)


### Back {#back}

shoes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOON---F-on-chin-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOON-[F-on-chin-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOON---H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOON-[H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPRING---plant--spring-time--garden_LIFEPRINT-ASL.mp4)


### Back {#back}

SPRING - plant, spring time, garden


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPRING--SUMMER--FALL--YOU-LIKE-BEST-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SPRING, SUMMER, FALL, YOU LIKE BEST WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-TEACHER-NOT-COME--WAIT-HALF-HOUR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE TEACHER NOT COME, WAIT HALF-HOUR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIME-LOOK-at-watch--look-at-the-time-_LIFEPRINT-ASL.mp4)


### Back {#back}

TIME LOOK-at-watch (look at the time)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY--YOUR-LAST-CLASS-WHAT--What-is-your-last-class-today-_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY, YOUR LAST CLASS WHAT (What is your last class today)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY---now-day-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY-[now-day-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-two-of-us---you-and-I--_LIFEPRINT-ASL.mp4)


### Back {#back}

two-of-us-[you and I]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAIT_LIFEPRINT-ASL.mp4)


### Back {#back}

WAIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH---casual--_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH-[casual]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-We-will-see_LIFEPRINT-ASL.mp4)


### Back {#back}

We-will-see


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---flat-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[flat-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND---W-E-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND-[W-E-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

WOMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY--SCHOOL-FINISH-AFTER---FROM-THEN-ON---YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY, SCHOOL FINISH AFTER-[FROM-THEN-ON] YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GRADUATE-SOON-do-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GRADUATE SOON do-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-RECENT-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU RECENT what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--COOK-MOST-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, COOK MOST WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--LAST-CHILD-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, LAST CHILD WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FIRST-CAR--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FIRST CAR, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NEXT-CLASS-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NEXT CLASS WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson16)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINISH_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BANANA_LIFEPRINT-ASL.mp4)


### Back {#back}

BANANA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEER_LIFEPRINT-ASL.mp4)


### Back {#back}

BEER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](aslu-CATSUP_ketchup---CAT-UP-'A'-hand-version-----pun--_LIFEPRINT-ASL.mp4)


### Back {#back}

CATSUP_ketchup-[CAT-UP-'A'-hand-version]-[pun]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CEREAL-YOU-LIKE-what-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

CEREAL YOU LIKE what-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUP-GLASS--drink--CAN--container-_LIFEPRINT-ASL.mp4)


### Back {#back}

CUP _ GLASS-(drink) _ CAN-(container)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT-FINISH--CUP--DISH--PUT-S-I-N-K-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT FINISH, CUP, DISH, PUT S-I-N-K YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](aslu-FINISH-all-done-already-completed-and-then-it's-over-after-which_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH _ all done _ already completed _ and then _ it's over _ after which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-French-Fries_LIFEPRINT-ASL.mp4)


### Back {#back}

French Fries


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRENCH-TOAST-MAKE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

FRENCH TOAST MAKE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRAPES--YOU-EAT-HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

GRAPES, YOU EAT HOW OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRAPES_LIFEPRINT-ASL.mp4)


### Back {#back}

GRAPES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KETCHUP--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

KETCHUP (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mayonnaise---M-A-Y-O-fs-MAYO--_LIFEPRINT-ASL.mp4)


### Back {#back}

mayonnaise [M-A-Y-O _ fs-MAYO]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-meal-breakfast--eat-morning_LIFEPRINT-ASL.mp4)


### Back {#back}

meal breakfast, eat morning


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-meal-dinner--supper--eat-night_LIFEPRINT-ASL.mp4)


### Back {#back}

meal dinner, supper, eat night


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-meal-lunch--eat-noon_LIFEPRINT-ASL.mp4)


### Back {#back}

meal lunch, eat noon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MUCH---a-lot-----a-bunch--_LIFEPRINT-ASL.mp4)


### Back {#back}

MUCH-[a-lot]-[a-bunch]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mustard---fs-MUSTARD------M-U-S-T-A-R-D--_LIFEPRINT-ASL.mp4)


### Back {#back}

mustard-[fs-MUSTARD]-[ M-U-S-T-A-R-D]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOW-MORNING-YOU-EAT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOW-MORNING YOU EAT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOW---1-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOW-[1-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PANCAKE_LIFEPRINT-ASL.mp4)


### Back {#back}

PANCAKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEPPER_LIFEPRINT-ASL.mp4)


### Back {#back}

PEPPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICKLE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICKLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-plate--rounded-L-hands-_LIFEPRINT-ASL.mp4)


### Back {#back}

plate (rounded L hands)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POP-SODA_LIFEPRINT-ASL.mp4)


### Back {#back}

POP _ SODA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALAD_LIFEPRINT-ASL.mp4)


### Back {#back}

SALAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALT_LIFEPRINT-ASL.mp4)


### Back {#back}

SALT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINK---version-2---to-become-submerged-to-descend-into-liquid_LIFEPRINT-ASL.mp4)


### Back {#back}

SINK [version 2] _ to become submerged _ to descend into liquid


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINK---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINK-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOAP-YOU-USE--what--NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

SOAP YOU USE, what- NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOAP---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOAP-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOAP---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOAP-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP--YOU-LIKE-PEPPER_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP, YOU LIKE PEPPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

SOUP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-EAT-EGG--YOU-LIKE-KETCHUP-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE EAT EGG, YOU LIKE KETCHUP YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-BREAKFAST-YOU-WANT-PANCAKE-AND-SAUSAGE---hotdog--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW BREAKFAST YOU WANT PANCAKE AND SAUSAGE-[hotdog]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-EAT-NOON-YOU-WANT-SOUP-AND-SALAD_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW EAT NOON YOU WANT SOUP AND SALAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

use version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-USE--WEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

USE, WEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATER--MILK--POP--BEER--YOU-PREFER-DRINK-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

WATER, MILK, POP, BEER, YOU PREFER DRINK WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY-NIGHT-YOU-EAT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY NIGHT YOU EAT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-BANANA_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE BANANA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-SALT-BAD-FOR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK SALT BAD FOR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CEREAL-YOU-LIKE-BANANA_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CEREAL YOU LIKE BANANA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FRENCH-FRIES--YOU-SALT-A-LOT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FRENCH-FRIES, YOU SALT A-LOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HAMBURGER-WANT-M-A-Y-O-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HAMBURGER WANT M-A-Y-O YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HAMBURGER-YOU-LIKE-PICKLE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HAMBURGER YOU LIKE PICKLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOT-DOG-WANT-MUSTARD-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOT DOG WANT MUSTARD YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-S-I-N-K-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR S-I-N-K what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson17)


## ASL {#asl}

[ASL](/ox-hugo/aslu-want_LIFEPRINT-ASL.mp4)


### Back {#back}

want


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABANDON--leave-behind--left-over--abandoned--cast-away--tossed--dumped--left-overs--remaining_LIFEPRINT-ASL.mp4)


### Back {#back}

ABANDON, leave behind, left over, abandoned, cast away, tossed, dumped, left overs, remaining


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AIRPLANE-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

AIRPLANE BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BICYCLE--HAVE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BICYCLE, HAVE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIKE-BICYCLE_LIFEPRINT-ASL.mp4)


### Back {#back}

BIKE _ BICYCLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOAT--BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BOAT, BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car-crash-you-how-many-times_LIFEPRINT-ASL.mp4)


### Back {#back}

car crash you how many times


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-construction_build--bent-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

construction_build (bent hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRASH--5-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

CRASH (5-hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRONE---propeller-version---index-finger-version-of-HELICOPTER_LIFEPRINT-ASL.mp4)


### Back {#back}

DRONE-[propeller-version] _ index-finger-version-of-HELICOPTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELEVATOR---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ELEVATOR-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELEVATOR_LIFEPRINT-ASL.mp4)


### Back {#back}

ELEVATOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fly_flying-airplane_LIFEPRINT-ASL.mp4)


### Back {#back}

fly_flying airplane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-FUN_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-FUN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUN_LIFEPRINT-ASL.mp4)


### Back {#back}

FUN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-garage_LIFEPRINT-ASL.mp4)


### Back {#back}

garage


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HORSE--YOU-RIDE-ON-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

HORSE, YOU RIDE-ON BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KEYS_LIFEPRINT-ASL.mp4)


### Back {#back}

KEYS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-last-YEAR-TICKET-YOU-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

last-YEAR TICKET YOU HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEAVE---go-out--_LIFEPRINT-ASL.mp4)


### Back {#back}

LEAVE [go-out]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEAVE---exodus-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LEAVE-[exodus-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-locate--find_LIFEPRINT-ASL.mp4)


### Back {#back}

locate, find


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOSE---lost_cannot-find--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOSE-[lost_cannot-find]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTORCYCLE--HAVE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTORCYCLE, HAVE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTORCYCLE_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTORCYCLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-new_LIFEPRINT-ASL.mp4)


### Back {#back}

new


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-onto_GET-ON_LIFEPRINT-ASL.mp4)


### Back {#back}

onto_GET ON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-plane-AIRPLANE_LIFEPRINT-ASL.mp4)


### Back {#back}

plane-AIRPLANE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](aslu-R-O-C-K-E-T'-HOW-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

R-O-C-K-E-T' HOW SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIDE-in_LIFEPRINT-ASL.mp4)


### Back {#back}

RIDE-in


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

RIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCKET---initialized-palm-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCKET-[initialized-palm-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCKET---non-initialized-back-of-hand-version---launch-missile-projectile_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCKET-[non-initialized-back-of-hand-version] launch _ missile _ projectile


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEARCH-WORK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SEARCH WORK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-search_look-for_seek_LIFEPRINT-ASL.mp4)


### Back {#back}

search_look for_seek


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---MYSELF_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - MYSELF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---OURSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - OURSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF-itself-automatically-on-its-own-auto---self--_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF _ itself _ automatically _ on its own _ auto-[self]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ship_boat_LIFEPRINT-ASL.mp4)


### Back {#back}

ship_boat


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-subway_LIFEPRINT-ASL.mp4)


### Back {#back}

subway


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THEMSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

THEMSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK-SELF--it-is-up-to-you--you-decide--as-you-wish----idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK-SELF, it is up to you, you decide, as you wish, [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TICKET---noun-form--_LIFEPRINT-ASL.mp4)


### Back {#back}

TICKET-[noun-form]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tour_travel_LIFEPRINT-ASL.mp4)


### Back {#back}

tour_travel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAIN-TRAVEL-YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAIN TRAVEL YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-training-practice_LIFEPRINT-ASL.mp4)


### Back {#back}

training practice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-truck--fingerspelled-lexicalized-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

truck (fingerspelled lexicalized version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WISH-HAVE-your-SELF-HELICOPTER-YOU---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WISH HAVE your-SELF HELICOPTER YOU-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WISH-HAVE-your-SELF-HELICOPTER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WISH HAVE your-SELF HELICOPTER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LEAVE---go-away---THIS-CLASS--what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LEAVE-[go-away] THIS CLASS, what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PRACTICE-SIGN--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PRACTICE SIGN, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](aslu-YOU-PREFER-CAR---bodyshift-'or'---TRUCK_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER CAR [bodyshift-'or'] TRUCK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-FIND-NEW-ADDRESS-EASY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK FIND NEW ADDRESS EASY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-BUILD-your-SELF-HOUSE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT BUILD your-SELF HOUSE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK--YOU-LOSE-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK, YOU LOSE BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-city-have-subway_LIFEPRINT-ASL.mp4)


### Back {#back}

your city have subway


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-KEYS--YOU-LOSE-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR KEYS, YOU LOSE BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson18)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-what-what-DO-What-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

Do what _ what-DO _ What to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT_-recently_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT\_ recently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER_LIFEPRINT-ASL.mp4)


### Back {#back}

TEACHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-which_LIFEPRINT-ASL.mp4)


### Back {#back}

which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY---appreciate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY-[appreciate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ability-can_LIFEPRINT-ASL.mp4)


### Back {#back}

ability can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---flat-O-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[flat-O-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---index-fingers-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[index-fingers-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AFRAID_-SCARY_LIFEPRINT-ASL.mp4)


### Back {#back}

AFRAID\_ SCARY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AMAZED---nd-1-hand_dh-S-version---head-knocked-back-knocked-me-for-a-loop_LIFEPRINT-ASL.mp4)


### Back {#back}

AMAZED-[nd-1-hand_dh-S-version] _ head knocked back _ knocked me for a loop


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-anyone_LIFEPRINT-ASL.mp4)


### Back {#back}

anyone


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPROXIMATELY---around--about--_LIFEPRINT-ASL.mp4)


### Back {#back}

APPROXIMATELY-[around, about]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASTONISHED-amazed-orange-EYES---idiomatic---astounded_LIFEPRINT-ASL.mp4)


### Back {#back}

ASTONISHED _ amazed _ orange-EYES-[idiomatic] _ astounded


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-awe-awed-CHIN-DROP-astonished-amazed-awestruck_LIFEPRINT-ASL.mp4)


### Back {#back}

awe _ awed _ CHIN-DROP _ astonished _ amazed _ awestruck


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---previous-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[previous-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---TEST-YOU-FEEL-NERVOUS-YOU---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] TEST YOU FEEL NERVOUS YOU-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---TEST-YOU-FEEL-NERVOUS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] TEST YOU FEEL NERVOUS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK-YOU-THINK-INTERESTING--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

BOOK YOU THINK INTERESTING, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-book_LIFEPRINT-ASL.mp4)


### Back {#back}

book


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bored_LIFEPRINT-ASL.mp4)


### Back {#back}

bored


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BORING---single-roll-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BORING-[single-roll-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOYFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOYFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAT_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHAT-WITH---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHAT-WITH-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHAT-WITH_LIFEPRINT-ASL.mp4)


### Back {#back}

CHAT-WITH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-easily_easy_LIFEPRINT-ASL.mp4)


### Back {#back}

easily_easy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMBARRASS-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

EMBARRASS EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-embarrassed_LIFEPRINT-ASL.mp4)


### Back {#back}

embarrassed


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-experiment---TEST--_LIFEPRINT-ASL.mp4)


### Back {#back}

experiment [TEST]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fear_afraid_scare-scared_LIFEPRINT-ASL.mp4)


### Back {#back}

fear_afraid_scare scared


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-friendly_LIFEPRINT-ASL.mp4)


### Back {#back}

friendly


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRUSTRATED_LIFEPRINT-ASL.mp4)


### Back {#back}

FRUSTRATED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUTURE---WILL--_LIFEPRINT-ASL.mp4)


### Back {#back}

FUTURE-[WILL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRLFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRLFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAPPY_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEALTHY---become-well-physically---strong---heal-up-----brave--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEALTHY-[become-well-physically]-strong-[heal-up]-[brave]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INDEX---personal-pronoun-----HE_SHE_HIM_HER_IT-----the-----THERE-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

INDEX-[personal-pronoun]-[HE_SHE_HIM_HER_IT]-[the]-[THERE-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INSULT-ME_LIFEPRINT-ASL.mp4)


### Back {#back}

INSULT-ME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INSULTS-slurs_LIFEPRINT-ASL.mp4)


### Back {#back}

INSULTS _ slurs


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-intend-intent-purpose-meaning_LIFEPRINT-ASL.mp4)


### Back {#back}

intend intent purpose meaning


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERESTING-version_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERESTING-version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERESTING_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERESTING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JEALOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

JEALOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mad_LIFEPRINT-ASL.mp4)


### Back {#back}

mad


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mean_cruel_LIFEPRINT-ASL.mp4)


### Back {#back}

mean_cruel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NERVOUS-shaking-rattled-unsteady-hands_LIFEPRINT-ASL.mp4)


### Back {#back}

NERVOUS _ shaking _ rattled _ unsteady-hands


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---2h-non-intitialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[2h-non-intitialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---alternate-P-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[alternate-P-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---alternating-up-down-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[alternating-up-down-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---backward-rotation-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[backward-rotation-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---international-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[international-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-phone-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

phone version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PHONE_LIFEPRINT-ASL.mp4)


### Back {#back}

PHONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT-YOU-INSULT-ANY-ONE_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT YOU INSULT ANY-ONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SILLY_LIFEPRINT-ASL.mp4)


### Back {#back}

SILLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-snobby-STUCK-UP_-SNOBBY_LIFEPRINT-ASL.mp4)


### Back {#back}

snobby _ STUCK-UP\_ SNOBBY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-WALK-4-HOUR--FUTURE---will---TIRED-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE WALK 4-HOUR, FUTURE-[will] TIRED YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-surprise-test-you-like_LIFEPRINT-ASL.mp4)


### Back {#back}

surprise test you like


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SURPRISE_LIFEPRINT-ASL.mp4)


### Back {#back}

SURPRISE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK-SCHOOL-BORING-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK SCHOOL BORING YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIRED_LIFEPRINT-ASL.mp4)


### Back {#back}

TIRED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-unit-CHAPTER-text_LIFEPRINT-ASL.mp4)


### Back {#back}

unit CHAPTER text


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

WAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WALK_LIFEPRINT-ASL.mp4)


### Back {#back}

WALK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-AFRAID-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU AFRAID WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-FRUSTRATED-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL FRUSTRATED WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-HAPPY-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL HAPPY WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-CHAT-PHONE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE CHAT PHONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MAD--what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MAD, what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PROUD-ABOUT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PROUD ABOUT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SOMETIMES-FEEL-LONELY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SOMETIMES FEEL LONELY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-CAT-STUCK-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK CAT STUCK-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-FIREMEN-BRAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK FIREMEN BRAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-he_she_the-TEACHER-SILLY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK he_she_the TEACHER SILLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-MOST-DOG-FRIENDLY--MEAN--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK MOST DOG FRIENDLY, MEAN, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BOYFRIEND---or-girlfriend---HE_SHE-JEALOUS-EASY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BOYFRIEND [or girlfriend] HE_SHE JEALOUS EASY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson19)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRIDE_PROUD_LIFEPRINT-ASL.mp4)


### Back {#back}

PRIDE_PROUD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-appearance--face-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

appearance (face version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---bent-middle-finger-version-circles-head--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [bent-middle-finger-version-circles-head]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---S-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [S-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEAUTIFUL---pretty-----sideways-view--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEAUTIFUL-[pretty]-[sideways-view]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEAUTIFUL---pretty--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEAUTIFUL-[pretty]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLACK---twist-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BLACK-[twist-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLUE_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

BLUE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUZZ-CUT-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BUZZ-CUT BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CITY---twisting-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CITY [twisting version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CITY---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

CITY-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CITY---version-4--_LIFEPRINT-ASL.mp4)


### Back {#back}

CITY-[version-4]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL--C---thick-----Classifier-C--_LIFEPRINT-ASL.mp4)


### Back {#back}

CL -C-[thick]-[Classifier-C]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLOR_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CURLY-HAIR_LIFEPRINT-ASL.mp4)


### Back {#back}

CURLY-HAIR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUTE---thumb-in-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CUTE-[thumb-in-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Eyes-EYES_LIFEPRINT-ASL.mp4)


### Back {#back}

Eyes _ EYES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-face_LIFEPRINT-ASL.mp4)


### Back {#back}

face


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fraud---to-FOOL-version---conned_LIFEPRINT-ASL.mp4)


### Back {#back}

fraud-[to-FOOL-version]-conned


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRL-THIS-CLASS-STRAIGHT-HAIR--HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRL THIS CLASS STRAIGHT-HAIR, HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GREEN_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

GREEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR--LONG-HAIR--SHORT-HAIR--YOU-THINK-PRETTY-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR, LONG HAIR, SHORT HAIR, YOU THINK PRETTY WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hair-buzz-cut---very-short-hair--_LIFEPRINT-ASL.mp4)


### Back {#back}

hair-buzz-cut [very-short-hair]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR-depictive-length---long-hair--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR-depictive-length-[long-hair]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hero_STRONG_brave_courage_WELL_recover_LIFEPRINT-ASL.mp4)


### Back {#back}

hero_STRONG_brave_courage_WELL_recover


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-TALL---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-TALL-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-interim-TEMPORARY-short-length-of-time_LIFEPRINT-ASL.mp4)


### Back {#back}

interim _ TEMPORARY _ short length of time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LONG-HAIR---bent-B-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LONG-HAIR-[bent-B-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE---version--_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

LOOK-LIKE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST-FARMER-STRONG_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST FARMER STRONG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MY-SHOES--YOU-THINK-UGLY_LIFEPRINT-ASL.mp4)


### Back {#back}

MY SHOES, YOU THINK UGLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME-SOMEONE-CURLY-HAIR_LIFEPRINT-ASL.mp4)


### Back {#back}

NAME SOMEONE CURLY-HAIR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-neck-length-hair---short-hair--_LIFEPRINT-ASL.mp4)


### Back {#back}

neck-length-hair [short-hair]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-normal_natural_of-course_LIFEPRINT-ASL.mp4)


### Back {#back}

normal_natural_of course


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OBESE---very-FAT--_LIFEPRINT-ASL.mp4)


### Back {#back}

OBESE-[very-FAT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD-PEOPLE-WEAK_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD PEOPLE WEAK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA-THIN---crust----THICK---crust----YOU-FAVOR---prefer---WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA THIN-[crust], THICK-[crust], YOU FAVOR-[prefer] WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RED_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

RED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-regular-appropriate-righteous_LIFEPRINT-ASL.mp4)


### Back {#back}

regular-appropriate-righteous


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-short-height_LIFEPRINT-ASL.mp4)


### Back {#back}

short-height


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-short-sleeved-shirt_LIFEPRINT-ASL.mp4)


### Back {#back}

short-sleeved-shirt


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKINNY---thin--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKINNY-[thin]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLENDER---thin--_LIFEPRINT-ASL.mp4)


### Back {#back}

SLENDER-[thin]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRAIGHT-HAIR_LIFEPRINT-ASL.mp4)


### Back {#back}

STRAIGHT-HAIR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRONG_LIFEPRINT-ASL.mp4)


### Back {#back}

STRONG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUGAR_cute_candy_LIFEPRINT-ASL.mp4)


### Back {#back}

SUGAR_cute_candy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TALL---bent-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TALL-[bent-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TALL---index-on-palm-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TALL-[index-on-palm-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thick--cheek-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

thick (cheek version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIN---q-handshape-version-----side-view--_LIFEPRINT-ASL.mp4)


### Back {#back}

THIN-[q-handshape-version]-[side-view]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thin---THIN--_LIFEPRINT-ASL.mp4)


### Back {#back}

thin-[THIN]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UGLY_LIFEPRINT-ASL.mp4)


### Back {#back}

UGLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-very-UGLY---2-hand-version-----not-pretty--_LIFEPRINT-ASL.mp4)


### Back {#back}

very-UGLY [2 hand-version] [not-pretty]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-weak---weakness_feeble--_LIFEPRINT-ASL.mp4)


### Back {#back}

weak [weakness_feeble]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHITE_LIFEPRINT-ASL_1656574490965.mp4)


### Back {#back}

WHITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EAT-A-LOT--REGULAR--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EAT A-LOT, REGULAR, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EAT-A-LOT--regular---NORMAL----WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EAT A-LOT, regular-[NORMAL], WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HOW-TALL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HOW-TALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-FOOL-PEOPLE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE FOOL PEOPLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LOOK-LIKE-YOUR-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LOOK-LIKE YOUR DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-CUTE--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK CUTE, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK-CL--C---thick---QM-WIG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK CL -C-[thick] QM-WIG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BROTHER-HAIR--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BROTHER HAIR, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-EYES-BLUE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD EYES BLUE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-SHORT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD SHORT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDPA-SKINNY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDPA SKINNY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-EYES-BROWN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM EYES BROWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SISTER-FAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SISTER FAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson20)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPLY-for_LIFEPRINT-ASL.mp4)


### Back {#back}

APPLY-for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ARMY---military-----soldier--_LIFEPRINT-ASL.mp4)


### Back {#back}

ARMY-[military]-[soldier]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-aspire---WISH-GOAL--_LIFEPRINT-ASL.mp4)


### Back {#back}

aspire-[WISH-GOAL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BORROW---loan--_LIFEPRINT-ASL.mp4)


### Back {#back}

BORROW [loan]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOSS-FIRE-WORKER--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

BOSS FIRE WORKER, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOSS_head-authority_LIFEPRINT-ASL.mp4)


### Back {#back}

BOSS_head authority


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOYFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOYFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUS--YOU-RIDE-IN-SCHOOL--YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BUS, YOU RIDE-IN SCHOOL, YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bus---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

bus-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUS---V-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BUS-[V-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-candidate-apply-person_LIFEPRINT-ASL.mp4)


### Back {#back}

candidate apply person


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHURCH_LIFEPRINT-ASL.mp4)


### Back {#back}

CHURCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DANCE---dancing--_LIFEPRINT-ASL.mp4)


### Back {#back}

DANCE-[dancing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-what-what-DO-What-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

Do what _ what-DO _ What to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-employ---HIRE--_LIFEPRINT-ASL.mp4)


### Back {#back}

employ-[HIRE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-employee_WORKER_LIFEPRINT-ASL.mp4)


### Back {#back}

employee_WORKER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY---appreciate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY-[appreciate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRE---terminate--excommunicate_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRE - terminate, excommunicate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRE-flame-burning-flames--ASL----one-of-several-versions--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRE _ flame _ burning _ flames (ASL) [one of several versions]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRE-ALARM_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRE-ALARM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRE---roaring_fire---blazing-blaze-bonfire-inferno_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRE-[roaring_fire] _ blazing _ blaze _ bonfire _ inferno


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN---C-hand-version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN-[C-hand-version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIREMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

FIREMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISHING--pull-back-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

FISHING (pull back version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fishing_LIFEPRINT-ASL.mp4)


### Back {#back}

fishing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---repair_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX - repair


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX-[fingerspelled version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLY---a-fly-buzzing-around---flying-around_LIFEPRINT-ASL.mp4)


### Back {#back}

FLY-[a fly buzzing around] _ flying around


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fly_flying-airplane_LIFEPRINT-ASL.mp4)


### Back {#back}

fly_flying airplane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](aslu-FORM----non-initialized-version---resume---version---transcript---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FORM -[non initialized version] _ resume-[version] _ transcript-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-P-O---Post-Office--_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-P-O-[Post Office]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRLFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRLFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GLASSES_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

GLASSES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIRCUT_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIRCUT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hire_invite_LIFEPRINT-ASL.mp4)


### Back {#back}

hire_invite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-house-version_LIFEPRINT-ASL.mp4)


### Back {#back}

house version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invite_WELCOME_HIRE_LIFEPRINT-ASL.mp4)


### Back {#back}

invite_WELCOME_HIRE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOB-YOU-APPLY-BEFORE--HOW-MANY---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

JOB YOU APPLY BEFORE, HOW-MANY-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOB-YOU-APPLY-BEFORE--HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

JOB YOU APPLY BEFORE, HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOB---lexicalized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

JOB-[lexicalized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAW---legal--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAW-[legal]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-lawyer_LIFEPRINT-ASL.mp4)


### Back {#back}

lawyer


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAJOR---academic---main-discipline-field-line-of-work-career_LIFEPRINT-ASL.mp4)


### Back {#back}

MAJOR [academic] _ main _ discipline _ field _ line of work _ career


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-manager-moderator-administrator-person-who-controls_LIFEPRINT-ASL.mp4)


### Back {#back}

manager _ moderator _ administrator _ person who controls


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST-POST-OFFICE-WORKER-THIN--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST POST-OFFICE WORKER THIN, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEED-MUST_-SHOULD_LIFEPRINT-ASL.mp4)


### Back {#back}

NEED _ MUST\_ SHOULD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD-BOY-FRIEND----or-girlfriend----PICTURE-YOU-KEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD BOY-FRIEND, [or girlfriend], PICTURE YOU KEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR---bodyshift-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

OR-[bodyshift-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-page---PAPER--_LIFEPRINT-ASL.mp4)


### Back {#back}

page-[PAPER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAINT---general--_LIFEPRINT-ASL.mp4)


### Back {#back}

PAINT-[general]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAINT---H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PAINT-[H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAINT---open-H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PAINT-[open-H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE_PHOTOGRAPH_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE_PHOTOGRAPH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILOT-USE-S-U-N-GLASSES--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

PILOT USE S-U-N GLASSES, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILOT-USE-SUN-GLASSES--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

PILOT USE SUN GLASSES, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-priest_LIFEPRINT-ASL.mp4)


### Back {#back}

priest


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-principle_LIFEPRINT-ASL.mp4)


### Back {#back}

principle


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIDE-in_LIFEPRINT-ASL.mp4)


### Back {#back}

RIDE-in


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RULE----regulation--_LIFEPRINT-ASL.mp4)


### Back {#back}

RULE -[regulation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-send_mail-something---throw-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

send_mail something-[throw version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINGLE---alone-something-someone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINGLE-[alone-something-someone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKINNY---thin--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKINNY-[thin]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-soldier---ARMY-PERSON--_LIFEPRINT-ASL.mp4)


### Back {#back}

soldier-[ARMY-PERSON]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETHING-BROKE--YOU-PREFER-HIRE-MECHANIC----bodyshift----fs-FIX-your-SELF--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETHING BROKE, YOU PREFER HIRE MECHANIC, [bodyshift], fs-FIX your-SELF, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sun--ray-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

sun (ray version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUN---C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUN-[C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-CARE---take-care-of-something--_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-CARE-[take-care-of-something]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIN---q-handshape-version-----side-view--_LIFEPRINT-ASL.mp4)


### Back {#back}

THIN-[q-handshape-version]-[side-view]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thin---THIN--_LIFEPRINT-ASL.mp4)


### Back {#back}

thin-[THIN]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-to-apply_submit-an-application_LIFEPRINT-ASL.mp4)


### Back {#back}

to apply_submit an application


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

use version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-USE--WEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

USE, WEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-which_LIFEPRINT-ASL.mp4)


### Back {#back}

which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WISH---desire--_LIFEPRINT-ASL.mp4)


### Back {#back}

WISH-[desire]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wrench_LIFEPRINT-ASL.mp4)


### Back {#back}

wrench


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-DENTIST-HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO DENTIST HOW OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAIRCUT--HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAIRCUT, HOW OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-DANCE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE DANCE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-FISHING_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE FISHING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WISH-your-SELF-LAWYER-YOU---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WISH your-SELF LAWYER YOU-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WISH-your-SELF-LAWYER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WISH your-SELF LAWYER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CHURCH-SEND-MISSIONARY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CHURCH SEND MISSIONARY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-ARMY-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD ARMY BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-NEED-PAINT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE NEED PAINT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--WHO-MANAGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, WHO MANAGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MAJOR-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MAJOR WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-RESUME--HOW-MANY-PAGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR RESUME, HOW MANY PAGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-RESUME--HOW-MANY-PAGE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR RESUME, HOW-MANY PAGE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SUPERVISOR--WHO---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SUPERVISOR, WHO-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SUPERVISOR--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SUPERVISOR, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson21)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bankrupt-bankruptcy-BROKE-financially_LIFEPRINT-ASL.mp4)


### Back {#back}

bankrupt _ bankruptcy _ BROKE-financially


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROKE---financially_2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BROKE-[financially_2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

KEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-letter-mail_LIFEPRINT-ASL.mp4)


### Back {#back}

letter mail


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-manage-control_LIFEPRINT-ASL.mp4)


### Back {#back}

manage control


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD---age--_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD-[age]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer--favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer, favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](aslu-PRONOUN---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PRONOUN - YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-send_LIFEPRINT-ASL.mp4)


### Back {#back}

send


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-10-dollars-10-dollars_LIFEPRINT-ASL.mp4)


### Back {#back}

10 dollars _ 10 dollars


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-25-cents-25-cents_LIFEPRINT-ASL.mp4)


### Back {#back}

25 cents _ 25-cents


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALWAYS_LIFEPRINT-ASL.mp4)


### Back {#back}

ALWAYS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEDROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

BEDROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BROKE---financially---no-money-bankrupt-busted---financially---destitute_LIFEPRINT-ASL.mp4)


### Back {#back}

BROKE-[financially] no money _ bankrupt _ busted-[financially] _ destitute


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUSINESS---initialized-work-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BUSINESS-[initialized-work-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUSINESS_LIFEPRINT-ASL.mp4)


### Back {#back}

BUSINESS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUSY---business--_LIFEPRINT-ASL.mp4)


### Back {#back}

BUSY [business]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUSY---lexicalized-fingerspelling-#BUSY-fs-BUSY-B-U-S-Y---_LIFEPRINT-ASL.mp4)


### Back {#back}

BUSY [lexicalized fingerspelling _ #BUSY _ fs-BUSY _ B-U-S-Y ]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUY_LIFEPRINT-ASL.mp4)


### Back {#back}

BUY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-DEAF-GO-COLLEGE-FREE_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN DEAF GO COLLEGE FREE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CENTS_LIFEPRINT-ASL.mp4)


### Back {#back}

CENTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL--C---thick-----Classifier-C--_LIFEPRINT-ASL.mp4)


### Back {#back}

CL -C-[thick]-[Classifier-C]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE-STUDENT-ALWAYS-BROKE---financially----WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE STUDENT ALWAYS BROKE-[financially], WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-continuously-BROKE--1h-version---broke-financially-_LIFEPRINT-ASL.mp4)


### Back {#back}

continuously-BROKE (1h version) (broke-financially)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-continuously-BROKE--2h-version---broke-financially-_LIFEPRINT-ASL.mp4)


### Back {#back}

continuously-BROKE (2h version) (broke-financially)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COST---tax--fine--fee--charge--price--_LIFEPRINT-ASL.mp4)


### Back {#back}

COST-[tax, fine, fee, charge, price]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-daily--everyday_LIFEPRINT-ASL.mp4)


### Back {#back}

daily, everyday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-display---SHOW---represent-example-demonstrate_LIFEPRINT-ASL.mp4)


### Back {#back}

display [SHOW] _ represent _ example _ demonstrate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dollar-DOLLAR---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

dollar _ DOLLAR-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](aslu-DOLLAR---dh-'flat-O'-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DOLLAR-[dh-'flat-O'-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-early-version_LIFEPRINT-ASL.mp4)


### Back {#back}

early version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARLY---backward-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EARLY-[backward-movement-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARLY---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EARLY-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-early_LIFEPRINT-ASL.mp4)


### Back {#back}

early


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARN---S-hand-version---deserve_LIFEPRINT-ASL.mp4)


### Back {#back}

EARN-[S-hand-version]-deserve


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-earn_LIFEPRINT-ASL.mp4)


### Back {#back}

earn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERYDAY-YOU-BUY-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERYDAY YOU BUY WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-free_LIFEPRINT-ASL.mp4)


### Back {#back}

free


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-BANK_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-BANK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOOD---well--_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD-[well]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOVERNMENT---index-X-index-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

GOVERNMENT-[index-X-index-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOVERNMENT_LIFEPRINT-ASL.mp4)


### Back {#back}

GOVERNMENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRANDMA_LIFEPRINT-ASL.mp4)


### Back {#back}

GRANDMA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE-PAY-him_her_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE PAY-him_her


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-income--earn-salary-_LIFEPRINT-ASL.mp4)


### Back {#back}

income (earn salary)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KNOW+-SILVER-DOLLAR-CL--C---index-and-thumb----YOU-HAVE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

KNOW+ SILVER DOLLAR CL -C-[index and thumb], YOU HAVE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LETTER_LIFEPRINT-ASL.mp4)


### Back {#back}

LETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-login---signature_contract_sign-up_register--_LIFEPRINT-ASL.mp4)


### Back {#back}

login-[signature_contract_sign-up_register]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MANAGE-YOUR-OWN-BUSINESS-CAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

MANAGE YOUR-OWN BUSINESS-CAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONEY---cash-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY-[cash-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONEY_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-next-YEAR-SCHOOL-REGISTER-FINISH-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

next-YEAR SCHOOL REGISTER FINISH YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-next-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

next-YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NICE_CLEAN_LIFEPRINT-ASL.mp4)


### Back {#back}

NICE_CLEAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFFICE---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

OFFICE-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFFICE---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

OFFICE-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR_LIFEPRINT-ASL.mp4)


### Back {#back}

OR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OWE---bill--due--debt--_LIFEPRINT-ASL.mp4)


### Back {#back}

OWE-[bill, due, debt]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARENTS_LIFEPRINT-ASL.mp4)


### Back {#back}

PARENTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY-me_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POP-SODA_LIFEPRINT-ASL.mp4)


### Back {#back}

POP _ SODA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-purchase---BUY--_LIFEPRINT-ASL.mp4)


### Back {#back}

purchase-[BUY]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REGISTER-registration-to-register_LIFEPRINT-ASL.mp4)


### Back {#back}

REGISTER _ registration _ to register


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RETIRE_LIFEPRINT-ASL.mp4)


### Back {#back}

RETIRE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-should_LIFEPRINT-ASL.mp4)


### Back {#back}

should


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-show-me--SHOW-me_LIFEPRINT-ASL.mp4)


### Back {#back}

show me, SHOW-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOW-me-YOUR-FAVORITE-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOW-me YOUR FAVORITE SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SILVER_LIFEPRINT-ASL.mp4)


### Back {#back}

SILVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME-DEAF-SUBSCRIBE---SSI---WHY-Some-Deaf-receive-government-assistance--why_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME DEAF SUBSCRIBE-[SSI] WHY _ Some Deaf receive-government-assistance, why


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUBSCRIBE---subscription_receive-regularly_welfare-payment_grant_government-dole_ssi--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUBSCRIBE-[subscription_receive-regularly_welfare-payment_grant_government-dole_ssi]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-GO-BANK-YOU-PREFER-TRUE-PERSON--card-insert-into-slot_atm-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU GO BANK YOU PREFER TRUE PERSON, card-insert-into-slot_atm WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-GO-BANK--YOU-PREFER-COMPUTER-O-R-TRUE-PERSON-TELLER-fs_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU GO BANK, YOU PREFER COMPUTER O-R TRUE PERSON TELLER-fs


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-teller---fs-TELLER-T-E-L-L-E-R--_LIFEPRINT-ASL.mp4)


### Back {#back}

teller [fs-TELLER _ T-E-L-L-E-R]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW--YOU-#BUSY_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW, YOU #BUSY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-truly--true_LIFEPRINT-ASL.mp4)


### Back {#back}

truly, true


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT-COST-CENT-25_LIFEPRINT-ASL.mp4)


### Back {#back}

WHAT COST CENT-25


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EARN-MONEY-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EARN MONEY HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EARN-MORE-THAN-10-DOLLAR-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EARN MORE-THAN 10 DOLLAR HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FINISH--version-01-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FINISH (version 01)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-your-SELF-OFFICE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE your-SELF OFFICE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-GO-CLASS-EARLY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE GO CLASS EARLY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-GOVERNMENT-PAY-GOOD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK GOVERNMENT PAY GOOD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-PARENT-SHOULD-PAY-CHILDREN-FOR-CLEAN+-BEDROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK PARENT SHOULD PAY CHILDREN FOR CLEAN+ BEDROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-RETIRE--how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT RETIRE, how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDMA-SEND-MONEY-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDMA SEND MONEY QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Your-grandma-send-you-money_LIFEPRINT-ASL.mp4)


### Back {#back}

Your grandma send you money


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MONEY--YOU-KEEP-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MONEY, YOU KEEP WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson22)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---previous-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[previous-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ability-can_LIFEPRINT-ASL.mp4)


### Back {#back}

ability can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT-learner---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT _ learner [casual version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ADD-to-additional-extra-bonus-additionally_LIFEPRINT-ASL.mp4)


### Back {#back}

ADD-to _ additional _ extra _ bonus _ additionally


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALGEBRA--CAN-YOU-EXPLAIN-ME_LIFEPRINT-ASL.mp4)


### Back {#back}

ALGEBRA, CAN YOU EXPLAIN ME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALGEBRA_LIFEPRINT-ASL.mp4)


### Back {#back}

ALGEBRA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-all-NIGHT---all-night--overnight--_LIFEPRINT-ASL.mp4)


### Back {#back}

all-NIGHT [all night, overnight]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALTOGETHER--HOW-MANY-SIGN-YOU-KNOW_LIFEPRINT-ASL.mp4)


### Back {#back}

ALTOGETHER, HOW-MANY SIGN YOU KNOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APARTMENT---A-P-T--_LIFEPRINT-ASL.mp4)


### Back {#back}

APARTMENT-[A-P-T]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATHROOM-toilet-restroom_LIFEPRINT-ASL.mp4)


### Back {#back}

BATHROOM _ toilet _ restroom


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---TEST--YOU-STUDY-ALL-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] TEST, YOU STUDY ALL-NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK-STORE_LIFEPRINT-ASL.mp4)


### Back {#back}

BOOK STORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAFETERIA-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

CAFETERIA WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAFETERIA_LIFEPRINT-ASL.mp4)


### Back {#back}

CAFETERIA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CALCULUS_LIFEPRINT-ASL.mp4)


### Back {#back}

CALCULUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-city_LIFEPRINT-ASL.mp4)


### Back {#back}

city


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIVIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

DIVIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DORM_LIFEPRINT-ASL.mp4)


### Back {#back}

DORM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EIGHTEEN-TAKE-AWAY-FIVE-EQUAL-WHAT---huh--_LIFEPRINT-ASL.mp4)


### Back {#back}

EIGHTEEN TAKE-AWAY FIVE EQUAL WHAT-[huh]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELEVEN-PLUS-FOURTEEN-EQUAL-WHAT---huh--_LIFEPRINT-ASL.mp4)


### Back {#back}

ELEVEN PLUS FOURTEEN EQUAL WHAT-[huh]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENGLISH--YOU-LIKE-STUDY_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGLISH, YOU LIKE STUDY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENGLISH_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGLISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXPLAIN---define_describe_instructions--_LIFEPRINT-ASL.mp4)


### Back {#back}

EXPLAIN-[define_describe_instructions]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-F-GRADE---academic--_LIFEPRINT-ASL.mp4)


### Back {#back}

F-GRADE-[academic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAIL_LIFEPRINT-ASL.mp4)


### Back {#back}

FAIL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Figure-out_LIFEPRINT-ASL.mp4)


### Back {#back}

Figure-out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](aslu-FINISH-all-done-already-completed-and-then-it's-over-after-which_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH _ all done _ already completed _ and then _ it's over _ after which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLUNK-CLASS-PAST---before---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FLUNK CLASS PAST-[before] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRESHMAN-year_LIFEPRINT-ASL.mp4)


### Back {#back}

FRESHMAN-year


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRL_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JUNIOR_LIFEPRINT-ASL.mp4)


### Back {#back}

JUNIOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIVE---life_lives_alive_survive_living----ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

LIVE-[life_lives_alive_survive_living] (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIVE---version--_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

LIVE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-math_LIFEPRINT-ASL.mp4)


### Back {#back}

math


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-me---I_ME--_LIFEPRINT-ASL.mp4)


### Back {#back}

me-[I_ME]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-multiply_LIFEPRINT-ASL.mp4)


### Back {#back}

multiply


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NUMBER_LIFEPRINT-ASL.mp4)


### Back {#back}

NUMBER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PASS_LIFEPRINT-ASL.mp4)


### Back {#back}

PASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PHONE_LIFEPRINT-ASL.mp4)


### Back {#back}

PHONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLUS_LIFEPRINT-ASL.mp4)


### Back {#back}

PLUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POST_LIFEPRINT-ASL.mp4)


### Back {#back}

POST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remove-take-away-throw-from_LIFEPRINT-ASL.mp4)


### Back {#back}

remove take away throw from


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT-YOU-LIKE-EAT--NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT YOU LIKE EAT, NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SENIOR-GIRL-STUCK-UP--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

SENIOR GIRL STUCK-UP, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SENIOR-CITIZEN---SC-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SENIOR-CITIZEN-[SC-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SENIOR-year_LIFEPRINT-ASL.mp4)


### Back {#back}

SENIOR-year


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-snobby-STUCK-UP_-SNOBBY_LIFEPRINT-ASL.mp4)


### Back {#back}

snobby _ STUCK-UP\_ SNOBBY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOPHOMORE-year_LIFEPRINT-ASL.mp4)


### Back {#back}

SOPHOMORE-year


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT-FAIL-CLASS--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT FAIL CLASS, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT---full-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT-[full-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDY---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDY-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-T-R-I-G--YOU-FINISH-PASS_LIFEPRINT-ASL.mp4)


### Back {#back}

T-R-I-G, YOU FINISH PASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-AWAY--subtract-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-AWAY (subtract version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST---single-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST-[single-movement-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CITY--BOOKSTORE--HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CITY, BOOKSTORE, HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-here---1-handed-version---down-it---something-below-the-signer---down-foot---body-part--_LIFEPRINT-ASL.mp4)


### Back {#back}

this _ here-[1-handed-version] _ down _ it-[something-below-the-signer] _ down _ foot-[body-part]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-times-MULTIPLY---unmarked-WORSE--_LIFEPRINT-ASL.mp4)


### Back {#back}

times _ MULTIPLY [unmarked WORSE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOTAL-altogether-sum_LIFEPRINT-ASL.mp4)


### Back {#back}

TOTAL-altogether-sum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-trigonometry---fs-TRIG-T-R-I-G--_LIFEPRINT-ASL.mp4)


### Back {#back}

trigonometry [fs-TRIG _ T-R-I-G]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TWELVE-DIVIDE-SIX-EQUAL-WHAT---huh--_LIFEPRINT-ASL.mp4)


### Back {#back}

TWELVE DIVIDE SIX EQUAL WHAT-[huh]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORSE---marked-version---worst_LIFEPRINT-ASL.mp4)


### Back {#back}

WORSE [marked version] _ worst


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FRESHMAN-or-SOPHOMORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FRESHMAN or SOPHOMORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-MATH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE MATH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-A-P-T_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE A-P-T


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-You-live-dorm_LIFEPRINT-ASL.mp4)


### Back {#back}

You live dorm


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PHONE-NUMBER--YOU-POST-BATHROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PHONE NUMBER, YOU POST BATHROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-WORST-CLASS-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR WORST CLASS WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson23)


## ASL {#asl}

[ASL](/ox-hugo/aslu-house_LIFEPRINT-ASL.mp4)


### Back {#back}

house


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOVE---more-than--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOVE [more-than]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cost_LIFEPRINT-ASL.mp4)


### Back {#back}

cost


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---signing-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[signing-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](aslu-BEFORE---version----prior-to--beforehand--preceding--coming-before-something-in-time--in-advance-of_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[version], prior-to, beforehand, preceding, coming before something in time, in advance of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EQUAL-tie-fair-justice-_equitable-equity_LIFEPRINT-ASL.mp4)


### Back {#back}

EQUAL _ tie _ fair _ justice \_equitable _ equity


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST_QUIZ--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST_QUIZ (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ACCEPT_LIFEPRINT-ASL.mp4)


### Back {#back}

ACCEPT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL---lexicalized--_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-[lexicalized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-approve---ACCEPT--_LIFEPRINT-ASL.mp4)


### Back {#back}

approve-[ACCEPT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BAD_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

BAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---MEET-NEW-PERSON-YOU-LIKE-BRUSH-TEETH_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] MEET NEW PERSON YOU LIKE BRUSH-TEETH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---TEST-YOU-WORRY_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] TEST YOU WORRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BELOW_LESS-THAN_LIFEPRINT-ASL.mp4)


### Back {#back}

BELOW_LESS-THAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

BOOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRUSH-TEETH_LIFEPRINT-ASL.mp4)


### Back {#back}

BRUSH-TEETH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHAT-WITH_LIFEPRINT-ASL.mp4)


### Back {#back}

CHAT-WITH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUSIN-THEMSELF-STRANGE-YOU-HAVE--Do-you-have-a-cousin-who-is-strange-_LIFEPRINT-ASL.mp4)


### Back {#back}

COUSIN THEMSELF STRANGE YOU HAVE (Do you have a cousin who is strange)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUSIN_LIFEPRINT-ASL.mp4)


### Back {#back}

COUSIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DECLINE---opposite-of-improve--_LIFEPRINT-ASL.mp4)


### Back {#back}

DECLINE [opposite-of-improve]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-decrease_LIFEPRINT-ASL.mp4)


### Back {#back}

decrease


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor-earn-more-than-nurse-why_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor earn more than nurse why


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](aslu-DURING-while-meanwhile-in-sync-with-_at-the-same-time-as-parallel-alongside-congruous_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING _ while _ meanwhile _ in sync with \_at the same time as _ parallel _ alongside _ congruous


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-SUMMER-VACATION-YOU-STUDY_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING SUMMER VACATION YOU STUDY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-during_LIFEPRINT-ASL.mp4)


### Back {#back}

during


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARN---cream-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EARN-[cream-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT_FOOD_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT_FOOD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELECTRIC-SHUT-off---power-outage----version-01-_LIFEPRINT-ASL.mp4)


### Back {#back}

ELECTRIC SHUT-off [power outage] (version 01)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELECTRIC-SHUT-off---power-outage----version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

ELECTRIC SHUT-off [power outage] (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-else_other_LIFEPRINT-ASL.mp4)


### Back {#back}

else_other


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-employ---BOSS--_LIFEPRINT-ASL.mp4)


### Back {#back}

employ-[BOSS]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-enhance---IMPROVE--_LIFEPRINT-ASL.mp4)


### Back {#back}

enhance-[IMPROVE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-enough-sufficient_LIFEPRINT-ASL.mp4)


### Back {#back}

enough _ sufficient


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---non-initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [non-initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOD-ENOUGH-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOD ENOUGH YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOD--STRANGE--NEW--YOU-LIKE-EAT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOD, STRANGE, NEW, YOU LIKE EAT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAS-fuel_LIFEPRINT-ASL.mp4)


### Back {#back}

GAS-fuel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOOD-ENOUGH_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD ENOUGH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-himself--herself--itself_LIFEPRINT-ASL.mp4)


### Back {#back}

himself, herself, itself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-much_LIFEPRINT-ASL.mp4)


### Back {#back}

how much


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-MUCH---2-hands-volume-version---What-is-the-extent-of_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-MUCH-[2-hands-volume-version] _ What is the extent of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how_LIFEPRINT-ASL.mp4)


### Back {#back}

how


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IF-NOT-GO-SIGN-CLASS--NOT-CHAT-DEAF--YOUR-SIGN-DECLINE_LIFEPRINT-ASL.mp4)


### Back {#back}

IF NOT GO SIGN CLASS, NOT CHAT DEAF, YOUR SIGN DECLINE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INCREASE-raise-get-a-raise-gain-weight-add-an-amount-onto_LIFEPRINT-ASL.mp4)


### Back {#back}

INCREASE _ raise _ get a raise _ gain weight _ add an amount onto


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-incremental-IMPROVE-improving-bit-by-bit_LIFEPRINT-ASL.mp4)


### Back {#back}

incremental-IMPROVE _ improving bit by bit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-less-version_LIFEPRINT-ASL.mp4)


### Back {#back}

less version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-less_LIFEPRINT-ASL.mp4)


### Back {#back}

less


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIMIT---restricted--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIMIT-[restricted]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-limited---LIMIT--_LIFEPRINT-ASL.mp4)


### Back {#back}

limited [LIMIT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MECHANIC-single-movement---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MECHANIC single movement-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEET_LIFEPRINT-ASL_1656574534003.mp4)


### Back {#back}

MEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mischievous-MISCHIEVOUS---2h--_LIFEPRINT-ASL.mp4)


### Back {#back}

mischievous _ MISCHIEVOUS-[2h]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MISCHIEVOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

MISCHIEVOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-new_LIFEPRINT-ASL.mp4)


### Back {#back}

new


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nurse_LIFEPRINT-ASL.mp4)


### Back {#back}

nurse


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-orange-juice_LIFEPRINT-ASL.mp4)


### Back {#back}

orange juice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](aslu-PAH!-succeed-finally_LIFEPRINT-ASL.mp4)


### Back {#back}

PAH! _ succeed finally


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POWER-OUTAGE---large-scale--_LIFEPRINT-ASL.mp4)


### Back {#back}

POWER-OUTAGE-[large-scale]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENTLY-INCREASE-YOU--gained-weight-_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENTLY INCREASE YOU (gained weight)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT_-recently_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT\_ recently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REDUCE_decrease_LIFEPRINT-ASL.mp4)


### Back {#back}

REDUCE_decrease


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REFRIGERATOR---R-E-F--_LIFEPRINT-ASL.mp4)


### Back {#back}

REFRIGERATOR-[R-E-F]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remaining---left-over-abandoned-leave-behind--_LIFEPRINT-ASL.mp4)


### Back {#back}

remaining [left over _ abandoned _ leave-behind]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCKET-ALL-SUCCEED_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCKET ALL SUCCEED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCKET---initialized-palm-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCKET-[initialized-palm-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-shoes_LIFEPRINT-ASL.mp4)


### Back {#back}

shoes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-some-boss-accept-bad-work-why_LIFEPRINT-ASL.mp4)


### Back {#back}

some boss accept bad work why


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-success-succeed-accomplish-managed-to_LIFEPRINT-ASL.mp4)


### Back {#back}

success _ succeed _ accomplish _ managed to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER_LIFEPRINT-ASL.mp4)


### Back {#back}

TEACHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST-----quiz--exam----version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST - [quiz, exam] (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-than_LIFEPRINT-ASL.mp4)


### Back {#back}

than


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](aslu-TOMORROW-you-HELP-me-DON'T-MIND_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW you-HELP-me DON'T-MIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-too-much_LIFEPRINT-ASL.mp4)


### Back {#back}

too much


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TURN-OFF-power-it-down-shut-off-close-that-down_LIFEPRINT-ASL.mp4)


### Back {#back}

TURN-OFF _ power it down _ shut off _ close that down


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-unusual---STRANGE---odd_LIFEPRINT-ASL.mp4)


### Back {#back}

unusual-[STRANGE]-odd


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VACATION---holiday_LIFEPRINT-ASL.mp4)


### Back {#back}

VACATION - holiday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORK-labor-employment_LIFEPRINT-ASL.mp4)


### Back {#back}

WORK _ labor _ employment


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORRY_LIFEPRINT-ASL.mp4)


### Back {#back}

WORRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-you-mischievous-sometimes_LIFEPRINT-ASL.mp4)


### Back {#back}

you mischievous sometimes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-You-think-doctor-earn-too-much-money_LIFEPRINT-ASL.mp4)


### Back {#back}

You think doctor earn too much money


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK-COST-HOW-MUCH---1h----_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK COST HOW-MUCH-[1h]]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR-GAS--HOW-MANY-REMAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR GAS, HOW-MANY REMAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-COMPUTER--SHUT-DOWN-every-NIGHT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR COMPUTER, SHUT-DOWN every-NIGHT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--WHO-ELSE-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, WHO ELSE SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](aslu-YOUR-REFRIGERATOR--ORANGE-'J'-LEAVE---remaining---HOW-MUCH---volume--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR REFRIGERATOR, ORANGE-'J' LEAVE-[remaining] HOW-MUCH-[volume]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SIGNING--IMPROVE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SIGNING, IMPROVE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson24)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-DON'T-MIND---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-DON'T-MIND---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-DON'T-MIND_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALRIGHT--alright_rights---single-movement-_LIFEPRINT-ASL.mp4)


### Back {#back}

ALRIGHT (alright_rights) (single movement)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AREA---A-handshape-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

AREA-[A-handshape-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AREA---place--_LIFEPRINT-ASL.mp4)


### Back {#back}

AREA-[place]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ATTEND_LIFEPRINT-ASL.mp4)


### Back {#back}

ATTEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASKETBALL--YOU-LIKE-PLAY_LIFEPRINT-ASL.mp4)


### Back {#back}

BASKETBALL, YOU LIKE PLAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-BOX-BRING-CAR-DON'T-MIND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOX BRING CAR DON'T-MIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRING_LIFEPRINT-ASL.mp4)


### Back {#back}

BRING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-chess-you-like-play_LIFEPRINT-ASL.mp4)


### Back {#back}

chess you like play


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOSE-BY---near--_LIFEPRINT-ASL.mp4)


### Back {#back}

CLOSE BY-[near]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-COME-GO_LIFEPRINT-ASL.mp4)


### Back {#back}

COME _ GO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-come-to-here_LIFEPRINT-ASL.mp4)


### Back {#back}

come to here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COME-HERE---1-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COME-HERE-[1-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-you-want-to-go-to-the-movies_LIFEPRINT-ASL.mp4)


### Back {#back}

Do you want to go to the movies


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAST_LIFEPRINT-ASL.mp4)


### Back {#back}

EAST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-morning-you-hurry-shower-clothes-eat-go-school_LIFEPRINT-ASL.mp4)


### Back {#back}

every morning you hurry shower clothes eat go school


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXACT-precise_LIFEPRINT-ASL.mp4)


### Back {#back}

EXACT _ precise


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-far-away---CL---1--_LIFEPRINT-ASL.mp4)


### Back {#back}

far-away-[CL - 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-far_LIFEPRINT-ASL.mp4)


### Back {#back}

far


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAST----speed--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAST -[speed]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-field_LIFEPRINT-ASL.mp4)


### Back {#back}

field


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOD-STORE-YOU-LIVE-THEREABOUTS_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOD STORE YOU LIVE THEREABOUTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRISBEE--YOU-LIKE-PLAY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FRISBEE, YOU LIKE PLAY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-head_front_LIFEPRINT-ASL.mp4)


### Back {#back}

head_front


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIDE-SEEK-YOU-LIKE-PLAY_LIFEPRINT-ASL.mp4)


### Back {#back}

HIDE SEEK YOU LIKE PLAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-immediate---QUICK_quickly_sudden_suddenly_immediately--_LIFEPRINT-ASL.mp4)


### Back {#back}

immediate-[QUICK_quickly_sudden_suddenly_immediately]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-Intense!-Extremely-Crazy!-very-Ooh!-Radical!-Wow!---general-ASL-intensifier--_LIFEPRINT-ASL.mp4)


### Back {#back}

Intense! _ Extremely _ Crazy! _ very _ Ooh! _ Radical! _ Wow! _ [general ASL intensifier]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEFT---direction-----left-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LEFT-[direction]-[left-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEND-me-5-DOLLAR--do-you-MIND_LIFEPRINT-ASL.mp4)


### Back {#back}

LEND-me 5-DOLLAR, do-you-MIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE-away_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE-away


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE-here_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE-here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE-later---postpone--_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE-later [postpone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-neighborhood_near-thereabouts_LIFEPRINT-ASL.mp4)


### Back {#back}

neighborhood_near thereabouts


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NORTH_LIFEPRINT-ASL.mp4)


### Back {#back}

NORTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT-FAR---close-by_near-here--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT-FAR-[close by_near here]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-P-E-N-DON'T-MIND-you-LEND-me_LIFEPRINT-ASL.mp4)


### Back {#back}

P-E-N DON'T-MIND you-LEND-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARKING-LOT_LIFEPRINT-ASL.mp4)


### Back {#back}

PARKING-LOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERFECT---exactly-right_precisely--_LIFEPRINT-ASL.mp4)


### Back {#back}

PERFECT [exactly-right_precisely]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](aslu-PERFECT-one-handed---just-right_perfectamundo!--_LIFEPRINT-ASL.mp4)


### Back {#back}

PERFECT-one-handed-[just right_perfectamundo!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAY----playing--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAY -[playing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REARRANGE---MOVE-THINGS-AROUND--_LIFEPRINT-ASL.mp4)


### Back {#back}

REARRANGE [MOVE THINGS AROUND]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIGHT---correct_accurate--_LIFEPRINT-ASL.mp4)


### Back {#back}

RIGHT-[correct_accurate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIGHT---direction--_LIFEPRINT-ASL.mp4)


### Back {#back}

RIGHT-[direction]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rush---HURRY-up--_LIFEPRINT-ASL.mp4)


### Back {#back}

rush-[HURRY-up]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUTH---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUTH-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUTH_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-someone_something-LEAVE---go_take-off--_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-someone_something LEAVE-[go_take-off]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up-to-now-you-move-how-many-times_LIFEPRINT-ASL.mp4)


### Back {#back}

up to now you move how many times


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEST_LIFEPRINT-ASL.mp4)


### Back {#back}

WEST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOAH-wow---y-hand-version-----slang--_LIFEPRINT-ASL.mp4)


### Back {#back}

WOAH-wow-[y-hand-version]-[slang]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOW--YOUR-HAIR--DO-what_LIFEPRINT-ASL.mp4)


### Back {#back}

WOW, YOUR HAIR, DO-what


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOW_LIFEPRINT-ASL.mp4)


### Back {#back}

WOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-you-like-go-play-field_LIFEPRINT-ASL.mp4)


### Back {#back}

you like go play field


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-you-live-near-school-you_LIFEPRINT-ASL.mp4)


### Back {#back}

you live near school you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-LIVE-NORTH-OR---bodyshift---SOUTH--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER LIVE NORTH OR-[bodyshift] SOUTH, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-ME-SIGN-FAST_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT ME SIGN FAST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-exact-address-what_LIFEPRINT-ASL.mp4)


### Back {#back}

your exact address what


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-HOW-FAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE HOW FAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--FRONT-DOOR--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, FRONT DOOR, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-LAST-NAME--HOW-SPELL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR LAST NAME, HOW SPELL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson25)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRIGHT---clearly_clear_obvious--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRIGHT-[clearly_clear_obvious]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dark-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

dark version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DARK-version-2-claw-hands_LIFEPRINT-ASL.mp4)


### Back {#back}

DARK version 2 claw hands


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIG-shovel---dig-with-a-shovel--_LIFEPRINT-ASL.mp4)


### Back {#back}

DIG-shovel [dig with a shovel]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Dimmed-lights--2h--ECL---5_O--modified----dim-lights---DARK_LIFEPRINT-ASL.mp4)


### Back {#back}

Dimmed lights _ (2h)-ECL - 5_O-(modified)-[dim-lights]-DARK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](aslu-don't-CARE_LIFEPRINT-ASL.mp4)


### Back {#back}

don't-CARE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Every-SATURDAY-what-DO-YOU_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

Every-SATURDAY what-DO YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOWER-GROW-GROW---garden---DOG-DIG--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOWER GROW-GROW-[garden] DOG DIG, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOWER-YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOWER YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOWER_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOR-YOU-SLEEP-MUST-DARK_LIFEPRINT-ASL.mp4)


### Back {#back}

FOR YOU SLEEP MUST DARK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOREST---park_grove-of-trees--_LIFEPRINT-ASL.mp4)


### Back {#back}

FOREST-[park_grove of trees]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-forget-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

forget version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FORGET---repeatedly---forgetful_LIFEPRINT-ASL.mp4)


### Back {#back}

FORGET-[repeatedly] _ forgetful


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FORGET---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

FORGET-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-FUN_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-FUN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUN_LIFEPRINT-ASL.mp4)


### Back {#back}

FUN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRASS---hay_straw--_LIFEPRINT-ASL.mp4)


### Back {#back}

GRASS [hay_straw]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEAVY_LIFEPRINT-ASL.mp4)


### Back {#back}

HEAVY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-height---HIGH--_LIFEPRINT-ASL.mp4)


### Back {#back}

height-[HIGH]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-OFTEN-YOU-LAUGH_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW OFTEN YOU LAUGH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](aslu-HOW-YOU-SINCE---up-to-now_have-been----How-have-you-been!-_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW YOU SINCE-[up-to-now_have-been] (How have you been!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-laugh-ha-ha_LIFEPRINT-ASL.mp4)


### Back {#back}

laugh ha ha


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-laugh-initialized-version_LIFEPRINT-ASL.mp4)


### Back {#back}

laugh initialized version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAUGH--belly-laugh---idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAUGH, belly laugh [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAUGH---one-handed-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAUGH-[one-handed-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIGHT-weight_LIFEPRINT-ASL.mp4)


### Back {#back}

LIGHT-weight


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-low_less_LIFEPRINT-ASL.mp4)


### Back {#back}

low_less


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOUNTAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

MOUNTAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE-NAME--FORGET-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE NAME, FORGET EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLANT--GROW-GROW-_LIFEPRINT-ASL.mp4)


### Back {#back}

PLANT-(GROW-GROW)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLANT-seeds--version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

PLANT-seeds (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remember_LIFEPRINT-ASL.mp4)


### Back {#back}

remember


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sow-seeds_plant_LIFEPRINT-ASL.mp4)


### Back {#back}

sow seeds_plant


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-status_quote_title_topic_subject_LIFEPRINT-ASL.mp4)


### Back {#back}

status_quote_title_topic_subject


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](aslu-TOPIC-YOU-DON'T-CARE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC YOU DON'T-CARE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC-YOU-INTERESTED-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC YOU INTERESTED WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TREE-fall-down_LIFEPRINT-ASL.mp4)


### Back {#back}

TREE-fall-down


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TREE-in-the-wind_LIFEPRINT-ASL.mp4)


### Back {#back}

TREE-in-the-wind


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tree_LIFEPRINT-ASL.mp4)


### Back {#back}

tree


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNTIL-NOW---SINCE-----have-been-----so-far-----up-to-now-----up-to-this-point--_LIFEPRINT-ASL.mp4)


### Back {#back}

UNTIL-NOW-[SINCE]-[have-been]-[so-far]-[up-to-now]-[up-to-this-point]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UP-TO-NOW-ASL-CLASS-YOU-TAKE-up-HOW-MANY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

UP-TO-NOW ASL CLASS YOU TAKE-up HOW-MANY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-AFRAID-HIGH--heights-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU AFRAID HIGH-(heights)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-MOUNTAIN-HIKE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE MOUNTAIN HIKE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-STUDY-OUTSIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE STUDY OUTSIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-TAKE-CARE-OF-PLANT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE TAKE-CARE-OF PLANT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-CLOTHES-BRIGHT--DARK--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER CLOTHES BRIGHT, DARK, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-SCHOOL-FUN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK SCHOOL FUN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FIRST-TEACHER--YOU-REMEMBER-HIS_HER-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FIRST TEACHER, YOU REMEMBER HIS_HER NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-PAY-LOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE PAY LOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--FRONT-FIELD---yard---TREE-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, FRONT FIELD-[yard] TREE HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson26)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BANANA-PIE-YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

BANANA PIE YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEER---single-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEER-[single-movement-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEER_LIFEPRINT-ASL.mp4)


### Back {#back}

BEER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAD-WITH-BUTTER-YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAD WITH BUTTER YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAD--NEW--YOU-LIKE-SMELL_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAD, NEW, YOU LIKE SMELL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAD_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUTTER_LIFEPRINT-ASL.mp4)


### Back {#back}

BUTTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUY-WINE--YOU-MUST-how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

BUY WINE, YOU MUST how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE---palm-version---cupcake-muffin_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE-[palm-version] _ cupcake _ muffin


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE---signed-English-initialized-C-hand-+-PIE-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE-[signed-English _ initialized _ C-hand + PIE movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE---version-1---back-of-hand--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE-[version 1 - back-of-hand]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COFFEE_LIFEPRINT-ASL.mp4)


### Back {#back}

COFFEE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUPBOARD---CABINET--_LIFEPRINT-ASL.mp4)


### Back {#back}

CUPBOARD [CABINET]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Delicious--open-8-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

Delicious (open 8 version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DELICIOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

DELICIOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EGG--YOU-LIKE-COOK-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

EGG, YOU LIKE COOK HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW-MANY-O-Z-EQUAL-1-LB_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-MANY O-Z EQUAL 1 LB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LBS---pounds-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LBS-[pounds-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAKE-CAKE--NEED-TEASPOON-SALT-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

MAKE CAKE, NEED TEASPOON SALT HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAKE-SUGAR-COOKIE--YOU-KNOW-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

MAKE SUGAR COOKIE, YOU KNOW HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEAT-content-flesh-steak_LIFEPRINT-ASL.mp4)


### Back {#back}

MEAT _ content _ flesh _ steak


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nutrition---FEED-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

nutrition-[FEED-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OUNCE---OZ--_LIFEPRINT-ASL.mp4)


### Back {#back}

OUNCE-[OZ]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIE-YOU-THINK-DELICIOUS--WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

PIE YOU THINK DELICIOUS, WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer_favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer_favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMELL-STINK-it-stinks_LIFEPRINT-ASL.mp4)


### Back {#back}

SMELL STINK _ it stinks


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMELL---negative-affect--_LIFEPRINT-ASL.mp4)


### Back {#back}

SMELL-[negative-affect]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMELL---positive-affect--_LIFEPRINT-ASL.mp4)


### Back {#back}

SMELL-[positive-affect]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TASTE-AWFUL_LIFEPRINT-ASL.mp4)


### Back {#back}

TASTE AWFUL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-taste_take-a-taste_LIFEPRINT-ASL.mp4)


### Back {#back}

taste_take a taste


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEA_LIFEPRINT-ASL.mp4)


### Back {#back}

TEA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THREE-DOZEN-EQUAL-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THREE DOZEN EQUAL HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VEGETABLE---twist-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

VEGETABLE [twist version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wash-dishes--dishwasher-_LIFEPRINT-ASL.mp4)


### Back {#back}

wash dishes (dishwasher)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wash-dishes--wash-dish-_LIFEPRINT-ASL.mp4)


### Back {#back}

wash dishes (wash dish)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wash-dishes_LIFEPRINT-ASL.mp4)


### Back {#back}

wash dishes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-weight-weigh-pound-ton_LIFEPRINT-ASL.mp4)


### Back {#back}

weight weigh pound ton


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wine_LIFEPRINT-ASL.mp4)


### Back {#back}

wine


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-MEAT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE MEAT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-COFFEE-TASTE-GOOD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK COFFEE TASTE GOOD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CABINET---cupboard----what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CABINET-[cupboard], what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-COFFEE--YOU-LIKE-SUGAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR COFFEE, YOU LIKE SUGAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DOG--YOU-FEED-EVERY-DAY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DOG, YOU FEED EVERY-DAY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--WHO-WASH-DISHES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, WHO WASH-DISHES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-FOOD-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE FOOD WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-VEGETABLE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE VEGETABLE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TEA--YOU-WANT-SUGAR-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TEA, YOU WANT SUGAR how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson27)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEANIE-hat_LIFEPRINT-ASL.mp4)


### Back {#back}

BEANIE-hat


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLANKET_LIFEPRINT-ASL.mp4)


### Back {#back}

BLANKET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUTTON-SEW-KNOW-HOW-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BUTTON SEW KNOW HOW YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUTTON-DOWN-SHIRT_LIFEPRINT-ASL.mp4)


### Back {#back}

BUTTON-DOWN-SHIRT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOTHES_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

CLOTHES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COPY_LIFEPRINT-ASL.mp4)


### Back {#back}

COPY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIAPER--YOU-CHANGE-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

DIAPER, YOU CHANGE BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIAPER_LIFEPRINT-ASL.mp4)


### Back {#back}

DIAPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOTS---DOTTED--on-upright-surface-_LIFEPRINT-ASL.mp4)


### Back {#back}

DOTS - DOTTED (on upright surface)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dotted---CL-C_large-dots-or-round-things-on-torso--_LIFEPRINT-ASL.mp4)


### Back {#back}

dotted [CL-C_large-dots-or-round-things-on-torso]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dotted---CL-F_dots_dotted-shirt_round-spots-on-torso--_LIFEPRINT-ASL.mp4)


### Back {#back}

dotted [CL-F_dots_dotted-shirt_round-spots-on-torso]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dress-you-like-use-you_LIFEPRINT-ASL.mp4)


### Back {#back}

dress you like use you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRESS_LIFEPRINT-ASL.mp4)


### Back {#back}

DRESS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-TEST-YOU-COPY-FRIEND-PAPER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING TEST YOU COPY FRIEND PAPER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAIR--EVEN--TIE--same-LEVEL_LIFEPRINT-ASL.mp4)


### Back {#back}

FAIR, EVEN, TIE, same-LEVEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR-DRYER-YOU-USE_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR-DRYER YOU USE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR-DRYER---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR-DRYER-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR-DRYER_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR-DRYER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](aslu-HAT-YOU-HAVE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

HAT YOU HAVE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAT---ball-cap--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAT-[ball-cap]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAT---wide-brim--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAT-[wide-brim]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAT_LIFEPRINT-ASL.mp4)


### Back {#back}

HAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-head-scarf---hijab--_LIFEPRINT-ASL.mp4)


### Back {#back}

head-scarf-[hijab]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-jewelry---NECKLACE--EARRINGS--BRACELET-ETC--_LIFEPRINT-ASL.mp4)


### Back {#back}

jewelry [NECKLACE, EARRINGS, BRACELET ETC]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-large-bow-on-shirt---tie-bow-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

large-bow-on-shirt-[tie-bow-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-match---light-a-MATCH--_LIFEPRINT-ASL.mp4)


### Back {#back}

match [light-a-MATCH]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MATCH---combine_paired-with_put-together--_LIFEPRINT-ASL.mp4)


### Back {#back}

MATCH-[combine_paired-with_put-together]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MIND-TOUCH-prolonged---obsess_dwell-on-idiomatic_LIFEPRINT-ASL.mp4)


### Back {#back}

MIND-TOUCH-prolonged-[obsess_dwell on idiomatic


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NECKLACE--GOLD--YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

NECKLACE, GOLD, YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-plaid---PLAID--_LIFEPRINT-ASL.mp4)


### Back {#back}

plaid [PLAID]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROOMMATE-PARTNER---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ROOMMATE _ PARTNER-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCARF---B-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCARF-[B-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCOTLAND----plaid--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCOTLAND -[plaid]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCOTLAND-FINISH-TOUCH-have-YOU---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCOTLAND FINISH TOUCH have-YOU-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-scotland-you-finish-touch-you_LIFEPRINT-ASL.mp4)


### Back {#back}

scotland you finish touch you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEW--YOU-KNOW-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

SEW, YOU KNOW HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEW-by-machine_LIFEPRINT-ASL.mp4)


### Back {#back}

SEW-by machine


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sewing-thread---SEW-by-hand-+-LINE--_LIFEPRINT-ASL.mp4)


### Back {#back}

sewing thread [SEW-by-hand + LINE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEW_LIFEPRINT-ASL.mp4)


### Back {#back}

SEW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHAVE-S-hand-version_LIFEPRINT-ASL.mp4)


### Back {#back}

SHAVE S hand version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHAVE---shave-armpits--_LIFEPRINT-ASL.mp4)


### Back {#back}

SHAVE [shave armpits]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHAVE---x-hand-version---shave-cheek_LIFEPRINT-ASL.mp4)


### Back {#back}

SHAVE [x-hand version] _ shave cheek


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHIRT-DOTS-YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

SHIRT DOTS YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHIRT--YOU-HAVE-FAVORITE_LIFEPRINT-ASL.mp4)


### Back {#back}

SHIRT, YOU HAVE FAVORITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-shoes-tie_LIFEPRINT-ASL.mp4)


### Back {#back}

shoes tie


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKIRT_LIFEPRINT-ASL.mp4)


### Back {#back}

SKIRT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOFT_LIFEPRINT-ASL.mp4)


### Back {#back}

SOFT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-striped-shirt---horizontal-stripes--_LIFEPRINT-ASL.mp4)


### Back {#back}

striped-shirt [horizontal-stripes]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-striped-shirt---vertical-stripes--_LIFEPRINT-ASL.mp4)


### Back {#back}

striped-shirt [vertical-stripes]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRIPES--vertical-on-object-_LIFEPRINT-ASL.mp4)


### Back {#back}

STRIPES-(vertical on object)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWIRLED-STRIPES--on-long-round-object-_LIFEPRINT-ASL.mp4)


### Back {#back}

SWIRLED-STRIPES-(on long round object)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIE-YOU-HAVE---if-so---HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

TIE YOU HAVE [if so] HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tie_neckware_LIFEPRINT-ASL.mp4)


### Back {#back}

tie_neckware


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

TOUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-towel--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

towel (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WET-WIPES-YOU-KEEP-CAR_LIFEPRINT-ASL.mp4)


### Back {#back}

WET-WIPES YOU KEEP CAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WET---unpleasantly-wet--_LIFEPRINT-ASL.mp4)


### Back {#back}

WET-[unpleasantly-wet]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-SCARF_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE SCARF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](aslu-YOU-PREFER-LIVE-SINGLE---alone-----bodyshift-'or'---ROOMMATE---match---WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER LIVE SINGLE-[alone] [bodyshift 'or'] ROOMMATE-[match] WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-SHAVE-EVERYDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD SHAVE EVERYDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-favorite-towel-what-color_LIFEPRINT-ASL.mp4)


### Back {#back}

your favorite towel what color


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-mom-sometimes-skirt-short_LIFEPRINT-ASL.mp4)


### Back {#back}

your mom sometimes skirt short


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](aslu-ZIG-ZAG---stripes-on-an-object-_LIFEPRINT-ASL.mp4)


### Back {#back}

ZIG-ZAG--(stripes on an object)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson28)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ability-can_LIFEPRINT-ASL.mp4)


### Back {#back}

ability can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AND_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

AND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---bent-middle-finger-version-circles-head--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [bent-middle-finger-version-circles-head]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---bent-middle-finger-version-S-hand--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [bent-middle-finger-version-S-hand]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---S-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [S-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---cueball-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD-[cueball-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEARD_LIFEPRINT-ASL.mp4)


### Back {#back}

BEARD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-KEEP-A-SECRET-YOU---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN KEEP A SECRET YOU-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-KEEP-SECRET-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN KEEP SECRET YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-can_LIFEPRINT-ASL.mp4)


### Back {#back}

can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-ACCIDENT-crash-HAPPEN-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR ACCIDENT-crash HAPPEN WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAUCASIAN-white-person-pale_LIFEPRINT-ASL.mp4)


### Back {#back}

CAUCASIAN _ white person _ pale


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLUELESS-stupid_LIFEPRINT-ASL.mp4)


### Back {#back}

CLUELESS _ stupid


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMMON-SENSE_LIFEPRINT-ASL.mp4)


### Back {#back}

COMMON-SENSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUSIN--YOU-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

COUSIN, YOU HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUSIN_LIFEPRINT-ASL.mp4)


### Back {#back}

COUSIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISAPPEAR---index-and-flat-hand--_LIFEPRINT-ASL.mp4)


### Back {#back}

DISAPPEAR-[index-and-flat-hand]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISAPPEAR---version-1-to-x--_LIFEPRINT-ASL.mp4)


### Back {#back}

DISAPPEAR-[version-1-to-x]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIVIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

DIVIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EQUAL-tie-fair-justice-_equitable-equity_LIFEPRINT-ASL.mp4)


### Back {#back}

EQUAL _ tie _ fair _ justice \_equitable _ equity


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-explore_SEARCH_seek_LIFEPRINT-ASL.mp4)


### Back {#back}

explore_SEARCH_seek


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fear_afraid_scare-scared_LIFEPRINT-ASL.mp4)


### Back {#back}

fear_afraid_scare scared


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIVE-TIMES---worse---SIX-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

FIVE TIMES-[worse] SIX EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

FIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLY---a-fly-buzzing-around---flying-around_LIFEPRINT-ASL.mp4)


### Back {#back}

FLY-[a fly buzzing around] _ flying around


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fly_flying-airplane_LIFEPRINT-ASL.mp4)


### Back {#back}

fly_flying airplane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRANDPA_LIFEPRINT-ASL.mp4)


### Back {#back}

GRANDPA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](aslu-HAPPEN-YOU-AFRAID--YOU-WHITE---faced-'pale'--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN YOU AFRAID, YOU WHITE-[faced-'pale']


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAPPEN_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hide-and-seek-you-like-play_LIFEPRINT-ASL.mp4)


### Back {#back}

hide and seek you like play


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

HIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IMPOSSIBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

IMPOSSIBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-intelligence_smart_LIFEPRINT-ASL.mp4)


### Back {#back}

intelligence_smart


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

KEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-AT---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-AT-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-AT_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-AT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAKE---generate--create--_LIFEPRINT-ASL.mp4)


### Back {#back}

MAKE-[generate, create]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MIRROR_LIFEPRINT-ASL.mp4)


### Back {#back}

MIRROR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST-SCIENTIST-SMART_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST SCIENTIST SMART


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE--YOU-WANT-WATCH_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE, YOU WANT WATCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MUSIC--sing--song--singer-_LIFEPRINT-ASL.mp4)


### Back {#back}

MUSIC-(sing, song, singer)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MUSTACHE--WHO-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

MUSTACHE, WHO HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MUSTACHE_LIFEPRINT-ASL.mp4)


### Back {#back}

MUSTACHE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-THOUSAND-DIVIDE-TEN-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE-THOUSAND DIVIDE TEN EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEA-BRAIN---G-hand-version---stupid-unintelligent-idiot---idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEA-BRAIN-[G-hand-version] stupid _ unintelligent _ idiot _ [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAN----prepare--organize--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAN -[prepare, organize]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAN---get-things-in-order--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAN-[get-things-in-order]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-plane-AIRPLANE_LIFEPRINT-ASL.mp4)


### Back {#back}

plane-AIRPLANE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAN_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAY----playing--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAY -[playing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-play-CARDS-deal-out_LIFEPRINT-ASL.mp4)


### Back {#back}

play-CARDS _ deal out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POSSIBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

POSSIBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECTANGLE-a-check-or-cheque-an-envelope-a-card-a-brick_LIFEPRINT-ASL.mp4)


### Back {#back}

RECTANGLE _ a check or cheque _ an envelope _ a card _ a brick


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY-NIGHT--YOU-HAVE-PLAN_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY NIGHT, YOU HAVE PLAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCIENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

SCIENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SECRET---keep-a-secret-----I-am-not-telling--_LIFEPRINT-ASL.mp4)


### Back {#back}

SECRET-[keep-a-secret]-[I-am-not-telling]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-secret_LIFEPRINT-ASL.mp4)


### Back {#back}

secret


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEEM---1-movement-version---apparently_LIFEPRINT-ASL.mp4)


### Back {#back}

SEEM-[1-movement-version] _ apparently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEEM---2-movement-version---apparently_LIFEPRINT-ASL.mp4)


### Back {#back}

SEEM-[2-movement-version] _ apparently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-seemingly---LOOK-1h-touch-version+SEEM--_LIFEPRINT-ASL.mp4)


### Back {#back}

seemingly-[LOOK-1h-touch-version+SEEM]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---MYSELF_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - MYSELF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF---OURSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF - OURSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELF-itself-automatically-on-its-own-auto---self--_LIFEPRINT-ASL.mp4)


### Back {#back}

SELF _ itself _ automatically _ on its own _ auto-[self]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sense_LIFEPRINT-ASL.mp4)


### Back {#back}

sense


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-show-up_appear_LIFEPRINT-ASL.mp4)


### Back {#back}

show up_appear


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Shy_LIFEPRINT-ASL.mp4)


### Back {#back}

Shy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SISTER_LIFEPRINT-ASL.mp4)


### Back {#back}

SISTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-six_LIFEPRINT-ASL.mp4)


### Back {#back}

six


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-smart-SMART---open-8-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

smart _ SMART-[open-8-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-smart_LIFEPRINT-ASL.mp4)


### Back {#back}

smart


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUPID---2-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUPID-[2-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUPID---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUPID-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

TEACHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THEMSELVES_LIFEPRINT-ASL.mp4)


### Back {#back}

THEMSELVES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-times-MULTIPLY---unmarked-WORSE--_LIFEPRINT-ASL.mp4)


### Back {#back}

times _ MULTIPLY [unmarked WORSE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-time_LIFEPRINT-ASL.mp4)


### Back {#back}

time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY--TEACHER-SHOW-UP-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY, TEACHER SHOW-UP what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY---now-day-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY-[now-day-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up-to-you---THINK-SELF---think-for-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

up-to-you-[THINK-SELF]-think-for-yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WITHOUT_LIFEPRINT-ASL.mp4)


### Back {#back}

WITHOUT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

WOMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORSE---marked-version---worst_LIFEPRINT-ASL.mp4)


### Back {#back}

WORSE [marked version] _ worst


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-STUPID-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL STUPID SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-LOOK-at-YOURSELF-MIRROR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE LOOK-at YOURSELF MIRROR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-play-CARDS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE play-CARDS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-SIGN-MUSIC---songs---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE SIGN MUSIC-[songs] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-PERSON-CAN-FLY-WITHOUT-AIRPLANE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK PERSON CAN FLY WITHOUT AIRPLANE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DAD-HAVE-BEARD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DAD HAVE BEARD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDPA-BALD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDPA BALD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SISTER-SHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SISTER SHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson29)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](aslu-PRONOUN---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PRONOUN - YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---signing-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[signing-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH---casual--_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH-[casual]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-#what-DO_DO-DO---lexicalized-fingerspelling--_LIFEPRINT-ASL.mp4)


### Back {#back}

\#what-DO_DO-DO-[lexicalized-fingerspelling]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A-baseball-bat-costs-how-much-BASEBALL-BAT-COST-HOW-MUCH---1h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

A baseball bat costs how much _ BASEBALL BAT COST HOW-MUCH-[1h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-afternoon_LIFEPRINT-ASL.mp4)


### Back {#back}

afternoon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANY_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

ANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AT-@_LIFEPRINT-ASL.mp4)


### Back {#back}

AT @


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLONDE---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BLONDE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](aslu-BRING-to-there---carry--provide--supply--'take-it-there'_LIFEPRINT-ASL.mp4)


### Back {#back}

BRING-to-there - carry, provide, supply, 'take it there'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-build-building_LIFEPRINT-ASL.mp4)


### Back {#back}

build building


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-MACHINE---engine----YOU-KNOW-HOW-F-I-X_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR MACHINE-[engine], YOU KNOW HOW F-I-X


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CELL-PHONE---C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CELL-PHONE-[C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CELL-PHONE---mobile-device-in-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CELL-PHONE-[mobile-device-in-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-color_LIFEPRINT-ASL.mp4)


### Back {#back}

color


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cost-price-fee-fine_LIFEPRINT-ASL.mp4)


### Back {#back}

cost price fee fine


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRAWER---DRESSER--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRAWER [DRESSER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELEVATOR---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ELEVATOR-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELEVATOR_LIFEPRINT-ASL.mp4)


### Back {#back}

ELEVATOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](aslu-EMAIL--YOU-GIVE-UP-FROM-NOW-ON-FOR-$200-000-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL, YOU GIVE-UP FROM-NOW-ON FOR $200,000 YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-engineer---measurer--_LIFEPRINT-ASL.mp4)


### Back {#back}

engineer [measurer]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAIL_LIFEPRINT-ASL.mp4)


### Back {#back}

FAIL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---non-initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [non-initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---repair_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX - repair


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX-[fingerspelled version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOOR_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-friendly_LIFEPRINT-ASL.mp4)


### Back {#back}

friendly


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-from-then-on-from-now-on-from-this-point-forward_LIFEPRINT-ASL.mp4)


### Back {#back}

from then on _ from now on _ from this point forward


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FURNITURE_LIFEPRINT-ASL.mp4)


### Back {#back}

FURNITURE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAIR--YOU-PREFER-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

HAIR, YOU PREFER what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIS_HERS_ITS---possession-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HIS_HERS_ITS-[possession-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-house_LIFEPRINT-ASL.mp4)


### Back {#back}

house


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IT-WALL--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

IT WALL, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IT_LIFEPRINT-ASL.mp4)


### Back {#back}

IT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JANITOR---version-1---mop-pusher--_LIFEPRINT-ASL.mp4)


### Back {#back}

JANITOR-[version 1 - mop pusher]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JANITOR---version-2---sweeper--_LIFEPRINT-ASL.mp4)


### Back {#back}

JANITOR-[version 2 - sweeper]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JANITOR---version-3---cleaner--_LIFEPRINT-ASL.mp4)


### Back {#back}

JANITOR-[version 3 - cleaner]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Janitor---version-4---horn-hand-flicking-outward-from-under-the-chin-----sideview--_LIFEPRINT-ASL.mp4)


### Back {#back}

Janitor-[version 4 - horn hand flicking outward from under the chin]-[sideview]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Janitor---version-4---horn-hand-flicking-outward-from-under-the-chin--_LIFEPRINT-ASL.mp4)


### Back {#back}

Janitor-[version 4 - horn hand flicking outward from under the chin]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Janitor---version-5---LG-on-chin--_LIFEPRINT-ASL.mp4)


### Back {#back}

Janitor-[version 5 - LG-on-chin]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEARN_LIFEPRINT-ASL.mp4)


### Back {#back}

LEARN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MACHINE-engine-factory_LIFEPRINT-ASL.mp4)


### Back {#back}

MACHINE-engine-factory


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-measure-size-measurement_LIFEPRINT-ASL.mp4)


### Back {#back}

measure size measurement


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-measure-version_LIFEPRINT-ASL.mp4)


### Back {#back}

measure version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEETING---session_meeting--_LIFEPRINT-ASL.mp4)


### Back {#back}

MEETING-[session_meeting]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEETING_LIFEPRINT-ASL.mp4)


### Back {#back}

MEETING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-monitor---2h-WATCH--_LIFEPRINT-ASL.mp4)


### Back {#back}

monitor-[2h-WATCH]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-practice-version_LIFEPRINT-ASL.mp4)


### Back {#back}

practice version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer--favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer, favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESPONSIBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

RESPONSIBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROAD-path-way-street-channel-as-in-path_LIFEPRINT-ASL.mp4)


### Back {#back}

ROAD _ path _ way _ street _ channel as in path


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-salesperson-SELL-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

salesperson-SELL-PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOE-what-SIZE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOE what-SIZE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-shoes_LIFEPRINT-ASL.mp4)


### Back {#back}

shoes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SICK_LIFEPRINT-ASL.mp4)


### Back {#back}

SICK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-size-version_LIFEPRINT-ASL.mp4)


### Back {#back}

size version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOCKS_LIFEPRINT-ASL.mp4)


### Back {#back}

SOCKS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-START-begin-initiate_LIFEPRINT-ASL.mp4)


### Back {#back}

START-begin-initiate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STREET_LIFEPRINT-ASL.mp4)


### Back {#back}

STREET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-THIS-CLASS-YOU-FAIL--RESPONSIBLE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE THIS CLASS YOU FAIL, RESPONSIBLE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOUR-DOG-SICK--YOU-CARRY-VET_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOUR DOG SICK, YOU CARRY VET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SURRENDERED---give-up-sacrifice--_LIFEPRINT-ASL.mp4)


### Back {#back}

SURRENDERED [give-up _ sacrifice]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-BUILDING-HAVE-ELEVATOR_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS BUILDING HAVE ELEVATOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-BUILDING--FLOORS--HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS BUILDING, FLOORS, HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-here---1-handed-version---down-it---something-below-the-signer---down-foot---body-part--_LIFEPRINT-ASL.mp4)


### Back {#back}

this _ here-[1-handed-version] _ down _ it-[something-below-the-signer] _ down _ foot-[body-part]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-AFTERNOON--YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW AFTERNOON, YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TV_LIFEPRINT-ASL.mp4)


### Back {#back}

TV


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-vet---fs-VET---veterinarian_LIFEPRINT-ASL.mp4)


### Back {#back}

vet [fs-VET] _ veterinarian


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WALL_LIFEPRINT-ASL.mp4)


### Back {#back}

WALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---every---MEETING-HOW-MANY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[every] MEETING HOW-MANY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656574585525.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRISTWATCH_LIFEPRINT-ASL.mp4)


### Back {#back}

WRISTWATCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-START-LEARN-LEARN-SIGN--WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU START LEARN LEARN SIGN, WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-MOST-SELL-AGENT-FRIENDLY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK MOST SELL-AGENT FRIENDLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK-COST-HOW-MUCH---1h----_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK COST HOW-MUCH-[1h]]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY-ANY-MEASURE+AGENT---engineer--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY ANY MEASURE+AGENT-[engineer]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-RESTAURANT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE RESTAURANT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--FURNITURE--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, FURNITURE, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--STREET--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, STREET, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Your-shoes-how-much-cost_LIFEPRINT-ASL.mp4)


### Back {#back}

Your shoes how much cost


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SOCK-DRAWER--what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SOCK DRAWER, what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson30)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALRIGHT--alright_rights---single-movement-_LIFEPRINT-ASL.mp4)


### Back {#back}

ALRIGHT (alright_rights) (single movement)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANSWER---order--report--respond--_LIFEPRINT-ASL.mp4)


### Back {#back}

ANSWER-[order, report, respond]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN-DRINK-COFFEE--YOU-THINK-OKAY_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN DRINK COFFEE, YOU THINK OKAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](aslu-DEPLETE-RUN-OUT-OF--version-2---Use-in-'time-ran-out'--Also-see---https--_youtu.be_YU1ERFmrH2c_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPLETE _ RUN-OUT-OF (version 2) (Use in 'time ran out') Also see - https -_youtu.be_YU1ERFmrH2c


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIFFERENT--but-_LIFEPRINT-ASL.mp4)


### Back {#back}

DIFFERENT-(but)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-TEST-YOU-SOMETIME-STUCK_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING TEST YOU SOMETIME STUCK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-O-K_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-O-K


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE-YOU-THINK-LOUSY--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE YOU THINK LOUSY, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](aslu-NEXT-WEEK-HAVE-PLAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

NEXT-WEEK HAVE PLAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NONE_NOTHING_LIFEPRINT-ASL.mp4)


### Back {#back}

NONE_NOTHING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OK--approve-it-_LIFEPRINT-ASL.mp4)


### Back {#back}

OK (approve it)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OWE-YOUR-DAD-MONEY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

OWE YOUR DAD MONEY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](aslu-P-E-N-DON'T-MIND-you-LEND-me_LIFEPRINT-ASL.mp4)


### Back {#back}

P-E-N DON'T-MIND you-LEND-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PENCIL--fingerspelled-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PENCIL (fingerspelled version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RAIN-COAT-HAVE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

RAIN COAT HAVE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT--YOU-LIKE-EAT-DIFFERENT---shift---DIFFERENT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT, YOU LIKE EAT DIFFERENT [shift] DIFFERENT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](aslu-SUPPOSE-DOG--YOU-WATER-'hose-down'-YOU-THINK-IT-STINK-FUTURE---will--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE DOG, YOU WATER 'hose-down' YOU THINK IT STINK FUTURE-[will]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-RESTAURANT--YOU-ORDER-BIRD--MEAT--FISH--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU RESTAURANT, YOU ORDER BIRD, MEAT, FISH, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST-----quiz--exam----version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST - [quiz, exam] (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST--YOU-THINK-NOTHING-TO-IT_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST, YOU THINK NOTHING-TO-IT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS--LESSON-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS, LESSON HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY-CLASS--GONE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY CLASS, GONE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-SNOW-YOU-THINK-WILL_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW SNOW YOU THINK WILL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](aslu-YEAR-AGO-YOU-GO-FAMILY-gather-to-MEETING---single-movement='reunion'--_LIFEPRINT-ASL.mp4)


### Back {#back}

YEAR-AGO YOU GO FAMILY gather-to-MEETING-[single-movement='reunion']


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY-MAIL-YOU-GET-NONE_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY MAIL YOU GET NONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ALRIGHT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ALRIGHT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENTHUSIASTIC--ABOUT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENTHUSIASTIC, ABOUT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EXCITED-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EXCITED EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TOMORROW-SNOW--version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TOMORROW SNOW (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TOMORROW-SNOW--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TOMORROW SNOW (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-HELP-you-LEARN-READ_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM HELP-you LEARN READ


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson31)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL-TEACHER-TELL-STUDENT-SHUT-UP--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL TEACHER TELL STUDENT SHUT-UP, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-YOU-PUSH-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR YOU PUSH BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHECK--ascertain-_LIFEPRINT-ASL.mp4)


### Back {#back}

CHECK-(ascertain)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER--YOU-SHUT-OFF-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER, YOU SHUT-OFF WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-YOU-STUDY--PERSON-INTERRUPT-YOU-MOST-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING YOU STUDY, PERSON INTERRUPT YOU MOST WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT-FINISH--YOU-LIKE-SHORT---duration---SLEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT FINISH, YOU LIKE SHORT-[duration] SLEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMAIL--you-all-electronically--2-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL (you all electronically, 2 hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FALL-OFF_LIFEPRINT-ASL.mp4)


### Back {#back}

FALL-OFF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOR-DATE--YOU-LIKE-DO-what_LIFEPRINT-ASL.mp4)


### Back {#back}

FOR DATE, YOU LIKE DO-what


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUNNY---comic---BOOK--YOU-LIKE-TRADE_LIFEPRINT-ASL.mp4)


### Back {#back}

FUNNY-[comic] BOOK, YOU LIKE TRADE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](aslu-MOVIE-YOU-WON'T-WATCH-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE YOU WON'T WATCH WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-NIGHT-YOU-SLEEP-HOUR-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST NIGHT YOU SLEEP HOUR HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST---former---BOY-FRIEND-GIRL-FRIEND-PICTURE--YOU-THROW-AWAY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST-[former] BOY-FRIEND _ GIRL-FRIEND PICTURE, YOU THROW-AWAY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PULL--general-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PULL (general version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REASON_LIFEPRINT-ASL.mp4)


### Back {#back}

REASON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECTANGLE-a-check-or-cheque-an-envelope-a-card-a-brick_LIFEPRINT-ASL.mp4)


### Back {#back}

RECTANGLE _ a check or cheque _ an envelope _ a card _ a brick


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT-YOU-THINK-SERVICE-LOUSY--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT YOU THINK SERVICE LOUSY, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SERVICE--waiter-_LIFEPRINT-ASL.mp4)


### Back {#back}

SERVICE-(waiter)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEP--oversleep-_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEP-(oversleep)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEPY_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEPY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](aslu-THIS-CLASS--STUDENT-WON'T-EAT-MEAT-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS, STUDENT WON'T EAT MEAT WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THROW--ball-_LIFEPRINT-ASL.mp4)


### Back {#back}

THROW-(ball)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THROW--general-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

THROW-(general version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC-YOU-INTERESTED-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC YOU INTERESTED WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRADE---replace--exchange--_LIFEPRINT-ASL.mp4)


### Back {#back}

TRADE-[replace, exchange]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TURN-OFF---small-knob_switch--_LIFEPRINT-ASL.mp4)


### Back {#back}

TURN-OFF-[small knob_switch]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TURN-ON---small-knob_switch--_LIFEPRINT-ASL.mp4)


### Back {#back}

TURN-ON-[small knob_switch]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAITER_SERVER_LIFEPRINT-ASL.mp4)


### Back {#back}

WAITER_SERVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAVE-NO_LIFEPRINT-ASL.mp4)


### Back {#back}

WAVE-NO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK-WEEK-EMAIL-YOU-SEND-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK WEEK EMAIL YOU SEND HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DREAM-ABOUT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DREAM ABOUT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FALL-IN-LOVE-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FALL-IN-LOVE EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-DENTIST-PULL-TOOTH-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO DENTIST PULL-TOOTH BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TAKE-UP-ASL-CLASS--what-REASON_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TAKE-UP ASL CLASS, what-REASON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TEACHER-EAT-TOO-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TEACHER EAT TOO-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-UPSET-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU UPSET EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson32)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENTHUSIASTIC_LIFEPRINT-ASL.mp4)


### Back {#back}

ENTHUSIASTIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXCITED_LIFEPRINT-ASL.mp4)


### Back {#back}

EXCITED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LESSON---course--_LIFEPRINT-ASL.mp4)


### Back {#back}

LESSON-[course]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOUSY_LIFEPRINT-ASL.mp4)


### Back {#back}

LOUSY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOTHING-TO-IT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOTHING-TO-IT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OWE---bill--due--debt--_LIFEPRINT-ASL.mp4)


### Back {#back}

OWE-[bill, due, debt]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STINK_LIFEPRINT-ASL.mp4)


### Back {#back}

STINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUCK_LIFEPRINT-ASL.mp4)


### Back {#back}

STUCK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST_QUIZ--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST_QUIZ (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DATE---a-social-or-romantic-event_LIFEPRINT-ASL.mp4)


### Back {#back}

DATE - a social or romantic event


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DREAM_LIFEPRINT-ASL.mp4)


### Back {#back}

DREAM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMAIL--flat-c-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL (flat c hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMAIL--send-electronic-signal-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL (send electronic signal version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTEREST_LIFEPRINT-ASL.mp4)


### Back {#back}

INTEREST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERRUPT_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERRUPT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PUSH_LIFEPRINT-ASL.mp4)


### Back {#back}

PUSH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHUT-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

SHUT-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SLEEP_LIFEPRINT-ASL.mp4)


### Back {#back}

SLEEP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC----title_subject_theme--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC- [title_subject_theme]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](aslu-WON'T---refuse--_LIFEPRINT-ASL.mp4)


### Back {#back}

WON'T-[refuse]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---flat-O-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[flat-O-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---H-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[H-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOUT---index-fingers-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOUT-[index-fingers-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---previous-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[previous-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRD_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY--birth-day-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY (birth day version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY---heart-on-chest-ARRIVE-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY-[heart on chest-ARRIVE version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bologna---HOTDOG---SANDWICH--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

bologna-[HOTDOG] SANDWICH, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOOK_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

BOOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWL-basket-tub-basin-sink--depictive-classifier-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWL _ basket _ tub _ basin _ sink (depictive _ classifier version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWL---bowling-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWL-[bowling-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOYFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOYFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRIEF---short-duration--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRIEF-[short-duration]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANDY--treat-_LIFEPRINT-ASL.mp4)


### Back {#back}

CANDY (treat)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COAT_LIFEPRINT-ASL.mp4)


### Back {#back}

COAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COCAINE-coke--drug--_LIFEPRINT-ASL.mp4)


### Back {#back}

COCAINE _ coke[drug]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COFFEE_LIFEPRINT-ASL.mp4)


### Back {#back}

COFFEE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLECT_GATHER_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLECT_GATHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPUTER---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPUTER-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-crave--thirst--desire--lust_LIFEPRINT-ASL.mp4)


### Back {#back}

crave, thirst, desire, lust


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](aslu-CUT-WRISTS---idiomatic---shut-up--stop-signing--I'll-shut-up-now.--_LIFEPRINT-ASL.mp4)


### Back {#back}

CUT-WRISTS-[idiomatic - shut-up, stop-signing, I'll shut up now.]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIFFERENT_LIFEPRINT-ASL.mp4)


### Back {#back}

DIFFERENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-what-what-DO-What-to-do_LIFEPRINT-ASL.mp4)


### Back {#back}

Do what _ what-DO _ What to do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-do-you-mind_LIFEPRINT-ASL.mp4)


### Back {#back}

do you mind


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](aslu-DON'T-MIND---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](aslu-DON'T-MIND---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](aslu-DON'T-MIND_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T MIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRINK_LIFEPRINT-ASL.mp4)


### Back {#back}

DRINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-during_LIFEPRINT-ASL.mp4)


### Back {#back}

during


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-easily_easy_LIFEPRINT-ASL.mp4)


### Back {#back}

easily_easy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELECTRIC-SHUT-off---power-outage----version-01-_LIFEPRINT-ASL.mp4)


### Back {#back}

ELECTRIC SHUT-off [power outage] (version 01)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ELECTRIC-SHUT-off---power-outage----version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

ELECTRIC SHUT-off [power outage] (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMAIL---bent-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EMAIL-[bent-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY---appreciate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY-[appreciate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FALL-IN-LOVE_LIFEPRINT-ASL.mp4)


### Back {#back}

FALL-IN-LOVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILY---non-initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILY [non-initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINE---okay--_LIFEPRINT-ASL.mp4)


### Back {#back}

FINE [okay]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-finish_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

finish


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FISH_LIFEPRINT-ASL.mp4)


### Back {#back}

FISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRUIT--single-twist-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

FRUIT (single twist version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRUIT--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

FRUIT, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRUIT_LIFEPRINT-ASL.mp4)


### Back {#back}

FRUIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUNNY_LIFEPRINT-ASL.mp4)


### Back {#back}

FUNNY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUTURE---WILL--_LIFEPRINT-ASL.mp4)


### Back {#back}

FUTURE-[WILL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-gather-to---flock-to-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

gather-to-[flock-to-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GET_LIFEPRINT-ASL.mp4)


### Back {#back}

GET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRLFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRLFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HELP-you_LIFEPRINT-ASL.mp4)


### Back {#back}

HELP-you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hit-punch_LIFEPRINT-ASL.mp4)


### Back {#back}

hit punch


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOTDOG----sausage--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOTDOG -[sausage]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hot_LIFEPRINT-ASL.mp4)


### Back {#back}

hot


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hour-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

hour version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hour_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

hour


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HUNGRY-starving-famished-desire-appetite-wish_LIFEPRINT-ASL.mp4)


### Back {#back}

HUNGRY _ starving _ famished _ desire _ appetite _ wish


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ice--fingerspelled-_LIFEPRINT-ASL.mp4)


### Back {#back}

ice (fingerspelled)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ICE-CREAM--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

ICE-CREAM, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ICE-CREAM_LIFEPRINT-ASL.mp4)


### Back {#back}

ICE-CREAM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ice_freeze_LIFEPRINT-ASL.mp4)


### Back {#back}

ice_freeze


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-information-technology---fs-IT-I-T--_LIFEPRINT-ASL.mp4)


### Back {#back}

information technology [fs-IT _ I-T]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IT_LIFEPRINT-ASL.mp4)


### Back {#back}

IT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I_ME-THIRSTY--WATER-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

I_ME THIRSTY, WATER WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-knife---H-hands-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

knife-[H-hands-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-knife---index-fingers-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

knife-[index-fingers-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEARN_LIFEPRINT-ASL.mp4)


### Back {#back}

LEARN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-letter-mail_LIFEPRINT-ASL.mp4)


### Back {#back}

letter mail


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOAN-to-me_I-borrow_LIFEPRINT-ASL.mp4)


### Back {#back}

LOAN-to-me_I-borrow


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-me---I_ME--_LIFEPRINT-ASL.mp4)


### Back {#back}

me-[I_ME]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEAT-content-flesh-steak_LIFEPRINT-ASL.mp4)


### Back {#back}

MEAT _ content _ flesh _ steak


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOM_LIFEPRINT-ASL.mp4)


### Back {#back}

MOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONEY---cash-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY-[cash-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONEY_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-movie_LIFEPRINT-ASL.mp4)


### Back {#back}

movie


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

NIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NONE_LIFEPRINT-ASL.mp4)


### Back {#back}

NONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OK_LIFEPRINT-ASL.mp4)


### Back {#back}

OK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ORDER_LIFEPRINT-ASL.mp4)


### Back {#back}

ORDER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR_LIFEPRINT-ASL.mp4)


### Back {#back}

OR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARTY--P-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PARTY (P version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARTY---initialized--_LIFEPRINT-ASL.mp4)


### Back {#back}

PARTY [initialized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARTY---non-initialized--PLAY--_LIFEPRINT-ASL.mp4)


### Back {#back}

PARTY [non-initialized, PLAY]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEACH-PIE--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

PEACH PIE, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEACH_LIFEPRINT-ASL.mp4)


### Back {#back}

PEACH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

PEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEPSI-OR---shift---COKE--YOU-PREFER-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

PEPSI OR-[shift] COKE, YOU PREFER WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEPSI_LIFEPRINT-ASL.mp4)


### Back {#back}

PEPSI


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICTURE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICTURE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIE_LIFEPRINT-ASL.mp4)


### Back {#back}

PIE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAN_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POP-YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

POP YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POP-SODA_LIFEPRINT-ASL.mp4)


### Back {#back}

POP _ SODA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POPCORN--WANT-BOWL---container---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

POPCORN, WANT BOWL-[container] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POPCORN_LIFEPRINT-ASL.mp4)


### Back {#back}

POPCORN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-CHIP-fs-YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO CHIP-fs YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-IDAHO_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO _ IDAHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-CHIPS---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO-CHIPS-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-CHIPS---spelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO-CHIPS-[spelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POUR-over_LIFEPRINT-ASL.mp4)


### Back {#back}

POUR-over


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

RAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-READ_LIFEPRINT-ASL.mp4)


### Back {#back}

READ


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SANDWICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SANDWICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sauce---POUR-over--_LIFEPRINT-ASL.mp4)


### Back {#back}

sauce-[POUR-over]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-send_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

send


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SERVICE_LIFEPRINT-ASL.mp4)


### Back {#back}

SERVICE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN-LANGUAGE---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN LANGUAGE [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---1-movement-version-S-C-S---to-sign-use-sign-language-a-sign-ASL--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[1-movement-version _ S-C-S] _ to sign _ use sign language _ a sign _ ASL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOW---verb-form---Snow-is-gently-falling--_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOW [verb form - Snow is gently falling]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOW---inflected-version---snow-falling-hard-at-an-angle---blizzard-snow-storm-wind-driven-snow_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOW-[inflected version - snow falling hard at an angle] _ blizzard _ snow storm _ wind driven snow


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP--YOU-LIKE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

SOUP, YOU LIKE WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOUP_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

SOUP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-stink_stinks---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

stink_stinks-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOVE-HOT--YOU-TOUCH-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

STOVE HOT, YOU TOUCH BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOVE_LIFEPRINT-ASL.mp4)


### Back {#back}

STOVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT-learner---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT _ learner [casual version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT---full-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT-[full-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWEET_LIFEPRINT-ASL.mp4)


### Back {#back}

SWEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

TEACHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TELL_LIFEPRINT-ASL.mp4)


### Back {#back}

TELL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-test-quiz---1x1x-stationary-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

test _ quiz [1x1x-stationary-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-here---1-handed-version---down-it---something-below-the-signer---down-foot---body-part--_LIFEPRINT-ASL.mp4)


### Back {#back}

this _ here-[1-handed-version] _ down _ it-[something-below-the-signer] _ down _ foot-[body-part]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THROW-AWAY---throw-in-the-garbage--_LIFEPRINT-ASL.mp4)


### Back {#back}

THROW-AWAY-[throw-in-the-garbage]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TODAY---now-day-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TODAY-[now-day-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-too-much_LIFEPRINT-ASL.mp4)


### Back {#back}

too much


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

TOUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TURN-OFF-power-it-down-shut-off-close-that-down_LIFEPRINT-ASL.mp4)


### Back {#back}

TURN-OFF _ power it down _ shut off _ close that down


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WANT-I-C-E-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WANT I-C-E YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-want_LIFEPRINT-ASL.mp4)


### Back {#back}

want


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH---casual--_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH-[casual]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATER-POUR--POUR----sweep-arc---YOU-MIND-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WATER POUR, POUR, [sweep-arc] YOU-MIND YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATER-FOUNTAIN--water-turn-knob-_LIFEPRINT-ASL.mp4)


### Back {#back}

WATER-FOUNTAIN (water turn knob)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATER_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

WATER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-do_LIFEPRINT-ASL.mp4)


### Back {#back}

what do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

what-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-which_LIFEPRINT-ASL.mp4)


### Back {#back}

which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YEAR-AGO---last-year-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

YEAR-AGO-[last-year-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YESTERDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

YESTERDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-COLLECT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU COLLECT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-BIRTHDAY-PARTY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY BIRTHDAY PARTY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HUNGRY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HUNGRY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-EAT-PEAR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE EAT PEAR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THIRSTY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THIRSTY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BIRTHDAY--WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BIRTHDAY, WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-SWEET_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM SWEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson33)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GONE-missing-absent-passed-away-dead-extinct_LIFEPRINT-ASL.mp4)


### Back {#back}

GONE _ missing _ absent _ passed away _ dead _ extinct


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A-C-T-O-R--fs--what-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

A-C-T-O-R-(fs) what-SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ACTOR_LIFEPRINT-ASL.mp4)


### Back {#back}

ACTOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BELOW_LESS-THAN_LIFEPRINT-ASL.mp4)


### Back {#back}

BELOW_LESS-THAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOTTOM_LIFEPRINT-ASL.mp4)


### Back {#back}

BOTTOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUILD-THING--YOU-SKILL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BUILD THING, YOU SKILL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-RACE--YOU-LIKE-WATCH_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR RACE, YOU LIKE WATCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHARACTER--moral-_LIFEPRINT-ASL.mp4)


### Back {#back}

CHARACTER-(moral)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHARACTER---role--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHARACTER-[role]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-TEST--CAN-TALK-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING TEST, CAN TALK QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ESTABLISH---set-up--_LIFEPRINT-ASL.mp4)


### Back {#back}

ESTABLISH-[set-up]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-figure-skating---SKATE-TWIRL--ballet-on-skates------version--_LIFEPRINT-ASL.mp4)


### Back {#back}

figure-skating-[SKATE-TWIRL-(ballet-on-skates)]-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-figure-skating---SKATE-TWIRL--ballet-on-skates---_LIFEPRINT-ASL.mp4)


### Back {#back}

figure-skating-[SKATE-TWIRL-(ballet-on-skates)]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINISH-TOUCH--been-to--have-been-there--have-gone-to--visited-that-place-before----idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH-TOUCH, been to, have been there, have gone to, visited that place before, [idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUNNY-BOOK-CHARACTER--YOUR-FAVORITE--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

FUNNY BOOK CHARACTER, YOUR FAVORITE, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GALLAUDET-UNIVERSITY--ESTABLISH-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

GALLAUDET UNIVERSITY, ESTABLISH WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOAL_LIFEPRINT-ASL.mp4)


### Back {#back}

GOAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ICE-SKATE_LIFEPRINT-ASL.mp4)


### Back {#back}

ICE SKATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-like-same-same-as-similar-to_LIFEPRINT-ASL.mp4)


### Back {#back}

like-same same as-similar to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOCATION--bottom-_LIFEPRINT-ASL.mp4)


### Back {#back}

LOCATION-(bottom)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOCATION_LIFEPRINT-ASL.mp4)


### Back {#back}

LOCATION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MUSIC--sing--song--singer-_LIFEPRINT-ASL.mp4)


### Back {#back}

MUSIC-(sing, song, singer)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OCEAN--YOU-LIKE-SWIM-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

OCEAN, YOU LIKE SWIM YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OCEAN_LIFEPRINT-ASL.mp4)


### Back {#back}

OCEAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY-ATTENTION-to-me---focus--concentrate--_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY-ATTENTION-to-me-[focus, concentrate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY-ATTENTION_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY-ATTENTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY-YOU-LIKE-WRITE_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY YOU LIKE WRITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY---1-handed-EXPRESS-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY [1-handed EXPRESS version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY---2-handed-EXPRESS-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY [2-handed EXPRESS version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY [initialized version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY---thumb-side-to-chest-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY [thumb-side to chest version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POETRY--YOU-WRITE_LIFEPRINT-ASL.mp4)


### Back {#back}

POETRY, YOU WRITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUESTION-MARK-WIGGLE---QM-wig--_LIFEPRINT-ASL.mp4)


### Back {#back}

QUESTION-MARK-WIGGLE-[QM-wig]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RACE---compete--competition--_LIFEPRINT-ASL.mp4)


### Back {#back}

RACE-[compete, competition]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-race_LIFEPRINT-ASL.mp4)


### Back {#back}

race


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIVER-YOU-FINISH-TOUCH--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

RIVER YOU FINISH-TOUCH, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIVER_LIFEPRINT-ASL.mp4)


### Back {#back}

RIVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCK_STONE--under-chin-version--PROM---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCK_STONE-(under chin version) _ PROM-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROLLER-SKATE_LIFEPRINT-ASL.mp4)


### Back {#back}

ROLLER SKATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SET-UP-establish-base-based-on-founded_LIFEPRINT-ASL.mp4)


### Back {#back}

SET-UP _ establish _ base _ based on _ founded


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

SIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKI---skiing--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKI-[skiing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKILL---good-at--talent--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKILL-[good-at, talent]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Skip---repeatedly--_LIFEPRINT-ASL.mp4)


### Back {#back}

Skip [repeatedly]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-THIS-CLASS--YOU-SKIP--MUST-BRING-to-here-EXCUSE-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE THIS CLASS, YOU SKIP, MUST BRING-to-here EXCUSE QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-talk-an-individual-talking_LIFEPRINT-ASL.mp4)


### Back {#back}

talk an individual talking


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEMPERATURE_LIFEPRINT-ASL.mp4)


### Back {#back}

TEMPERATURE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THEATER---act--actor--drama--play--show--_LIFEPRINT-ASL.mp4)


### Back {#back}

THEATER-[act, actor, drama, play, show]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THOMAS-GALLAUDET-GALLAUDET-UNIVERSITY---name-sign--_LIFEPRINT-ASL.mp4)


### Back {#back}

THOMAS GALLAUDET _ GALLAUDET UNIVERSITY-[name sign]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOP_LIFEPRINT-ASL.mp4)


### Back {#back}

TOP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-under_LIFEPRINT-ASL.mp4)


### Back {#back}

under


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VOLLEYBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

VOLLEYBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATER-SKI_LIFEPRINT-ASL.mp4)


### Back {#back}

WATER-SKI


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-SIGN-B-O-T-T-O-M---fs--_LIFEPRINT-ASL.mp4)


### Back {#back}

what-SIGN B-O-T-T-O-M-[fs]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-ROCK-COLLECT-YOU--version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE ROCK COLLECT YOU (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-ROCK-COLLECT-YOU--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE ROCK COLLECT YOU (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-SKATING---roller---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE SKATING-[roller] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-VOLLEYBALL--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE VOLLEYBALL (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-VOLLEYBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE VOLLEYBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-NEED-PAY-ATTENTION-ASL-TEACHER--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU NEED PAY-ATTENTION ASL TEACHER, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SET-GOAL-YOURSELF--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SET GOAL YOURSELF, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SKILL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SKILL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SNOW-SKI-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SNOW SKI YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SWIM-SAME-FISH-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SWIM SAME FISH YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NEPHEW-HAVE-ASL-BOOK_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NEPHEW HAVE ASL BOOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson34)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALRIGHT--alright_rights---double-movement-_LIFEPRINT-ASL.mp4)


### Back {#back}

ALRIGHT (alright_rights) (double movement)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAJOR---academic---main-discipline-field-line-of-work-career_LIFEPRINT-ASL.mp4)


### Back {#back}

MAJOR [academic] _ main _ discipline _ field _ line of work _ career


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UPSET_LIFEPRINT-ASL.mp4)


### Back {#back}

UPSET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEXT-WEEK_LIFEPRINT-ASL.mp4)


### Back {#back}

NEXT-WEEK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-trade_LIFEPRINT-ASL.mp4)


### Back {#back}

trade


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROCK_STONE--back-of-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

ROCK_STONE-(back of hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALL--round-object-_LIFEPRINT-ASL.mp4)


### Back {#back}

BALL (round object)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALL--YOU-CAN-THROW--HOW-FAR_LIFEPRINT-ASL.mp4)


### Back {#back}

BALL, YOU CAN THROW, HOW FAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALL_LIFEPRINT-ASL.mp4)


### Back {#back}

BALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALL_SOFTBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

BALL_SOFTBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASEBALL--YOU-LIKE-WATCH_LIFEPRINT-ASL.mp4)


### Back {#back}

BASEBALL, YOU LIKE WATCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASEBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

BASEBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](aslu-BASKETBALL---'5'-handshape-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BASKETBALL ['5' handshape version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASKETBALL--YOU-LIKE-PLAY_LIFEPRINT-ASL.mp4)


### Back {#back}

BASKETBALL, YOU LIKE PLAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BASKETBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

BASKETBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOTH---version-01--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOTH [version 01]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOTH---version-02--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOTH [version 02]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOTH---version-03--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOTH [version 03]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWLING--YOU-SKILL_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWLING, YOU SKILL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWLing----3-claw-overhand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWLing-[ 3 claw overhand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWLing----3-claw-underhand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWLing-[ 3 claw underhand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWLING_BOWL--version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWLING_BOWL (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWLING_BOWL--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWLING_BOWL (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHALLENGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHALLENGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHANGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHASE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHASE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHASE_PURSUE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHASE_PURSUE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILD--SWING--SHOULD-how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILD, SWING, SHOULD how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLIMB_LIFEPRINT-ASL.mp4)


### Back {#back}

CLIMB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-date-dating_LIFEPRINT-ASL.mp4)


### Back {#back}

date dating


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-depend_depends_predicated-on_relying-on_LIFEPRINT-ASL.mp4)


### Back {#back}

depend_depends_predicated on_relying on


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG-CHASE-CAT-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG CHASE CAT what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOLL_LIFEPRINT-ASL.mp4)


### Back {#back}

DOLL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-exchange_swap_LIFEPRINT-ASL.mp4)


### Back {#back}

exchange_swap


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-expensive_LIFEPRINT-ASL.mp4)


### Back {#back}

expensive


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAIR--EVEN--TIE--same-LEVEL_LIFEPRINT-ASL.mp4)


### Back {#back}

FAIR, EVEN, TIE, same-LEVEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOTBALL--YOUR-FAVORITE-TEAM_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOTBALL, YOUR FAVORITE TEAM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOTBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOTBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAME-YOU-LIKE-PLAY--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

GAME YOU LIKE PLAY, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAME_LIFEPRINT-ASL.mp4)


### Back {#back}

GAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Happen_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

Happen


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEARING-AID--YOU-SOMETIMES-WISH-your-SELF-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

HEARING-AID, YOU SOMETIMES WISH your-SELF HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOCKEY_LIFEPRINT-ASL.mp4)


### Back {#back}

HOCKEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KITE--BEST-MONTH-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

KITE, BEST MONTH WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KITE---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

KITE-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KITE---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

KITE-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOAN---borrow--lend--keep--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOAN-[borrow, lend, keep]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOSE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEET_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

MEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTORCYCLE--YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTORCYCLE, YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTORCYCLE_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTORCYCLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE--YOU-RECENTLY-WATCH-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE, YOU RECENTLY WATCH WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-owe_LIFEPRINT-ASL.mp4)


### Back {#back}

owe


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PASS_LIFEPRINT-ASL.mp4)


### Back {#back}

PASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

PAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-R-A-C-E---race-physical-characteristics--_LIFEPRINT-ASL.mp4)


### Back {#back}

R-A-C-E-[race _ physical characteristics]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-race-compete_LIFEPRINT-ASL.mp4)


### Back {#back}

race compete


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT_-recently_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT\_ recently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-record---VIDEO-RECORD--_LIFEPRINT-ASL.mp4)


### Back {#back}

record-[VIDEO-RECORD]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROLLER-BLADE_LIFEPRINT-ASL.mp4)


### Back {#back}

ROLLER-BLADE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUN--version-1-_LIFEPRINT-ASL.mp4)


### Back {#back}

RUN (version 1)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUN---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

RUN-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUN---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

RUN-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-satisfy_LIFEPRINT-ASL.mp4)


### Back {#back}

satisfy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-skill_LIFEPRINT-ASL.mp4)


### Back {#back}

skill


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOWBOARD---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOWBOARD-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOWBOARD---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOWBOARD-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOCCER-TEAM--HOW-MANY-PLAYER_LIFEPRINT-ASL.mp4)


### Back {#back}

SOCCER TEAM, HOW-MANY PLAYER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOCCER---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOCCER-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOCCER---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOCCER-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRICT-hard-nosed---idiomatic-ASL-pun--_LIFEPRINT-ASL.mp4)


### Back {#back}

STRICT _ hard nosed [idiomatic _ ASL pun]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWING_LIFEPRINT-ASL.mp4)


### Back {#back}

SWING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Team_LIFEPRINT-ASL.mp4)


### Back {#back}

Team


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tie_neckware_LIFEPRINT-ASL.mp4)


### Back {#back}

tie_neckware


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VIDEO-RECORD-myself-webcam-recording--non-dominant-index-emphasis-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

VIDEO RECORD-myself _ webcam _ recording (non-dominant index emphasis version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VIDEO-TAPE--old-initialized-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

VIDEO TAPE (old initialized version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VIDEO--recording-_LIFEPRINT-ASL.mp4)


### Back {#back}

VIDEO-(recording)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-video---a-video_MOVIE--_LIFEPRINT-ASL.mp4)


### Back {#back}

video-[a-video_MOVIE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VIDEO_MOVIE_LIFEPRINT-ASL.mp4)


### Back {#back}

VIDEO_MOVIE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WALL--YOU-LIKE-CLIMB_LIFEPRINT-ASL.mp4)


### Back {#back}

WALL, YOU LIKE CLIMB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKLY_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT-KIND_LIFEPRINT-ASL_1656575243924.mp4)


### Back {#back}

WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WIN_LIFEPRINT-ASL.mp4)


### Back {#back}

WIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORK-labor-employment_LIFEPRINT-ASL.mp4)


### Back {#back}

WORK _ labor _ employment


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-DOLL--HAIR-BROWN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE DOLL, HAIR BROWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-PLAY-SOFTBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE PLAY SOFTBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-ROLLER-BLADE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE ROLLER-BLADE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-RUN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE RUN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SNOWBOARD-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SNOWBOARD BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-PLAY-HOCKEY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT PLAY HOCKEY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-turn_LIFEPRINT-ASL.mp4)


### Back {#back}

your turn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson35)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ACROSS-FROM_LIFEPRINT-ASL.mp4)


### Back {#back}

ACROSS-FROM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALLERGIC_LIFEPRINT-ASL.mp4)


### Back {#back}

ALLERGIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AWFUL---terrible-----two-handed-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

AWFUL-[terrible]-[two-handed-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AWFUL---terrible--_LIFEPRINT-ASL.mp4)


### Back {#back}

AWFUL-[terrible]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANCEL--grade--correct--criticize-_LIFEPRINT-ASL.mp4)


### Back {#back}

CANCEL-(grade, correct, criticize)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

CAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEAP_INEXPENSIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEAP_INEXPENSIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLOSE-BY---near--_LIFEPRINT-ASL.mp4)


### Back {#back}

CLOSE BY-[near]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cost-price-charge_LIFEPRINT-ASL.mp4)


### Back {#back}

cost price charge


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COST---tax--fine--fee--charge--price--_LIFEPRINT-ASL.mp4)


### Back {#back}

COST-[tax, fine, fee, charge, price]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRAZY-RIDICULOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

CRAZY-RIDICULOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRAZY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

CRAZY-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRAZY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

CRAZY-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DATE-CHEAP--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

DATE CHEAP, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-date-dating_LIFEPRINT-ASL.mp4)


### Back {#back}

date dating


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-STILL-RESIDENTIAL-SCHOOL-OLD-21--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF STILL RESIDENTIAL SCHOOL OLD 21, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-SCHOOL---state-residential-school-for-the-Deaf-----campus-----institute--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF-SCHOOL-[state-residential-school-for-the-Deaf]-[campus]-[institute]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISAGREE_LIFEPRINT-ASL.mp4)


### Back {#back}

DISAGREE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAT_FOOD_LIFEPRINT-ASL.mp4)


### Back {#back}

EAT_FOOD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-essential---IMPORTANT--_LIFEPRINT-ASL.mp4)


### Back {#back}

essential-[IMPORTANT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Every-YEAR-FEDERAL-T-A-X-YOU-PAY-HOW-MUCH---1h--_LIFEPRINT-ASL.mp4)


### Back {#back}

Every-YEAR FEDERAL T-A-X YOU PAY HOW-MUCH-[1h]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-YEAR---version-----annually--_LIFEPRINT-ASL.mp4)


### Back {#back}

every-YEAR-[version]-[annually]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXPENSIVE_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

EXPENSIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAST----speed--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAST -[speed]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAST---L-to-S-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAST-[L-to-S-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAST---speeding---TICKET-COST-HOW-MUCH---1h--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAST-[speeding] TICKET COST HOW-MUCH-[1h]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FEDERAL_LIFEPRINT-ASL.mp4)


### Back {#back}

FEDERAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOWER--YOU-nose-OPPOSITE---allergic--_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOWER, YOU nose-OPPOSITE-[allergic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLOWER_LIFEPRINT-ASL.mp4)


### Back {#back}

FLOWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOD-YOU-THINK-TASTE-AWFUL--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOD YOU THINK TASTE AWFUL, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOME-AREA--residential-area-_LIFEPRINT-ASL.mp4)


### Back {#back}

HOME AREA (residential area)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---rhetorical_eyebrows-up-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[rhetorical_eyebrows-up-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-THINK-WOMEN--SMARTER-THAN-MEN--YOU-DISAGREE_LIFEPRINT-ASL.mp4)


### Back {#back}

I THINK WOMEN, SMARTER THAN MEN, YOU DISAGREE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IMPORTANT-YOUR-LIFE--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

IMPORTANT YOUR LIFE, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IMPORTANT---value--cost--worth--_LIFEPRINT-ASL.mp4)


### Back {#back}

IMPORTANT-[value, cost, worth]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-intelligence_smart_LIFEPRINT-ASL.mp4)


### Back {#back}

intelligence_smart


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-intelligent-clever-brilliant-genius-bent-middle-finger-version_LIFEPRINT-ASL.mp4)


### Back {#back}

intelligent clever brilliant genius bent middle finger version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](aslu-Intense!-Extremely-Crazy!-very-Ooh!-Radical!-Wow!---general-ASL-intensifier--_LIFEPRINT-ASL.mp4)


### Back {#back}

Intense! _ Extremely _ Crazy! _ very _ Ooh! _ Radical! _ Wow! _ [general ASL intensifier]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LBS---pounds-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LBS-[pounds-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAN---BOY+ADULT--_LIFEPRINT-ASL.mp4)


### Back {#back}

MAN-[BOY+ADULT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAN---BOY+FINE-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

MAN-[BOY+FINE-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEETING-CANCEL--HOW-FEEL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

MEETING CANCEL, HOW FEEL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEETING_LIFEPRINT-ASL.mp4)


### Back {#back}

MEETING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD---age--_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD-[age]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-SANDWICH--YOU-SATISFIED_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE SANDWICH, YOU SATISFIED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OPPOSITE_LIFEPRINT-ASL.mp4)


### Back {#back}

OPPOSITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POPCORN--YOU-LIKE-WITHOUT-SALT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

POPCORN, YOU LIKE WITHOUT SALT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POPCORN_LIFEPRINT-ASL.mp4)


### Back {#back}

POPCORN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-10-LB--COST---worth_value--_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO 10 LB, COST-[worth_value]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POTATO-IDAHO_LIFEPRINT-ASL.mp4)


### Back {#back}

POTATO _ IDAHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RELIEVED_LIFEPRINT-ASL.mp4)


### Back {#back}

RELIEVED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESIDENTIAL-SCHOOL-STRUGGLE-CLOSE---shift---CLOSE--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

RESIDENTIAL-SCHOOL STRUGGLE CLOSE [shift] CLOSE, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUDE_LIFEPRINT-ASL.mp4)


### Back {#back}

RUDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALT_LIFEPRINT-ASL.mp4)


### Back {#back}

SALT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SANDWICH_LIFEPRINT-ASL.mp4)


### Back {#back}

SANDWICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATISFY_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

SATISFY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES-YOU-RUDE---if-so---WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES YOU RUDE [if so] WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STILL_LIFEPRINT-ASL.mp4)


### Back {#back}

STILL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRUGGLE--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

STRUGGLE (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRUGGLE---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

STRUGGLE-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-TEST-CANCEL--YOU-RELIEVED-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE TEST CANCEL, YOU RELIEVED YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-taste_take-a-taste_LIFEPRINT-ASL.mp4)


### Back {#back}

taste_take a taste


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAX_LIFEPRINT-ASL.mp4)


### Back {#back}

TAX


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-test-quiz---1x1x-stationary-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

test _ quiz [1x1x-stationary-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEST_QUIZ--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEST_QUIZ (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-than_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

than


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THING-YOU-HAVE--MOST-EXPENSIVE--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

THING YOU HAVE, MOST EXPENSIVE, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thing_LIFEPRINT-ASL.mp4)


### Back {#back}

thing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TICKET---noun-form--_LIFEPRINT-ASL.mp4)


### Back {#back}

TICKET-[noun-form]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TYPE-FAST-CAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

TYPE FAST CAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TYPE---keyboard--_LIFEPRINT-ASL.mp4)


### Back {#back}

TYPE-[keyboard]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TYPE_LIFEPRINT-ASL.mp4)


### Back {#back}

TYPE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UP-OPPOSITE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

UP OPPOSITE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up_LIFEPRINT-ASL.mp4)


### Back {#back}

up


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WITHOUT_LIFEPRINT-ASL.mp4)


### Back {#back}

WITHOUT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-CRAZY-SOMETIMES-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL CRAZY SOMETIMES YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-COLLEGE-IMPORTANT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK COLLEGE IMPORTANT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson36)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AGAINST---opposed_anti_con--_LIFEPRINT-ASL.mp4)


### Back {#back}

AGAINST-[opposed_anti_con]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALLOW---permit--let--_LIFEPRINT-ASL.mp4)


### Back {#back}

ALLOW-[permit, let]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-MOTOR--CAN-#FIX-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR MOTOR, CAN #FIX YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAT-LIKE-DESTROY-FURNITURE--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT LIKE DESTROY FURNITURE, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEAT---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEAT-[version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEAT---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEAT-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHECK-INTO_LIFEPRINT-ASL.mp4)


### Back {#back}

CHECK-INTO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COCHLEAR-IMPLANT---bent-V-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COCHLEAR IMPLANT-[bent V version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COCHLEAR-IMPLANT---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

COCHLEAR IMPLANT-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COCHLEAR-IMPLANT--YOU-AGAINST--new-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

COCHLEAR-IMPLANT, YOU AGAINST (new version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COCHLEAR-IMPLANT--YOU-AGAINST--traditional-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

COCHLEAR-IMPLANT, YOU AGAINST (traditional version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CONFLICT---contrast-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CONFLICT [contrast version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-D-O-how-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

D-O how-SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DO---behavior_action--_LIFEPRINT-ASL.mp4)


### Back {#back}

DO-[behavior_action]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOCTOR-DUTY-WHAT---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCTOR-DUTY-WHAT-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOCTOR-DUTY-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCTOR-DUTY-WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DUTY---version-----not-recommended--_LIFEPRINT-ASL.mp4)


### Back {#back}

DUTY-[version]-[not-recommended]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---repair_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX - repair


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIX---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIX-[fingerspelled version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUTURE---someday---YOU-MAYBE-BECOME-NURSE_LIFEPRINT-ASL.mp4)


### Back {#back}

FUTURE-[someday] YOU MAYBE BECOME NURSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Holocaust---DESTROY-destruction-----See-notes.--_LIFEPRINT-ASL.mp4)


### Back {#back}

Holocaust [DESTROY _ destruction] [See notes.]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INVESTIGATE_LIFEPRINT-ASL.mp4)


### Back {#back}

INVESTIGATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JAIL---V-hands-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

JAIL-[V-hands-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LECTURE---speech--give-a-talk--sermon--presentation--_LIFEPRINT-ASL.mp4)


### Back {#back}

LECTURE-[speech, give-a-talk, sermon, presentation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](aslu-MAINSTREAM-YOU---Somewhat-idiomatic-metaphorical-use-of-'river-convergence'-re---Deaf-Education--_LIFEPRINT-ASL.mp4)


### Back {#back}

MAINSTREAM YOU [Somewhat idiomatic _ metaphorical use of 'river convergence' re - Deaf Education]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAYBE---may--might--_LIFEPRINT-ASL.mp4)


### Back {#back}

MAYBE-[may, might]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEWS-ARTICLE-YOU-CLIP-OUT-SAVE---retain--_LIFEPRINT-ASL.mp4)


### Back {#back}

NEWS ARTICLE YOU CLIP-OUT SAVE-[retain]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OF--join--member--own-_LIFEPRINT-ASL.mp4)


### Back {#back}

OF-(join, member, own)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-online---INTERNET---NEWS-YOU-DOWNLOAD-SAVE-do-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

online-[INTERNET] NEWS YOU DOWNLOAD SAVE do-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERMIT---permission--_LIFEPRINT-ASL.mp4)


### Back {#back}

PERMIT-[permission]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRISON--YOU-THINK-SHOULD-BUILD-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

PRISON, YOU THINK SHOULD BUILD MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRISON---jail--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRISON-[jail]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH-PAPER--YOU-ENJOY-WRITE_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH PAPER, YOU ENJOY WRITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-robber_LIFEPRINT-ASL.mp4)


### Back {#back}

robber


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROB_robbery_mug_hold-up_LIFEPRINT-ASL.mp4)


### Back {#back}

ROB_robbery_mug_hold-up


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAVE-PRESERVE-STORE--storage--preservation-of_LIFEPRINT-ASL.mp4)


### Back {#back}

SAVE _ PRESERVE _ STORE-(storage) _ preservation of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAVE-safe-saved---non-initialized-version-of---free-freedom-independent-rescue--_LIFEPRINT-ASL.mp4)


### Back {#back}

SAVE _ safe _ saved _ [non-initialized version of - free _ freedom _ independent _ rescue]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOCKED_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOCKED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME-PEOPLE-STEAL--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME PEOPLE STEAL, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STEAL_LIFEPRINT-ASL.mp4)


### Back {#back}

STEAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-SHIRT-NONE--SHOES-NONE--STORE-ALLOW-YOU-ENTER-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE SHIRT NONE, SHOES NONE, STORE ALLOW YOU ENTER QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-STUDENT-CHEAT-TEST--YOU-THINK-SHOULD-THROW---cast-out---SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE STUDENT CHEAT TEST, YOU THINK SHOULD THROW-[cast-out] SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOUR-MOM-PRISON--YOU-SHOCKED---brain-freeze---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOUR MOM PRISON, YOU SHOCKED-[brain-freeze] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUSPECT---suspicious--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUSPECT-[suspicious]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEAR-OUT---burnout--fall-apart--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEAR OUT-[burnout, fall apart]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WORK-YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

WORK YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LECTURE-CL--55---large_audience---PAST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LECTURE CL -55-[large_audience] PAST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-THIEF-SHOULD-JAIL-30-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK THIEF SHOULD JAIL 30 YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GOAL--YOUR-FATHER--HIS-GOAL--SOMETIMES-CONFLICT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GOAL, YOUR FATHER, HIS GOAL, SOMETIMES CONFLICT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-HIDE-DRINK---alcohol----SUSPECT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM HIDE DRINK-[alcohol], SUSPECT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SHOES--WEAR-OUT-HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SHOES, WEAR-OUT HOW OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson37)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ARGUE---quarrel--_LIFEPRINT-ASL.mp4)


### Back {#back}

ARGUE-[quarrel]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AWKWARD_LIFEPRINT-ASL.mp4)


### Back {#back}

AWKWARD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-C-H-E-S-S--SUPPOSE-WE-TWO-PLAY--YOU-THINK-WIN-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

C-H-E-S-S, SUPPOSE WE-TWO PLAY, YOU THINK WIN WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-commitee_congress--far-shoulder-_LIFEPRINT-ASL.mp4)


### Back {#back}

commitee_congress (far shoulder)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-committee_congress--near-shoulder-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

committee_congress (near shoulder version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DECIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

DECIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST-APPOINTMENT--YOU-WANT-POSTPONE_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST APPOINTMENT, YOU WANT POSTPONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISCUSS_LIFEPRINT-ASL.mp4)


### Back {#back}

DISCUSS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISGUSTED_LIFEPRINT-ASL.mp4)


### Back {#back}

DISGUSTED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-COLLEGE-YOUR-PARENTS-SUPPORT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING COLLEGE YOUR PARENTS SUPPORT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-TEST-YOU-FEEL-PRESSURE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING TEST YOU FEEL PRESSURE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FACULTY_LIFEPRINT-ASL.mp4)


### Back {#back}

FACULTY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRE---terminate--excommunicate_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRE - terminate, excommunicate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRED-fire-terminate-excommunicate---idiomatic---chop-off-head-=-fired-from-job--_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRED _ fire _ terminate _ excommunicate _ [idiomatic - chop off head = fired from job]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOR-YOU-STUDY--MUST-ROOM-QUIET_LIFEPRINT-ASL.mp4)


### Back {#back}

FOR YOU STUDY, MUST ROOM QUIET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HISTORY--YOU-LIKE-STUDY_LIFEPRINT-ASL.mp4)


### Back {#back}

HISTORY, YOU LIKE STUDY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HISTORY_LIFEPRINT-ASL.mp4)


### Back {#back}

HISTORY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-LOVE-SALAD--THINK-TRUE-DELICIOUS--THINK-SAME-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

I LOVE SALAD, THINK TRUE DELICIOUS, THINK-SAME YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IDEA_LIFEPRINT-ASL.mp4)


### Back {#back}

IDEA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](aslu-KETCHUP-CL--C--GRAPES--strong-hand---'dump_ketchup_on_grapes'--'eat_a_grape'-YOU-THINK-DISGUST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

KETCHUP CL -C, GRAPES, strong-hand - 'dump_ketchup_on_grapes', 'eat_a_grape' YOU THINK DISGUST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOUD_LIFEPRINT-ASL.mp4)


### Back {#back}

LOUD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEMBER_LIFEPRINT-ASL.mp4)


### Back {#back}

MEMBER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POLITICAL----politics--_LIFEPRINT-ASL.mp4)


### Back {#back}

POLITICAL -[politics]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POLITICS--YOU-LIKE-DISCUSS_LIFEPRINT-ASL.mp4)


### Back {#back}

POLITICS, YOU LIKE DISCUSS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POSTPONE---put-off--version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

POSTPONE-[put off, version 1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POSTPONE---put-off--version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

POSTPONE-[put off, version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRESSURE---stress--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRESSURE-[stress]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRINCIPAL--YOU-REMEMBER-HIS_HER-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

PRINCIPAL, YOU REMEMBER HIS_HER NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRINCIPAL_LIFEPRINT-ASL.mp4)


### Back {#back}

PRINCIPAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUIET_LIFEPRINT-ASL.mp4)


### Back {#back}

QUIET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT-ORDER--YOU-DECIDE-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT ORDER, YOU DECIDE EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROLLER-SKATE-YOU-AWKWARD-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

ROLLER-SKATE YOU AWKWARD YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY-NIGHT-what-DO--YOU-HAVE-IDEA_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY NIGHT what-DO, YOU HAVE IDEA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SNOW--YOU-DRIVE--SOMETIMES-STUCK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SNOW, YOU DRIVE, SOMETIMES STUCK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STAFF_LIFEPRINT-ASL.mp4)


### Back {#back}

STAFF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUCK_LIFEPRINT-ASL.mp4)


### Back {#back}

STUCK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUGGEST---offer--propose--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUGGEST-[offer, propose]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUNDAY-YOU-TAKE-EASY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUNDAY YOU TAKE-EASY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPORT-loyal-to-advocate-back-allegiance_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPORT _ loyal to _ advocate _ back _ allegiance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-BOSS-FIRE-YOU--HOW-FEEL_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE BOSS FIRE YOU, HOW FEEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-SIGN-CLASS-PARTY--YOU-SUGGEST-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE SIGN CLASS PARTY, YOU SUGGEST what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-it-EASY-casually-casual-proceed-calmly-and-in-a-relaxed-manner-down-to-earth_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-it-EASY _ casually _ casual _ proceed calmly and in a relaxed manner _ down to earth


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK-SAME---Y-hand-version---agree_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK SAME [Y-hand version] _ agree


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK-SAME---agree--version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

THINK SAME-[agree, version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WIN_LIFEPRINT-ASL.mp4)


### Back {#back}

WIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MEMBER-ORGANIZATION-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MEMBER ORGANIZATION what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SOMETIMES-ARGUE-YOUR-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SOMETIMES ARGUE YOUR DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson38)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLAME_LIFEPRINT-ASL.mp4)


### Back {#back}

BLAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILD-GROW-UP--PRISON--YOU-THINK-BLAME---rt---PARENTS_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILD GROW-UP, PRISON, YOU THINK BLAME-[rt] PARENTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPASSION--PITY--POOR-you--PITY-you_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPASSION, PITY, POOR-you, PITY-you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-TEND-TO-GOSSIP--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF TEND-TO GOSSIP, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXAGGERATE_LIFEPRINT-ASL.mp4)


### Back {#back}

EXAGGERATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXPERIENCE_LIFEPRINT-ASL.mp4)


### Back {#back}

EXPERIENCE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAULT_LIFEPRINT-ASL.mp4)


### Back {#back}

FAULT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLATTERY_LIFEPRINT-ASL.mp4)


### Back {#back}

FLATTERY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOSSIP_LIFEPRINT-ASL.mp4)


### Back {#back}

GOSSIP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEALTHY---become-well-physically---strong---heal-up-----brave--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEALTHY-[become-well-physically]-strong-[heal-up]-[brave]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERPRET--YOU-EXPERIENCE-HOW-MANY-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERPRET, YOU EXPERIENCE HOW-MANY YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-J-R-P-R-O-M--YOU-MISS---guess--_LIFEPRINT-ASL.mp4)


### Back {#back}

J-R P-R-O-M, YOU MISS-[guess]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JEALOUS_LIFEPRINT-ASL.mp4)


### Back {#back}

JEALOUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAZY-EST-PERSON-YOU-KNOW--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

LAZY-EST PERSON YOU KNOW, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAZY---double-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAZY-[double movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAZY---single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAZY-[single movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIE---bent-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIE-[bent-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIE---index-finger-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LIE-[index-finger-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](aslu-ME-how-OLD-GUESS!_LIFEPRINT-ASL.mp4)


### Back {#back}

ME how-OLD GUESS!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MILK--SUPPOSE-LEAVE---abandon---7-HOUR--FUTURE---will---RUIN---spoil--_LIFEPRINT-ASL.mp4)


### Back {#back}

MILK, SUPPOSE LEAVE-[abandon] 7-HOUR, FUTURE-[will] RUIN-[spoil]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MISS--emotion-_LIFEPRINT-ASL.mp4)


### Back {#back}

MISS-(emotion)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MISS-OUT---guess--_LIFEPRINT-ASL.mp4)


### Back {#back}

MISS-OUT-[guess]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ODD---strange--unusual--weird--_LIFEPRINT-ASL.mp4)


### Back {#back}

ODD-[strange, unusual, weird]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARENT-ALWAYS-TELL-you-SCHOOL-IMPORTANT--YOU-THINK-THEY-EXAGGERATE_LIFEPRINT-ASL.mp4)


### Back {#back}

PARENT ALWAYS TELL-you SCHOOL IMPORTANT, YOU THINK THEY EXAGGERATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PATIENT---patience--_LIFEPRINT-ASL.mp4)


### Back {#back}

PATIENT-[patience]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE-CAN-BECOME-STRONG--HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE CAN BECOME STRONG, HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE-THEMSELVES-HOME-WITHOUT--YOU-SYMPATHY_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE THEMSELVES HOME-WITHOUT, YOU SYMPATHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON-YOU-THINK-STRANGE---ODD----WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON YOU THINK STRANGE-[ODD], WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](aslu-PITY---sarcastic-version-----1-handed-version-----'poor_baby'--_LIFEPRINT-ASL.mp4)


### Back {#back}

PITY-[sarcastic-version]-[1 handed-version]-['poor_baby']


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESPONSIBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

RESPONSIBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUIN---spoil--_LIFEPRINT-ASL.mp4)


### Back {#back}

RUIN-[spoil]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPELL-GOOD-CAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SPELL GOOD CAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRICT-hard-nosed---idiomatic-ASL-pun--_LIFEPRINT-ASL.mp4)


### Back {#back}

STRICT _ hard nosed [idiomatic _ ASL pun]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT-FAIL--YOU-THINK-TEACHER-FAULT_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT FAIL, YOU THINK TEACHER FAULT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUFFER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUFFER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEASE--just-kidding--joking-_LIFEPRINT-ASL.mp4)


### Back {#back}

TEASE (just kidding, joking)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEND-TO--tendency--bing_LIFEPRINT-ASL.mp4)


### Back {#back}

TEND-TO (tendency) _ bing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MISS---emotion---YOUR-MOM-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MISS-[emotion] YOUR MOM YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PATIENT-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PATIENT YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SOMETIMES-FLATTERY-DAD-FOR-BORROW-CAR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SOMETIMES FLATTERY DAD FOR BORROW CAR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-LIE-O-K-SOMETIMES-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK LIE O-K SOMETIMES YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-MAN-WORSE-JEALOUS-THAN-WOMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK MAN WORSE JEALOUS THAN WOMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BOSS-STRICT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BOSS STRICT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-STUBBORN-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM STUBBORN QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson39)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIVE---life_lives_alive_survive_living----ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

LIVE-[life_lives_alive_survive_living] (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMETIMES_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMETIMES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOMAN_LIFEPRINT-ASL.mp4)


### Back {#back}

WOMAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATHTUB_LIFEPRINT-ASL.mp4)


### Back {#back}

BATHTUB


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATH_LIFEPRINT-ASL.mp4)


### Back {#back}

BATH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](aslu-BEFORE---version----prior-to--beforehand--preceding--coming-before-something-in-time--in-advance-of_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[version], prior-to, beforehand, preceding, coming before something in time, in advance of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOWL-basket-tub-basin-sink--depictive-classifier-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BOWL _ basket _ tub _ basin _ sink (depictive _ classifier version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOY-SHORT---little-boy--short-male--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOY SHORT [little boy, short male]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-can_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](aslu-CATSUP_ketchup---CAT-UP-'A'-hand-version-----pun--_LIFEPRINT-ASL.mp4)


### Back {#back}

CATSUP_ketchup-[CAT-UP-'A'-hand-version]-[pun]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-chair_LIFEPRINT-ASL.mp4)


### Back {#back}

chair


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEESE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEESE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CL---V---LIE-DOWN_LIFEPRINT-ASL.mp4)


### Back {#back}

CL - V - LIE DOWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLOR---wh-q--_LIFEPRINT-ASL.mp4)


### Back {#back}

COLOR-[wh-q]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST-SOMETIMES-USE-PLIERS_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST SOMETIMES USE PLIERS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-discuss_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

discuss


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRILL--YOU-USE-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DRILL, YOU USE BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRILL_LIFEPRINT-ASL.mp4)


### Back {#back}

DRILL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DUCK_LIFEPRINT-ASL.mp4)


### Back {#back}

DUCK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-flow---RIVER--_LIFEPRINT-ASL.mp4)


### Back {#back}

flow [RIVER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-folding-chair--ASL---double-movement-version-of-CHAIR-_LIFEPRINT-ASL.mp4)


### Back {#back}

folding chair (ASL) (double movement version of CHAIR)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOTBALL--YOU-LIKE-DISCUSS-with-YOUR-DAD_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOTBALL, YOU LIKE DISCUSS-with YOUR DAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOTBALL_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOTBALL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-girl---FEMALE-SHORT-version---little-girl-female-child_LIFEPRINT-ASL.mp4)


### Back {#back}

girl-[FEMALE-SHORT-version] _ little girl _ female child


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAMBURGER_LIFEPRINT-ASL.mp4)


### Back {#back}

HAMBURGER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

HAMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HERE_LIFEPRINT-ASL.mp4)


### Back {#back}

HERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-How-SIGN-T-H-R-O-U-G-H_LIFEPRINT-ASL.mp4)


### Back {#back}

How-SIGN T-H-R-O-U-G-H


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INCOMPETENT-unskilled-no-skill-not-good-at-inept-thick-skulled---version-idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

INCOMPETENT _ unskilled _ no skill _ not good at _ inept _ thick skulled [version _ idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INCOMPETENT---not-good-at--inept-----version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

INCOMPETENT-[not-good-at, inept]-[version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KETCHUP--version-_LIFEPRINT-ASL.mp4)


### Back {#back}

KETCHUP (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KNOW---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

KNOW-[casual-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-like-same-same-as-similar-to_LIFEPRINT-ASL.mp4)


### Back {#back}

like-same same as-similar to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOAN-to-me_I-borrow_LIFEPRINT-ASL.mp4)


### Back {#back}

LOAN-to-me_I-borrow


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE---version--_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

LOOK-LIKE-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAJOR---line-of-work---YOU-INCOMPETENT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

MAJOR-[line-of-work] YOU INCOMPETENT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-major_LIFEPRINT-ASL.mp4)


### Back {#back}

major


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mayonnaise---M-A-Y-O-fs-MAYO--_LIFEPRINT-ASL.mp4)


### Back {#back}

mayonnaise [M-A-Y-O _ fs-MAYO]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-METAL----ore--steel--_LIFEPRINT-ASL.mp4)


### Back {#back}

METAL -[ore, steel]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-METAL_LIFEPRINT-ASL.mp4)


### Back {#back}

METAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-mustard---fs-MUSTARD------M-U-S-T-A-R-D--_LIFEPRINT-ASL.mp4)


### Back {#back}

mustard-[fs-MUSTARD]-[ M-U-S-T-A-R-D]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEAR-close-to_LIFEPRINT-ASL.mp4)


### Back {#back}

NEAR _ close-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT-FAR---close-by_near-here--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT-FAR-[close by_near here]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONION_LIFEPRINT-ASL.mp4)


### Back {#back}

ONION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OVER---across--cross--_LIFEPRINT-ASL.mp4)


### Back {#back}

OVER-[across, cross]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OVER---across_cross_after--_LIFEPRINT-ASL.mp4)


### Back {#back}

OVER-[across_cross_after]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-BEFORE-back-when-used-to-be-a-while-back-formerly_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ BEFORE _ back when _ used to be _ a while back _ formerly


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST---long-ago---YOU-LITTLE-GIRL_BOY--YOUR-BATH-T-U-B--YOU-HAVE-D-U-C-K--YELLOW--RUBBER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST-[long-ago] YOU LITTLE-GIRL_BOY, YOUR BATH T-U-B, YOU HAVE D-U-C-K, YELLOW, RUBBER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERCENT_LIFEPRINT-ASL.mp4)


### Back {#back}

PERCENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PICKLE_LIFEPRINT-ASL.mp4)


### Back {#back}

PICKLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLIERS_LIFEPRINT-ASL.mp4)


### Back {#back}

PLIERS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLUG-in---electrical-plug---charge-charge-with-impeach-impeachment_LIFEPRINT-ASL.mp4)


### Back {#back}

PLUG-in-[electrical-plug] _ charge _ charge with _ impeach _ impeachment


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLUG---computer-peripheral--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLUG-[computer-peripheral]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLUG---electric-plug--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLUG-[electric-plug]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rocking-chair--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

rocking chair (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-room_LIFEPRINT-ASL.mp4)


### Back {#back}

room


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUBBER_LIFEPRINT-ASL.mp4)


### Back {#back}

RUBBER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAW_LIFEPRINT-ASL.mp4)


### Back {#back}

SAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCISSORS--CAN-you-LEND-me_LIFEPRINT-ASL.mp4)


### Back {#back}

SCISSORS, CAN you-LEND-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCISSORS--cut-_LIFEPRINT-ASL.mp4)


### Back {#back}

SCISSORS-(cut)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCREWDRIVER-LOOK-LIKE-X---drawn-in-air---what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

SCREWDRIVER LOOK-LIKE X-[drawn-in-air] what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCREWDRIVER_LIFEPRINT-ASL.mp4)


### Back {#back}

SCREWDRIVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEE_VISION_LIFEPRINT-ASL.mp4)


### Back {#back}

SEE_VISION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEPARATE---push-apart--_LIFEPRINT-ASL.mp4)


### Back {#back}

SEPARATE-[push-apart]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---street-sign--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[street-sign]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINGLE---alone-something-someone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINGLE-[alone-something-someone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOP-SIGN---street-sign---what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

STOP SIGN-[street-sign] what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOP_LIFEPRINT-ASL.mp4)


### Back {#back}

STOP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT-learner---casual-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT _ learner [casual version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDENT---full-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDENT-[full-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TECHNICAL-SCHOOL-NEAR-HERE--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

TECHNICAL SCHOOL NEAR HERE, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TECHNICAL---method--technique--_LIFEPRINT-ASL.mp4)


### Back {#back}

TECHNICAL-[method, technique]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS--WOMAN-what-PERCENT_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS, WOMAN what-PERCENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-ROOM--PLUG-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS ROOM, PLUG WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-SCHOOL--STUDENT--TOTAL---sum----HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS SCHOOL, STUDENT, TOTAL-[sum], HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-here---1-handed-version---down-it---something-below-the-signer---down-foot---body-part--_LIFEPRINT-ASL.mp4)


### Back {#back}

this _ here-[1-handed-version] _ down _ it-[something-below-the-signer] _ down _ foot-[body-part]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THROUGH_LIFEPRINT-ASL.mp4)


### Back {#back}

THROUGH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMATO---index-and-O-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMATO-[index-and-O-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMATO_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMATO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOTAL-altogether-sum_LIFEPRINT-ASL.mp4)


### Back {#back}

TOTAL-altogether-sum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOTAL---sum--altogether--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOTAL-[sum, altogether]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNPLUG---computer-peripheral--_LIFEPRINT-ASL.mp4)


### Back {#back}

UNPLUG-[computer-peripheral]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNPLUG---electric-plug--_LIFEPRINT-ASL.mp4)


### Back {#back}

UNPLUG-[electric-plug]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use--neutral-space-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

use (neutral space version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use--palm-forward-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

use (palm forward version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

use version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WELD--YOU-KNOW-SOMEONE-CAN_LIFEPRINT-ASL.mp4)


### Back {#back}

WELD, YOU KNOW SOMEONE CAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WELD_LIFEPRINT-ASL.mp4)


### Back {#back}

WELD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-KIND---advanced-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

what-KIND-[advanced-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT-KIND_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](aslu-what-MEAN--What-is-the-meaning-of...'-_LIFEPRINT-ASL.mp4)


### Back {#back}

what-MEAN (What is the meaning of...')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOMAN-LIE-DOWN--MAGICIAN-SAW---in-half---SEPARATE---push-apart---SEE-PAST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

WOMAN LIE-DOWN, MAGICIAN SAW-[in-half] SEPARATE-[push-apart] SEE PAST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-wood-you-like-what-kind_LIFEPRINT-ASL.mp4)


### Back {#back}

wood you like what kind


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WOOD_LIFEPRINT-ASL.mp4)


### Back {#back}

WOOD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YELLOW_LIFEPRINT-ASL_1656575319632.mp4)


### Back {#back}

YELLOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-HAMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE HAMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-OVER---across---RIVER-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE OVER-[across] RIVER YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CHAIR-METAL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CHAIR METAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HAMBURGER--YOU-LIKE-CHEESE-ONIONS-TOMATO-KETCHUP-MAYO-MUSTARD-PICKLES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HAMBURGER, YOU LIKE CHEESE ONIONS TOMATO KETCHUP MAYO MUSTARD PICKLES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson40)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APARTMENT-CLEAN-up-DEPOSIT--NORMAL-HOW-MUCH---1h--_LIFEPRINT-ASL.mp4)


### Back {#back}

APARTMENT CLEAN-up DEPOSIT, NORMAL HOW-MUCH-[1h]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPROXIMATELY---around--about--_LIFEPRINT-ASL.mp4)


### Back {#back}

APPROXIMATELY-[around, about]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AREA---place--_LIFEPRINT-ASL.mp4)


### Back {#back}

AREA-[place]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ARRIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

ARRIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior-to---REGISTER-CLASS--YOU-MEET-COUNSEL-AGENT_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior-to] REGISTER CLASS, YOU MEET COUNSEL-AGENT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BICYCLE-FREEWAY-ALRIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

BICYCLE FREEWAY ALRIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRIDGE_LIFEPRINT-ASL.mp4)


### Back {#back}

BRIDGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAKE-YOU-EAT-FROM-TIME-TO-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

CAKE YOU EAT FROM-TIME-TO-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAMPING_LIFEPRINT-ASL.mp4)


### Back {#back}

CAMPING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR--STREET-INTERSECTION--LIGHT---device----CL--C---three_lights_on_a_traffic_signal----what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR, STREET INTERSECTION, LIGHT-[device], CL -C-[three_lights_on_a_traffic_signal], what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COMPLAIN---object-to--protest--_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPLAIN [object to, protest]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CORNER_LIFEPRINT-ASL.mp4)


### Back {#back}

CORNER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUNSEL---advice--influence--_LIFEPRINT-ASL.mp4)


### Back {#back}

COUNSEL-[advice, influence]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEPOSIT_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPOSIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EUROPE_LIFEPRINT-ASL.mp4)


### Back {#back}

EUROPE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Every-2-WEEK--YOU-GET-PAY-CHECK-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

Every-2-WEEK, YOU GET PAY-CHECK YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLAT--flat-long-object-_LIFEPRINT-ASL.mp4)


### Back {#back}

FLAT-(flat long object)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLAT-TIRE--YOU-KNOW-HOW-CHANGE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FLAT-TIRE, YOU KNOW HOW CHANGE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLAT-TIRE_LIFEPRINT-ASL.mp4)


### Back {#back}

FLAT-TIRE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FREEWAY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

FREEWAY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FREEWAY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

FREEWAY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FROM-TIME-TO-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

FROM-TIME-TO-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAS-COST-what_LIFEPRINT-ASL.mp4)


### Back {#back}

GAS COST-what


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GASOLINE-gas-fuel-for-vehicle_LIFEPRINT-ASL.mp4)


### Back {#back}

GASOLINE _ gas _ fuel for vehicle


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOLLAND-HAVE-MANY-FLOWER-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

HOLLAND HAVE MANY FLOWER QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOLLAND---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOLLAND-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOLLAND---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOLLAND-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERSECTION_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERSECTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-level-flat-shelf-plane_LIFEPRINT-ASL.mp4)


### Back {#back}

level flat shelf plane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTOR---machine--engine--_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTOR-[machine, engine]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECTANGLE-a-check-or-cheque-an-envelope-a-card-a-brick_LIFEPRINT-ASL.mp4)


### Back {#back}

RECTANGLE _ a check or cheque _ an envelope _ a card _ a brick


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-GO-EUROPE--WANT-LOOK-AROUND--1-DAY-ENOUGH_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE GO EUROPE, WANT LOOK-AROUND, 1-DAY ENOUGH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TENT---a-large-tent--_LIFEPRINT-ASL.mp4)


### Back {#back}

TENT-[a-large-tent]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TENT---camping--_LIFEPRINT-ASL.mp4)


### Back {#back}

TENT-[camping]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CITY-HAVE-BRIDGE_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CITY HAVE BRIDGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAFFIC--crosswise-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAFFIC (crosswise version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAFFIC--in-traffic-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAFFIC (in traffic version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ARRIVE-CLASS-what-TIME-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ARRIVE CLASS what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRIVE-TRAFFIC--HOW-FEEL_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRIVE TRAFFIC, HOW FEEL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-CAMP-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY CAMP YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-WHERE--APPROXIMATELY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE WHERE, APPROXIMATELY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR-MOTOR-what-SIZE-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR MOTOR what-SIZE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--PERSON-COMPLAIN-MOST-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, PERSON COMPLAIN MOST WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](aslu-YOUR-FAVORITE-PLACE-STUDY-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE PLACE STUDY WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE-CORNER-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE CORNER QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-SISTER--YOU-TWO-PROCEED---get-along--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR SISTER, YOU-TWO PROCEED-[get-along]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson41)


## ASL {#asl}

[ASL](/ox-hugo/aslu-5-DOLLAR-YOU-MIND-you-LOAN-me_LIFEPRINT-ASL.mp4)


### Back {#back}

5-DOLLAR YOU-MIND you-LOAN-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALRIGHT--alright_rights---double-movement-_LIFEPRINT-ASL.mp4)


### Back {#back}

ALRIGHT (alright_rights) (double movement)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALRIGHT--alright_rights---single-movement-_LIFEPRINT-ASL.mp4)


### Back {#back}

ALRIGHT (alright_rights) (single movement)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPOINTMENT-YOU-SLIPPED-MIND-EASY_LIFEPRINT-ASL.mp4)


### Back {#back}

APPOINTMENT YOU SLIPPED-MIND EASY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](aslu-BY-A-HAIR---close!--_LIFEPRINT-ASL.mp4)


### Back {#back}

BY-A-HAIR-[close!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHILDREN-rt--ADULTS-lf--THEIR-rt-RIGHTS--THEIR-lf-RIGHTS--YOU-THINK-SHOULD-SAME_LIFEPRINT-ASL.mp4)


### Back {#back}

CHILDREN-rt, ADULTS-lf, THEIR-rt RIGHTS, THEIR-lf RIGHTS, YOU THINK SHOULD SAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIE--one-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

DIE (one hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIE--two-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

DIE (two hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EGG-Y-O-L-K-YOU-LIKE-SOFT-rt--HARD-lf--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

EGG Y-O-L-K YOU LIKE SOFT-rt, HARD-lf, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAPPEN-YOU-PROMISE-SOMETHING--LATER-YOU-ALWAYS-PROCEED-D-O-I-T-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN YOU PROMISE SOMETHING, LATER YOU ALWAYS PROCEED D-O I-T YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](aslu-HIT---sudden-impact-----Pow!--_LIFEPRINT-ASL.mp4)


### Back {#back}

HIT-[sudden-impact]-[Pow!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOIN_PARTICIPATE_LIFEPRINT-ASL.mp4)


### Back {#back}

JOIN_PARTICIPATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAST-TEST---final_exam----YOU-READY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

LAST-TEST-[final_exam], YOU READY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOAN---borrow--lend--keep--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOAN-[borrow, lend, keep]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST-RIVER-STRAIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST RIVER STRAIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOW-MORNING--YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

NOW-MORNING, YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PHONE-YOU-HAVE-what-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

PHONE YOU HAVE what-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PROMISE-confirm-to-assure-swear-to-guarantee-commit-commitment-pledge_LIFEPRINT-ASL.mp4)


### Back {#back}

PROMISE _ confirm _ to assure _ swear to _ guarantee commit _ commitment _ pledge


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUIT_LIFEPRINT-ASL.mp4)


### Back {#back}

QUIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUOTE-TRAIN-GONE--what-MEAN_LIFEPRINT-ASL.mp4)


### Back {#back}

QUOTE TRAIN-GONE, what-MEAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-READY--version-2-_LIFEPRINT-ASL.mp4)


### Back {#back}

READY (version 2)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-READY---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

READY-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTROOM-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTROOM WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTROOM_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTROOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUIN---spoil--_LIFEPRINT-ASL.mp4)


### Back {#back}

RUIN-[spoil]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMOKE---smoke-a-cigarette--_LIFEPRINT-ASL.mp4)


### Back {#back}

SMOKE-[smoke a cigarette]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOFT_gentle_tender_LIFEPRINT-ASL.mp4)


### Back {#back}

SOFT_gentle_tender


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STRAIGHT_LIFEPRINT-ASL.mp4)


### Back {#back}

STRAIGHT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS--YOU-WANT-QUIT_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS, YOU WANT QUIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](aslu-THOUGHT-DISAPPEAR-forgot-all-about-that-slipped-my-mind-thought-drop-out-head---idiom--_LIFEPRINT-ASL.mp4)


### Back {#back}

THOUGHT-DISAPPEAR _ forgot all about that _ slipped my mind _ thought drop out head _ [idiom]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-RAIN-GAME-CANCEL._LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW RAIN GAME CANCEL.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRAIN-GONE_LIFEPRINT-ASL.mp4)


### Back {#back}

TRAIN-GONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRANSFER---switch-over-to--_LIFEPRINT-ASL.mp4)


### Back {#back}

TRANSFER-[switch-over-to]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BORN-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BORN WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HIT-YOUR-BROTHER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HIT YOUR BROTHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SOMETIMES-PASS-CLASS-BY-A-HAIR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SOMETIMES PASS CLASS BY-A-HAIR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TODAY-N-I-C-E_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TODAY N-I-C-E


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-TRANSFER---switch-over---OTHER-SIGN-CLASS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT TRANSFER-[switch-over] OTHER SIGN CLASS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MIND-I-SMOKE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU-MIND I SMOKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-GRANDMOTHER-DIE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDMOTHER DIE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson42)


## ASL {#asl}

[ASL](/ox-hugo/aslu-4th-of-July_LIFEPRINT-ASL.mp4)


### Back {#back}

4th of July


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BELIEVE_LIFEPRINT-ASL.mp4)


### Back {#back}

BELIEVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHRISTMAS-HABIT---tradition---YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHRISTMAS HABIT-[tradition] YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-CHRISTMAS---Version-3---'C'-palm-up-arc-inside-of-wreath--_LIFEPRINT-ASL.mp4)


### Back {#back}

CHRISTMAS [Version 3 - 'C' palm up arc _ inside of wreath]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHRISTMAS--GIVE---2h-X---YOU-WANT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

CHRISTMAS, GIVE-[2h-X] YOU WANT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHRISTMAS--YOU-LIKE-SNOW-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CHRISTMAS, YOU LIKE SNOW YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLUMBUS-DAY-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

COLUMBUS DAY WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Columbus-Day_LIFEPRINT-ASL.mp4)


### Back {#back}

Columbus Day


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EASTER-HIDE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

EASTER HIDE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EASTER---one_handed_version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EASTER-[one_handed_version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EASTER---two_handed_version--_LIFEPRINT-ASL.mp4)


### Back {#back}

EASTER-[two_handed_version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GHOST_-spirit-soul-phantom_LIFEPRINT-ASL.mp4)


### Back {#back}

GHOST\_ spirit _ soul _ phantom


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HALLOWEEN--WHAT-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

HALLOWEEN, WHAT DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HALLOWEEN_LIFEPRINT-ASL.mp4)


### Back {#back}

HALLOWEEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-HANUKKAH---palm-back-version---Chanukah_LIFEPRINT-ASL.mp4)


### Back {#back}

HANUKKAH [palm back version] _ Chanukah


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HANUKKAH---palm-forward-version---Chanukah_LIFEPRINT-ASL.mp4)


### Back {#back}

HANUKKAH [palm forward version] _ Chanukah


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-HOLIDAY-CELEBRATE-J-A-N-1--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

HOLIDAY CELEBRATE J-A-N 1, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Independence-Day_LIFEPRINT-ASL.mp4)


### Back {#back}

Independence Day


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-Instead-see---https--_youtu.be_k1xfCj56L4M-NATIVE-AMERICAN-HELP-PILGRIM--HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

Instead see - https -_youtu.be_k1xfCj56L4M NATIVE-AMERICAN HELP PILGRIM, HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JULY-4TH-HOLIDAY-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

JULY 4TH HOLIDAY what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Labor-Day_LIFEPRINT-ASL.mp4)


### Back {#back}

Labor Day


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Meleagris-Gallopavo-turkey_LIFEPRINT-ASL.mp4)


### Back {#back}

Meleagris Gallopavo _ turkey


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEMORIAL-DAY-HOLIDAY-WHAT-DAY_LIFEPRINT-ASL.mp4)


### Back {#back}

MEMORIAL-DAY HOLIDAY WHAT DAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Memorial-Day---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Memorial-Day-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Memorial-Day---look-back-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Memorial-Day-[look-back-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Memorial-Day---remember-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Memorial-Day-[remember-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MLK-BIRTHDAY-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

MLK BIRTHDAY WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MLK-BIRTHDAY---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

MLK BIRTHDAY-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-N-O-V-11--HOLIDAY-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

N-O-V 11, HOLIDAY what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-NATIVE-AMERICAN---instead-see---https--_youtu.be_k1xfCj56L4M-_Check-with-local-Native-American-Deaf_LIFEPRINT-ASL.mp4)


### Back {#back}

NATIVE-AMERICAN - instead see - https -_youtu.be_k1xfCj56L4M \_Check with local Native American Deaf


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NATIVE-AMERICAN--Also---https--_youtu.be_dPF5oG90ikc-_Check-with-local-Native-American-Deaf-signers_LIFEPRINT-ASL.mp4)


### Back {#back}

NATIVE-AMERICAN, Also - https -_youtu.be_dPF5oG90ikc \_Check with local Native American Deaf signers


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NATIVE-AMERICAN---American-Indian-----headdress-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

NATIVE-AMERICAN-[American-Indian]-[headdress-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-New-Year's-Day_LIFEPRINT-ASL.mp4)


### Back {#back}

New-Year's-Day


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-New-Year's---D-A-Y--_LIFEPRINT-ASL.mp4)


### Back {#back}

New-Year's-[D-A-Y]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILGRIM---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

PILGRIM-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILGRIM---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

PILGRIM-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PUMPKIN----MELON--_LIFEPRINT-ASL.mp4)


### Back {#back}

PUMPKIN -[MELON]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PUMPKIN-PIE--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

PUMPKIN PIE, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PUMPKIN--GHOST--SCARECROW--WHICH-HOLIDAY-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

PUMPKIN, GHOST, SCARECROW, WHICH HOLIDAY HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Santa-Claus---version-1-----two-handed--_LIFEPRINT-ASL.mp4)


### Back {#back}

Santa Claus-[version-1]-[two-handed]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Santa-Claus---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

Santa Claus-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Santa-Claus---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

Santa Claus-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCARECROW---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCARECROW-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCARECROW---version-2-----fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCARECROW-[version-2]-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING-YOU-EAT-TURKEY_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING YOU EAT TURKEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING-YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING---crest-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING-[crest-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING---THANKS-GIVE-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING-[THANKS-GIVE-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING---wattle-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING-[wattle-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VACATION---time-off-----extended-break-from-working-----version-of-retire-----off-work--_LIFEPRINT-ASL.mp4)


### Back {#back}

VACATION-[time-off]-[extended-break-from-working]-[version-of-retire]-[off-work]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Veterans-Day---V-E-T-----fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Veterans Day-[V-E-T]-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WASHINGTON-BIRTHDAY-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

WASHINGTON BIRTHDAY WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](aslu-Washington's-Birthday_LIFEPRINT-ASL.mp4)


### Back {#back}

Washington's Birthday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BELIEVE-SANTA-CLAUS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BELIEVE SANTA CLAUS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TONIGHT-FREEZE-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TONIGHT FREEZE QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-HOLIDAY-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE HOLIDAY WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson43)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAK-DOWN----collapse--fall-down--fall-apart--_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAK-DOWN -[collapse, fall down, fall apart]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-COMPUTER-FEEL-EMOTION_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN COMPUTER FEEL EMOTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLUB-YOU-INVOLVED--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

CLUB YOU INVOLVED, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COVER---shell--_LIFEPRINT-ASL.mp4)


### Back {#back}

COVER-[shell]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CRACK---crack-in-device-crack-in-wall--_LIFEPRINT-ASL.mp4)


### Back {#back}

CRACK-[crack-in-device _ crack-in-wall]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](aslu-DARN!---oh-gee--gee--nuts!--dang!-shoot!-shucks!--_LIFEPRINT-ASL.mp4)


### Back {#back}

DARN! [oh-gee, gee, nuts!, dang! shoot! shucks!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-SEIZE---occupy---GALLAUDET-WHICH-YEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF SEIZE-[occupy] GALLAUDET WHICH YEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARTH-QUAKE---planet--_LIFEPRINT-ASL.mp4)


### Back {#back}

EARTH-QUAKE-[planet]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EARTHQUAKE-YOU-FINISH-EXPERIENCE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

EARTHQUAKE YOU FINISH EXPERIENCE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMOTION_LIFEPRINT-ASL.mp4)


### Back {#back}

EMOTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOOD--IF-COVER--WILL-POSTPONE-RUIN---spoil---QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

FOOD, IF COVER, WILL POSTPONE RUIN-[spoil] QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRISBEE--YOU-LIKE-PLAY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FRISBEE, YOU LIKE PLAY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRISBEE_LIFEPRINT-ASL.mp4)


### Back {#back}

FRISBEE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-How-SIGN-S-P-I-L-L_LIFEPRINT-ASL.mp4)


### Back {#back}

How-SIGN S-P-I-L-L


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IMPRESSED_LIFEPRINT-ASL.mp4)


### Back {#back}

IMPRESSED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INVOLVED_INCLUDED_LIFEPRINT-ASL.mp4)


### Back {#back}

INVOLVED_INCLUDED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ISLAND--YOU-FINISH-TOUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

ISLAND, YOU FINISH TOUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ISLAND_LIFEPRINT-ASL.mp4)


### Back {#back}

ISLAND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](aslu-LONG-AGO--PERSON-YOU-DON'T-KNOW-HE_SHE-OFFER-RIDE--YOUR-MOM-WARN-YOU-NOT-ACCEPT_LIFEPRINT-ASL.mp4)


### Back {#back}

LONG-AGO, PERSON YOU DON'T-KNOW HE_SHE OFFER RIDE, YOUR MOM WARN YOU NOT ACCEPT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVIE-STAR--YOUR-FAVORITE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVIE STAR, YOUR FAVORITE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PATRONIZE---patron-of-frequent--go-often--choose-to-to-go--_LIFEPRINT-ASL.mp4)


### Back {#back}

PATRONIZE-[patron-of-frequent, go-often, choose-to-to-go]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROLLERSKATE-SMOOTH--CAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

ROLLERSKATE SMOOTH, CAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEIZE---take-over--arrest--_LIFEPRINT-ASL.mp4)


### Back {#back}

SEIZE-[take-over, arrest]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN-OH-GEE-what-MEAN_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN OH-GEE what-MEAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SMOOTH_LIFEPRINT-ASL.mp4)


### Back {#back}

SMOOTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPILL---SPREAD--_LIFEPRINT-ASL.mp4)


### Back {#back}

SPILL-[SPREAD]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STAR_LIFEPRINT-ASL.mp4)


### Back {#back}

STAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORE-YOU-PATRON-of-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

STORE YOU PATRON-of what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-FREEWAY--CAR-BREAK-DOWN--YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU FREEWAY, CAR BREAK-DOWN, YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TATTLE_LIFEPRINT-ASL.mp4)


### Back {#back}

TATTLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARN_LIFEPRINT-ASL.mp4)


### Back {#back}

WARN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-KNOW-ANY-FARMER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU KNOW ANY FARMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LOOK-LIKE-YOUR-MOTHER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LOOK-LIKE YOUR MOTHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TATTLE-GOOD-bodyshift-OR-BAD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TATTLE GOOD bodyshift-OR BAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-TOMORROW-RAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK TOMORROW RAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TRY-IMPRESS-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TRY IMPRESS WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PHONE--phone-WINDOW-CRACK-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PHONE, phone-WINDOW CRACK BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson44)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PROCEED-go-ahead-with-get-along-go-on-move-on_LIFEPRINT-ASL.mp4)


### Back {#back}

PROCEED _ go ahead with _ get along _ go on _ move on


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-become-version_LIFEPRINT-ASL.mp4)


### Back {#back}

become version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---prior_to---OLD-16--YOU-KISS-SOMEONE_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[prior_to] OLD-16, YOU KISS SOMEONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BODY_LIFEPRINT-ASL.mp4)


### Back {#back}

BODY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAREFUL_LIFEPRINT-ASL.mp4)


### Back {#back}

CAREFUL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CARELESS---one-handed-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CARELESS-[one-handed-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CARELESS---two-handed-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CARELESS-[two-handed-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHOOSE-pick-select-choice_LIFEPRINT-ASL.mp4)


### Back {#back}

CHOOSE _ pick _ select _ choice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUGH---C-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COUGH-[C-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COUGH---flat-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

COUGH-[flat-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRAW-HEAD--CAN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

DRAW HEAD, CAN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRUNK---version-2-----tipsy--buzzed--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRUNK-[version-2]-[tipsy, buzzed]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRUNK---Y-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRUNK-[Y-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-SIGN---fluently---ASL-SHOULD-USE-MOUTH-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING SIGN-[fluently] ASL SHOULD USE MOUTH QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-during_LIFEPRINT-ASL.mp4)


### Back {#back}

during


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAR_LIFEPRINT-ASL.mp4)


### Back {#back}

EAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Every-YEAR--WINTER--HEAD-COLD-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

Every-YEAR, WINTER, HEAD-COLD YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fs-L-E-G--leg-_LIFEPRINT-ASL.mp4)


### Back {#back}

fs-L-E-G (leg)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HANDS-BECOME-COLD-TEND-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

HANDS BECOME COLD TEND YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAND_LIFEPRINT-ASL.mp4)


### Back {#back}

HAND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAPPEN-YOU-HEADACHE--MEDICINE-YOU-TAKE-PILL-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN YOU HEADACHE, MEDICINE YOU TAKE-PILL WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEAD-COLD_LIFEPRINT-ASL.mp4)


### Back {#back}

HEAD-COLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEAD_LIFEPRINT-ASL.mp4)


### Back {#back}

HEAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEAR--physical-ability-to-hear-_LIFEPRINT-ASL.mp4)


### Back {#back}

HEAR (physical ability to hear)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEART_LIFEPRINT-ASL.mp4)


### Back {#back}

HEART


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IF-C-U-T-NOT-CLEAN-up--WILL-INFECTION_LIFEPRINT-ASL.mp4)


### Back {#back}

IF C-U-T NOT CLEAN-up, WILL INFECTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INFECTION_LIFEPRINT-ASL.mp4)


### Back {#back}

INFECTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KISS---two-handed-----give-a-kiss-to--_LIFEPRINT-ASL.mp4)


### Back {#back}

KISS-[two-handed]-[give-a-kiss-to]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KISS---two-individuals-kiss--_LIFEPRINT-ASL.mp4)


### Back {#back}

KISS-[two-individuals-kiss]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEG--B-hands-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

LEG (B hands version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEDICINE--medical-_LIFEPRINT-ASL.mp4)


### Back {#back}

MEDICINE (medical)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOUTH_LIFEPRINT-ASL.mp4)


### Back {#back}

MOUTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOSE_LIFEPRINT-ASL.mp4)


### Back {#back}

NOSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILL---TAKE-PILL--G-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PILL-[TAKE-PILL, G hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILL---TAKE-PILL--noun-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PILL-[TAKE-PILL, noun version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PREGNANT---conceive-----get-pregnant--_LIFEPRINT-ASL.mp4)


### Back {#back}

PREGNANT-[conceive]-[get-pregnant]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PREGNANT---late-stage-of-pregnancy--_LIFEPRINT-ASL.mp4)


### Back {#back}

PREGNANT-[late-stage-of-pregnancy]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-satisfy_LIFEPRINT-ASL.mp4)


### Back {#back}

satisfy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINGLE---alone-something-someone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINGLE-[alone-something-someone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKIN--race-skin-color-_LIFEPRINT-ASL.mp4)


### Back {#back}

SKIN (race skin color)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKIN---pinch-skin-on-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKIN-[pinch-skin-on-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STOMACH_LIFEPRINT-ASL.mp4)


### Back {#back}

STOMACH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-BOY--GIRLFRIEND-CARELESS--MAYBE-HAPPEN-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE BOY, GIRLFRIEND CARELESS, MAYBE HAPPEN WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](aslu-SUPPOSE-YOU-COUGH-COUGH--CAN'T-STOP--what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU COUGH COUGH, CAN'T STOP, what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOUR-BODY--CAN-TRADE-OTHER-PERSON-THEIR-BODY--YOU-CHOOSE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOUR BODY, CAN TRADE OTHER PERSON THEIR BODY, YOU CHOOSE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRADE---replace--exchange--_LIFEPRINT-ASL.mp4)


### Back {#back}

TRADE-[replace, exchange]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRIVE-CAREFUL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRIVE CAREFUL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRUNK-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRUNK BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUNG-BROTHER--SISTER-YOU-HAVE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUNG BROTHER, SISTER YOU HAVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUNG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUNG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-EARS--CAN-MOVE---small_back_and_forth_movement---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR EARS, CAN MOVE-[small_back_and_forth_movement] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY-PROCEED---get-along---MOST-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY PROCEED-[get-along] MOST TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HEART-HOW-IMPROVE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HEART HOW IMPROVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOUSE--YOU-SIT--CAN-HEAR-TRAIN-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOUSE, YOU SIT, CAN HEAR TRAIN YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-L-E-G-YOU-BREAK-PAST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR L-E-G YOU BREAK PAST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM-PREGNANT-HOW-MANY-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM PREGNANT HOW-MANY TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NOSE--YOU-SATISFY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NOSE, YOU SATISFY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson45)


## ASL {#asl}

[ASL](aslu-$119.02_LIFEPRINT-ASL.mp4)


### Back {#back}

$119.02


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-$120-MINUS-98-CENTS-EQUAL-HOW-MUCH-_--$119.02--_LIFEPRINT-ASL.mp4)


### Back {#back}

$120 MINUS 98 CENTS EQUAL HOW-MUCH \_[$119.02]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-$6.97_LIFEPRINT-ASL.mp4)


### Back {#back}

$6.97


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu--916--555-4357_LIFEPRINT-ASL.mp4)


### Back {#back}

(916)-555-4357


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-15th-century_LIFEPRINT-ASL.mp4)


### Back {#back}

15th century


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-192743_LIFEPRINT-ASL.mp4)


### Back {#back}

192743


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-1930's_LIFEPRINT-ASL.mp4)


### Back {#back}

1930's


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-1_4-TSP-SALT-DIVIDE-by-TWO-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

1_4 TSP SALT DIVIDE-by TWO EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-2-weeks-from-now_LIFEPRINT-ASL.mp4)


### Back {#back}

2 weeks from now


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-2-WEEK-FUTURE-SATURDAY-YOU-BUSY--lexicalized-_LIFEPRINT-ASL.mp4)


### Back {#back}

2-WEEK-FUTURE SATURDAY YOU BUSY-(lexicalized)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-25-cents_LIFEPRINT-ASL.mp4)


### Back {#back}

25 cents


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-98_LIFEPRINT-ASL.mp4)


### Back {#back}

98


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BANANA_LIFEPRINT-ASL.mp4)


### Back {#back}

BANANA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY--birth-day-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY (birth day version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY---heart-on-chest-ARRIVE-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY-[heart on chest-ARRIVE version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BIRTHDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

BIRTHDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BORN_LIFEPRINT-ASL.mp4)


### Back {#back}

BORN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUSY---lexicalized-fingerspelling-#BUSY-fs-BUSY-B-U-S-Y---_LIFEPRINT-ASL.mp4)


### Back {#back}

BUSY [lexicalized fingerspelling _ #BUSY _ fs-BUSY _ B-U-S-Y ]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-celsius-century_LIFEPRINT-ASL.mp4)


### Back {#back}

celsius century


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CENTS_LIFEPRINT-ASL.mp4)


### Back {#back}

CENTS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIVIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

DIVIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOCUMENT-put-down-on-paper-note-make-a-record-of_LIFEPRINT-ASL.mp4)


### Back {#back}

DOCUMENT _ put down on paper _ note _ make a record of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dollar-DOLLAR---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

dollar _ DOLLAR-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EIGHT-CENT-SUBTRACT-7-CENT-EQUAL-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

EIGHT-CENT SUBTRACT 7-CENT EQUAL HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EIGHT-MONTH-PLUS-FIVE-MONTH-EQUAL-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

EIGHT-MONTH PLUS FIVE-MONTH EQUAL HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EQUAL-tie-fair-justice-_equitable-equity_LIFEPRINT-ASL.mp4)


### Back {#back}

EQUAL _ tie _ fair _ justice \_equitable _ equity


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIVE-DOLLAR-PLUS-FIVE-DOLLAR-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

FIVE-DOLLAR PLUS FIVE-DOLLAR EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRANDPA_LIFEPRINT-ASL.mp4)


### Back {#back}

GRANDPA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRAPES_LIFEPRINT-ASL.mp4)


### Back {#back}

GRAPES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HALF---one-half--1_2--_LIFEPRINT-ASL.mp4)


### Back {#back}

HALF-[one-half, 1_2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-J-O-A-N-of-A-R-C-LIVE-WHICH-CENTURY---15th-----1412--1431--_LIFEPRINT-ASL.mp4)


### Back {#back}

J-O-A-N-of-A-R-C LIVE WHICH CENTURY [15th] [1412--1431]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LBS---pounds-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

LBS-[pounds-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEAF-leaves_LIFEPRINT-ASL.mp4)


### Back {#back}

LEAF-leaves


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIVE---life_lives_alive_survive_living----ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

LIVE-[life_lives_alive_survive_living] (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEET_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

MEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-minus-subtract-take-away_LIFEPRINT-ASL.mp4)


### Back {#back}

minus subtract take away


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MINUS_LIFEPRINT-ASL.mp4)


### Back {#back}

MINUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-MONEY--$3-PLUS-$3.97-EQUAL-HOW-MUCH-_--$6.97--_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY, $3 PLUS $3.97 EQUAL HOW-MUCH \_[$6.97]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MONEY_LIFEPRINT-ASL.mp4)


### Back {#back}

MONEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-month_LIFEPRINT-ASL.mp4)


### Back {#back}

month


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOVE-here_LIFEPRINT-ASL.mp4)


### Back {#back}

MOVE-here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOTE---put-something-down--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOTE-[put-something-down]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOVEMBER_LIFEPRINT-ASL.mp4)


### Back {#back}

NOVEMBER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NUMBER_LIFEPRINT-ASL.mp4)


### Back {#back}

NUMBER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-DOLLAR-DIVIDE-by-TEN-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE DOLLAR DIVIDE-by TEN EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-LB-GRAPE-SUBTRACT-1_2-LB-GRAPE-LEAVES-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE LB GRAPE SUBTRACT 1_2 LB GRAPE LEAVES HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-MORE-PHONE-NUMBER--916--555-4357_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE-MORE PHONE NUMBER (916) 555-4357


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-MORE---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE-MORE [2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ONE-MORE---index-x-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

ONE-MORE [index-x-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PHONE_LIFEPRINT-ASL.mp4)


### Back {#back}

PHONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLUS_LIFEPRINT-ASL.mp4)


### Back {#back}

PLUS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PUT-DOWN-THIS-PHONE-NUMBER--435--555-2034_LIFEPRINT-ASL.mp4)


### Back {#back}

PUT-DOWN THIS PHONE NUMBER (435) 555-2034


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALT_LIFEPRINT-ASL.mp4)


### Back {#back}

SALT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SATURDAY_LIFEPRINT-ASL.mp4)


### Back {#back}

SATURDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOW-me-THIS-NUMBER-192-743._LIFEPRINT-ASL.mp4)


### Back {#back}

SHOW-me THIS NUMBER 192,743.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOW-me_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOW-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEN---double-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TEN [double movement version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEN---single-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TEN [single movement version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING-NOVEMBER-WHICH-WEEK_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING NOVEMBER WHICH WEEK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING---modified-3h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING-[modified-3h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THANKSGIVING---THANKS-GIVE-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THANKSGIVING-[THANKS-GIVE-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS-MEET-HOW-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS MEET HOW OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-this-here---1-handed-version---down-it---something-below-the-signer---down-foot---body-part--_LIFEPRINT-ASL.mp4)


### Back {#back}

this _ here-[1-handed-version] _ down _ it-[something-below-the-signer] _ down _ foot-[body-part]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THREE-TIMES-1_2-LB-BANANA-EQUAL-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

THREE TIMES 1_2 LB BANANA EQUAL HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-THREE-DOLLARS-$3-$3.00_LIFEPRINT-ASL.mp4)


### Back {#back}

THREE-DOLLARS _ $3 _ $3.00


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-times-MULTIPLY---unmarked-WORSE--_LIFEPRINT-ASL.mp4)


### Back {#back}

times _ MULTIPLY [unmarked WORSE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-time_LIFEPRINT-ASL.mp4)


### Back {#back}

time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TWENTY-FIVE-CENTS-SUBTRACT-13-CENTS-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TWENTY-FIVE-CENTS SUBTRACT 13-CENTS EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TWO-WEEKS-SUBTRACT-3-DAY-EQUAL-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TWO-WEEKS SUBTRACT 3-DAY EQUAL WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

WAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-WEEK---TWO-WEEKS_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK - TWO-WEEKS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEK---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEK-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-weight_weigh_pound_LIFEPRINT-ASL.mp4)


### Back {#back}

weight_weigh_pound


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GRADUATE-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GRADUATE WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MOVE-here-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MOVE-here WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WAKE-up-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WAKE-up what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BIRTHDAY-WHAT-MONTH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BIRTHDAY WHAT MONTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](aslu-YOUR-GRANDPA-BORN-1930's_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR GRANDPA BORN 1930's


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MOM--how-OLD_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MOM, how-OLD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TEACHER-WEIGH-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TEACHER WEIGH HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-¼--one-fourth-_LIFEPRINT-ASL.mp4)


### Back {#back}

¼ (one-fourth)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson46)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AIRPORT--HOW-FAR_LIFEPRINT-ASL.mp4)


### Back {#back}

AIRPORT, HOW FAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-airport_airplane_LIFEPRINT-ASL.mp4)


### Back {#back}

airport_airplane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALLOW-permit-permission-let_LIFEPRINT-ASL.mp4)


### Back {#back}

ALLOW _ permit _ permission _ let


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ARRIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

ARRIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-below_basic_beneath_LIFEPRINT-ASL.mp4)


### Back {#back}

below_basic_beneath


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BETTER_LIFEPRINT-ASL.mp4)


### Back {#back}

BETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOSS-coach-captain-chief-head-of-dm---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

BOSS _ coach _ captain _ chief _ head of _ dm-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-VOICE-DURING-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN VOICE DURING CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-check-in_LIFEPRINT-ASL.mp4)


### Back {#back}

check in


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](aslu-DON'T---version_2h---no-more-that's-it---neg---discontinue_LIFEPRINT-ASL.mp4)


### Back {#back}

DON'T-[version_2h] _ no more _ that's it [neg] _ discontinue


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feet-distance_LIFEPRINT-ASL.mp4)


### Back {#back}

feet distance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINE_LIFEPRINT-ASL.mp4)


### Back {#back}

FINE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINISH_LIFEPRINT-ASL.mp4)


### Back {#back}

FINISH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Happen_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

Happen


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEADSET---microphone+earphone--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEADSET-[microphone+earphone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEADSET---studio-type--_LIFEPRINT-ASL.mp4)


### Back {#back}

HEADSET-[studio-type]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HERE_LIFEPRINT-ASL.mp4)


### Back {#back}

HERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Hurry_LIFEPRINT-ASL.mp4)


### Back {#back}

Hurry


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ILLEGAL-forbidden-banned-against-the-law-_prohibit_LIFEPRINT-ASL.mp4)


### Back {#back}

ILLEGAL _ forbidden _ banned _ against the law \_prohibit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-land-plane_LIFEPRINT-ASL.mp4)


### Back {#back}

land plane


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-license_LIFEPRINT-ASL.mp4)


### Back {#back}

license


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEXT-WEEK_LIFEPRINT-ASL.mp4)


### Back {#back}

NEXT-WEEK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](aslu-NOT---don't--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT-[don't]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OVER---across_cross_after--_LIFEPRINT-ASL.mp4)


### Back {#back}

OVER-[across_cross_after]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-passenger---RIDER--_LIFEPRINT-ASL.mp4)


### Back {#back}

passenger [RIDER]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON-YOU-THINK-POLITE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON YOU THINK POLITE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLANE-take-off_LIFEPRINT-ASL.mp4)


### Back {#back}

PLANE-take-off


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POINT-POINTS---sports-and-gaming-related--_LIFEPRINT-ASL.mp4)


### Back {#back}

POINT _ POINTS [sports and gaming related]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POLITE_LIFEPRINT-ASL.mp4)


### Back {#back}

POLITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRIOR-TO_LIFEPRINT-ASL.mp4)


### Back {#back}

PRIOR-TO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PROCEED-go-ahead-with-get-along-go-on-move-on_LIFEPRINT-ASL.mp4)


### Back {#back}

PROCEED _ go ahead with _ get along _ go on _ move on


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-proper---FANCY-official-officially-formally-dignified--_LIFEPRINT-ASL.mp4)


### Back {#back}

proper [FANCY _ official _ officially _ formally _ dignified]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-require_LIFEPRINT-ASL.mp4)


### Back {#back}

require


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RULE----regulation--_LIFEPRINT-ASL.mp4)


### Back {#back}

RULE -[regulation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHOOL-FINISH-YOU-TAKE-OFF---leave---what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHOOL FINISH YOU TAKE-OFF-[leave] what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sign-board-poster_LIFEPRINT-ASL.mp4)


### Back {#back}

sign board poster


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-smoking_LIFEPRINT-ASL.mp4)


### Back {#back}

smoking


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-symbol---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

symbol-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-OFF---leave-----go-----dominant-flat-hand-slaps-palm-down-non-dominant-hand--_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-OFF-[leave]-[go]-[dominant-flat-hand-slaps-palm-down-non-dominant-hand]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEND-to_LIFEPRINT-ASL.mp4)


### Back {#back}

TEND-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-there_LIFEPRINT-ASL.mp4)


### Back {#back}

there


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-SCHOOL-PERMIT-SMOKE_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS SCHOOL PERMIT SMOKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOMORROW-YOUR-SCHEDULE-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

TOMORROW YOUR SCHEDULE what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRANSFER_LIFEPRINT-ASL.mp4)


### Back {#back}

TRANSFER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-visit_LIFEPRINT-ASL.mp4)


### Back {#back}

visit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARN_LIFEPRINT-ASL.mp4)


### Back {#back}

WARN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAVE-NO_LIFEPRINT-ASL.mp4)


### Back {#back}

WAVE-NO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEEKEND-YOU-TEND-to-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

WEEKEND YOU TEND-to what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](aslu-WHATEVER-regardless-doesn't-matter-anyway-that's-immaterial-that's-not-important_LIFEPRINT-ASL.mp4)


### Back {#back}

WHATEVER _ regardless _ doesn't matter _ anyway _ that's immaterial _ that's not important


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WRONG---a-mistake-----an-error--_LIFEPRINT-ASL.mp4)


### Back {#back}

WRONG-[a-mistake]-[an-error]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ACROSS-border---LINE-2h---BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ACROSS border-[LINE-2h] BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BEFORE-GO-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BEFORE GO WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-TRAVEL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY TRAVEL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FLY-BEFORE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FLY BEFORE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-VISIT-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE VISIT WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIVE-ACROSS-RIVER_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIVE ACROSS RIVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-TRAVEL-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER TRAVEL HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-BETTER-FLY--DRIVE-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK BETTER FLY, DRIVE WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-FANCY-CAR-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT FANCY CAR YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR--CAN-PASSENGER-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR, CAN PASSENGER how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DRIVE-LICENSE-POINTS-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DRIVE LICENSE POINTS how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-PLACE-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE PLACE WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-TEACHER-REQUIRE-HOME-WORK-MUCH-QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR TEACHER REQUIRE HOME-WORK MUCH QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson47)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---rhetorical_eyebrows-up-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[rhetorical_eyebrows-up-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---version-1-single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[version-1-single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOM_LIFEPRINT-ASL.mp4)


### Back {#back}

MOM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEACHER_LIFEPRINT-ASL.mp4)


### Back {#back}

TEACHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-which_LIFEPRINT-ASL.mp4)


### Back {#back}

which


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-during_LIFEPRINT-ASL.mp4)


### Back {#back}

during


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEANING_LIFEPRINT-ASL.mp4)


### Back {#back}

MEANING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUESTION-MARK-WIGGLE---QM-wig--_LIFEPRINT-ASL.mp4)


### Back {#back}

QUESTION-MARK-WIGGLE-[QM-wig]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHEDULE_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHEDULE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-afternoon_LIFEPRINT-ASL.mp4)


### Back {#back}

afternoon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-all-total_LIFEPRINT-ASL.mp4)


### Back {#back}

all total


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ask-me_LIFEPRINT-ASL.mp4)


### Back {#back}

ask me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASK-me-R-H-E-T-QUESTION._LIFEPRINT-ASL.mp4)


### Back {#back}

ASK-me R-H-E-T QUESTION.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---previous-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[previous-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](aslu-BEFORE---version----prior-to--beforehand--preceding--coming-before-something-in-time--in-advance-of_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[version], prior-to, beforehand, preceding, coming before something in time, in advance of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-PROVE-YOUR-NAME-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN PROVE YOUR NAME HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR-YOU-CRASH-how-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR YOU CRASH how-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car-CRASH----car-accident--car-wreck--_LIFEPRINT-ASL.mp4)


### Back {#back}

car-CRASH -[car accident, car wreck]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-car_LIFEPRINT-ASL.mp4)


### Back {#back}

car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAT---8-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT-[8-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAT_LIFEPRINT-ASL.mp4)


### Back {#back}

CAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-come-to-here_LIFEPRINT-ASL.mp4)


### Back {#back}

come to here


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-context-sentence-phrase_LIFEPRINT-ASL.mp4)


### Back {#back}

context sentence phrase


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-could_LIFEPRINT-ASL.mp4)


### Back {#back}

could


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISCUSS_LIFEPRINT-ASL.mp4)


### Back {#back}

DISCUSS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG--CAT--YOU-HAVE-EITHER_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG, CAT, YOU HAVE EITHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRAW_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

DRAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EITHER_LIFEPRINT-ASL.mp4)


### Back {#back}

EITHER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-else_other_LIFEPRINT-ASL.mp4)


### Back {#back}

else_other


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY---appreciate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY-[appreciate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EVERY-YEAR-YOU-VACATION_LIFEPRINT-ASL.mp4)


### Back {#back}

EVERY-YEAR YOU VACATION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-every-YEAR---version-----annually--_LIFEPRINT-ASL.mp4)


### Back {#back}

every-YEAR-[version]-[annually]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-expensive_LIFEPRINT-ASL.mp4)


### Back {#back}

expensive


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMILIAR---familiar-with--_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMILIAR-[familiar-with]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for_LIFEPRINT-ASL.mp4)


### Back {#back}

for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FRUSTRATED_LIFEPRINT-ASL.mp4)


### Back {#back}

FRUSTRATED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAS-fuel_LIFEPRINT-ASL.mp4)


### Back {#back}

GAS-fuel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRL_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOOD---well--_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD-[well]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-grocery-food_LIFEPRINT-ASL.mp4)


### Back {#back}

grocery food


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-group-cluster_LIFEPRINT-ASL.mp4)


### Back {#back}

group cluster


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HAVE---1h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HAVE-[1h version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IF-MUST-MATH-PROBLEM-YOU-PREFER-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

IF MUST MATH PROBLEM YOU PREFER WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-if_LIFEPRINT-ASL.mp4)


### Back {#back}

if


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JAIL---1h-version_jailed_prison--_LIFEPRINT-ASL.mp4)


### Back {#back}

JAIL-[1h-version_jailed_prison]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-know_LIFEPRINT-ASL.mp4)


### Back {#back}

know


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIST_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

LIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LP--YOU-KNOW--Are-you-familiar-with-Lifeprint.com-_LIFEPRINT-ASL.mp4)


### Back {#back}

LP, YOU KNOW (Are you familiar with Lifeprint.com)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-math_LIFEPRINT-ASL.mp4)


### Back {#back}

math


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-me---I_ME--_LIFEPRINT-ASL.mp4)


### Back {#back}

me-[I_ME]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST-EXPENSIVE-THING-YOU-OWN-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST EXPENSIVE THING YOU OWN WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NAME_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEED-MUST_-SHOULD_LIFEPRINT-ASL.mp4)


### Back {#back}

NEED _ MUST\_ SHOULD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nick-name_LIFEPRINT-ASL.mp4)


### Back {#back}

nick name


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OTHER-THAN-ME-YOUR-FAVORITE-PERSON-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

OTHER THAN ME YOUR FAVORITE PERSON WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-own_LIFEPRINT-ASL.mp4)


### Back {#back}

own


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-place-into_LIFEPRINT-ASL.mp4)


### Back {#back}

place into


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prefer--favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

prefer, favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRISON---jail--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRISON-[jail]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-problem_LIFEPRINT-ASL.mp4)


### Back {#back}

problem


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PROOF---prove--_LIFEPRINT-ASL.mp4)


### Back {#back}

PROOF-[prove]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-question_LIFEPRINT-ASL.mp4)


### Back {#back}

question


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-R-A-C-E---race-physical-characteristics--_LIFEPRINT-ASL.mp4)


### Back {#back}

R-A-C-E-[race _ physical characteristics]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-race_LIFEPRINT-ASL.mp4)


### Back {#back}

race


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remain_LIFEPRINT-ASL.mp4)


### Back {#back}

remain


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-review-version_LIFEPRINT-ASL.mp4)


### Back {#back}

review version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-review_LIFEPRINT-ASL.mp4)


### Back {#back}

review


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RHET-R-H-E-T-rhetorical_LIFEPRINT-ASL.mp4)


### Back {#back}

RHET _ R-H-E-T _ rhetorical


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-satisfy_LIFEPRINT-ASL.mp4)


### Back {#back}

satisfy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEASON_LIFEPRINT-ASL.mp4)


### Back {#back}

SEASON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sentence-version_LIFEPRINT-ASL.mp4)


### Back {#back}

sentence version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-should_LIFEPRINT-ASL.mp4)


### Back {#back}

should


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-show-me--SHOW-me_LIFEPRINT-ASL.mp4)


### Back {#back}

show me, SHOW-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](aslu-SHOW-me-SENTENCE-USE-SIGN-'W-I-L-L'_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOW-me SENTENCE USE SIGN 'W-I-L-L'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIGN---signing-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIGN-[signing-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sign_board_poster_LIFEPRINT-ASL.mp4)


### Back {#back}

sign_board_poster


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMARIZE_ABBREVIATE_CONDENSE_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMARIZE_ABBREVIATE_CONDENSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-COULD-GO-ANY-WHERE-WORLD-YOU-GO-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE COULD GO ANY WHERE WORLD YOU GO WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-VOICE-DURING-ASL-CLASS-SHOULD-PLACE-INTO-JAIL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU VOICE DURING ASL CLASS SHOULD PLACE-INTO JAIL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-talk-about_LIFEPRINT-ASL.mp4)


### Back {#back}

talk about


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-than_LIFEPRINT-ASL.mp4)


### Back {#back}

than


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THING-thing-resource-stuff-material_LIFEPRINT-ASL.mp4)


### Back {#back}

THING _ thing _ resource _ stuff _ material


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thing_LIFEPRINT-ASL.mp4)


### Back {#back}

thing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-use-version-1_LIFEPRINT-ASL.mp4)


### Back {#back}

use version 1


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-USE--WEAR_LIFEPRINT-ASL.mp4)


### Back {#back}

USE, WEAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-VACATION---holiday_LIFEPRINT-ASL.mp4)


### Back {#back}

VACATION - holiday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-voice_LIFEPRINT-ASL.mp4)


### Back {#back}

voice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEDNESDAY-AFTERNOON-YOUR-SCHEDULE-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

WEDNESDAY AFTERNOON YOUR SCHEDULE what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEDNESDAY_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

WEDNESDAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-do_LIFEPRINT-ASL.mp4)


### Back {#back}

what do


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-KIND---advanced-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

what-KIND-[advanced-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT-KIND_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHERE_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHICH-SEASON-BEFORE-SUMMER_LIFEPRINT-ASL.mp4)


### Back {#back}

WHICH SEASON BEFORE SUMMER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-world_LIFEPRINT-ASL.mp4)


### Back {#back}

world


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-COME-to-here-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU COME-to-here what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DRAW-well---GOOD--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DRAW well-[GOOD]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-DISCUSS-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY DISCUSS WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FEEL-SATISFY-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FEEL SATISFY WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FRUSTRATE-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FRUSTRATE WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-ABBREVIATE-NAME--Do-you-have-a-nick-name-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE ABBREVIATE NAME (Do you have a nick name)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-TALK-ABOUT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE TALK-ABOUT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-RACE-BEFORE-WHAT-KIND_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU RACE BEFORE _ WHAT-KIND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-USE-grocery---FOOD---LIST-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU USE grocery-[FOOD] LIST YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR-GAS--HOW-MANY-REMAIN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR GAS, HOW-MANY REMAIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CLASS-CLASS-YOU-NEED-MORE-REVIEW-FOR-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CLASS CLASS YOU NEED MORE REVIEW FOR WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson48)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MANY-how-MUCH---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MANY _ how-MUCH-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-any_LIFEPRINT-ASL.mp4)


### Back {#back}

any


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-can_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-#BACK---fingerspelled-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

\#BACK-[fingerspelled-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-a-lot_LIFEPRINT-ASL.mp4)


### Back {#back}

a lot


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ask-to-me_LIFEPRINT-ASL.mp4)


### Back {#back}

ask to me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-ASK-to-me-what-FOR!--Why-do-you-ask!-_LIFEPRINT-ASL.mp4)


### Back {#back}

ASK-to-me what-FOR! (Why do you ask!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-beggar_LIFEPRINT-ASL.mp4)


### Back {#back}

beggar


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-broke-financially_LIFEPRINT-ASL.mp4)


### Back {#back}

broke financially


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-budget-verb_LIFEPRINT-ASL.mp4)


### Back {#back}

budget verb


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-business_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

business


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUY_LIFEPRINT-ASL.mp4)


### Back {#back}

BUY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAREFUL_LIFEPRINT-ASL.mp4)


### Back {#back}

CAREFUL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cash--finger-spelled-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

cash (finger-spelled version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-check_LIFEPRINT-ASL.mp4)


### Back {#back}

check


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-crave_LIFEPRINT-ASL.mp4)


### Back {#back}

crave


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CREDIT-CARD--ERASE_LIFEPRINT-ASL.mp4)


### Back {#back}

CREDIT CARD, ERASE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-credit-card_LIFEPRINT-ASL.mp4)


### Back {#back}

credit card


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CREDIT-CARD-card---SQUARE---YOU-HAVE-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

CREDIT-CARD card-[SQUARE] YOU HAVE HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-D-I-V-I-D-E-N-D--what-MEAN_LIFEPRINT-ASL.mp4)


### Back {#back}

D-I-V-I-D-E-N-D, what-MEAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-decrease_LIFEPRINT-ASL.mp4)


### Back {#back}

decrease


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEPOSIT_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPOSIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-do-you-mind_LIFEPRINT-ASL.mp4)


### Back {#back}

do you mind


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-donate-drop-in_LIFEPRINT-ASL.mp4)


### Back {#back}

donate drop in


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-down-payment_LIFEPRINT-ASL.mp4)


### Back {#back}

down payment


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-each_LIFEPRINT-ASL.mp4)


### Back {#back}

each


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-earn_LIFEPRINT-ASL.mp4)


### Back {#back}

earn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fingers-to-lips_LIFEPRINT-ASL.mp4)


### Back {#back}

fingers to lips


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOR-BUY-HOUSE-YOU-NEED-DEPOSIT-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

FOR BUY HOUSE YOU NEED DEPOSIT HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-frugal_LIFEPRINT-ASL.mp4)


### Back {#back}

frugal


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-give-donate_LIFEPRINT-ASL.mp4)


### Back {#back}

give donate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE-FINISH--SCHOOL-LOAN-PAY-B-A-C-K--CAN-PAUSE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE FINISH, SCHOOL LOAN PAY B-A-C-K, CAN PAUSE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-graduate---grad-school--_LIFEPRINT-ASL.mp4)


### Back {#back}

graduate-[grad-school]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOUR_LIFEPRINT-ASL.mp4)


### Back {#back}

HOUR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-MUCH---1-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

how-MUCH-[1-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-BROKE-financially--you-MIND-PAY-FOR-LUNCH_LIFEPRINT-ASL.mp4)


### Back {#back}

I BROKE-financially, you-MIND PAY-FOR LUNCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-MULL-over-BUY-PIZZA--PITCH-in-WHO-RAISE-HAND._LIFEPRINT-ASL.mp4)


### Back {#back}

I MULL-over BUY PIZZA, PITCH-in WHO RAISE HAND.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-I'm-not-telling!---finger-to-lips--_LIFEPRINT-ASL.mp4)


### Back {#back}

I'm not telling! [finger to lips]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INCREASE-raise-get-a-raise-gain-weight-add-an-amount-onto_LIFEPRINT-ASL.mp4)


### Back {#back}

INCREASE _ raise _ get a raise _ gain weight _ add an amount onto


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-inherit_LIFEPRINT-ASL.mp4)


### Back {#back}

inherit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTEREST_LIFEPRINT-ASL.mp4)


### Back {#back}

INTEREST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invest_LIFEPRINT-ASL.mp4)


### Back {#back}

invest


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOAN---borrow--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOAN [borrow]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-loan_LIFEPRINT-ASL.mp4)


### Back {#back}

loan


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-manage-control_LIFEPRINT-ASL.mp4)


### Back {#back}

manage control


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-meal-lunch--eat-noon_LIFEPRINT-ASL.mp4)


### Back {#back}

meal lunch, eat noon


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-money_LIFEPRINT-ASL_1656575513671.mp4)


### Back {#back}

money


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MULL-OVER_LIFEPRINT-ASL.mp4)


### Back {#back}

MULL OVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-NOT-YOUR-BUSINESS!_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT YOUR BUSINESS!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-NYB!---None-of-your-business!--_LIFEPRINT-ASL.mp4)


### Back {#back}

NYB!-[None of your business!]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ORGANIZATION-an-organization_LIFEPRINT-ASL.mp4)


### Back {#back}

ORGANIZATION _ an organization


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-owe_LIFEPRINT-ASL.mp4)


### Back {#back}

owe


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAUSE_LIFEPRINT-ASL.mp4)


### Back {#back}

PAUSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-for_LIFEPRINT-ASL.mp4)


### Back {#back}

pay for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-monthly_LIFEPRINT-ASL.mp4)


### Back {#back}

pay monthly


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-repeatedly_LIFEPRINT-ASL.mp4)


### Back {#back}

pay repeatedly


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-PIZZA-EACH-SLICE-$2-YOU-WANT-HOW-MANY_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA EACH SLICE $2 YOU WANT HOW-MANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PIZZA---version-3--_LIFEPRINT-ASL.mp4)


### Back {#back}

PIZZA-[version-3]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rate-fingerspelled_LIFEPRINT-ASL.mp4)


### Back {#back}

rate fingerspelled


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rate-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

rate version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rate-version-3_LIFEPRINT-ASL.mp4)


### Back {#back}

rate version 3


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rate-version_LIFEPRINT-ASL.mp4)


### Back {#back}

rate version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-reaction---response_ANSWER_reply--_LIFEPRINT-ASL.mp4)


### Back {#back}

reaction-[response_ANSWER_reply]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REDUCE_decrease_LIFEPRINT-ASL.mp4)


### Back {#back}

REDUCE_decrease


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RENT---monthly-every-month--_LIFEPRINT-ASL.mp4)


### Back {#back}

RENT [monthly _ every month]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rich--monetary--plenty-of-money-wealthy-wealth_LIFEPRINT-ASL.mp4)


### Back {#back}

rich (monetary) _ plenty of money _ wealthy _ wealth


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-save_LIFEPRINT-ASL.mp4)


### Back {#back}

save


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-secret_LIFEPRINT-ASL.mp4)


### Back {#back}

secret


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SINGLE---alone-something-someone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SINGLE-[alone-something-someone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-skill_LIFEPRINT-ASL.mp4)


### Back {#back}

skill


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-slice_LIFEPRINT-ASL.mp4)


### Back {#back}

slice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-someday_LIFEPRINT-ASL.mp4)


### Back {#back}

someday


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SQUANDER-money---spend-all-the-money--blow-it-all----version-03-_LIFEPRINT-ASL.mp4)


### Back {#back}

SQUANDER-money [spend all the money, blow it all] (version 03)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SQUANDER-money++---blow-money--spend-money----version-01-_LIFEPRINT-ASL.mp4)


### Back {#back}

SQUANDER-money++ [blow money, spend money] (version 01)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SQUANDER-money++---blow-money--spend-money----version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

SQUANDER-money++ [blow money, spend money] (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-stock_investments_LIFEPRINT-ASL.mp4)


### Back {#back}

stock_investments


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-SEE-BEGGAR-YOU-DONATE---drop-in---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE SEE BEGGAR YOU DONATE-[drop-in] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEND_LIFEPRINT-ASL.mp4)


### Back {#back}

TEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-That's-personal_private!---SECRET--_LIFEPRINT-ASL.mp4)


### Back {#back}

That's personal_private! [SECRET]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNTIL-NOW---SINCE-----have-been-----so-far-----up-to-now-----up-to-this-point--_LIFEPRINT-ASL.mp4)


### Back {#back}

UNTIL-NOW-[SINCE]-[have-been]-[so-far]-[up-to-now]-[up-to-this-point]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-want_LIFEPRINT-ASL.mp4)


### Back {#back}

want


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](aslu-what-MEAN--What-is-the-meaning-of...'-_LIFEPRINT-ASL.mp4)


### Back {#back}

what-MEAN (What is the meaning of...')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BANK-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BANK NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BUDGET---verb---CAREFUL-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BUDGET-[verb] CAREFUL YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DONATE-MONEY-ORGANIZATION-ANY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DONATE MONEY ORGANIZATION ANY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EARN-HOUR-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EARN HOUR HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-BUDGET---noun---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE BUDGET-[noun] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-C-A-S-H-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE C-A-S-H YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-SAVE-ACCOUNT-YOU--ASL---Do-you-have-a-savings-account-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE SAVE ACCOUNT YOU (ASL) (Do you have a savings account)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-INVEST-S-T-O-C-K-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU INVEST S-T-O-C-K YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-OWE-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU OWE HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PAST-BORROW-MONEY-FOR-BUY-SOMETHING-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PAST BORROW MONEY FOR BUY SOMETHING YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SKILL-manage---CONTROL---MONEY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SKILL manage-[CONTROL] MONEY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-SOMEDAY-YOU-INHERIT-a-lot-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK SOMEDAY YOU INHERIT-a-lot YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-RICH-SOMEDAY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT RICH SOMEDAY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR--YOU-PAY-MONTHLY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR, YOU PAY MONTHLY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CHECK-ACCOUNT-BALANCE-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CHECK ACCOUNT BALANCE HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CREDIT-CARD-INTEREST-R-A-T-E-PERCENT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CREDIT CARD INTEREST R-A-T-E PERCENT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CREDIT-CARD-YOU-PAY-OFF-EACH-MONTH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CREDIT CARD YOU PAY-OFF EACH MONTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CREDIT-CARD-YOU-DEBT---owe---HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CREDIT-CARD YOU DEBT-[owe] HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-DEBT-INCREASE-DECREASE-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR DEBT INCREASE DECREASE WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-MONEY-YOU-EARN-INTEREST_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR MONEY YOU EARN INTEREST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-R-E-N-T-INCREASE-UP-TO-NOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR R-E-N-T INCREASE UP-TO-NOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson49)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BILL---OWE--DEBT--_LIFEPRINT-ASL.mp4)


### Back {#back}

BILL [OWE, DEBT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TEND-FRUGAL--spend---lots_2h-from-both-pockets----WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TEND FRUGAL, spend-[lots_2h-from-both-pockets], WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL-CLASS-PARTY-you-MIND-TREAT---pay-for-ALL--_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL CLASS PARTY you-MIND TREAT-[pay-for-ALL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL-CLUB-FUND-RAISER-SHOULD-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL CLUB FUND-RAISER SHOULD what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL-TEACHER--YOU-PLAN-BRIBE-FOR-A-grade-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL TEACHER, YOU PLAN BRIBE FOR A-grade YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASSISTANT-aide_LIFEPRINT-ASL.mp4)


### Back {#back}

ASSISTANT _ aide


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-become-version_LIFEPRINT-ASL.mp4)


### Back {#back}

become version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BELOW_LESS-THAN_LIFEPRINT-ASL.mp4)


### Back {#back}

BELOW_LESS-THAN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BUY-CAR--YOU-STORE-up-PAY---C-hand_large-sum---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

BUY CAR, YOU STORE-up PAY-[C-hand_large-sum] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAN-YOU-CHANGE-1-DOLLAR-FOR-FOUR-QUARTER_LIFEPRINT-ASL.mp4)


### Back {#back}

CAN YOU CHANGE 1 DOLLAR FOR FOUR QUARTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAR--YOU-WANT-BUY-NEW--used---SECOND-HAND--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAR, YOU WANT BUY NEW, used-[SECOND-HAND]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHANGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COLLEGE-LOAN-YOU-DEBT-go-into---1_B_hands---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

COLLEGE LOAN YOU DEBT-go-into-[1_B_hands] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-comfortable_LIFEPRINT-ASL.mp4)


### Back {#back}

comfortable


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-compare_LIFEPRINT-ASL.mp4)


### Back {#back}

compare


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-complex---COMPLICATED--_LIFEPRINT-ASL.mp4)


### Back {#back}

complex-[COMPLICATED]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CONFLICT---contrast-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CONFLICT [contrast version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-debt-go-into_LIFEPRINT-ASL.mp4)


### Back {#back}

debt go into


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-depend_LIFEPRINT-ASL.mp4)


### Back {#back}

depend


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-earn-small_limited-earning_LIFEPRINT-ASL.mp4)


### Back {#back}

earn small_limited earning


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FINANCIAL-AID-YOU-WINDFALL---2hV---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FINANCIAL AID YOU WINDFALL-[2hV] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-financial-money_LIFEPRINT-ASL.mp4)


### Back {#back}

financial money


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fundraiser-money-earn_LIFEPRINT-ASL.mp4)


### Back {#back}

fundraiser money earn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-SHOPPING--YOU-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

GO SHOPPING, YOU LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](aslu-I-CAN'T-SHOPPING.-MY-BANK-NEGATIVE-WILL!_LIFEPRINT-ASL.mp4)


### Back {#back}

I CAN'T SHOPPING. MY BANK NEGATIVE WILL!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-insufficient-funds_negative_bounce-off_LIFEPRINT-ASL.mp4)


### Back {#back}

insufficient funds_negative_bounce off


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](aslu-I_me-SEARCH-APT-LESS-THAN-$800-MONTH_LIFEPRINT-ASL.mp4)


### Back {#back}

I_me SEARCH APT LESS-THAN $800 MONTH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](aslu-I_me-WILLING-PAY-MAXIMUM-$1-000_LIFEPRINT-ASL.mp4)


### Back {#back}

I_me WILLING PAY MAXIMUM $1,000


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-layaway-plan---b--hand-slide-off-palm--_LIFEPRINT-ASL.mp4)


### Back {#back}

layaway plan [b- hand-slide-off-palm]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](aslu-lease---SIGNATURE_contract---CAN'T-LONGER-THAN-6-MONTHS_LIFEPRINT-ASL.mp4)


### Back {#back}

lease-[SIGNATURE_contract] CAN'T LONGER THAN 6-MONTHS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-longer-than_LIFEPRINT-ASL.mp4)


### Back {#back}

longer than


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAGAZINE-booklet-pamphlet_LIFEPRINT-ASL.mp4)


### Back {#back}

MAGAZINE _ booklet _ pamphlet


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAGAZINE--YOU-SUBSCRIBE-ANY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

MAGAZINE, YOU SUBSCRIBE ANY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-many-different-options_LIFEPRINT-ASL.mp4)


### Back {#back}

many different options


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-a-hand-thumb-slide-version_LIFEPRINT-ASL.mp4)


### Back {#back}

pay a hand thumb slide version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-large-sum---c-hand-shape-slide-off-palm--_LIFEPRINT-ASL.mp4)


### Back {#back}

pay large sum [c-hand-shape-slide-off-palm]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-major_LIFEPRINT-ASL.mp4)


### Back {#back}

pay major


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-off_LIFEPRINT-ASL.mp4)


### Back {#back}

pay off


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pay-repeatedly---index-finger-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

pay repeatedly [index finger version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](aslu-pay-repeatedly_alimony_allowance---thumb-slide-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

pay repeatedly_alimony_allowance [thumb slide version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY-me_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY-me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAY_LIFEPRINT-ASL.mp4)


### Back {#back}

PAY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POOR_LIFEPRINT-ASL.mp4)


### Back {#back}

POOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rising-cost-of-living_LIFEPRINT-ASL.mp4)


### Back {#back}

rising cost of living


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROOMMATE-WE-2-SHARE-COST_LIFEPRINT-ASL.mp4)


### Back {#back}

ROOMMATE WE-2 SHARE COST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAVE-PRESERVE-STORE--storage--preservation-of_LIFEPRINT-ASL.mp4)


### Back {#back}

SAVE _ PRESERVE _ STORE-(storage) _ preservation of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-share_LIFEPRINT-ASL.mp4)


### Back {#back}

share


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOPPING---BUY++--_LIFEPRINT-ASL.mp4)


### Back {#back}

SHOPPING [BUY++]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPEND--pay--treat-to----A-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SPEND, pay, treat to, [A-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-spendthrift--blow-all-your-money--burn-through-your-money--squander--big-spender_LIFEPRINT-ASL.mp4)


### Back {#back}

spendthrift, blow all your money, burn through your money, squander, big spender


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-statement_PAPER_LIFEPRINT-ASL.mp4)


### Back {#back}

statement_PAPER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORE-HAVE-MANY-DIFFERENT+-CAR-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

STORE HAVE MANY-DIFFERENT+ CAR WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUBSCRIBE---subscription_receive-regularly_welfare-payment_grant_government-dole_ssi--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUBSCRIBE-[subscription_receive-regularly_welfare-payment_grant_government-dole_ssi]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-treat-pay-for-all_LIFEPRINT-ASL.mp4)


### Back {#back}

treat pay for all


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up-to-maximum_LIFEPRINT-ASL.mp4)


### Back {#back}

up to maximum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-used-second-hand_LIFEPRINT-ASL.mp4)


### Back {#back}

used second hand


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-value_LIFEPRINT-ASL.mp4)


### Back {#back}

value


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BECOME-OLD--RISING-cost-of-living--YOU-PLAN-manage---CONTROL---HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BECOME OLD, RISING-cost-of-living, YOU PLAN manage-[CONTROL] HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-BUY-FOOD-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BUY FOOD WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DEPEND-PARENTS-FOR-PAY-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DEPEND PARENTS FOR PAY COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GROW-UP-YOUR-PARENTS-MONEY-GIVE-to-you-repeatedly---allowance---QM-wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GROW-UP YOUR PARENTS MONEY GIVE-to-you-repeatedly-[allowance] QM-wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TEND-to-COMPARE-PRICE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TEND-to COMPARE PRICE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-BUY-CAR-COMPLEX--EASY--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK BUY CAR COMPLEX, EASY, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BANK--YOU-WITHDRAW-MONEY-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BANK, YOU WITHDRAW MONEY HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR-NOW-VALUE---worth--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR NOW VALUE-[worth]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PARENTS-POOR--COMFORTABLE--RICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PARENTS POOR, COMFORTABLE, RICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson50)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ANSWER_respond_response_LIFEPRINT-ASL.mp4)


### Back {#back}

ANSWER_respond_response


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](aslu-ASIDE-put-that-aside-moving-on-and-then-the-next-let's-not-focus-on-that-push-to-side_LIFEPRINT-ASL.mp4)


### Back {#back}

ASIDE _ put that aside _ moving on _ and then the next _ let's not focus on that _ push to side


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE-MARRY--YOU-THINK-LONG-ENGAGEMENT-IMPORTANT-Question-wiggle_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE MARRY, YOU THINK LONG ENGAGEMENT IMPORTANT Question-wiggle


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEFORE---previous-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[previous-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](aslu-BEFORE---version----prior-to--beforehand--preceding--coming-before-something-in-time--in-advance-of_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-[version], prior-to, beforehand, preceding, coming before something in time, in advance of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOYFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

BOYFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BOY_LIFEPRINT-ASL.mp4)


### Back {#back}

BOY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-break-up--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

break-up (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-date-dating_LIFEPRINT-ASL.mp4)


### Back {#back}

date dating


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-decide_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

decide


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DISCUSS_LIFEPRINT-ASL.mp4)


### Back {#back}

DISCUSS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](aslu-don't-WANT_LIFEPRINT-ASL.mp4)


### Back {#back}

don't-WANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-embarrass---version-----idiomatic--_LIFEPRINT-ASL.mp4)


### Back {#back}

embarrass-[version]-[idiomatic]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-embarrassed_LIFEPRINT-ASL.mp4)


### Back {#back}

embarrassed


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-engagement_LIFEPRINT-ASL.mp4)


### Back {#back}

engagement


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-essential---IMPORTANT--_LIFEPRINT-ASL.mp4)


### Back {#back}

essential-[IMPORTANT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fear_afraid_scare-scared_LIFEPRINT-ASL.mp4)


### Back {#back}

fear_afraid_scare scared


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feel_LIFEPRINT-ASL.mp4)


### Back {#back}

feel


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-find-out_LIFEPRINT-ASL.mp4)


### Back {#back}

find out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FOR-DATE-YOU-LIKE-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

FOR DATE YOU LIKE what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRLFRIEND_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRLFRIEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GIRL_LIFEPRINT-ASL.mp4)


### Back {#back}

GIRL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GO-to_LIFEPRINT-ASL.mp4)


### Back {#back}

GO-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-have_LIFEPRINT-ASL.mp4)


### Back {#back}

have


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-him_her_LIFEPRINT-ASL.mp4)


### Back {#back}

him_her


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HONEYMOON-YOU-WANT-GO-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

HONEYMOON YOU WANT GO WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HONEYMOON_LIFEPRINT-ASL.mp4)


### Back {#back}

HONEYMOON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOP-around---try-different-things---jump-around-hop-around-move-from-place-to-place-flighty_LIFEPRINT-ASL.mp4)


### Back {#back}

HOP-around-[try-different-things] _ jump around _ hop around _ move from place to place _ flighty


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-how-long_LIFEPRINT-ASL.mp4)


### Back {#back}

how long


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](aslu-HOW-YOU-SINCE---up-to-now_have-been----How-have-you-been!-_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW YOU SINCE-[up-to-now_have-been] (How have you been!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IF-EMBARRASSED--NOT-NEED-ANSWER._LIFEPRINT-ASL.mp4)


### Back {#back}

IF EMBARRASSED, NOT NEED ANSWER.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](aslu-IF-YOU-not-WANT-DISCUSS-INFORM-me.--If-you-don't-walk-to-talk-about-it-let-me-know.-_LIFEPRINT-ASL.mp4)


### Back {#back}

IF YOU not-WANT DISCUSS INFORM-me. (If you don't walk to talk about it let me know.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Inform-me.-Let-me-know.--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

Inform me. _ Let me know. (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INFORM-me---1h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

INFORM-me-[1h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LONG----length--_LIFEPRINT-ASL.mp4)


### Back {#back}

LONG -[length]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-longest_LIFEPRINT-ASL.mp4)


### Back {#back}

longest


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAJOR---academic---main-discipline-field-line-of-work-career_LIFEPRINT-ASL.mp4)


### Back {#back}

MAJOR [academic] _ main _ discipline _ field _ line of work _ career


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MARRIAGE-marry-married_LIFEPRINT-ASL.mp4)


### Back {#back}

MARRIAGE-marry-married


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOST_LIFEPRINT-ASL.mp4)


### Back {#back}

MOST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MULL-OVER_LIFEPRINT-ASL.mp4)


### Back {#back}

MULL OVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEED-MUST_-SHOULD_LIFEPRINT-ASL.mp4)


### Back {#back}

NEED _ MUST\_ SHOULD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OK_LIFEPRINT-ASL.mp4)


### Back {#back}

OK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR_LIFEPRINT-ASL.mp4)


### Back {#back}

OR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PAST-before-now-previously-prior-to-this-point-in-time-ago_LIFEPRINT-ASL.mp4)


### Back {#back}

PAST _ before now _ previously _ prior to this point in time _ ago


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PROBLEM----difficulty--_LIFEPRINT-ASL.mp4)


### Back {#back}

PROBLEM -[difficulty]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-proceed_LIFEPRINT-ASL.mp4)


### Back {#back}

proceed


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-request---ASK--_LIFEPRINT-ASL.mp4)


### Back {#back}

request-[ASK]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-search_look-for_seek_LIFEPRINT-ASL.mp4)


### Back {#back}

search_look for_seek


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-serious_LIFEPRINT-ASL.mp4)


### Back {#back}

serious


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-situation_LIFEPRINT-ASL.mp4)


### Back {#back}

situation


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOME---something_someone_single_just_alone--_LIFEPRINT-ASL.mp4)


### Back {#back}

SOME-[something_someone_single_just_alone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sticky_LIFEPRINT-ASL.mp4)


### Back {#back}

sticky


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-SOMEONE-REQUEST-YOU-DATE--YOU-MULL-OVER-long-BEFORE-ANSWER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE SOMEONE REQUEST YOU DATE, YOU MULL-OVER-long BEFORE ANSWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOU-FIND-OUT-FIANCÉ_FIANCÉE-DRUG-PROBLEM--YOU-PROCEED-MARRY_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOU FIND-OUT FIANCÉ_FIANCÉE DRUG PROBLEM, YOU PROCEED MARRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-YOUR-PARTNER-REQUEST-YOU-put-ASIDE-YOUR-CAREER--YOU-WILLING_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE YOUR PARTNER REQUEST YOU put-ASIDE YOUR CAREER, YOU WILLING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWEETHEART_LIFEPRINT-ASL.mp4)


### Back {#back}

SWEETHEART


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-UP-ASL-FOR-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-UP ASL FOR-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TEND_LIFEPRINT-ASL.mp4)


### Back {#back}

TEND


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THINK_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

THINK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC----title_subject_theme--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC- [title_subject_theme]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UNTIL-NOW---SINCE-----have-been-----so-far-----up-to-now-----up-to-this-point--_LIFEPRINT-ASL.mp4)


### Back {#back}

UNTIL-NOW-[SINCE]-[have-been]-[so-far]-[up-to-now]-[up-to-this-point]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-two-DISCUSS-STICKY-SUBJECT--OK--I-want-to-discuss-a-sticky-topic-okay-_LIFEPRINT-ASL.mp4)
[ASL](/ox-hugo/aslu-WE-two-DISCUSS-STICKY-SUBJECT--OK--I-want-to-discuss-a-sticky-topic-okay-_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-two DISCUSS STICKY SUBJECT, OK (I want to discuss a sticky topic okay)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-we-TWO_LIFEPRINT-ASL.mp4)


### Back {#back}

we-TWO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEDDING----to-WED--_LIFEPRINT-ASL.mp4)


### Back {#back}

WEDDING -[to WED]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WIFE_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

WIFE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WITH-together-side-by-side-alongside-beside_LIFEPRINT-ASL.mp4)


### Back {#back}

WITH _ together _ side-by-side _ alongside _ beside


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-would-like---want--_LIFEPRINT-ASL.mp4)


### Back {#back}

would-like-[want]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DATE-ANYONE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DATE ANYONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DATE-YOU-TEND-HOP-AROUND---or---stick-with---PATRON---ONE-PERSON-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DATE YOU TEND HOP-AROUND [or] stick-with-[PATRON] ONE PERSON WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DECIDE-BREAK-up-what-FOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DECIDE BREAK-up what-FOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-SWEETHEART-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE SWEETHEART YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-MARRIED-are-YOU--ARE-YOU-MARRIED-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU MARRIED are-YOU (ARE YOU MARRIED)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SEARCH---look-for---SOMEONE-FOR-MARRY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SEARCH-[look-for] SOMEONE FOR MARRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TOGETHER---with-long-term_go-steady---SOMEONE-are-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TOGETHER-[with-long-term_go-steady] SOMEONE are-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-you-two_LIFEPRINT-ASL.mp4)


### Back {#back}

you two


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-WEDDING-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT WEDDING WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TWO-PLAN-CONTINUE-TOGETHER--Are-the-two-of-you-in-a-serious-relationship-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU-TWO PLAN CONTINUE TOGETHER (Are the two of you in a serious relationship)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-BOY-FRIEND-YOU-TWO--MOST-PATIENT-WHO-YOU--HIM_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR BOY-FRIEND YOU-TWO, MOST PATIENT WHO YOU, HIM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-LONGEST-RELATIONSHIP--HOW-LONG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR LONGEST RELATIONSHIP, HOW-LONG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson51)


## ASL {#asl}

[ASL](/ox-hugo/aslu-average_median_LIFEPRINT-ASL.mp4)


### Back {#back}

average_median


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bad-extremely-bad-very-bad_LIFEPRINT-ASL.mp4)


### Back {#back}

bad _ extremely bad _ very bad


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATTERY--ELECTRIC_LIFEPRINT-ASL.mp4)


### Back {#back}

BATTERY, ELECTRIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bored_LIFEPRINT-ASL.mp4)


### Back {#back}

bored


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAK-in----breaking-in--break-and-enter--break-into--_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAK-in -[breaking in, break and enter, break into]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cause_LIFEPRINT-ASL.mp4)


### Back {#back}

cause


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEAP_INEXPENSIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEAP_INEXPENSIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cover-book_LIFEPRINT-ASL.mp4)


### Back {#back}

cover book


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DROP_LIFEPRINT-ASL.mp4)


### Back {#back}

DROP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-expensive_LIFEPRINT-ASL.mp4)


### Back {#back}

expensive


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRST_primary_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRST_primary


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GRADUATE-FINISH--GRAD-SCHOOL---or---WORK-YOU-VACILLATE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

GRADUATE FINISH, GRAD-SCHOOL [or] WORK YOU VACILLATE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-graduate---grad-school--_LIFEPRINT-ASL.mp4)


### Back {#back}

graduate-[grad-school]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-host---TAKE-up_adopt_evaporate--_LIFEPRINT-ASL.mp4)


### Back {#back}

host-[TAKE-up_adopt_evaporate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](aslu-Huge!-very-large-very-big---inflected-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Huge! _ very large _ very big [inflected version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-included---INVOLVE---involved_involves_LIFEPRINT-ASL.mp4)


### Back {#back}

included-[INVOLVE]-involved_involves


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERPRETER-PREPARE-PROGRAM-good-REPUTATION-WHERE_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERPRETER PREPARE PROGRAM good-REPUTATION WHERE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-land-lord_LIFEPRINT-ASL.mp4)


### Back {#back}

land lord


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-later-on-TIME---transition-bent-hand---after-a-while-time-went-by-then-time-passed_LIFEPRINT-ASL.mp4)


### Back {#back}

later-on _ TIME-[transition-bent-hand] _ after a while _ time went by _ then _ time passed


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK---looking-over--_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-[looking over]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOUSY_LIFEPRINT-ASL.mp4)


### Back {#back}

LOUSY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-neighborhood_area_LIFEPRINT-ASL.mp4)


### Back {#back}

neighborhood_area


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-not-bad_LIFEPRINT-ASL.mp4)


### Back {#back}

not bad


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-not-enough_LIFEPRINT-ASL.mp4)


### Back {#back}

not enough


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OTHER-CLASS-YOU-TAKE-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

OTHER CLASS YOU TAKE WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-program_LIFEPRINT-ASL.mp4)


### Back {#back}

program


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUIET_LIFEPRINT-ASL.mp4)


### Back {#back}

QUIET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REASON_LIFEPRINT-ASL.mp4)


### Back {#back}

REASON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](aslu-RECENT-TEST-YOU-BAD!-what-REASON_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT TEST YOU BAD! what-REASON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT-NEAR-HERE-HAVE-GOOD-SERVICE--what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT NEAR HERE HAVE GOOD SERVICE, what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESTAURANT_LIFEPRINT-ASL.mp4)


### Back {#back}

RESTAURANT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](aslu-ROOMY---CL---Elbow----flap-elbows-upward--_LIFEPRINT-ASL.mp4)


### Back {#back}

ROOMY [CL - Elbow -- flap elbows upward]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rural_country-area_LIFEPRINT-ASL.mp4)


### Back {#back}

rural_country area


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SERVICE_LIFEPRINT-ASL.mp4)


### Back {#back}

SERVICE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SOMEONE-BREAK-INTO-YOUR-APT-YOU-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

SOMEONE BREAK-INTO YOUR APT YOU BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPORT-loyal-to-advocate-back-allegiance_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPORT _ loyal to _ advocate _ back _ allegiance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-swell_fine_neat_LIFEPRINT-ASL.mp4)


### Back {#back}

swell_fine_neat


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-think_ponder_LIFEPRINT-ASL.mp4)


### Back {#back}

think_ponder


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-training-practice_LIFEPRINT-ASL.mp4)


### Back {#back}

training practice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TROUBLE---repeatedly--_LIFEPRINT-ASL.mp4)


### Back {#back}

TROUBLE-[repeatedly]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](aslu-VACILLATE-ambivalent-'on-the-fence'-'can't-decide'_LIFEPRINT-ASL.mp4)


### Back {#back}

VACILLATE _ ambivalent _ 'on the fence' _ 'can't decide'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-view_LIFEPRINT-ASL.mp4)


### Back {#back}

view


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAITER-I-SHOULD-TIP-how-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

WAITER I SHOULD TIP how-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GRADUATE-AFTER---from-then-on---YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GRADUATE AFTER-[from-then-on] YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-you-prefer-live-city-or-country-area_LIFEPRINT-ASL.mp4)


### Back {#back}

you prefer live city or country area


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SUPPORT-G-U-N-CONTROL-LAW_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SUPPORT G-U-N CONTROL LAW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-HAVE-G-U-N-WILL-CAUSE-TROUBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK HAVE G-U-N WILL CAUSE TROUBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-THINK-ABOUT-DROP-THIS-CLASS_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU THINK-ABOUT DROP THIS CLASS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-APT-CHEAP--AVERAGE--EXPENSIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR APT CHEAP, AVERAGE, EXPENSIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-APT-LARGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR APT LARGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-APT-VIEW-LOUSY--NOT-BAD--SWELL--WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR APT VIEW LOUSY, NOT-BAD, SWELL, WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK-COVER-what-COLOR_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK COVER what-COLOR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY--WHO-ELSE-SIGN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY, WHO ELSE SIGN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FIRST-ASL-TEACHER-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FIRST ASL TEACHER WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-LANDLORD-FRIENDLY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR LANDLORD FRIENDLY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-NEIGHBORHOOD-QUIET_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR NEIGHBORHOOD QUIET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-RENT-INCLUDE-HEAT--ELECTRIC_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR RENT INCLUDE HEAT, ELECTRIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson52)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PATIENT---patience--_LIFEPRINT-ASL.mp4)


### Back {#back}

PATIENT-[patience]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-arrange---MOVE-around_organize-things_LIFEPRINT-ASL.mp4)


### Back {#back}

arrange-[MOVE-around_organize-things


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-avoid_LIFEPRINT-ASL.mp4)


### Back {#back}

avoid


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bandage---band-aid-tape-bandage----version-_LIFEPRINT-ASL.mp4)


### Back {#back}

bandage [band-aid _ tape bandage] (version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bandage---tape-bandage--_LIFEPRINT-ASL.mp4)


### Back {#back}

bandage [tape-bandage]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BEE-STING-YOU-ALLERGIC_LIFEPRINT-ASL.mp4)


### Back {#back}

BEE STING YOU ALLERGIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bee_LIFEPRINT-ASL.mp4)


### Back {#back}

bee


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BREAK---broken_busted--_LIFEPRINT-ASL.mp4)


### Back {#back}

BREAK-[broken_busted]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLEAN-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

CLEAN-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cut-slice_LIFEPRINT-ASL.mp4)


### Back {#back}

cut slice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CUT_LIFEPRINT-ASL.mp4)


### Back {#back}

CUT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DENTIST_LIFEPRINT-ASL.mp4)


### Back {#back}

DENTIST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor-version-2_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor version 2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-doctor_LIFEPRINT-ASL.mp4)


### Back {#back}

doctor


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXERCISE_LIFEPRINT-ASL.mp4)


### Back {#back}

EXERCISE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-get-up-stand-up-stand_LIFEPRINT-ASL.mp4)


### Back {#back}

get up _ stand up _ stand


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-headache_LIFEPRINT-ASL.mp4)


### Back {#back}

headache


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-heal-strong_LIFEPRINT-ASL.mp4)


### Back {#back}

heal strong


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-injure-injury-PAIN---verb-form--_LIFEPRINT-ASL.mp4)


### Back {#back}

injure-injury-PAIN-[verb-form]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INTERMISSION-break-hiatus_LIFEPRINT-ASL.mp4)


### Back {#back}

INTERMISSION _ break _ hiatus


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEDICINE--YOU-ALLERGIC-ANY_LIFEPRINT-ASL.mp4)


### Back {#back}

MEDICINE, YOU ALLERGIC ANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nurse_LIFEPRINT-ASL.mp4)


### Back {#back}

nurse


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OPPOSITE_LIFEPRINT-ASL.mp4)


### Back {#back}

OPPOSITE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PASS-OUT---2h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PASS-OUT-[2h-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-patient_LIFEPRINT-ASL.mp4)


### Back {#back}

patient


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PILL---TAKE-PILL--G-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

PILL-[TAKE-PILL, G hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRESSURE---stress--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRESSURE-[stress]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PREVENT-HEADACHE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

PREVENT HEADACHE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REST-relax-leisure_LIFEPRINT-ASL.mp4)


### Back {#back}

REST _ relax _ leisure


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHOWER_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

SHOWER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SICK_LIFEPRINT-ASL.mp4)


### Back {#back}

SICK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sore-throat_LIFEPRINT-ASL.mp4)


### Back {#back}

sore throat


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SORE-THROAT--TAKE-CARE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

SORE-THROAT, TAKE-CARE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STING--TAKE-CARE-OF-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

STING, TAKE-CARE-OF HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sting_LIFEPRINT-ASL.mp4)


### Back {#back}

sting


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUFFER_LIFEPRINT-ASL.mp4)


### Back {#back}

SUFFER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-BREAK-BONE-SHOULD-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE BREAK BONE SHOULD what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-CUT--TAKE-CARE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE CUT, TAKE-CARE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-HEADACHE-HOW-SOLVE_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE HEADACHE HOW SOLVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-STING--what-HAPPEN_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE STING, what-HAPPEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-TIRED-YOU-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE TIRED YOU what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SURGERY_LIFEPRINT-ASL.mp4)


### Back {#back}

SURGERY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-swell-up_LIFEPRINT-ASL.mp4)


### Back {#back}

swell up


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-take-a-nap_LIFEPRINT-ASL.mp4)


### Back {#back}

take a nap


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-CARE---take-care-of-something--_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-CARE-[take-care-of-something]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIRED_LIFEPRINT-ASL.mp4)


### Back {#back}

TIRED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-toothache_LIFEPRINT-ASL.mp4)


### Back {#back}

toothache


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-unconcious-passed-out_LIFEPRINT-ASL.mp4)


### Back {#back}

unconcious passed out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WASH_LIFEPRINT-ASL.mp4)


### Back {#back}

WASH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WEIGHT-DECREASE--CAN-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

WEIGHT-DECREASE, CAN HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-EXERCISE--what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU EXERCISE, what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GET-UP-what-TIME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GET-UP what-TIME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-DENTIST-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO DENTIST WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-DOCTOR-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO DOCTOR WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PASS-OUT-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PASS-OUT BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SOMETIME-MIGRAINE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SOMETIME MIGRAINE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SURGERY-BEFORE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SURGERY BEFORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-TAKE-PILL-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU TAKE-PILL WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HOSPITAL-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HOSPITAL what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson53)


## ASL {#asl}

[ASL](/ox-hugo/aslu-anyone_LIFEPRINT-ASL.mp4)


### Back {#back}

anyone


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-D-R-U-G---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

D-R-U-G-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-drug-version_LIFEPRINT-ASL.mp4)


### Back {#back}

drug version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUESTION-MARK-WIGGLE---QM-wig--_LIFEPRINT-ASL.mp4)


### Back {#back}

QUESTION-MARK-WIGGLE-[QM-wig]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-else_other_LIFEPRINT-ASL.mp4)


### Back {#back}

else_other


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALLERGIC_LIFEPRINT-ASL.mp4)


### Back {#back}

ALLERGIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOSPITAL_LIFEPRINT-ASL.mp4)


### Back {#back}

HOSPITAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MEDICINE--medical-_LIFEPRINT-ASL.mp4)


### Back {#back}

MEDICINE (medical)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pain_jab-version--hurt_LIFEPRINT-ASL.mp4)


### Back {#back}

pain_jab version, hurt


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PREVENT-block-barrier-protect_LIFEPRINT-ASL.mp4)


### Back {#back}

PREVENT _ block _ barrier _ protect


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-resolve---SOLVE--_LIFEPRINT-ASL.mp4)


### Back {#back}

resolve-[SOLVE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-A---shaken---arthritis-athlete-ace_LIFEPRINT-ASL.mp4)


### Back {#back}

A-[shaken] _ arthritis _ athlete _ ace


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ACCEPT_LIFEPRINT-ASL.mp4)


### Back {#back}

ACCEPT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ADOPT---take-up_evaporate--_LIFEPRINT-ASL.mp4)


### Back {#back}

ADOPT-[take-up_evaporate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ADVISE---affect--influence--_LIFEPRINT-ASL.mp4)


### Back {#back}

ADVISE-[affect, influence]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-alleviate---CALM-DOWN+NMM--_LIFEPRINT-ASL.mp4)


### Back {#back}

alleviate-[CALM-DOWN+NMM]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-aspirin---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

aspirin-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AWFUL---terrible--_LIFEPRINT-ASL.mp4)


### Back {#back}

AWFUL-[terrible]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-balance_LIFEPRINT-ASL.mp4)


### Back {#back}

balance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATH_LIFEPRINT-ASL.mp4)


### Back {#back}

BATH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-become-version_LIFEPRINT-ASL.mp4)


### Back {#back}

become version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BETTER_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

BETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-BITE-me-YOU-MIND-HELP!--I've-been-bitten!-Would-you-mind-helping!!-_LIFEPRINT-ASL.mp4)


### Back {#back}

BITE-me YOU-MIND HELP! (I've been bitten! Would you mind helping!!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-bite_LIFEPRINT-ASL.mp4)


### Back {#back}

bite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLOOD---1---5-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BLOOD [1 - 5 hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLOOD---5-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BLOOD [5 hand version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BLURRY-occluded-not-clear-mystery_LIFEPRINT-ASL.mp4)


### Back {#back}

BLURRY _ occluded _ not-clear _ mystery


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BODY_LIFEPRINT-ASL.mp4)


### Back {#back}

BODY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANCER--HOW-remove---SUBTRACT--_LIFEPRINT-ASL.mp4)


### Back {#back}

CANCER, HOW remove-[SUBTRACT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANCER---arm-version---flesh-eating_LIFEPRINT-ASL.mp4)


### Back {#back}

CANCER-[arm-version] _ flesh eating


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CANCER---version---eat-away-at-acid-something-gobbling-something-up_LIFEPRINT-ASL.mp4)


### Back {#back}

CANCER-[version] _ eat away at _ acid _ something gobbling something up


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CAUSE---catalyst--_LIFEPRINT-ASL.mp4)


### Back {#back}

CAUSE-[catalyst]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-CHANGE--'A'-hands-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE ('A' hands version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHANGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHANGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEMICAL_CHEMISTRY_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEMICAL_CHEMISTRY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CONFUSED_LIFEPRINT-ASL.mp4)


### Back {#back}

CONFUSED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-D-R-U-G-YOU-STILL-SELL-do-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

D-R-U-G YOU STILL SELL do-YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-dangerous_danger_LIFEPRINT-ASL.mp4)


### Back {#back}

dangerous_danger


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEADLINE_-RISK_LIFEPRINT-ASL.mp4)


### Back {#back}

DEADLINE\_ RISK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-diet---D-I-E-T--_LIFEPRINT-ASL.mp4)


### Back {#back}

diet-[D-I-E-T]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIET---dieting-----block-mouth-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DIET-[dieting]-[block-mouth-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIET---initialized-zip-mouth--_LIFEPRINT-ASL.mp4)


### Back {#back}

DIET-[initialized-zip-mouth]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIFFICULT----problem--difficulty--_LIFEPRINT-ASL.mp4)


### Back {#back}

DIFFICULT -[problem, difficulty]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DIZZY---clawed-5---circular--_LIFEPRINT-ASL.mp4)


### Back {#back}

DIZZY [clawed 5 - circular]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Do-you-mind_LIFEPRINT-ASL.mp4)


### Back {#back}

Do-you-mind


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-DOG-BITE-me!-HOSPITAL-NEAR-QM-WIG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG BITE-me! HOSPITAL NEAR QM-WIG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DOG_LIFEPRINT-ASL.mp4)


### Back {#back}

DOG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-drug-version-3_LIFEPRINT-ASL.mp4)


### Back {#back}

drug version 3


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DURING-SEMESTER-I-get-SICK-OFTEN--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DURING SEMESTER I get-SICK OFTEN, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-during_LIFEPRINT-ASL.mp4)


### Back {#back}

during


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAR-RINGING-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

EAR RINGING WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EAR_LIFEPRINT-ASL.mp4)


### Back {#back}

EAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXCEPT-special-unique_LIFEPRINT-ASL.mp4)


### Back {#back}

EXCEPT _ special _ unique


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EXCITED_LIFEPRINT-ASL.mp4)


### Back {#back}

EXCITED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FEED_LIFEPRINT-ASL.mp4)


### Back {#back}

FEED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-feet-distance_LIFEPRINT-ASL.mp4)


### Back {#back}

feet distance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FLEXIBLE---hands-separated-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

FLEXIBLE-[hands-separated-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GET---receive--_LIFEPRINT-ASL.mp4)


### Back {#back}

GET-[receive]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-handle_control_manage_administrate_LIFEPRINT-ASL.mp4)


### Back {#back}

handle_control_manage_administrate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-HAPPEN-MEDICINE-I_ME-take-PILL-SICK!-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN MEDICINE I_ME take-PILL SICK! WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Happen_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

Happen


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-highly_high_LIFEPRINT-ASL.mp4)


### Back {#back}

highly_high


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIT---impact--_LIFEPRINT-ASL.mp4)


### Back {#back}

HIT-[impact]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HURT_LIFEPRINT-ASL.mp4)


### Back {#back}

HURT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-CAN-BECOME-FLEXIBLE-HOW_LIFEPRINT-ASL.mp4)


### Back {#back}

I CAN BECOME FLEXIBLE HOW


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-HEADACHE-head-THROB--HOW-SOLVE_LIFEPRINT-ASL.mp4)


### Back {#back}

I HEADACHE head-THROB, HOW SOLVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-INFORM-you_LIFEPRINT-ASL.mp4)


### Back {#back}

I INFORM-you


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-STAND-UP-HIT-DIZZY--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

I STAND-UP HIT DIZZY, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-immune-system---PROTECT-SYSTEM--_LIFEPRINT-ASL.mp4)


### Back {#back}

immune-system-[PROTECT-SYSTEM]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INCREASE-raise-get-a-raise-gain-weight-add-an-amount-onto_LIFEPRINT-ASL.mp4)


### Back {#back}

INCREASE _ raise _ get a raise _ gain weight _ add an amount onto


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INJECTION-shot-vaccinate-vaccination---3-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

INJECTION _ shot _ vaccinate _ vaccination [3-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I_ME-ARTHRITIS--I-SHOULD-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

I_ME ARTHRITIS, I SHOULD what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KILL---killed-----murdered--_LIFEPRINT-ASL.mp4)


### Back {#back}

KILL-[killed]-[murdered]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-lack_less_LIFEPRINT-ASL.mp4)


### Back {#back}

lack_less


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LEGS-in-air---laid-up_laid-out_incapacitated_extremely-sick--_LIFEPRINT-ASL.mp4)


### Back {#back}

LEGS-in-air-[laid-up_laid-out_incapacitated_extremely-sick]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOUD_LIFEPRINT-ASL.mp4)


### Back {#back}

LOUD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MY-FEET-PAIN-I_ME-NEED-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

MY FEET PAIN I_ME NEED what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEVER_LIFEPRINT-ASL.mp4)


### Back {#back}

NEVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOISE---noisy--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOISE [noisy]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-nutrition---FEED-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

nutrition-[FEED-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NUTRITION---initialized_version--_LIFEPRINT-ASL.mp4)


### Back {#back}

NUTRITION-[initialized_version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OFTEN_LIFEPRINT-ASL.mp4)


### Back {#back}

OFTEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD-PEOPLE-USE-CANE--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD PEOPLE USE CANE, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PATIENCE---tolerate--bear--endure_LIFEPRINT-ASL.mp4)


### Back {#back}

PATIENCE - tolerate, bear, endure


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-plastic-FLEXIBLE_LIFEPRINT-ASL.mp4)


### Back {#back}

plastic _ FLEXIBLE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-problem_LIFEPRINT-ASL.mp4)


### Back {#back}

problem


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT_-recently_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT\_ recently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-reduce-less-version-decrease_LIFEPRINT-ASL.mp4)


### Back {#back}

reduce less version decrease


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remove-take-away-throw-from_LIFEPRINT-ASL.mp4)


### Back {#back}

remove take away throw from


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-remove-get-rid-of-flick-from-edit-out-delete_LIFEPRINT-ASL.mp4)


### Back {#back}

remove _ get rid of _ flick from _ edit out _ delete


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RINGING_LIFEPRINT-ASL.mp4)


### Back {#back}

RINGING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RISK---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

RISK-[fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-RUB-on---dominant-B-on-'S'--_LIFEPRINT-ASL.mp4)


### Back {#back}

RUB-on [dominant B on 'S']


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALT---fluttering-two-fingered-version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

SALT-[fluttering-two-fingered-version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-salt---SHAKE-onto--_LIFEPRINT-ASL.mp4)


### Back {#back}

salt-[SHAKE-onto]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SALT_LIFEPRINT-ASL.mp4)


### Back {#back}

SALT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SELL_LIFEPRINT-ASL.mp4)


### Back {#back}

SELL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-semester--version-1-older-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

semester (version 1 older version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-semester--version-2-s-hand-moves-off-non-dominant-palm-_LIFEPRINT-ASL.mp4)


### Back {#back}

semester (version 2 s hand moves off non dominant palm)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SENSITIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

SENSITIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SICK---DISEASE-ILLNESS--_LIFEPRINT-ASL.mp4)


### Back {#back}

SICK-[DISEASE-ILLNESS]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKIN--race-skin-color-_LIFEPRINT-ASL.mp4)


### Back {#back}

SKIN (race skin color)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SKIN---pinch-skin-on-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SKIN-[pinch-skin-on-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STILL_LIFEPRINT-ASL.mp4)


### Back {#back}

STILL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-stretch_LIFEPRINT-ASL.mp4)


### Back {#back}

stretch


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-I-BLOOD-PRESSURE-HIGH--I-SHOULD-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE I BLOOD-PRESSURE HIGH, I SHOULD what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-INFECTION-INSIDE-body-INCREASE--I-SHOULD-what-DO_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE INFECTION INSIDE-body INCREASE, I SHOULD what-DO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-surgery_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

surgery


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWEET---double-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

SWEET-[double-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWEET_diabetes_LIFEPRINT-ASL.mp4)


### Back {#back}

SWEET_diabetes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SWEET_LIFEPRINT-ASL.mp4)


### Back {#back}

SWEET


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-symptom---SHOW+facial-expression--_LIFEPRINT-ASL.mp4)


### Back {#back}

symptom-[SHOW+facial-expression]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SYSTEM_LIFEPRINT-ASL.mp4)


### Back {#back}

SYSTEM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-AWAY--subtract-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-AWAY (subtract version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tension---PRESSURE_stress--_LIFEPRINT-ASL.mp4)


### Back {#back}

tension-[PRESSURE_stress]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-THAT-----Y-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

THAT - [Y-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THREAT---risk--_LIFEPRINT-ASL.mp4)


### Back {#back}

THREAT-[risk]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THROUGH_LIFEPRINT-ASL.mp4)


### Back {#back}

THROUGH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-too-much_LIFEPRINT-ASL.mp4)


### Back {#back}

too much


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tradition---PASS-down-over-generations--_LIFEPRINT-ASL.mp4)


### Back {#back}

tradition-[PASS-down-over-generations]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARN---verb-form_single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

WARN-[verb-form_single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WARN_LIFEPRINT-ASL.mp4)


### Back {#back}

WARN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-What-happened-WHAT-HAPPEN_LIFEPRINT-ASL.mp4)


### Back {#back}

What happened _ WHAT HAPPEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656575609835.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHITE-CANE_LIFEPRINT-ASL.mp4)


### Back {#back}

WHITE-CANE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](aslu-YOU-BRUISE-on-arm!-what-HAPPEN_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU BRUISE-on-arm! what-HAPPEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-FOOD-ALLERGY-ANY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU FOOD-ALLERGY ANY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY-ANYONE-HAVE-DIABETES_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY ANYONE HAVE DIABETES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAMILY-PASS-DOWN-ANY-DISEASE-QM-Wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAMILY PASS-DOWN ANY DISEASE QM-Wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PROBLEM-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PROBLEM WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson54)


## ASL {#asl}

[ASL](/ox-hugo/aslu-insurance_LIFEPRINT-ASL.mp4)


### Back {#back}

insurance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DRIVE-there---drive-to--_LIFEPRINT-ASL.mp4)


### Back {#back}

DRIVE-there [drive to]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INFECTION_LIFEPRINT-ASL.mp4)


### Back {#back}

INFECTION


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu--patrol--Car-follow-car-DCL----2h--3---vehicle-follow-vehicle--_LIFEPRINT-ASL.mp4)


### Back {#back}

(patrol) Car follow car _ DCL - (2h)-3-[vehicle-follow-vehicle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-AC-BLOWS-from-vents-COLD!_LIFEPRINT-ASL.mp4)


### Back {#back}

AC BLOWS-from-vents COLD!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-air-conditioner-ac-fs-AC--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

air conditioner _ ac _ fs-AC _ (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AUTOMATIC---vehicle--_LIFEPRINT-ASL.mp4)


### Back {#back}

AUTOMATIC-[vehicle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BALD---S-hand-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BALD [S-hand-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-base_minimum_LIFEPRINT-ASL.mp4)


### Back {#back}

base_minimum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRAKE---version-1---2-flat-hands-left-hand-moves-----version--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRAKE-[version-1 - 2-flat-hands-left-hand-moves]-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRAKE---version-1---2-flat-hands-left-hand-moves--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRAKE-[version-1 - 2-flat-hands-left-hand-moves]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRAKE---version-2---modified-A-hand--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRAKE-[version-2 - modified-A-hand]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BRAKE---version-3---2-flat-hands-right-hand-moves--_LIFEPRINT-ASL.mp4)


### Back {#back}

BRAKE-[version-3 - 2-flat-hands-right-hand-moves]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Breakdown_LIFEPRINT-ASL.mp4)


### Back {#back}

Breakdown


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-camera_LIFEPRINT-ASL.mp4)


### Back {#back}

camera


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-COURT_LIFEPRINT-ASL.mp4)


### Back {#back}

COURT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-DRIVE-STALL-repeatedly!_LIFEPRINT-ASL.mp4)


### Back {#back}

DRIVE STALL-repeatedly!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-ENGINE-BREAKDOWN!_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGINE BREAKDOWN!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENGINE-POWERFUL_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGINE POWERFUL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENGINE-breakdown_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGINE-breakdown


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-FAST!_LIFEPRINT-ASL.mp4)


### Back {#back}

FAST!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-GAS-CONSUME!---guzzle--_LIFEPRINT-ASL.mp4)


### Back {#back}

GAS CONSUME!-[guzzle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAS---OR---ELECTRIC-YOU-PREFER_LIFEPRINT-ASL.mp4)


### Back {#back}

GAS [OR] ELECTRIC YOU PREFER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-SHOULD-BUY-YOUR-CAR-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

I SHOULD BUY YOUR CAR WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-WANT-BUY-CAR._LIFEPRINT-ASL.mp4)


### Back {#back}

I WANT BUY CAR.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-I_ME-TICKET---verb_form---I_ME!--'I-got-a-ticket!'-_LIFEPRINT-ASL.mp4)


### Back {#back}

I_ME TICKET-[verb_form] I_ME! ('I got a ticket!')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-limited---LIMIT--_LIFEPRINT-ASL.mp4)


### Back {#back}

limited [LIMIT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MAX-YOU-WANT-PAY-HOW-MUCH_LIFEPRINT-ASL.mp4)


### Back {#back}

MAX YOU WANT PAY HOW-MUCH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MOTOR---machine--engine--_LIFEPRINT-ASL.mp4)


### Back {#back}

MOTOR-[machine, engine]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-POWER_powerful_LIFEPRINT-ASL.mp4)


### Back {#back}

POWER_powerful


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-since-up-to-now_LIFEPRINT-ASL.mp4)


### Back {#back}

since up to now


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SPEED-LIMIT-WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

SPEED LIMIT WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Speeding_-drive-above-legal-limit-SPEEDING_LIFEPRINT-ASL.mp4)


### Back {#back}

Speeding\_ drive above legal limit _ SPEEDING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIRES-BALD---flat-surface-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

TIRES BALD-[flat-surface-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](aslu-TIRES-NEW!_LIFEPRINT-ASL.mp4)


### Back {#back}

TIRES NEW!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TIRES_LIFEPRINT-ASL.mp4)


### Back {#back}

TIRES


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRANSMISSION-PROBLEM_LIFEPRINT-ASL.mp4)


### Back {#back}

TRANSMISSION PROBLEM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TRANSMISSION---motor--_LIFEPRINT-ASL.mp4)


### Back {#back}

TRANSMISSION-[motor]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up-to-maximum_LIFEPRINT-ASL.mp4)


### Back {#back}

up to maximum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UP-TO-NOW-CRASH-car-NONE_LIFEPRINT-ASL.mp4)


### Back {#back}

UP-TO-NOW CRASH-car NONE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-CL-33--pulled-over-OR-CAMERA-camera-FLASH_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU CL-33 -pulled-over OR CAMERA camera-FLASH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-GO-to-COURT_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU GO-to COURT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-HAVE-TRADE-IN-car_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU HAVE TRADE-IN-car


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LICENSE-EXPIRE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LICENSE-EXPIRE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PREFER-STICK-shift-OR-AUTOMATIC_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PREFER STICK-shift OR AUTOMATIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-SPEEDING-HOW-FAST_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU SPEEDING HOW FAST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WANT-NEW-OR-SECOND-HAND---used--_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WANT NEW OR SECOND-HAND-[used]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-CAR--what-WRONG_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR CAR, what-WRONG


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-INSURANCE-INCREASE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR INSURANCE INCREASE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson55)


## ASL {#asl}

[ASL](/ox-hugo/aslu-#CAR_LIFEPRINT-ASL.mp4)


### Back {#back}

\#CAR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APPLY-to_LIFEPRINT-ASL.mp4)


### Back {#back}

APPLY-to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AUDIENCE---stadium-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

AUDIENCE-[stadium-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AVAILABLE---double-movement-version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

AVAILABLE [double movement version 2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-AVAILABLE---double-movement-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

AVAILABLE [double movement version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BATHROOM-EMPTY--Is-the-bathroom-available-_LIFEPRINT-ASL.mp4)


### Back {#back}

BATHROOM EMPTY (Is the bathroom available)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CONFLICT---contrast-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

CONFLICT [contrast version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-continue_LIFEPRINT-ASL.mp4)


### Back {#back}

continue


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-date-dating_LIFEPRINT-ASL.mp4)


### Back {#back}

date dating


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMPTY-available-naked-nude--ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

EMPTY _ available _ naked _ nude (ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-EMPTY-location---this-spot-is-empty_it-was-gone--_LIFEPRINT-ASL.mp4)


### Back {#back}

EMPTY-location-[this-spot-is-empty_it-was-gone]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FAMOUS-DEAF-PERSON--NAME-SOMEONE._LIFEPRINT-ASL.mp4)


### Back {#back}

FAMOUS DEAF PERSON, NAME SOMEONE.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](aslu-FAMOUS-'to-be-a-celebrity'-well-known-prominent_LIFEPRINT-ASL.mp4)


### Back {#back}

FAMOUS _ 'to be a celebrity' _ well-known _ prominent


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE_that-person-CAN-JOIN.--She-is-available-to-participate.-_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE_that-person CAN JOIN. (She is available to participate.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE_that-person-HERE.--She-is-currently-available-on-the-premises.-_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE_that-person HERE. (She is currently available on the premises.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE_that-person-NOT-DATE-ANYONE.--She-is-available-to-date.-_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE_that-person NOT DATE ANYONE. (She is available to date.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE_that-person-SINGLE.--She-is-available-to-pursue.-_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE_that-person SINGLE. (She is available to pursue.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HE_SHE_that-person-VACATION.--She-is-off-work-and-thus-available.-_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE_that-person VACATION. (She is off work and thus available.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOTEL-PROVIDE-FREE-BREAKFAST-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

HOTEL PROVIDE FREE BREAKFAST WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Insist-REQUIRE-Demand_LIFEPRINT-ASL.mp4)


### Back {#back}

Insist _ REQUIRE _ Demand


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOIN---participate--_LIFEPRINT-ASL.mp4)


### Back {#back}

JOIN-[participate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LECTURE---speech--give-a-talk--sermon--presentation--_LIFEPRINT-ASL.mp4)


### Back {#back}

LECTURE-[speech, give-a-talk, sermon, presentation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOOK-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOOK-LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](aslu-MY-ASL-BOOK--QUOTE-RS-what-MEAN--What-do-the-letters-RS-mean-in-my-ASL-book-Answer---'role-shift'-_LIFEPRINT-ASL.mp4)


### Back {#back}

MY ASL BOOK, QUOTE RS what-MEAN (What do the letters RS mean in my ASL book Answer - 'role shift')


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](aslu-or---body-shift-role-shift---'on-the-other-hand'-THEN-second-item-next-item_LIFEPRINT-ASL.mp4)


### Back {#back}

or [body shift _ role shift] _ 'on the other hand' _ THEN _ second item _ next item


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PREPARE---S-5-hands-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PREPARE-[S-5-hands-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-prepare_LIFEPRINT-ASL.mp4)


### Back {#back}

prepare


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-program_LIFEPRINT-ASL.mp4)


### Back {#back}

program


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-provide_LIFEPRINT-ASL.mp4)


### Back {#back}

provide


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REJECT---version-2--_LIFEPRINT-ASL.mp4)


### Back {#back}

REJECT-[version-2]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-REJECT_LIFEPRINT-ASL.mp4)


### Back {#back}

REJECT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESEARCH---non-initialized--_LIFEPRINT-ASL.mp4)


### Back {#back}

RESEARCH-[non-initialized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ROOM-EMPTY--Do-you-have-a-room-available-_LIFEPRINT-ASL.mp4)


### Back {#back}

ROOM EMPTY (Do you have a room available)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sit_LIFEPRINT-ASL.mp4)


### Back {#back}

sit


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-standard-same-as-all_LIFEPRINT-ASL.mp4)


### Back {#back}

standard same as all


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-statement---title_topic_phrase_QUOTE--_LIFEPRINT-ASL.mp4)


### Back {#back}

statement-[title_topic_phrase_QUOTE]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STUDY-ASL--YOUR-METHOD-WHAT--What-method-do-you-use-to-study-ASL-_LIFEPRINT-ASL.mp4)


### Back {#back}

STUDY ASL, YOUR METHOD WHAT (What method do you use to study ASL)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPORT-loyal-to-advocate-back-allegiance_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPORT _ loyal to _ advocate _ back _ allegiance


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS-REQUIRE-RESEARCH-PAPER--Is-a-research-paper-required-for-this-class-_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS REQUIRE RESEARCH PAPER (Is a research paper required for this class)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-SEAT-EMPTY--Is-this-seat-available-_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS SEAT EMPTY (Is this seat available)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thumbs-down---reject_not-approved--_LIFEPRINT-ASL.mp4)


### Back {#back}

thumbs-down-[reject_not-approved]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THURSDAY--CAN-I-BORROW-CAR--lexicalized---Is-the-car-available-Thursday-_LIFEPRINT-ASL.mp4)


### Back {#back}

THURSDAY, CAN I BORROW CAR-(lexicalized) (Is the car available Thursday)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-vary---VARIETY_various---2_LIFEPRINT-ASL.mp4)


### Back {#back}

vary-[VARIETY_various]-2


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-two-MEET-WHEN--When-are-you-available-to-meet-with-me-_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-two MEET WHEN (When are you available to meet with me)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-IPP-APPLICATION-REJECT-QM-Wig_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU IPP APPLICATION REJECT QM-Wig


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PRESENTATION-large-AUDIENCE-PAST_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PRESENTATION large-AUDIENCE PAST


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-WISH-YOU-LOOK-LIKE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WISH YOU LOOK-LIKE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-HS-REQUIRE-CLOTHES-STANDARD---all-the-SAME----Did_does-your-high-school-require-uniforms-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR HS REQUIRE CLOTHES STANDARD-[all-the-SAME] (Did_does your high school require uniforms)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-PARENTS-SUPPORT-YOU-DURING-COLLEGE_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR PARENTS SUPPORT YOU DURING COLLEGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson56)


## ASL {#asl}

[ASL](/ox-hugo/aslu-we-TWO_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

we-TWO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ace---spell-it---a---wiggle--_LIFEPRINT-ASL.mp4)


### Back {#back}

ace-[spell it]-a-[wiggle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHALLENGE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHALLENGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLUB---clubs-playing-cards--_LIFEPRINT-ASL.mp4)


### Back {#back}

CLUB-[clubs-playing-cards]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-commandment_LIFEPRINT-ASL.mp4)


### Back {#back}

commandment


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-deal-cards-for-group-of-players_LIFEPRINT-ASL.mp4)


### Back {#back}

deal cards for group of players


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-deal-cards-for-two-players_LIFEPRINT-ASL.mp4)


### Back {#back}

deal cards for two players


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEMOCRAT-DIAMOND---playing-cards-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEMOCRAT _ DIAMOND [playing cards version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](aslu-DEPLETE-RUN-OUT-OF--version-2---Use-in-'time-ran-out'--Also-see---https--_youtu.be_YU1ERFmrH2c_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPLETE _ RUN-OUT-OF (version 2) (Use in 'time ran out') Also see - https -_youtu.be_YU1ERFmrH2c


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](aslu-DEPLETE-'run-out-of'_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPLETE-'run out of'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEPLETE---drain-out--_LIFEPRINT-ASL.mp4)


### Back {#back}

DEPLETE-[drain-out]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-diamond-ring_LIFEPRINT-ASL.mp4)


### Back {#back}

diamond ring


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENGAGE_LIFEPRINT-ASL.mp4)


### Back {#back}

ENGAGE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENJOY----pleasure--appreciate--entertainment--_LIFEPRINT-ASL.mp4)


### Back {#back}

ENJOY -[pleasure, appreciate, entertainment]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-explanation-EXPLAIN-describe-directions-define_LIFEPRINT-ASL.mp4)


### Back {#back}

explanation-EXPLAIN _ describe _ directions _ define


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-fiance_fiancee_LIFEPRINT-ASL.mp4)


### Back {#back}

fiance_fiancee


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-flip-over---thin-black-object--_LIFEPRINT-ASL.mp4)


### Back {#back}

flip-over-[thin-black-object]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAME-ESTABLISH--I-EXPLAIN._LIFEPRINT-ASL.mp4)


### Back {#back}

GAME ESTABLISH, I EXPLAIN.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GAME_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

GAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-go-fishing_LIFEPRINT-ASL.mp4)


### Back {#back}

go fishing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEART_LIFEPRINT-ASL.mp4)


### Back {#back}

HEART


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HIGH-CARD-WIN_LIFEPRINT-ASL.mp4)


### Back {#back}

HIGH CARD WIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-highly_high_LIFEPRINT-ASL.mp4)


### Back {#back}

highly_high


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-I-EXPLAIN-RULES._LIFEPRINT-ASL.mp4)


### Back {#back}

I EXPLAIN RULES.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JACK_jacks---playing-card--_LIFEPRINT-ASL.mp4)


### Back {#back}

JACK_jacks-[playing-card]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KING---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

KING-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-KING_LIFEPRINT-ASL.mp4)


### Back {#back}

KING


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LAW---legal--_LIFEPRINT-ASL.mp4)


### Back {#back}

LAW-[legal]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-line-column-of-people-facing-away_LIFEPRINT-ASL.mp4)


### Back {#back}

line column of people facing away


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-line_column-of-people-facing-the-signer_LIFEPRINT-ASL.mp4)


### Back {#back}

line_column of people facing the signer


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-line_row-of-people-facing-away_LIFEPRINT-ASL.mp4)


### Back {#back}

line_row of people facing away


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-line_row-of-people-facing-toward-signer_LIFEPRINT-ASL.mp4)


### Back {#back}

line_row of people facing toward signer


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-lose-competition_LIFEPRINT-ASL.mp4)


### Back {#back}

lose competition


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LOSE_LIFEPRINT-ASL.mp4)


### Back {#back}

LOSE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-low_less_LIFEPRINT-ASL.mp4)


### Back {#back}

low_less


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-METAL_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

METAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-my-turn_LIFEPRINT-ASL.mp4)


### Back {#back}

my turn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEGOTIATE---negotiation--_LIFEPRINT-ASL.mp4)


### Back {#back}

NEGOTIATE-[negotiation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-order-respond-command-answer_LIFEPRINT-ASL.mp4)


### Back {#back}

order-respond-command-answer


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARTY---initialized--_LIFEPRINT-ASL.mp4)


### Back {#back}

PARTY [initialized]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PARTY---non-initialized--PLAY--_LIFEPRINT-ASL.mp4)


### Back {#back}

PARTY [non-initialized, PLAY]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-piece_small_coin_pepperoni_LIFEPRINT-ASL.mp4)


### Back {#back}

piece_small_coin_pepperoni


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PLAY----playing--_LIFEPRINT-ASL.mp4)


### Back {#back}

PLAY -[playing]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-play-CARDS-deal-out_LIFEPRINT-ASL.mp4)


### Back {#back}

play-CARDS _ deal out


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-principle_LIFEPRINT-ASL.mp4)


### Back {#back}

principle


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](aslu-QUEEN---quarter_"Q"-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

QUEEN-[quarter_"Q"-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-QUEEN_LIFEPRINT-ASL.mp4)


### Back {#back}

QUEEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-rising-STACK-of-cards-ALL--lexicalized-_LIFEPRINT-ASL.mp4)


### Back {#back}

rising-STACK-of-cards ALL-(lexicalized)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-robber_LIFEPRINT-ASL.mp4)


### Back {#back}

robber


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAME-TIME---simultaneous-----ILY--version--_LIFEPRINT-ASL.mp4)


### Back {#back}

SAME-TIME-[simultaneous]-[ILY -version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCOOP-up---from-table--_LIFEPRINT-ASL.mp4)


### Back {#back}

SCOOP-up-[from-table]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SET-UP-establish-base-based-on-founded_LIFEPRINT-ASL.mp4)


### Back {#back}

SET-UP _ establish _ base _ based on _ founded


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SHEEP_wool---in-context--_LIFEPRINT-ASL.mp4)


### Back {#back}

SHEEP_wool-[in-context]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIMULTANEOUS-FLIP-OVER---2-flat-objects--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIMULTANEOUS FLIP-OVER-[2-flat-objects]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sit--classifier--two-people-sit-facing-each-other_LIFEPRINT-ASL.mp4)


### Back {#back}

sit (classifier) two people sit facing each other


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SIT---2-ppl-opposite---DEAL-cards---two-players--_LIFEPRINT-ASL.mp4)


### Back {#back}

SIT-[2-ppl-opposite] DEAL-cards-[two-players]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-spade_LIFEPRINT-ASL.mp4)


### Back {#back}

spade


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-square_card_envelope_check_brick_LIFEPRINT-ASL.mp4)


### Back {#back}

square_card_envelope_check_brick


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-START-begin-initiate_LIFEPRINT-ASL.mp4)


### Back {#back}

START-begin-initiate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE---if_what-if--_LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE-[if_what-if]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-take-turn-circle-group_LIFEPRINT-ASL.mp4)


### Back {#back}

take turn circle group


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Team_LIFEPRINT-ASL.mp4)


### Back {#back}

Team


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-theatre--drama--act--a-play--a-show--acting_LIFEPRINT-ASL.mp4)


### Back {#back}

theatre, drama, act, a play, a show, acting


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAR---battle--_LIFEPRINT-ASL.mp4)


### Back {#back}

WAR-[battle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-2-PLAY-GAME-play-CARDS._LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 PLAY GAME play-CARDS.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHEAT_LIFEPRINT-ASL.mp4)


### Back {#back}

WHEAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ENJOY-GO-to-PARTY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ENJOY GO-to PARTY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-INVOLVE-COMPETITION---sports---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU INVOLVE COMPETITION-[sports] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-GO-WATCH-ACT---play---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE GO WATCH ACT-[play] YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-PLAY-GAMES-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE PLAY GAMES YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-play-CARDS-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE play-CARDS YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](aslu-YOU-WIN-GAME!_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU WIN GAME!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-your-turn_LIFEPRINT-ASL.mp4)


### Back {#back}

your turn


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson57)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RUDE_LIFEPRINT-ASL.mp4)


### Back {#back}

RUDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL-OVER-STUDENTS-TAKE-up-ASL--90%-GIRL--10%-BOY.-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-OVER STUDENTS TAKE-up ASL, 90% GIRL, 10% BOY. WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ALL-OVER---throughout-the-land--_LIFEPRINT-ASL.mp4)


### Back {#back}

ALL-OVER-[throughout-the-land]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL-STUDENT--one-OUT-OF-eight-F-grade.-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL STUDENT, one-OUT-OF-eight F-grade. WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](aslu-BOTHER-FINISH!--You-are-bothering-me.-Knock-it-off!-_LIFEPRINT-ASL.mp4)


### Back {#back}

BOTHER FINISH! (You are bothering me. Knock it off!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-burp_LIFEPRINT-ASL.mp4)


### Back {#back}

burp


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BYE-goodbye-WAVE-goodbye_LIFEPRINT-ASL.mp4)


### Back {#back}

BYE _ goodbye _ WAVE-goodbye


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-BYE-BYE-goodbye-good-bye_LIFEPRINT-ASL.mp4)


### Back {#back}

BYE-BYE _ goodbye _ good-bye


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHOCOLATE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHOCOLATE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS-FINISH-YOU-TAKE-OFF---go---HOME-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS FINISH YOU TAKE-OFF-[go] HOME YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CLASS-TITLE-ASL-STRUCTURE-AND-USE-YOU-FINISH-TAKE-up-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

CLASS TITLE ASL STRUCTURE AND USE YOU FINISH TAKE-up YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-cover-book_LIFEPRINT-ASL.mp4)


### Back {#back}

cover book


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-BABY-LEARN-SIGN-ASL-3-MONTH-BEFORE-HEARING-BABY-LEARN-TALK--WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF BABY LEARN SIGN-ASL 3-MONTH BEFORE HEARING BABY LEARN TALK, WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-GOODBYES-TEND-EXTENDED---or---BRIEF-WHICH_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF GOODBYES TEND EXTENDED [or] BRIEF WHICH


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-easily_easy_LIFEPRINT-ASL.mp4)


### Back {#back}

easily_easy


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ENTHUSIASTIC_LIFEPRINT-ASL.mp4)


### Back {#back}

ENTHUSIASTIC


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FART-huge--version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

FART-huge (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FART-huge---flatulance--_LIFEPRINT-ASL.mp4)


### Back {#back}

FART-huge [flatulance]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FART-small--version-01-_LIFEPRINT-ASL.mp4)


### Back {#back}

FART-small (version 01)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FART-small--version-02-_LIFEPRINT-ASL.mp4)


### Back {#back}

FART-small (version 02)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FASCINATING--fascinated--engrossed--entranced--mesmerized_LIFEPRINT-ASL.mp4)


### Back {#back}

FASCINATING, fascinated, engrossed, entranced, mesmerized


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-finish_knock-it-off_LIFEPRINT-ASL.mp4)


### Back {#back}

finish_knock it off


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FIRST-TIME-YOU-WATCH-see-SIGNING-YOU-MOUTH-drop-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

FIRST TIME YOU WATCH-see SIGNING YOU MOUTH-drop YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hand_HANDS_LIFEPRINT-ASL.mp4)


### Back {#back}

hand_HANDS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HARD_LIFEPRINT-ASL.mp4)


### Back {#back}

HARD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-imagining-imagine-imagination-wild-imaginings-to-be-full-of-ideas-have-lots-of-ideas_LIFEPRINT-ASL.mp4)


### Back {#back}

imagining _ imagine _ imagination _ wild imaginings _ to be full of ideas _ have lots of ideas


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-interaction---socialize_social_mingle--_LIFEPRINT-ASL.mp4)


### Back {#back}

interaction [socialize_social_mingle]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JAW-DROP-stunned-floored-flabbergasted_LIFEPRINT-ASL.mp4)


### Back {#back}

JAW-DROP _ stunned _ floored _ flabbergasted


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-oh-wow--modified-y-hand-_LIFEPRINT-ASL.mp4)


### Back {#back}

oh wow (modified y hand)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](aslu-OH-WOW!-YOU-TAKE-up-VICARS-ASL-CLASS-HARD!_LIFEPRINT-ASL.mp4)


### Back {#back}

OH-WOW! YOU TAKE-up VICARS ASL CLASS HARD!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OK_LIFEPRINT-ASL.mp4)


### Back {#back}

OK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLDER---oldest--_LIFEPRINT-ASL.mp4)


### Back {#back}

OLDER-[oldest]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLDEST-PERSON-YOU-KNOW--WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

OLDEST PERSON YOU KNOW, WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PATRONIZE---patron-of-frequent--go-often--choose-to-to-go--_LIFEPRINT-ASL.mp4)


### Back {#back}

PATRONIZE-[patron-of-frequent, go-often, choose-to-to-go]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERMIT_LIFEPRINT-ASL.mp4)


### Back {#back}

PERMIT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON-YOU-THINK-RUDE-WHO_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON YOU THINK RUDE WHO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PRIOR-to---before-something-----precede--_LIFEPRINT-ASL.mp4)


### Back {#back}

PRIOR-to-[before-something]-[precede]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-promote-encourage_LIFEPRINT-ASL.mp4)


### Back {#back}

promote-encourage


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Respect---1h-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

Respect [1h version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RESPECT_LIFEPRINT-ASL.mp4)


### Back {#back}

RESPECT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-signal---transmit_ping_stimulate--_LIFEPRINT-ASL.mp4)


### Back {#back}

signal [transmit_ping_stimulate]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-structure_LIFEPRINT-ASL.mp4)


### Back {#back}

structure


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-someone_something-LEAVE---go_take-off--_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-someone_something LEAVE-[go_take-off]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TAKE-UP_LIFEPRINT-ASL.mp4)


### Back {#back}

TAKE-UP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-talk-an-individual-talking_LIFEPRINT-ASL.mp4)


### Back {#back}

talk an individual talking


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TALK-DURING-CLASS-WAVE-NO._LIFEPRINT-ASL.mp4)


### Back {#back}

TALK DURING CLASS WAVE-NO.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-than_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

than


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-THIS-CLASS--TALK---via-voice---PERMITTED_LIFEPRINT-ASL.mp4)


### Back {#back}

THIS CLASS, TALK-[via-voice] PERMITTED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC-YOU-THINK-FASCINATING--WHAT_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC YOU THINK FASCINATING, WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOPIC----title_subject_theme--_LIFEPRINT-ASL.mp4)


### Back {#back}

TOPIC- [title_subject_theme]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TWICE_LIFEPRINT-ASL.mp4)


### Back {#back}

TWICE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-UP-TO-NOW-CLASS-YOU-MUST-TAKE-up-TWICE-FOR-PASS-ANY-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

UP-TO-NOW CLASS YOU MUST TAKE-up TWICE FOR PASS ANY YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-voice_LIFEPRINT-ASL.mp4)


### Back {#back}

voice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WATCH---casual--_LIFEPRINT-ASL.mp4)


### Back {#back}

WATCH-[casual]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WAVE-NO_LIFEPRINT-ASL.mp4)


### Back {#back}

WAVE-NO


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY---rhetorical-----version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY-[rhetorical]-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY---rhetorical--_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY-[rhetorical]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-ADDICTED-CHOCOLATE-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU ADDICTED CHOCOLATE YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-PATRON-of-RESTAURANT-what-NAME_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU PATRON-of RESTAURANT what-NAME


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-RESPECT-WHO-WHY_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU RESPECT WHO WHY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-BOOK-COVER--what-color_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL BOOK-COVER, what-color


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-ASL-TEACHER-ENCOURAGE-YOU-ASSOCIATE-socialize-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR ASL TEACHER ENCOURAGE YOU ASSOCIATE-socialize DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson58)


## ASL {#asl}

[ASL](/ox-hugo/aslu-#BACK--WE-TWO-LIVE-HIS_HER-PARENTS-BASEMENT--TEMPORARY._LIFEPRINT-ASL.mp4)


### Back {#back}

\#BACK, WE-TWO LIVE HIS_HER PARENTS BASEMENT, TEMPORARY.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-anyone_LIFEPRINT-ASL.mp4)


### Back {#back}

anyone


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Apartment-cheap-but-safe-plus-my-work-not-far_LIFEPRINT-ASL.mp4)


### Back {#back}

Apartment cheap but safe plus my work not far


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ask-to-me_LIFEPRINT-ASL.mp4)


### Back {#back}

ask to me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-BEFORE-prior-to-HIM_HER-I-MET-many-individuals-DATE--DATE--IMPRESSED-not!_LIFEPRINT-ASL.mp4)


### Back {#back}

BEFORE-prior-to HIM_HER I MET-many-individuals DATE, DATE, IMPRESSED-not!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-but--finger-spelled-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

but (finger-spelled version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-BUT--lexicalized--FAR!-COMMUTE-long!-HOUSE-CROWDED!_LIFEPRINT-ASL.mp4)


### Back {#back}

BUT-(lexicalized) FAR! COMMUTE-long! HOUSE CROWDED!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHEAP_INEXPENSIVE_LIFEPRINT-ASL.mp4)


### Back {#back}

CHEAP_INEXPENSIVE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-communicate_LIFEPRINT-ASL.mp4)


### Back {#back}

communicate


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-COMMUTE-'back-and-forth'_LIFEPRINT-ASL.mp4)


### Back {#back}

COMMUTE _ 'back and forth'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-crowded_LIFEPRINT-ASL.mp4)


### Back {#back}

crowded


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DATE---a-social-or-romantic-event_LIFEPRINT-ASL.mp4)


### Back {#back}

DATE - a social or romantic event


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DECIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

DECIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ex-boy-friend_LIFEPRINT-ASL.mp4)


### Back {#back}

ex boy friend


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-from-time-to-time_now-and-then_time-passes_LIFEPRINT-ASL.mp4)


### Back {#back}

from-time-to-time_now-and-then_time-passes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-go-out-eat_LIFEPRINT-ASL.mp4)


### Back {#back}

go out eat


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-HAPPEN-I-MET-him_her-PAH!_LIFEPRINT-ASL.mp4)


### Back {#back}

HAPPEN I MET-him_her PAH!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-he_she-equal-to-me_LIFEPRINT-ASL.mp4)


### Back {#back}

he_she equal to me


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-HE_SHE-NOT-THINK-I-INFERIOR.-We-two-EQUAL!_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE NOT THINK I INFERIOR. We-two-EQUAL!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-HE_SHE-WROTE-8-PAGE-LOVE-LETTER-SEND-to-me!_LIFEPRINT-ASL.mp4)


### Back {#back}

HE_SHE WROTE 8 PAGE LOVE LETTER SEND-to-me!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hour-and-a-half_LIFEPRINT-ASL.mp4)


### Back {#back}

hour and a half


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-I-DATE-SOMEONE.--I'm-dating-someone.-_LIFEPRINT-ASL.mp4)


### Back {#back}

I DATE SOMEONE. (I'm dating someone.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-I-FUTURE-SEND-YOU-INVITE-CARD.--I'll-send-you-an-invitation!-_LIFEPRINT-ASL.mp4)


### Back {#back}

I FUTURE SEND YOU INVITE CARD. (I'll send you an invitation!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-I-MULL-OVER-DECIDE--YES--TIME!-GO-AHEAD-DO-IT--lexicalized-!_LIFEPRINT-ASL.mp4)


### Back {#back}

I MULL-OVER DECIDE, YES, TIME! GO-AHEAD DO-IT-(lexicalized)!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-I-REALIZED-HE_SHE-RIGHT-MATCH-to-me!_LIFEPRINT-ASL.mp4)


### Back {#back}

I REALIZED HE_SHE RIGHT MATCH-to-me!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-IMPRESSED_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

IMPRESSED


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-inferior_demote_move-to-lower-level_LIFEPRINT-ASL.mp4)


### Back {#back}

inferior_demote_move to lower level


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Inferior_LIFEPRINT-ASL.mp4)


### Back {#back}

Inferior


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invest--double-claw-3-hand-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

invest (double claw 3 hand version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invest_LIFEPRINT-ASL.mp4)


### Back {#back}

invest


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-kiss-fist_love-it_LIFEPRINT-ASL.mp4)


### Back {#back}

kiss fist_love it


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LETTER_LIFEPRINT-ASL.mp4)


### Back {#back}

LETTER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-love_LIFEPRINT-ASL.mp4)


### Back {#back}

love


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-Meet-many-people-MEET---variety-of-individuals--_LIFEPRINT-ASL.mp4)


### Back {#back}

Meet many people _ MEET-[variety-of-individuals]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MULL-OVER_LIFEPRINT-ASL.mp4)


### Back {#back}

MULL OVER


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MY-FIANCEE-NAME-BELINDA._LIFEPRINT-ASL.mp4)


### Back {#back}

MY FIANCEE NAME BELINDA.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NOT-FAR---close-by_near-here--_LIFEPRINT-ASL.mp4)


### Back {#back}

NOT-FAR-[close by_near here]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-OUR-WEDDING-next-MONTH!--Our-wedding-is-next-month!-_LIFEPRINT-ASL.mp4)


### Back {#back}

OUR WEDDING next-MONTH! (Our wedding is next month!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-page_LIFEPRINT-ASL.mp4)


### Back {#back}

page


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-PAH!-succeed-finally_LIFEPRINT-ASL.mp4)


### Back {#back}

PAH! _ succeed finally


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-realize_LIFEPRINT-ASL.mp4)


### Back {#back}

realize


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RIVERSIDE_LIFEPRINT-ASL.mp4)


### Back {#back}

RIVERSIDE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SCHEDULE_LIFEPRINT-ASL.mp4)


### Back {#back}

SCHEDULE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SEND-to-me=--let-me-know_inform-me--_LIFEPRINT-ASL.mp4)


### Back {#back}

SEND-to-me=[let-me-know_inform-me]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-serious_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

serious


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOTAL-altogether-sum_LIFEPRINT-ASL.mp4)


### Back {#back}

TOTAL-altogether-sum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-waiver_LIFEPRINT-ASL.mp4)


### Back {#back}

waiver


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-2-ENGAGED.--We-are-engaged.-_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 ENGAGED. (We are engaged.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-WE-2-HONEYMOON-HAWAII!_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 HONEYMOON HAWAII!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-WE-2-INTERFACE_give-and-take_interlocutions-COMMUNICATE-GOOD_well!_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 INTERFACE_give-and-take_interlocutions COMMUNICATE GOOD_well!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-2-PLAN-MOVE-APT-DOWNTOWN_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 PLAN MOVE APT DOWNTOWN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-2-TOGETHER-relationship-ALTOGETHER-6-YEAR--We-have-been-together-for-6-years.-_LIFEPRINT-ASL.mp4)


### Back {#back}

WE-2 TOGETHER-relationship ALTOGETHER 6-YEAR (We have been together for 6 years.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-worth-it_LIFEPRINT-ASL.mp4)


### Back {#back}

worth it


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](aslu-YEAR-PAST-HE_SHE-ASK-to-me-MARRY!--Last-year-he-proposed-to-me!-_LIFEPRINT-ASL.mp4)


### Back {#back}

YEAR-PAST HE_SHE ASK-to-me MARRY! (Last year he proposed to me!)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-DATE-ANYONE-TOGETHER-long-term-exclusive-YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU DATE ANYONE TOGETHER-long-term-exclusive YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson59)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TECHNOLOGY---technique-technical-method-mode--_LIFEPRINT-ASL.mp4)


### Back {#back}

TECHNOLOGY-[technique _ technical _ method _ mode]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-contest---COMPETE---competition---run-against---run--for-office----campaign---sports_LIFEPRINT-ASL.mp4)


### Back {#back}

contest , COMPETE , competition , run against , run (for office) , campaign , sports


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-included---INVOLVE---involved_involves_LIFEPRINT-ASL.mp4)


### Back {#back}

included-[INVOLVE]-involved_involves


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RULE----regulation--_LIFEPRINT-ASL.mp4)


### Back {#back}

RULE -[regulation]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ability-can_LIFEPRINT-ASL.mp4)


### Back {#back}

ability can


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ABOVE---more-than--_LIFEPRINT-ASL.mp4)


### Back {#back}

ABOVE [more-than]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ADD-to-additional-extra-bonus-additionally_LIFEPRINT-ASL.mp4)


### Back {#back}

ADD-to _ additional _ extra _ bonus _ additionally


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-an-interpretation-of_LIFEPRINT-ASL.mp4)


### Back {#back}

an-interpretation-of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-any_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

any


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-APE-GORILLA_LIFEPRINT-ASL.mp4)


### Back {#back}

APE _ GORILLA


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-ASL_LIFEPRINT-ASL.mp4)


### Back {#back}

ASL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-assert-ANNOUNCE-pronounce-declare_LIFEPRINT-ASL.mp4)


### Back {#back}

assert _ ANNOUNCE _ pronounce _ declare


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-awareness_LIFEPRINT-ASL.mp4)


### Back {#back}

awareness


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHECK_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

CHECK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHOOSE-WELL-KNOW-STORY-YOU-CAN-ADD-to-YOURSELF-PERSPECTIVE---or---INTERPRETATION-of._LIFEPRINT-ASL.mp4)


### Back {#back}

CHOOSE WELL KNOW STORY YOU CAN ADD-to YOURSELF PERSPECTIVE [or] INTERPRETATION-of.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-CHOOSE-pick-select-choice_LIFEPRINT-ASL.mp4)


### Back {#back}

CHOOSE _ pick _ select _ choice


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-COMPETE-GOAL-FOR-FOR-SAVE-retain-PRECIOUS-HISTORY-CULTURE-THAT-ASL-STORY-T-E-L-L-I-N-G!_LIFEPRINT-ASL.mp4)


### Back {#back}

COMPETE GOAL FOR-FOR SAVE-retain PRECIOUS HISTORY CULTURE THAT ASL STORY T-E-L-L-I-N-G!


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-culture_LIFEPRINT-ASL.mp4)


### Back {#back}

culture


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEADLINE-JUNE-13.--The-deadline-is-June-13th.-_LIFEPRINT-ASL.mp4)


### Back {#back}

DEADLINE JUNE 13. (The deadline is June 13th.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEADLINE_-RISK_LIFEPRINT-ASL.mp4)


### Back {#back}

DEADLINE\_ RISK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAD_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF-AWARENESS-MONTH-WHEN_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF AWARENESS MONTH WHEN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-DEAF_LIFEPRINT-ASL.mp4)


### Back {#back}

DEAF


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FACEBOOK_LIFEPRINT-ASL.mp4)


### Back {#back}

FACEBOOK


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-favorite_LIFEPRINT-ASL.mp4)


### Back {#back}

favorite


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-five-minutes_LIFEPRINT-ASL.mp4)


### Back {#back}

five minutes


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for-example_LIFEPRINT-ASL.mp4)


### Back {#back}

for example


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for-example---SHOW-SHOW---YOU-CAN-SUBMIT-DEAF-TREE-STORY._LIFEPRINT-ASL.mp4)


### Back {#back}

for-example-[SHOW-SHOW] YOU CAN SUBMIT DEAF TREE STORY.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-for_LIFEPRINT-ASL.mp4)


### Back {#back}

for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-FUTURE---WILL--_LIFEPRINT-ASL.mp4)


### Back {#back}

FUTURE-[WILL]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GENERATIONS_LIFEPRINT-ASL.mp4)


### Back {#back}

GENERATIONS


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOAL_LIFEPRINT-ASL.mp4)


### Back {#back}

GOAL


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-GOOD-LUCK!--lexicalized-version-_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD-LUCK! (lexicalized version)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-GOOD---well--_LIFEPRINT-ASL.mp4)


### Back {#back}

GOOD-[well]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-hard-of-hearing_LIFEPRINT-ASL.mp4)


### Back {#back}

hard of hearing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEY-INFORM-you-SORENSON-RECENT-ANNOUNCE-SPONSOR-NEW-COMPETE._LIFEPRINT-ASL.mp4)


### Back {#back}

HEY INFORM-you SORENSON RECENT ANNOUNCE SPONSOR NEW COMPETE.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HEY_LIFEPRINT-ASL.mp4)


### Back {#back}

HEY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HISTORY_LIFEPRINT-ASL.mp4)


### Back {#back}

HISTORY


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-HOW---rhetorical_eyebrows-up-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

HOW-[rhetorical_eyebrows-up-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-information_LIFEPRINT-ASL.mp4)


### Back {#back}

information


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INFORM_LIFEPRINT-ASL.mp4)


### Back {#back}

INFORM


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invent_make-up-INVENT---single-movement--_LIFEPRINT-ASL.mp4)


### Back {#back}

invent_make up _ INVENT-[single-movement]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-invite_WELCOME_HIRE_LIFEPRINT-ASL.mp4)


### Back {#back}

invite_WELCOME_HIRE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-INVOLVE-HOW-SEND-ASL-VIDEO-YOUR-FAVORITE-J-O-K-E-STORY-RELATED-to-YOURSELF-DEAF-PERSON._LIFEPRINT-ASL.mp4)


### Back {#back}

INVOLVE HOW SEND ASL VIDEO YOUR FAVORITE J-O-K-E STORY RELATED-to YOURSELF DEAF PERSON.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-joke---fingerspelled--_LIFEPRINT-ASL.mp4)


### Back {#back}

joke [fingerspelled]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JOKE-joking-tease-teasing-jesting_LIFEPRINT-ASL.mp4)


### Back {#back}

JOKE _ joking _ tease _ teasing _ jesting


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-JUNE_LIFEPRINT-ASL.mp4)


### Back {#back}

JUNE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-LIKE_LIFEPRINT-ASL.mp4)


### Back {#back}

LIKE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-limited---LIMIT--_LIFEPRINT-ASL.mp4)


### Back {#back}

limited [LIMIT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-line_LIFEPRINT-ASL.mp4)


### Back {#back}

line


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-month_LIFEPRINT-ASL.mp4)


### Back {#back}

month


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-MORE_LIFEPRINT-ASL.mp4)


### Back {#back}

MORE


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-NEED-MUST_-SHOULD_LIFEPRINT-ASL.mp4)


### Back {#back}

NEED _ MUST\_ SHOULD


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-new_LIFEPRINT-ASL.mp4)


### Back {#back}

new


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OLD-18_LIFEPRINT-ASL.mp4)


### Back {#back}

OLD-18


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-or---WELL_so---YOU-CAN-PICK-POPULAR-POEM--Or-you-can-share-a-popular-poem.-_LIFEPRINT-ASL.mp4)


### Back {#back}

or-[WELL_so] YOU CAN PICK POPULAR POEM (Or you can share a popular poem.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-OR_LIFEPRINT-ASL.mp4)


### Back {#back}

OR


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-pass-down-through-time_LIFEPRINT-ASL.mp4)


### Back {#back}

pass down through time


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-People-PEOPLE---initialized-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

People _ PEOPLE-[initialized-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PEOPLE---international-version--_LIFEPRINT-ASL.mp4)


### Back {#back}

PEOPLE-[international-version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-PERSON_LIFEPRINT-ASL.mp4)


### Back {#back}

PERSON


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-perspective_LIFEPRINT-ASL.mp4)


### Back {#back}

perspective


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-poem_LIFEPRINT-ASL.mp4)


### Back {#back}

poem


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-popular_LIFEPRINT-ASL.mp4)


### Back {#back}

popular


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-PRECIOUS_care-about_cherish_'dear-to-me'_LIFEPRINT-ASL.mp4)


### Back {#back}

PRECIOUS_care-about_cherish\_'dear-to-me'


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-precious_LIFEPRINT-ASL.mp4)


### Back {#back}

precious


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-PRONOUN---WE--US_LIFEPRINT-ASL.mp4)


### Back {#back}

PRONOUN - WE, US


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-PRONOUN---YOU_LIFEPRINT-ASL.mp4)


### Back {#back}

PRONOUN - YOU


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RECENT_-recently_LIFEPRINT-ASL.mp4)


### Back {#back}

RECENT\_ recently


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-record---VIDEO-RECORD--_LIFEPRINT-ASL.mp4)


### Back {#back}

record-[VIDEO-RECORD]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-related-to_LIFEPRINT-ASL.mp4)


### Back {#back}

related to


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-RULE-WHAT-rhet-YOU-MUST-YOURSELF-DEAF---or---hard-of-hearing---HH--._LIFEPRINT-ASL.mp4)


### Back {#back}

RULE WHAT-rhet YOU MUST YOURSELF DEAF [or] hard-of-hearing-[HH].


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SAVE-PRESERVE-STORE--storage--preservation-of_LIFEPRINT-ASL.mp4)


### Back {#back}

SAVE _ PRESERVE _ STORE-(storage) _ preservation of


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-send_LIFEPRINT-ASL.mp4)


### Back {#back}

send


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-signs_signing_LIFEPRINT-ASL.mp4)


### Back {#back}

signs_signing


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SORENSON-INVITE-DEAF-PEOPLE-OLD-18-MORE-THAN-INVOLVE._LIFEPRINT-ASL.mp4)


### Back {#back}

SORENSON INVITE DEAF PEOPLE OLD-18 MORE-THAN INVOLVE.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sorenson_LIFEPRINT-ASL.mp4)


### Back {#back}

sorenson


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-sponsor---SUPPORT--_LIFEPRINT-ASL.mp4)


### Back {#back}

sponsor-[SUPPORT]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-01--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 01]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-02--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 02]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-03--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 03]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-04--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 04]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-05--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 05]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-STORY---version-06--_LIFEPRINT-ASL.mp4)


### Back {#back}

STORY [version 06]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-submit-offer---one-handed-version_LIFEPRINT-ASL.mp4)


### Back {#back}

submit offer [one handed version


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-submit---OFFER---LIMIT-MAXIMUM-FIVE-MINUTE.--Your-submission-is-limited-to-a-maximum-of-five-minutes.-_LIFEPRINT-ASL.mp4)


### Back {#back}

submit-[OFFER] LIMIT MAXIMUM FIVE-MINUTE. (Your submission is limited to a maximum of five minutes.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-SUPPOSE-WANT-KNOW-MORE-INFORMATION--CHECK-THEIR-website---WWW--._LIFEPRINT-ASL.mp4)


### Back {#back}

SUPPOSE WANT KNOW MORE INFORMATION, CHECK THEIR website-[WWW].


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-suppose_LIFEPRINT-ASL.mp4)


### Back {#back}

suppose


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-that-one_LIFEPRINT-ASL.mp4)


### Back {#back}

that one


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-their-own_LIFEPRINT-ASL.mp4)


### Back {#back}

their own


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-thus-well-so_LIFEPRINT-ASL.mp4)


### Back {#back}

thus well so


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOP-THREE-VIDEO-WIN-P-R-I-Z-E.--The-top-three-videos-will-win-a-prize.-_LIFEPRINT-ASL.mp4)


### Back {#back}

TOP THREE VIDEO WIN P-R-I-Z-E. (The top three videos will win a prize.)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-TOP_LIFEPRINT-ASL.mp4)


### Back {#back}

TOP


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-tree_LIFEPRINT-ASL.mp4)


### Back {#back}

tree


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-up-to-maximum_LIFEPRINT-ASL.mp4)


### Back {#back}

up to maximum


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-USE---version-1--_LIFEPRINT-ASL.mp4)


### Back {#back}

USE-[version-1]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-want_LIFEPRINT-ASL.mp4)


### Back {#back}

want


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WE-MUST-PASS-DOWN-thru-time-DEAF-THEIR-STORY-FOR-FUTURE-GENERATIONS._LIFEPRINT-ASL.mp4)


### Back {#back}

WE MUST PASS-DOWN-thru-time DEAF THEIR STORY FOR FUTURE GENERATIONS.


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](aslu-web-website-the-web-WW--"WW"_is_not_a_typo_see_the-notes-_LIFEPRINT-ASL.mp4)


### Back {#back}

web _ website _ the web _ WW _ ("WW"_is_not_a_typo_see_the-notes)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-what-for_LIFEPRINT-ASL.mp4)


### Back {#back}

what for


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WHAT_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

WHAT


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-when_LIFEPRINT-ASL_1656575647616.mp4)


### Back {#back}

when


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WIN---version--_LIFEPRINT-ASL.mp4)


### Back {#back}

WIN-[version]


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-WIN_LIFEPRINT-ASL.mp4)


### Back {#back}

WIN


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-KNOW-ANY-NEW-TECHNOLOGY-SIGNS---signing---YOU--Do-you-know-any-signs-for-new-technology-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU KNOW ANY NEW TECHNOLOGY SIGNS-[signing] YOU (Do you know any signs for new technology)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-KNOW-DEAF-K-O-N-G-TEASE-YOU--Do-you-know-the-Deaf-King-Kong-joke-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU KNOW DEAF K-O-N-G TEASE YOU (Do you know the Deaf King Kong joke)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-LIKE-INVENT-STORY-YOU--Do-you-like-to-make-up-stories-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU LIKE INVENT STORY YOU (Do you like to make up stories)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOU-USE-FACEBOOK-YOU--Are-you-on-facebook-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOU USE FACEBOOK YOU (Are you on facebook)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-FAVORITE-DEAF-JOKE-O-R-STORY-WHAT--What-is-your-favorite-Deaf-joke-or-story-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR FAVORITE DEAF JOKE O-R STORY WHAT (What is your favorite Deaf joke or story)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-YOUR-belongs-to-you-yours--possessive-_LIFEPRINT-ASL.mp4)


### Back {#back}

YOUR _ belongs to you _ yours (possessive)


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## ASL {#asl}

[ASL](/ox-hugo/aslu-yourself_LIFEPRINT-ASL.mp4)


### Back {#back}

yourself


### Source {#source}

(NO_ITEM_DATA:asluniversityLesson60)


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>ASL University. n.d. “Lesson 02.” Accessed December 21, 2023. <a href="https://www.lifeprint.com/asl101/lessons/lesson02.htm">https://www.lifeprint.com/asl101/lessons/lesson02.htm</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson03</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson04</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson05</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson06</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson07</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson08</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson09</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson10</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson11</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson12</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson13</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson14</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson15</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson16</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson17</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson18</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson19</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson20</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson21</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson22</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson23</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson24</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson25</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson26</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson27</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson28</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson29</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson30</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson31</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson32</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson33</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson34</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson35</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson36</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson37</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson38</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson39</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson40</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson41</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson42</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson43</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson44</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson45</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson46</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson47</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson48</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson49</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson50</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson51</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson52</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson53</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson54</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson55</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson56</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson57</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson58</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson59</div>
  <div class="csl-entry">NO_ITEM_DATA:asluniversityLesson60</div>
</div>
