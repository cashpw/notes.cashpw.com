# [cashpw.com](http://cashpw.com)

My personal website.

## Development

### Posts

[cashpw/notes](http://github.com/cashpw/notes)

Emacs auto-exports posts on save. See my [dotfiles](http://github.com/cashpw/dotfiles/blob/main/config/doom/config.org).

### Recipe scaling

[cashpw/scale-recipe](http://github.com/cashpw/scale-recipe)

1.
    ```sh
    npm run build:release
    ./node_modules/.bin/browserify build/src/main.js --standalone scale-recipe -o ~/proj/cashpw.com/static/js/scale-recipe/bundle.js
    ```

### Link favicons

[cashpw/basic-favicon-links](https://github.com/cashpw/basic-favicon-links)

1. 
    ```sh
    python3 get_favicons.py \
      --markdown_directory=$HOME/proj/cashpw.com/content/posts \
      --icon_directory=$HOME/proj/cashpw.com/static/favicons \
      --favicon_css_outfile_path=$HOME/proj/cashpw.com/assets/css/extended/favicons.css \
      --your_site_url=www.cashpw.com
    ```
