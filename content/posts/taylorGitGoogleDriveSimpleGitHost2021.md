+++
title = "Laura Taylor | Git + Google Drive = Simple Git Host"
author = ["Cash Prokop-Weaver"]
date = 2022-04-18T08:20:00-07:00
lastmod = 2023-12-23T18:55:04-08:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
slug = "abb1e1cc-12bb-42fe-9004-555145c8faaa"
+++

Laura Taylor, (NO_ITEM_DATA:taylorGitGoogleDriveSimpleGitHost2021)

1.  Mount Google Drive locally
    -   Linux: I prefer [`rclone`](https://rclone.org/drive/)
    -   Windows: [Google Drive](https://www.google.com/drive/download/)
    -   Mac: [Google Drive](https://www.google.com/drive/download/)

2.  Navigate to your local git repository you'd like to host on Google Drive

3.  Create a bare git clone:
    ```bash
    git clone --bare \
        . \
        PATH_TO_GDRIVE/.../PROJECT_NAME.git
    ```
    Example:
    ```bash
    git clone --bare . /mnt/gdrive/projects/addon.git
    ```

4.  Add this bare repository as a remote:
    ```bash
    git remote add \
        REMOTE_NAME \
        PATH_TO_GDRIVE/.../PROJECT_NAME.git
    ```
    Example:
    ```bash
    git remote add gdrive /mnt/gdrive/projects/addon.git
    ```

5.  Push/pull project as you usually would from github/gitlab/etc


## Bibliography {#bibliography}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry">NO_ITEM_DATA:taylorGitGoogleDriveSimpleGitHost2021</div>
</div>

foo1


## Backlinks {#backlinks}

-   [Todos]({{< relref "todos.md" >}})
-   [Why I write notes]({{< relref "why_i_write_notes.md" >}})
-   [org-roam]({{< relref "org_roam.md" >}})
