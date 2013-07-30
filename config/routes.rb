ThoughtbotDotCom::Application.routes.draw do
  constraints :domain => 'apprentice.io' do
    root :to => 'high_voltage/pages#show', :id => 'apprenticeship/index'
  end
  root :to => 'high_voltage/pages#show', :id => 'home'

  # Redirects
  get '_portfolio' => redirect('/')
  get 'about/people' => redirect('/about')
  get 'clients' => redirect('/')
  get 'hiring' => redirect('/jobs')
  get 'planning' => redirect('/contact')
  get 'services' => redirect('/')
  get 'services/consulting' => redirect('/')
  get 'services/kickstart' => redirect('/')
  get 'services/training' => redirect('http://learn.thoughtbot.com')
  get 'training' => redirect('http://learn.thoughtbot.com')
  get 'd4d-resources' => redirect('http://learn.thoughtbot.com/d4d-resources')
  get 'podcast.xml' => redirect('http://learn.thoughtbot.com/podcast.xml')
  get 'podcast' => redirect('http://learn.thoughtbot.com/podcast')
  get 'podcast/:id' => redirect('http://learn.thoughtbot.com/podcast/%{id}')
  get 'podcasts' => redirect('http://learn.thoughtbot.com/podcast')
  get 'podcasts/:id' => redirect('http://learn.thoughtbot.com/podcast/%{id}')
  get 'buildphase' => redirect('http://learn.thoughtbot.com/buildphase')
  get 'buildphase/:id' => redirect('http://learn.thoughtbot.com/buildphase/%{id}')
  get 'giantrobots' => redirect('http://learn.thoughtbot.com/giantrobots')
  get 'giantrobots/:id' => redirect('http://learn.thoughtbot.com/giantrobots/%{id}')

  # Temporary redirect for existing open-sourced repositories.
  # Remove once all repo links are updated
  get 'assets/tm/logo.png' => redirect('/logo.png')
  get 'images/tm/logo.png' => redirect('/logo.png')

  # Bourbon and Neat redirects
  get 'bourbon' => redirect('http://bourbon.io/')
  get 'neat' => redirect('http://neat.bourbon.io/')
  get 'neat/examples' => redirect('http://neat.bourbon.io/examples/')

  get 'projects/cocaine' => redirect('http://github.com/thoughtbot/cocaine')
  %w(clearance factory_girl jester mile_marker pacecar paperclip shoulda squirrel).each do |project|
    get "projects/#{project}" => redirect('/community')
  end
end
