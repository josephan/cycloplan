Rails.application.routes.draw do

  root 'static_pages#home'

  get 'terms' => 'static_pages#terms'
  get 'privacy' => 'static_pages#privacy'
  get 'about' => 'static_pages#about'
  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'day' => 'dates#day'

  resources :users, except: :index
  resources :plans, except: :index
  resources :events
end