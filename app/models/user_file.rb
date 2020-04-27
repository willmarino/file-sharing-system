class UserFile < ApplicationRecord
  validates :content, :name, :owner_id, presence: true
  validates :name, uniqueness: { scope: :owner_id }

  belongs_to :owner,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :owner_id

end
