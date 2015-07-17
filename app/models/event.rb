class Event < ActiveRecord::Base
	has_many :plans
	validates :name, presence: true, length: {maximum: 50}
	validates :type, presence: true
end

class HealthEvent < Event
	validates :image, presence: true
	validates :user_id, absence: true
end

class WorkEvent < Event
	validates :image, presence: true
	validates :user_id, absence: true
end

class HobbyEvent < Event
	validates :image, presence: true
	validates :user_id, absence: true
end

class CustomEvent < Event
	belongs_to :user
	validates :user_id, presence: true
end