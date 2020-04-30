class Api::UserFilesController < ApplicationController
  def create
    debugger
    data = params[:info]
    debugger
    file = IO.binread(data.file)
    debugger
    @user_file = UserFile.create!(name: data.name, owner_id: current_user.id, description: (data.description || ''), content: file )
    debugger
    render :show
  end
end
