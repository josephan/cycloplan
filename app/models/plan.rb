class Plan < ActiveRecord::Base
	belongs_to :user
	belongs_to :event

	validates :user_id, presence: true
	validates :date, presence: true
	validates :start_at, presence: true
	validates :end_at, presence: true
	validates :event_id, presence: true

	def self.by_year(year)
		where('extract(year from date) = ?', year)
	end

	def self.by_month(month)
		where('extract(month from date) = ?', month)
	end

	# def self.by_week(week)
	# 	 where('extract(week from date) = ?', week)
	# end

	def self.by_day(day)
		where('extract(day from date) = ?', day)
	end
end
