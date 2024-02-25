+++
title = "Read Gmail in Emacs with mbsync and mu4e"
author = ["Cash Prokop-Weaver"]
date = 2021-12-27T20:01:00-08:00
lastmod = 2024-02-24T18:14:14-08:00
draft = false
slug = "5e8b11e4-9600-44b7-8cd4-1be85f359948"
+++

This is a guide to setting up access to email from a Gmail account (eg: @gmail.com) within [Emacs]({{< relref "emacs.md" >}}) ([Doom Emacs]({{< relref "doom_emacs.md" >}})) using `mu`, `mbsync` (`isync`), and `mu4e` (`mu` for `emacs`).

You may have to complete additional steps if you are not using [`doom emacs`](https://github.com/hlissner/doom-emacs), Gmail, or if your set-up differs from mine in other ways.


## Prerequisites {#prerequisites}

Please be sure you've completed these steps before continuing:


### Required Software {#required-software}

1.  Install `mbsync` version &gt;= 1.4.1.

    We will use `mbsync` to download our email. It is essential that the version is greater than or equal to 1.3.3 to ensure the OAuth2 token is not cut off (see line 1891 in [drv_imap.c](https://sourceforge.net/p/isync/isync/ci/v1.3.3/tree/src/drv_imap.c))
    ```sh
    git clone https://git.code.sf.net/p/isync/isync isync
    cd isync
    ./autogen.sh
    ./configure
    make
    sudo make install
    ```

2.  Install `mu`.

    `mu` will index the emails we've downloaded with `mbsync` and provide them to the `mu4e` package.
    ```sh
    sudo apt install maildir-utils
    ```

3.  Install `mu4e`.

    `mu4e` is our email client within emacs.
    ```sh
    sudo apt install mu4e
    ```

4.  Download `gmail-oauth2-tools`.

    This utility will generate our refersh tokens for us.
    ```sh
    git clone https://github.com/google/gmail-oauth2-tools
    ```

5.  Download Cyrus SASL Oauth2

    `mbsync` doesn't support OAuth2, so we'll install a plugin which enables it.
    ```sh
    # Reference: https://unix.stackexchange.com/a/632794/423626
    # Clone the Cyrus SASL OAuth2 sources.
    git clone https://github.com/moriyoshi/cyrus-sasl-xoauth2.git

    # Configure and make.
    cd cyrus-sasl-xoauth2
    ./autogen.sh
    ./configure

    # SASL2 libraries on Ubuntu are in /usr/lib/x86_64-linux-gnu/; modify the Makefile accordingly
    sed -i 's%pkglibdir = ${CYRUS_SASL_PREFIX}/lib/sasl2%pkglibdir = ${CYRUS_SASL_PREFIX}/lib/x86_64-linux-gnu/sasl2%' Makefile

    make
    sudo make install

    # Install saslpluginviewer
    sudo apt install sasl2-bin

    # Verify XOAUTH2 is known to SASL.
    saslpluginviewer | grep XOAUTH2
    ```


### Create an OAuth2 Client ID {#create-an-oauth2-client-id}

Please refer to: [Create an OAuth2 Client ID]({{< relref "create_an_oauth2_client_id.md" >}})


### Create `mbsyncrc` {#create-mbsyncrc}

1.  Create a new file at `~/.mbsyncrc` (or symlink to that location, etc).
2.  Base your config on mine, included below:
    ```text
    # Account Information
    IMAPAccount gmail
    Host imap.gmail.com
    User cashbweaver@gmail.com
    AuthMechs XOAUTH2
    PassCmd "/path/to/gen_email_access_token.sh"
    SSLType IMAPS

    IMAPStore gmail-remote
    Account gmail

    MaildirStore gmail-local
    Path ~/.mail/cashweaver-gmail
    Inbox ~/.mail/cashweaver-gmail/inbox

    Channel gmail-inbox
    Far :gmail-remote:
    Near :gmail-local:
    Patterns "INBOX"

    Channel gmail-sent
    Far :gmail-remote:"[Gmail]/Sent Mail"
    Near :gmail-local:sent
    Remove Near
    Create near
    SyncState *

    Channel gmail-trash
    Far :gmail-remote:"[Gmail]/Trash"
    Near :gmail-local:trash
    Remove Near
    Create near
    SyncState *

    Channel gmail-drafts
    Far :gmail-remote:"[Gmail]/Drafts"
    Near :gmail-local:drafts
    Remove Near
    Create near
    SyncState *

    Group gmail
    Channel gmail-inbox
    Channel gmail-sent
    Channel gmail-trash
    Channel gmail-drafts
    ```


### Emable IMAP in your Gmail Account {#emable-imap-in-your-gmail-account}

Follow the [documentation](https://support.google.com/mail/answer/7126229?hl=en) to enable IMAP.


### Enable `mu4e` within `emacs` {#enable-mu4e-within-emacs}

This step is written for those using [`doom emacs`](https://github.com/hlissner/doom-emacs). Those using other flavors of `emacs` will need to enable `mu4e` on their own.

1.  Enable `mu4e` within [`doom emacs`](https://github.com/hlissner/doom-emacs) by uncommenting `(mu4e +gmail)` within `init.el`.

2.  Sync `doom emacs`.
    ```sh
    doom sync
    ```

3.  Reload `doom emacs` by either killing `emacs` and restarting, or by running `doom/reload` (`SPC : doom/reload` or `SPC h r r`).


## Sync and index your email {#sync-and-index-your-email}

Follow the steps documented by [doom emacs' mu4e section](https://github.com/hlissner/doom-emacs/blob/develop/modules/email/mu4e/README.org).

1.  Sync your email by running `mbsync --all`.

    This may take a while.

2.  Index your email by running:
    ```sh
    mu init --maildir ~/.mail --my-address <you>@gmail.com
    mu index
    ```

3.  Configure emacs to use your email address.

    As an example:
    ```text
    ;; Each path is relative to `+mu4e-mu4e-mail-path', which is ~/.mail by default
    (set-email-account! "gmail.com"
                        '((mu4e-sent-folder       . "/gmail.com/Sent Mail")
                        (mu4e-drafts-folder     . "/gmail.com/Drafts")
                        (mu4e-trash-folder      . "/gmail.com/Trash")
                        (mu4e-refile-folder     . "/gmail.com/All Mail")
                        (smtpmail-smtp-user     . "<you>@gmail.com")
                        (mu4e-compose-signature . "<Your signature here>"))
    ```


## Bibliography {#bibliography}

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
</div>


## Backlinks {#backlinks}

-   [Email in emacs]({{< relref "email_in_emacs.md" >}})
