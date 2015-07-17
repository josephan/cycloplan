class UsersController < ApplicationController
	before_action :logged_in_user, only: [:show, :edit, :update, :destroy]
	before_action :correct_user, only: [:show, :edit, :update, :destroy]

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			log_in @user
			flash[:success] = "Your account has been successfully created!"
			redirect_to @user
		else
			render 'new'
		end
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		if @user.update_attributes(user_params)
			flash[:success] = "Your settings have been saved."
			redirect_to @user
		else
			render 'edit'
		end
	end

	def destroy
		User.find(params[:id]).destroy
		flash[:success] = "Your account has been successfully deleted."
		redirect_to root_url
	end

	private
		def user_params
			params.require(:user).permit(:first_name, :last_name, :birthday, :email, :password, :password_confirmation, :timezone)
		end

		def correct_user
			@user = User.find(params[:id])
			redirect_to(root_url) unless current_user?(@user)
		end
end