+++
title = "Read Gmail in Emacs with notmuch and lieer"
author = ["Cash Weaver"]
date = 2021-12-27T19:56:00-08:00
lastmod = 2022-09-05T16:13:57-07:00
draft = false
slug = "ada68d10-cec8-4af1-903d-29dfa71d2343"
+++

This is a guide to setting up access to email from a Gmail account (eg: @gmail.com) within [Emacs]({{< relref "emacs.md" >}}) ([Doom Emacs]({{< relref "doom_emacs.md" >}})) using [`notmuch`](https://notmuchmail.org/) and [`lieer`](https://github.com/gauteh/lieer).

You may have to complete additional steps if you are not using [`doom emacs`](https://github.com/hlissner/doom-emacs) or if your set-up differs from mine in other ways.


## Prerequisites {#prerequisites}

Please be sure you've completed these steps before continuing:


### Required Software {#required-software}

1.  `lieer`
    ```sh
    git clone https://github.com/gauteh/lieer.git
    cd lieer
    pip3 install -r requirements.txt
    ```

2.  `notmuch`
    ```sh
    sudo apt install notmuch
    ```


### Create an OAuth2 Client ID {#create-an-oauth2-client-id}

1.  Please refer to: [Create an OAuth2 Client ID]({{< relref "create_an_oauth2_client_id.md" >}})
2.  Ensure GMail APIs are enabled for this Client ID.
3.  Download the JSON format of this key.


### Enable `notmuch` within `emacs` {#enable-notmuch-within-emacs}

This is written for those using [`doom emacs`](https://github.com/hlissner/doom-emacs). Those using other flavors of `emacs` will need to enable `notmuch` on their own.

1.  Enable `notmuch` by uncommenting `notmuch` within `init.el` beneath the `:email` header.
2.  Run `doom sync` in your shell.
3.  Reload `doom emacs` by either killing `emacs` and restarting, or by running `doom/reload` (`SPC : doom/reload` or `SPC h r r`).


## Configure `notmuch` {#configure-notmuch}

These steps are pulled from `notmuch`'s own [documentation](https://notmuchmail.org/getting-started/).

1.  Run `notmuch` in your shell to create `~/.notmuch-config`.

2.  Perform initial indexing:
    ```sh
    # Create a directory to house your mail if you don't already have one.
    mkdir -p /path/to/your/mail/directory

    cd /path/to/your/mail/directory
    notmuch new
    ```
    You should see something like:
    ```text
    Found 0 total files (that's not much mail)
    No new mail.
    ```


## Configure `lieer` {#configure-lieer}

These steps are pulled from `lieer`'s own [documentation](https://github.com/gauteh/lieer#usage).

1.  Make a directory for the lieer storage and state files (local repository).
    ```sh
    cd /path/to/your/mail/directory
    mkdir <you>.gmail
    cd you.gmail
    ```

2.  Update your `~/.notmuch-config` to ignore `json`, `lock`, and `bak` files by updating the `[new]` section to read:
    ```text
    [new]
    tags=new
    ignore=/.*[.](json|lock|bak)$/
    ```

3.  Initialize your mail storage.

    This command will open a new tab in your browser. We need to run this command once before we can specify our own credentials. Feel free to close the tab as soon as it opens as we'll be swapping the default client id with our own in the next steps.
    ```sh
    # From within /path/to/your/mail/directory/<you>.gmail
    /path/to/lieer/gmi init <you>@gmail.com
    ```

4.  Cancel out (`CTRL-C`).

    You should see a message similar to:
    ```text
    init: repository is set up, but authorization failed. re-run 'gmi auth' with proper parameters to complete authorization
    ```

5.  Set your credentials.
    ```sh
    # From within /path/to/your/mail/directory/<you>.gmail
    /path/to/lieer/gmi auth \
      --credentials=/path/to/your/OAuth2/client/id.json

    # Or, if you're working remotely (SSHing into your workstation, etc)
    /path/to/lieer/gmi \
      --noauth_local_webserver \
      auth \
      --credentials=/path/to/your/OAuth2/client/id.json
    ```
    Open the link and authenticate using your `@gmail.com` account. Copy the code and paste it back into the running `gmi` command. You should see a message like:
    ```text
    Authentication successful.
    credentials stored in /path/to/your/mail/directory/you.gmail/.credentials.gmailieer.json
    ```

6.  Sync your email.

    This step may take a long time. My initial sync of 90k emails took 56 real-time minutes.
    ```sh
    # From within /path/to/your/mail/directory/<you>.gmail
    /path/to/lieer/gmi sync
    ```


## Set up Cronjob to Sync Email {#set-up-cronjob-to-sync-email}

You could also use a `systemd` timer for this.

1.  Create a new shell script to sync your email. Remember to `chmod 777`!
    ```sh
    #!/bin/bash

    cd /path/to/your/mail/directory/you.gmail
    /path/to/lieer/gmi sync
    ```

2.  Configure the cronjob with `crontab -e`.
    ```text
    # Sync email with lieer every three minutes.
    */3 * * * * bash /path/to/your/script/sync_email.sh
    ```


## Configure `notmuch` within `emacs` (optional) {#configure-notmuch-within-emacs--optional}

-   Set up [saved searches](https://notmuchmail.org/doc/latest/notmuch-emacs.html#saved-searches).

-   Prevent wrapping text at 70 characters while composing an email:
    ```text
    ;; This is valid in doom emacs. You may need to customize for other distributions.
    ;; Prevent wrapping at 70 characters in email composition.
    (add-hook! 'message-mode-hook 'turn-off-auto-fill)
    (add-hook! 'message-mode-hook 'visual-line-mode)
    ```


## Done! {#done}

For those of you using [`doom emacs`](https://github.com/hlissner/doom-emacs), you can open notmuch from anywhere with `SPC o m`.
