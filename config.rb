activate :autoprefixer

config[:css_dir] = "stylesheets"
config[:sass_assets_paths] = ["node_modules"]

configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
end
