module Api
  module V1
    class DevelopersController < ApplicationController
      def index
        @developers = Developer.all
        render json: @developers, include: :games
      end

      def show
        @developer = Developer.find(params[:id])
        render json: @developer, include: :games
      end
    end
  end
end

