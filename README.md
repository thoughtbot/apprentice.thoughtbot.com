# apprentice.io

This is the source of [apprentice.io], which is a Middleman app.

[apprentice.io]: http://apprentice.io

## Set up

```bash
git clone git@github.com:thoughtbot/apprenticeio.git
cd apprenticeio
./bin/setup
```

## Develop

Run the server, perhaps in a tmux session:

```bash
bundle exec middleman server
```

Open a browser:

```bash
open http://localhost:4567
```

* Edit files in the `source/` directory.
* Styles for the main site are in `source/stylesheets/`.
* `git commit` the additions and push.

Note that running `foreman start` will attempt to serve static files, and will
not live-reload any changes you make.  Hence, it's important to use the approach
of `middleman server` when in development mode.

Use the following guides for getting things done, programming well, and
programming in style.

* [Protocol]
* [Best Practices]
* [Style]

[Protocol]: http://github.com/thoughtbot/guides/blob/master/protocol
[Best Practices]: http://github.com/thoughtbot/guides/blob/master/best-practices
[Style]: http://github.com/thoughtbot/guides/blob/master/style

## Deploy

Running `./bin/setup` will automatically add you as a collaborator and set up
`staging` and `production` remotes for the Heroku applications.

Refer to the [deploy guide].

[deploy guide]: https://github.com/thoughtbot/guides/tree/master/protocol#deploy

First, deploy to, and run acceptance on the staging site:

```bash
./bin/deploy staging
```

When things look good, deploy to, and run acceptance on the production site:

```
./bin/deploy production
```
