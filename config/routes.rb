Rails.application.routes.draw do
  resources :works, only: [:index]

  match '/code', to: 'works#code', via: [:get]
  match '/design', to: 'works#design', via: [:get]
  match '/about', to: 'works#about', via: [:get]
  match '/contact', to: 'works#contact', via: [:get, :post]

  root to: 'works#home'
end
