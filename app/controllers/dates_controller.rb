class DatesController < ApplicationController
	def year
	end

	def month
	end

	def week
		@plan = current_user.plans.where(date: params[:date])
	end

	def day
		@plans = current_user.plans.where(date: params[:date])
	end
end
