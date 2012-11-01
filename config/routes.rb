ThoughtbotDotCom::Application.routes.draw do
  # Redirects
  get '/_portfolio' => redirect('/')
  get '/about/people' => redirect('/about')
  get '/clients' => redirect('/')
  get '/hiring' => redirect('/jobs')
  get '/planning' => redirect('/contact')
  get '/services' => redirect('/')
  get '/services/consulting' => redirect('/')
  get '/services/kickstart' => redirect('/')
  get '/services/training' => redirect('http://learn.thoughtbot.com')
  get '/training' => redirect('http://learn.thoughtbot.com')
  get '/d4d-resources' => redirect('http://learn.thoughtbot.com/d4d-resources')

  # Temporary Bourbon and Neat redirects
  get '/bourbon' => redirect('http://thoughtbot.github.com/bourbon')
  get '/neat' => redirect('http://thoughtbot.github.com/neat')
  get '/neat/examples' => redirect('http://thoughtbot.github.com/neat/examples')

  get '/projects/cocaine' => redirect('http://github.com/thoughtbot/cocaine')
  %w(clearance factory_girl jester mile_marker pacecar paperclip shoulda squirrel).each do |project|
    get "/projects/#{project}" => redirect('/community')
  end
end
