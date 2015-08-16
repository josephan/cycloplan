class EventsController < ApplicationController
	before_action :logged_in_user

	def index
		@events = current_user.events.all
	end

	def new
		@event = current_user.events.build
	end

	def create
		@event = current_user.events.build(event_params)
		@event.assign_attributes(type: "CustomEvent")
		if @event.save
			redirect_to events_path
		else
			render 'new'
		end
	end

	def destroy
		Event.find(params[:id]).destroy
		redirect_to events_path
	end

	private
		def event_params
			params.require(:event).permit(:name,:about,:image)
		end
end
