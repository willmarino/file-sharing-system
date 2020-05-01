class Api::UserFilesController < ApplicationController
  def create
    data = file_params
    @user_file = UserFile.create!(name: data['name'], owner_id: current_user.id, description: (data['description'] || ''), content: data['file'] )
    render :simple_show
  end

  def show
    file = UserFile.find(params[:id])
    
  end

  def index
    @files = UserFile.where("owner_id = #{current_user.id}")
    render :index
  end

  def file_params
    params.permit('name', 'description', 'file')
  end

end
