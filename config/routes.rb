Rails.application.routes.draw do
  resources :works, only: [:index]

  match '/about', to: 'works#about', via: [:get]
  match '/zeto', to: 'works#zeto', via: [:get]
  match '/contact', to: 'works#contact', via: [:get, :post]

  root to: 'works#home'
end
