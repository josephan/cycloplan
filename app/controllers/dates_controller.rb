class DatesController < ApplicationController
	before_action :logged_in_user
	before_action :edit_date, except: :total

	def total
		@user = current_user
	end

	def year
	end

	def month
		@plans = current_user.plans.by_year(@date.year).by_month(@date.month)
	end

	# def week
	#  @plan = current_user.plans.by_year
	# end

	def day
		@plan = current_user.plans.new
		@plans = current_user.plans.by_year(@date.year).by_month(@date.month).by_day(@date.day).order(:start_at)
		@health_events = HealthEvent.all
		@work_events = WorkEvent.all
		@hobby_events = HobbyEvent.all
		@custom_events = current_user.events.all
		gon.jbuilder as: "plans"
	end

	private

	def edit_date
		month = params[:month] ? params[:month].to_i : 1
		day = params[:day] ? params[:day].to_i : 1
		validate_year
		session[:date] = Date.new(params[:year].to_i, month, day)
		@date = session[:date]
	rescue ArgumentError, RangeError
		flash[:error] = "Invalid date."
		redirect_to total_url
	end

	def validate_year
		if params[:year].to_i < current_user.birthday.year
			flash[:error] = "Either the URL you entered was invalid or the date is too far into the past."
			redirect_to total_url
		elsif params[:year].to_i > Time.now.in_time_zone(current_user.timezone).year + 5
			flash[:error] = "Let's not get too ahead of ourselves. You can only plan 5 years ahead."
			redirect_to total_url
		end
	end

end
