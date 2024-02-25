+++
title = "Send email in Emacs through Gmail"
author = ["Cash Prokop-Weaver"]
date = 2024-02-12T07:52:00-08:00
lastmod = 2024-02-24T18:19:20-08:00
tags = ["concept", "concept"]
categories = ["concept"]
draft = false
slug = "173d3d74-6ae7-4e4d-9eda-b96a88d60c0d"
+++

This is an in-progress guide for setting up [Emacs]({{< relref "emacs.md" >}}) ([Doom Emacs]({{< relref "doom_emacs.md" >}})) to send email from your personal Google (Gmail) user account.

As of <span class="timestamp-wrapper"><span class="timestamp">[2024-02-12 Mon]</span></span>, the best I can figure is:

-   Configure `smtpmail`
    ```emacs-lisp
    (setq
     smtpmail-smtp-server "smtp.gmail.com"
     smtpmail-smtp-service 587
     smtpmail-smtp-user "your-email@gmail.com")
    ```

-   Set up [xoauth2 as an `auth-source`](https://github.com/ccrusius/auth-source-xoauth2)

    I think it'd be nice to integrate [`emacs-oauth2-auto`](https://github.com/telotortium/emacs-oauth2-auto) to handle pulling new refresh tokens and release the whole thing as a gmail-focused package, similar to [`org-gcal.el`](https://github.com/kidd/org-gcal.el).
    ```emacs-lisp
    (setq
     send-mail-function 'smtpmail-send-it
     auth-source-xoauth2-creds ""
     auth-source-xoauth2-use-curl t)
    (auth-source-xoauth2-enable)
    (add-to-list 'smtpmail-auth-supported 'xoauth2)
    ```
