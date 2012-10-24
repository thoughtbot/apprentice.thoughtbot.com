thoughtbot.com
==============

This is the source of thoughtbot.com, which is a hybrid Rails/jekyll site.

We use jekyll to generate files to `public/`, which then gets served by Rails.

We also use Rails to get real 301 redirects instead of the `<meta>` redirects in
jekyll.

Editing
-------

* Edit files in the `jekyll/` directory
* Run `bundle exec jekyll` to generate files to the `public/` directory
* `git commit` the additions and push

Deploying
---------

Heroku remote:

    git remote add heroku git@heroku.com:thoughtbotdotcom.git

If you need to add yourself as a collaborator to the Heroku app, sign in as
support@thoughtbot.com (credentials are in backpack) and add your main email.

Run locally
-----------

To run locally:

    # in one terminal
    $ jekyll --auto
    # in another terminal
    $ rails s

Then go to [http://localhost:3000](http://localhost:3000)

Files will be auto-regenerated.  If your changes aren't showing up correctly,
check for parse errors by running:

    $ jekyll --no-auto

The blog
--------

Assets for the blog (images, CSS, etc) can be found in `jekyll/assets`.

Deploying
---------
