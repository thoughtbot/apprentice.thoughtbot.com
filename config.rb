activate :autoprefixer

config[:css_dir] = "stylesheets"
config[:sass_assets_paths] = ["node_modules"]

configure :production do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
end
