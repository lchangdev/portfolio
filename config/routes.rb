Rails.application.routes.draw do

  match '/portfolio', to: 'works#portfolio', via: [:get]
  match '/about', to: 'works#about', via: [:get]
  match '/contact', to: 'works#contact', via: [:get, :post]

  root to: 'works#home'
end
