class CustomEvent < Event
	belongs_to :user
	validates :user_id, presence: true
end