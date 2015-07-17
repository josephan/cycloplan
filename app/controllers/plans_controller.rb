class PlansController < ApplicationController
	before_action :logged_in_user
	before_action :correct_user, except: [:new, :edit]

	def show
		@plan = current_user.plans.find(params[:id])
	end

	def new
		@plan = current_user.plans.build
	end

	def create
		@plan = current_user.plans.build(plan_params)
		if @plan.save
			redirect_to @plan
		else
			render 'new'
		end
	end

	def edit
		@plan = current_user.plans.find(params[:id])
	end

	def update
		@plan = current_user.plans.find(params[:id])
		if @plan.update_attributes(plan_params)
			redirect_to @plan
		else
			render 'edit'
		end
	end

	def destroy
		current_user.plans.find(params[:id]).destroy
		redirect_to plans_url
	end

	private
		def plan_params
			params.require(:plan).permit(:name,:description,:image)
		end

		def correct_user
			@user = Plan.find(params[:id]).user
			redirect_to(root_url) unless current_user?(@user)
		end
end
