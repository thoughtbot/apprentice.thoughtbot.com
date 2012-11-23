thoughtbot.com
==============

This is the source of thoughtbot.com, which is a hybrid Rails/jekyll site.

We use jekyll to generate files to `public/`, which then gets served by Rails.

We also use Rails to get real 301 redirects instead of the `<meta>` redirects in
jekyll.

We are using the Rails asset pipeline.

Editing
-------

* Edit files in the `jekyll/` directory. Don't edit files in "public/" because
  those are generated from the "jekyll/" directory by running "jekyll".
* Styles for the main site are in `app/assets/stylesheets`
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

Then go to [http://localhost:3000](http://localhost:3000).

Files will be auto-regenerated.  If your changes aren't showing up correctly,
check for parse errors by running:

    $ jekyll --no-auto

Deploying
---------

Add a `heroku` remote:

    git remote add production git@heroku.com:thoughtbot-production.git
    git remote add staging git@heroku.com:thoughtbot-staging.git

Deploy to staging:

    git push staging master

See http://staging.thoughtbot.com.

Deploy to production:

    git push production master

See http://thoughtbot.com.
