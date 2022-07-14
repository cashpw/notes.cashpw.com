+++
title = "Create an OAuth2 Client ID"
author = ["Cash Weaver"]
date = 2021-12-27T19:48:00-08:00
lastmod = 2022-07-13T20:30:51-07:00
draft = false
+++

A short guide to creating an OAuth2 Client ID through the Google Cloud Console.


## Create a new OAuth2 Client ID {#create-a-new-oauth2-client-id}

These steps are based on the [steps outlined by ccrusius](https://github.com/ccrusius/auth-source-xoauth2/blob/d3890eaa3a46dc89758ec6b789949e70ae782896/auth-source-xoauth2.el#L85).

1.  Navigate to the [Cloud Console](https://console.cloud.google.com).
2.  Choose an existing project or create a new one.
3.  Select "APIs &amp; Services" from the navigation menu.
4.  Select "Credentials".
5.  Create new credentials of type "OAuth Client ID".
6.  Choose application type "Other".
7.  Choose a name for the client.
8.  This should get you a Client ID and a Client Secret. We'll need both.


## Confirm that OAuth2 Authentication Works {#confirm-that-oauth2-authentication-works}

1.  Download `gmail-oauth2-tools`.

    This utility will generate our refersh tokens for us.

    ```sh
    git clone https://github.com/google/gmail-oauth2-tools
    ```

2.  Create a refresh token using `gmail-oauth2-tools`.

    ```sh
    python2.7 /path/to/gmail-oauth2-tools/python/oauth2.py \
      --user=<you>@gmail.com \
      --client_id=<Client ID> \
      --client_secret=<Client Secret> \
      --generate_oauth2_token
    ```

3.  Create access token generating script; `gen_email_access_token.sh`.

    Create a new file, paste the following in, and fill in the variable values. Don't forget to set `chmod 700`!

    ```sh
    #!/bin/bash
    # Reference: http://blog.onodera.asia/2020/06/how-to-use-google-g-suite-oauth2-with.html

    python27_executable="python2.7"

    # Path to the oauth2.py file.
    # Get this file by cloning https://github.com/google/gmail-oauth2-tools
    path_to_oauth2py="/path/to/gmail-oauth2-tools/python/oauth2.py"

    # The email address we'll be using.
    gsuite_email_address="<you>@gmail.com"

    # Generate these by creating a new OAuth2 Client Id in Google's Cloud.
    client_id="<client id>"
    client_secret="<client secret>"

    # Generate a refresh token by running the following command:
    # python2.7 /opt/share/oauth2.py \
    #   --user=MY_GSUITE_EMAIL_ADDRESS \
    #   --client_id=MY_CLIENT_ID.apps.googleusercontent.com \
    #   --client_secret=MY_CLIENT_SECRET  \
    #   --generate_oauth2_token
    refresh_token="<your refresh token">

    access_token=$("${python27_executable}" "${path_to_oauth2py}" \
      --user="${gsuite_email_address}" \
      --client_id="${client_id}" \
      --client_secret="${client_secret}" \
      --refresh_token="${refresh_token}" \
      | awk -F" " '{if(NR==1)print $3}')

    echo -n "$access_token"
    ```

4.  Confirm that your access token works.

    ```sh
    python2.7 /path/to/gmail-oauth2-tools/python/oauth2.py \
      --test_imap_authentication \
      --user=<you>@gmail.com \
      --access_token="<your access token>"
    ```

    You should see something like this:

    ```text
    05:51.26 > OKBC1 AUTHENTICATE XOAUTH2
    05:51.32 < +
    05:51.33 write literal size 272
    05:55.17 < * CAPABILITY IMAP4rev1 UNSELECT IDLE NAMESPACE QUOTA ID XLIST CHILDREN X-GM-EXT-1 UIDPLUS COMPRESS=DEFLATE ENABLE MOVE CONDSTORE ESEARCH UTF8=ACCEPT LIST-EXTENDED LIST-STATUS LITERAL- SPECIAL-USE APPENDLIMIT=157286400
    05:55.17 < OKBC1 OK <you>@gmail.com authenticated (Success)
    05:55.17 > OKBC2 SELECT INBOX
    05:55.59 < * FLAGS (\Answered \Flagged \Draft \Deleted \Seen $NotPhishing $Phishing)
    05:55.59 < * OK [PERMANENTFLAGS (\Answered \Flagged \Draft \Deleted \Seen $NotPhishing $Phishing \*)] Flags permitted.
    05:55.59 < * OK [UIDVALIDITY 1] UIDs valid.
    05:55.59 < * 142 EXISTS
    05:55.59 < * 0 RECENT
    05:55.59 < * OK [UIDNEXT 142654] Predicted next UID.
    05:55.59 < * OK [HIGHESTMODSEQ 65647480]
    05:55.59 < OKBC2 OK [READ-WRITE] INBOX selected. (Success)
    ```
