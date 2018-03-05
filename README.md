# apprentice.io

This is the source of [apprentice.io], which is a Middleman app.

[apprentice.io]: http://apprentice.thoughtbot.com/

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

## Deploy

Push to master.
[Netlify] will automatically deploy the site to <http://apprentice.thoughtbot.com/>.

[Netlify]: https://www.netlify.com/
