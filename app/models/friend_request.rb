class FriendRequest < ApplicationRecord

  validates :sender_id, presence: true, uniqueness: { scope: :receiver_id }
  validates :receiver_id, presence: true, uniqueness: { scope: :sender_id }

  # the sender is the user which sends out the initial friend request
  belongs_to :sender,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :sender_id

  # the receiver is the user who will have the choice to either accept or reject the friend request
  belongs_to :receiver,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :receiver_id

end
