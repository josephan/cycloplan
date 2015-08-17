class PlansController < ApplicationController
	before_action :logged_in_user


	def create
		date = Date.parse(session[:date])
		@plan = current_user.plans.create!(plan_params)
		@json = @plan.to_json
		redirect_to day_url(year: date.year, month: date.month, day: date.day)
	end

	def destroy
		date = Date.parse(session[:date])
		Plan.find(params[:id]).destroy
		redirect_to day_url(year: date.year, month: date.month, day: date.day)
	end

	private
		def plan_params
			params.require(:plan).permit(:date,:start_at,:end_at,:event_id,:description)
		end
end