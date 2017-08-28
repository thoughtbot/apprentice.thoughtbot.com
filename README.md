# apprentice.io

This is the source of [apprentice.io], which is a Middleman app.

[apprentice.io]: https://www.apprentice.io

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
[Netlify] will automatically deploy the site to <https://www.apprentice.io>.

[Netlify]: https://www.netlify.com/

## License

The content of this project
is licensed under the [Creative Commons Attribution 4.0 license][CC].
The underlying source code used to format and display that content
is licensed under the [MIT license][MIT].

[CC]: https://creativecommons.org/licenses/by/4.0/
[MIT]: http://opensource.org/licenses/mit-license.php
