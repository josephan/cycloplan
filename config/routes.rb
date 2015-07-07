Rails.application.routes.draw do
  root 'static_pages#home'

  # Route to static pages.
  get 'terms' => 'static_pages#terms'
  get 'privacy' => 'static_pages#privacy'
  get 'about' => 'static_pages#about' 
end