# cashweaver.com

## Populating favicons

Depends on [cashweaver/basic-favicon-links](https://github.com/cashweaver/basic-favicon-links).

1. 
    ```sh
    python3 get_favicons.py \
      --markdown_directory=$HOME/proj/cashweaver.com/content/posts \
      --icon_directory=$HOME/proj/cashweaver.com/static/favicons \
      --icon_directory=$HOME/proj/cashweaver.com/assets/css/extended/favicons.css \
      --your_site_url=www.cashweaver.com
    ```
