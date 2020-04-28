class Api::UserFilesController < ApplicationController
  def create
    data = params[:info]
    file = IO.binread(data.file)
    @user_file = UserFile.create!(name: data.name, owner_id: current_user.id, description: (data.description || ''), content: file )
    render :show
  end
end
