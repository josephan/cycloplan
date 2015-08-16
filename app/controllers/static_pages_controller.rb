class StaticPagesController < ApplicationController

	def home
		redirect_to total_path if logged_in?
	end

	def privacy
	end

	def terms
	end

	def about
	end
	
end
