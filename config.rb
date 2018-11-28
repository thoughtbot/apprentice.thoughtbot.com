activate :autoprefixer

config[:css_dir] = "stylesheets"

configure :build do
  activate :minify_css
end
