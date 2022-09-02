+++
title = "Laura Taylor | Git + Google Drive = Simple Git Host"
author = ["Cash Weaver"]
date = 2022-04-18T08:20:00-07:00
lastmod = 2022-08-26T22:06:42-07:00
tags = ["reference", "reference"]
categories = ["reference"]
draft = false
+++

Laura Taylor, (<a href="#citeproc_bib_item_1">Taylor 2021</a>)

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

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Taylor, Laura. 2021. “Git + Google Drive = Simple Git Host.” <i>Medium</i>. <a href="https://techstreams.medium.com/git-google-drive-simple-git-host-3a84db4fc1fd">https://techstreams.medium.com/git-google-drive-simple-git-host-3a84db4fc1fd</a>.</div>
</div>