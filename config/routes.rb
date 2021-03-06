Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create)
    resource :session, only: %i(create destroy)
    resources :toys, only: %i(index create show update destroy)
    resources :leasings, only: %i(index create show destroy)
  end

  root 'static_pages#root'

end
