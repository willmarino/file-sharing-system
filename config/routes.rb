Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    # restful routing for users, we wont need new or edit as we are rendering jsx on the client side with react
    resources :users, only: [:index, :show, :create, :update, :destroy] do
      collection do
        get 'search'
      end
    end

    # restful routing for session, we will only need to create or destroy sessions (login, logout)
    resource :session, only: [:create, :destroy]

    # for friend requests, I will need to create a request, delete them when a user has responded to them,
    # and return an index of them per user ('show me all of my friend requests')
    resource :friend_requests, only: [:create, :index] do 
      member do
        post 'respond'
      end
    end


  end

end
