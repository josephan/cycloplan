class EventsController < ApplicationController
	before_action :logged_in_user

	def index
		@events = current_user.events.all
	end

	def show
		@event = current_user.events.find(params[:id])
	end

	def new
		@event = current_user.events.build
	end

	def create
		@event = current_user.events.build(event_params)
		if @event.save
			flash[:success] = "it worked"
			redirect_to @event
		else
			render 'new'
		end
	end

	def edit
		@event = current_user.events.find(params[:id])
	end

	def update
		@event = current_user.events.find(params[:id])
		if @event.update_attributes(event_params)
			redirect_to @event
		else
			render 'edit'
		end
	end

	def destroy
		current_user.events.find(params[:id]).destroy
		redirect_to events_url
	end

	private
		def event_params
			params.require(:event).permit(:date,:start_at,:end_at,:event_id, :about)
		end

		def correct_user
			if Event.find(params[:id]).user_id
				@user = Event.find(params[:id]).user
				redirect_to(root_url) unless current_user?(@user)
			end
		end
end
