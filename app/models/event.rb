class Event < ActiveRecord::Base
	has_many :plans, dependent: :destroy
	validates :name, presence: true, length: {maximum: 50}
end