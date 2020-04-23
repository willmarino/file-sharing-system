class User < ApplicationRecord
  # In the user model file there are object validations to ensure that all the information that is necessary is present and in the right form
  # Also, there are a series of methods which make user authentication logic in the users and sessions controller much easier

  # each user must have a username, email, password_digest, and session_token, and all of these must be unique between users
  validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true

  # a user will not always have a password attribute, only when they sign up will one be present
  # need to make sure that it is of proper length (can add any restrictions that are necessary, but better to do these on the frontent)
  validates :password, length: { minimum: 6, allow_nil: true}

  # reader for password is used
  attr_reader :password

  # If a user has just been created, or if their token has been set to nil, it must be reset to an acceptable value
  after_initialize :ensure_session_token

  # the User.find_by_credentials method is used on login, when the code in the create session controller action will attempt to find a user with the given login 'credentials'
  def self.find_by_credentials(email, password)
    user = self.find_by(email: email)
    if user
      return (user.is_password?(password)) ? user : nil
    else
      return nil
    end
  end

  # user_obj.is_password? is called on a user object when, given that we only have a hashed password digest in the database,
  # we want to check whether or not the given password is compatible with what is stored for the user in the database
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  # user.password= is a method used to set the password attribute of the user object, and to create a password digest which can be safely stored in the database
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  # generate a random value which can be used as a 'session-token', which is used to keep track of whether or not a user is logged in
  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  # ensure a user has a session token attribute, but do not change it if it already exists
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  # reset the user's session token, this method is used as part of the session#destroy, or 'logout' method
  def reset_session_token!
    self.update(session_token: User.generate_session_token)
  end
  
  # each user will be responsible for x number of sent out friend requests
  has_many :sent_friend_requests,
    class_name: 'FriendRequest',
    primary_key: :id,
    foreign_key: :sender_id

  # each user will be responsible for y number of received friend requests
  has_many :received_friend_requests,
    class_name: 'FriendRequest',
    primary_key: :id,
    foreign_key: :receiver_id


end
