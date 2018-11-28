Bundler.require(Middleman::Application.config.environment)

activate :autoprefixer
activate :directory_indexes

set :css_dir, "stylesheets"

configure :build do
  activate :minify_css
end
