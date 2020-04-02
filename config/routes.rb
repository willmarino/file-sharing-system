Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    # restful routing for users, we wont need new or edit as we are rendering jsx on the client side with react
    resources :users, only: [:index, :show, :create, :update, :destroy]
    
    # restful routing for session, we will only need to create or destroy sessions (login, logout)
    resource :session, only: [:create, :destroy]



  end

end
