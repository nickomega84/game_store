class AddStockToGames < ActiveRecord::Migration[8.1]
  def change
    add_column :games, :stock, :integer
  end
end
