$:.unshift File.dirname(__FILE__)

require "rack/contrib/try_static"

ONE_WEEK = 604_800
FIVE_MINUTES = 300

use Rack::Deflater
use Rack::TryStatic,
  root: "tmp",
  urls: %w[/],
  try: %w[.html index.html /index.html],
  header_rules: [
    [
      %w(css js png jpg woff),
      { "Cache-Control" => "public, max-age=#{ONE_WEEK}" }
    ],
    [
      %w(html), { "Cache-Control" => "public, max-age=#{FIVE_MINUTES}" }
    ]
  ]

run lambda { |env|
  [
    404,
    {
      "Content-Type"  => "text/html",
      "Cache-Control" => "public, max-age=#{FIVE_MINUTES}"
    },
    ["File not found"]
  ]
}
