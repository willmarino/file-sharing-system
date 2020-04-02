class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  # grab the currently logged in user via the instance variable, or by going through user objects and checking their session tokens
  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
  end

  # is there a user logged in?
  def logged_in?
    !!current_user
  end

  # set user session token equal to the session token in session
  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  # reset the session token in session, and reset the formerly logged in user's session token
  def logout
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end
end
