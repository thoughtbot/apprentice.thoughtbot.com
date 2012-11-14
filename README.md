thoughtbot.com
==============

This is the source of thoughtbot.com, which is a hybrid Rails/jekyll site.

We use jekyll to generate files to `public/`, which then gets served by Rails.

We also use Rails to get real 301 redirects instead of the `<meta>` redirects in
jekyll.

Editing
-------

* Edit files in the `jekyll/` directory
* Styles for the main site are in `app/assets/stylesheets`
* Styles for the blog are in `jekyll/stylesheets/robots`
* Run `bundle exec jekyll` to generate files to the `public/` directory
* `git commit` the additions and push

Run locally
-----------

Run the regular rails commands:

    $ rake db:create
    $ rake db:migrate
    $ bundle

Run the server:

    # in one terminal
    $ jekyll --auto
    # in another terminal
    $ rails s

Then go to [http://localhost:3000](http://localhost:3000)

Files will be auto-regenerated.  If your changes aren't showing up correctly,
check for parse errors by running:

    $ jekyll --no-auto

The Blog
--------

Assets for the blog other than CSS can be found in `jekyll/assets`.

To generate the Sass for the blog run sass watch from the root directory:
    $ sass --watch jekyll/stylesheets/robots:public/assets/robots -r ./jekyll/stylesheets/robots/bourbon/lib/bourbon.rb

Deploying
---------

Add a `heroku` remote:

    git remote add heroku git@heroku.com:thoughtbotdotcom.git

Push:

    git push heroku master
