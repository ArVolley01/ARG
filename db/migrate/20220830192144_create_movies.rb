class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.text :description
      t.string :rating
      t.integer :runtime
      t.string :genre
      t.datetime :release_date

      t.timestamps
    end
  end
end
