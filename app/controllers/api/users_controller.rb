class Api::UsersController < ApplicationController

  # return all users
  def index
    @users = User.all
  end

  # return one user in particular
  def show
    
  end

  # create new user, and return that user
  def create

  end

  # update existing user, and return that user
  def update

  end

  # delete existing user, and return that user's id so that the user can easily be removed from the frontend when the response hits react/redux
  def destroy

  end

end
