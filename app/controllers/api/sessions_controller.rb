class Api::SessionsController < ApplicationController

  # controller logic for login
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      @userId = @user.id
      render :show
    else
      render json: ['User cannot be found'], status: 400
    end
  end

  # controller logic for logout
  def destroy
    if current_user
      logout
    end
  end
end

