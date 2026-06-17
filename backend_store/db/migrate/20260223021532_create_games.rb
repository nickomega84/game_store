class CreateGames < ActiveRecord::Migration[8.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.integer :release_year
      t.references :developer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
