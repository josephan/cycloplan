class WorkEvent < Event
	validates :image, presence: true
	validates :user_id, absence: true
end