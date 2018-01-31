class Api::LeasingsController < ApplicationController
  def index
    @leasing = current_user.leasings.includes(:toy)
    render :index
  end

  def create
    @leasing = current_user.leasings.new(leasing_params)
    toy = Toy.find_by(id: @leasing.toy_id)
    if @leasing.leaser_id == toy.owner_id
      render json: ['This is your own toy!'], status: 422
    elsif @leasing.save
      render :show
    else
      render json: @leasing.errors.full_messages, status: 422
    end

  end

  def destroy
    @leasing = Leasing.find_by(id: params[:id])
    @leasing.destroy
    render :show
  end

  private

  def leasing_params
    params.require(:leasing).permit(:start_date, :end_date,
                                    :leaser_id, :toy_id)
  end
end
