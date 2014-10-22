apprentice.io
=============

This is the source of [apprentice.io], which is a Middleman app.

[apprentice.io]: http://apprentice.io

Set up
------

```bash
git clone git@github.com:thoughtbot/apprenticeio.git
cd apprenticeio
./bin/setup
```

Develop
-------

Run the server, perhaps in a tmux session:

```bash
middleman
```

Open a browser:

```bash
open http://localhost:4567
```

* Edit files in the `source/` directory.
* Styles for the main site are in `source/stylesheets/`.
* `git commit` the additions and push.

Develop
-------

Use the following guides for getting things done, programming well, and
programming in style.

* [Protocol]
* [Best Practices]
* [Style]

[Protocol]: http://github.com/thoughtbot/guides/blob/master/protocol
[Best Practices]: http://github.com/thoughtbot/guides/blob/master/best-practices
[Style]: http://github.com/thoughtbot/guides/blob/master/style

Deploy
------

`./bin/setup` will automatically add you as a collaborator
and set up `staging` and `production` remotes for the Heroku apps.

Refer to the [deploy guide].

[deploy guide]: https://github.com/thoughtbot/guides/tree/master/protocol#deploy

Deploy to, and acceptance test on, staging:

```bash
./bin/deploy staging
```

Deploy to, and acceptance test on, production:

```
./bin/deploy production
```
