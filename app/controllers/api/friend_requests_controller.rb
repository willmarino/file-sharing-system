class Api::FriendRequestsController < ApplicationController
  def create
    @fr = FriendRequest.create!(sender_id: current_user.id, receiver_id: params[:id])
    render :show
  end
  def index
    @sent_frs = FriendRequest.where("sender_id = #{current_user.id}")
    @received_frs = FriendRequest.where("receiver_id = #{current_user.id}")
    # @sent_frs = FriendRequest.find_by(sender_id: current_user.id)
    # @received_frs = FriendRequest.find_by(receiver_id: current_user.id)
    render :index
  end
  # respond should be grabbing the fr using the id sent back in params,
  # using the fr to find both the users which it applies to,
  # for each user, updating their friends array attribute to include the id of the other user
  # destroy the fr, and send back the id of the fr
  # might need to send back the users themselves as well so that the frontend will have the user with the updated friends list without needing to refresh
  def respond
    @fr = FriendRequest.find(params[:id])
    if params[:info][:resp]
      users = [ User.find(@fr.sender_id), User.find(@fr.receiver_id) ]
      (0...users.length).each { |i| users[i].update_attributes(friends: users[i].friends.push(users[i - 1].id)) }
    end
    @fr.destroy
    render :respond
  end
end


# I need to make my views, then my actions/util, and then my redux structure, and then I can add the click button and maybe work on a small menu showing friends/requests