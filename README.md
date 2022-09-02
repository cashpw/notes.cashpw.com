# [cashweaver.com](http://cashweaver.com)

My personal website.

## Development

### Posts

[cashweaver/notes](http://github.com/cashweaver/notes)

Emacs auto-exports posts on save. See my [dotfiles](http://github.com/cashweaver/dotfiles/blob/main/config/doom/config.org).

### Recipe scaling

[cashweaver/scale-recipe](http://github.com/cashweaver/scale-recipe)

1.
    ```sh
    npm run build:release
    ./node_modules/.bin/browserify build/src/main.js --standalone scale-recipe -o ~/proj/cashweaver.com/static/js/scale-recipe/bundle.js
    ```

### Link favicons

[cashweaver/basic-favicon-links](https://github.com/cashweaver/basic-favicon-links)

1. 
    ```sh
    python3 get_favicons.py \
      --markdown_directory=$HOME/proj/cashweaver.com/content/posts \
      --icon_directory=$HOME/proj/cashweaver.com/static/favicons \
      --favicon_css_outfile_path=$HOME/proj/cashweaver.com/assets/css/extended/favicons.css \
      --your_site_url=www.cashweaver.com
    ```
