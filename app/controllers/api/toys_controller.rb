class Api::ToysController < ApplicationController
  def index
    @toys = Toy.all
    render :index
  end

  def show
    @toy = Toy.find_by(id: params[:id])
    if @toy
      render :show
    else
      render json: ["Toy Not Found"], status: 404
    end
  end

  def create
    @toy = Toy.new(toy_params)
    @toy.owner_id = current_user.id
    if @toy.save
      render :show
    else
      render json: @toy.errors.full_messages, status: 422
    end
  end

  def update
    @toy = current_user.toys.find_by(id: params[:id])
    if @toy
      if @toy.update_attributes(toy_params)
        render :show
      else
        render json: @toy.errors.full_messages, status: 422
      end
    else
      render json: ['You are not allowed to edit this toy!']
    end
  end

  def destroy
    @toy = current_user.toys.find_by(id: params[:id])
    if @toy.destroy
      render :show
    else
      render json: ["You are not the owner of this toy!"], status: 403
    end
  end

  private

  def toy_params
    params.require(:toy).permit(:title, :image_url, :price, :toy_type, :about)
  end

end
