 Rails.application.routes.draw do

  root 'static_pages#home'

  get 'terms' => 'static_pages#terms'
  get 'privacy' => 'static_pages#privacy'
  get 'about' => 'static_pages#about'
  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'total' => 'dates#total'
  get 'day' => 'dates#day'
  # get 'week' => 'dates#week'
  get 'month' => 'dates#month'
  get 'year' => 'dates#year'

  resources :users
  resources :plans, only: [:create,:destroy]
  resources :events, only: [:index,:new,:create,:destroy]
end