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
      render json: ['User not found'], status: 401
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

end
