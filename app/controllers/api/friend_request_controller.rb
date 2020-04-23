class Api::FriendRequestController < ApplicationController
  def create
    @fr = FriendRequest.create!(sender_id: params[:sender_id], receiver_id: params[:receiver_id])
    render :show
  end
  def destroy
    @fr = FriendRequest.find(params[:id])
    @fr.destroy
    render :show
  end
  def index
    @frs = FriendRequest.find_by(receiver_id: current_user.id)
    render :index
  end
end


# I need to make my views, then my actions/util, and then my redux structure, and then I can add the click button and maybe work on a small menu showing friends/requests