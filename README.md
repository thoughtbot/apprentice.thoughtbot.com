thoughtbot.com
==============

This is the source of thoughtbot.com, which is a Rails app.

Set up
------

    git clone git@github.com:thoughtbot/thoughtbot.com.git
    cd thoughtbot.com
    ./bin/setup

Develop
-------

Run the server:

    foreman start

Then go to [http://localhost:6500][1].

* Edit files in the `app/views/pages/` directory.
* Styles for the main site are in `app/assets/stylesheets`.
* You can also place raw files in 'public/'.
* `git commit` the additions and push.

Develop
-------

Use the following guides for getting things done, programming well, and
programming in style.

* [Protocol][2]
* [Best Practices][3]
* [Style][4]

Deploy
------

Heroku apps:

  git remote add staging git@heroku.com:thoughtbot-staging.git
  git remote add production git@heroku.com:thoughtbot-production.git

Refer to the [deploy guide][5] guide.

Deploy to staging, then acceptance test on [staging][6].

Deploy to production, then acceptance test on [production][7].

[1]: http://localhost:6500
[2]: http://github.com/thoughtbot/guides/blob/master/protocol
[3]: http://github.com/thoughtbot/guides/blob/master/best-practices
[4]: http://github.com/thoughtbot/guides/blob/master/style
[5]: https://github.com/thoughtbot/guides/tree/master/protocol#deploy
[6]: http://staging.thoughtbot.com
[7]: http://thoughtbot.com
