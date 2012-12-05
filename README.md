thoughtbot.com
==============

This is the source of thoughtbot.com, which is a Rails app.

Editing
-------

* Edit files in the `app/views/pages/` directory.
* Styles for the main site are in `app/assets/stylesheets`
* You can also place raw files in "public/"
* `git commit` the additions and push

Run locally
-----------

Run the regular rails commands:

    $ rake db:create
    $ rake db:migrate
    $ bundle

Run the server:

    $ rails s

Then go to [http://localhost:3000](http://localhost:3000).

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
