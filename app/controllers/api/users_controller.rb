class Api::UsersController < ApplicationController

  # return all users
  def index
    @users = User.all
    render :index
  end

  # return one user in particular
  def show
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      render :show
    else
      render json: ['User not found'], status: 400
    end
  end

  # create new user, and return that user
  def create
    @user = User.create!(user_params)
    if @user
      login(@user)
      render :show
    else
      render json: @user.error_messages, status: 400
    end
  end

  # update existing user, and return that user
  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    render :show
  end

  # delete existing user, and return that user's id so that the user can easily be removed from the frontend when the response hits react/redux
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :destroyed
  end

  # strong params to ensure users are only created with the correct information
  def user_params
    params.require(:user).permit(:username, :email, :password, :description)
  end



  # ----------------------------------------------------------------------------------------------------------------------------------------------------------
  # everything below this line is not RESTful, these are custom routes


  # search will iterate through all users and collect the users with usernames which match the search query
  def search
    query = search_params['query']
    @users = User.all.select { |user| user.username == query }
    if !@users.empty?
      render :search
    else
      render json: ['That search returned no users'], status: 400
    end
  end

  # search params will make sure the input for this route is in the form {search: {query: 'tim'}}
  def search_params
    params.require(:search).permit(:query)
  end

end
