module DatesHelper
	# returns class name for html if plan exists on that day
	def check_for_plans(date)
		result = @plans.index { |x| Date.parse(x.date.to_s) == Date.parse(date)}
		if result
			"non-empty"
		end
	end

	# checks for current day and highlights that day
	def check_current_day(date)
		"current" if Date.parse(date) == current_date	
	end

	def twelve_hour_clock(hour)
		if current_user.twelve_hours
			if hour == "00"
				"12am"
			elsif hour.to_i < 12
				"#{hour.to_i}am"
			elsif hour.to_i == 12
				"#{hour}pm"
			elsif hour.to_i > 12
				"#{hour.to_i - 12}pm"
			end
		else
			"#{hour}:00"
		end
	end
end
