class StaticPagesController < ApplicationController

	def home
		redirect_to user_url(current_user) if logged_in?
	end

	def privacy
	end

	def terms
	end

	def about
	end
	
end
