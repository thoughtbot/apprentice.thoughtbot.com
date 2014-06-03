Apprenticeio::Application.routes.draw do
  get '/tracks' => redirect('/')

  root to: 'high_voltage/pages#show', id: 'index'
end
