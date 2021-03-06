class Api::SessionsController < ApplicationController
  
  def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user && @user != current_user
            login(@user)
            render 'api/users/show'
        else
            render json: ['Invalid user credentials'], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: {}, status: 404
        end
    end
end
