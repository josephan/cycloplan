class Plan < ActiveRecord::Base
	scope :today, -> { where("date = CURRENT_DATE")}
	belongs_to :user
	belongs_to :event

	validates :user_id, presence: true
	validates :date, presence: true
	validates :start_at, presence: true
	validates :end_at, presence: true
	validates :event_id, presence: true
end
