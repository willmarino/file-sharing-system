class Api::SessionsController < ApplicationController

  # controller logic for login
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      @user.login
      render :show
    else
      render json: ['User cannot be found'], status: 401
    end
  end

  # controller logic for logout
  def destroy
    if current_user
      logout
    end
  end
end
