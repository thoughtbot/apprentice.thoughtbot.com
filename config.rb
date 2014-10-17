activate :directory_indexes

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :build_dir, "tmp"

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
end
