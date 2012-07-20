# thoughtbot.com

This is the source of thoughtbot.com, which is a jekyll site.

### Editing

Jekyll compiles files into the `_site/` directory, so don't edit anything in
there. Instead, edit the HTML files in the top-level directory or other
subdirectories. Jekyll will compile your changes into the `_site/` directory.

### Run locally

To run locally:

    $ jekyll --server

Then go to [http://localhost:4000](http://localhost:4000)

Files will be auto-regenerated.  You can run:

    $ jekyll --server --no-auto

...if your changes aren't showing up correctly.  This will flag parse errors.

CSS files are generated using SASS. Run:

    $ sass --watch stylesheets/sass:stylesheets/ --style compressed -r ./stylesheets/sass/bourbon/lib/bourbon.rb

So that the css files will be generated automatically.
