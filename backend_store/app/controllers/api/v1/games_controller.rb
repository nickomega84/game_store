module Api
  module V1
    class GamesController < ApplicationController
      # 1. Permite que el frontend (puerto 5173) envíe datos POST sin ser bloqueado

      def index
        @games = Game.includes(:developer).all
        render json: @games, include: { developer: { only: [:name, :country] } }
      end

      def show
        @game = Game.find(params[:id])
        render json: @game, include: :developer
      end

      # 2. NUEVO: La lógica de la transacción
      def checkout
        ActiveRecord::Base.transaction do
          params[:cart].each do |item|
            game = Game.find(item[:id])
            
            if game.stock >= item[:quantity]
              game.update!(stock: game.stock - item[:quantity])
            else
              render json: { error: "Insufficient stock for #{game.title}" }, status: :unprocessable_entity
              raise ActiveRecord::Rollback
            end
          end
        end

        unless performed?
          render json: { message: 'Payment processed and stock updated successfully' }, status: :ok
        end
      end
      
    end
  end
end