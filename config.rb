activate :autoprefixer

config[:css_dir] = "stylesheets"

configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
end
