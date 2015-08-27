class PlansController < ApplicationController
	before_action :logged_in_user


	def create
		date = Date.parse(session[:date])
		@plan = current_user.plans.create!(plan_params)
		redirect_to day_url(year: date.year, month: date.month, day: date.day)
	end

	def destroy
		date = Date.parse(session[:date])
		@plan = Plan.find(params[:id])
		@plan.destroy
		respond_to do |format|
			format.html {redirect_to day_url(year: date.year, month: date.month, day: date.day)}
			format.js
		end
	end

	private
		def plan_params
			params.require(:plan).permit(:date,:start_at,:end_at,:event_id,:description)
		end
end