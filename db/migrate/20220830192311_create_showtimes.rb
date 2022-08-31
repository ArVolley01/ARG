class CreateShowtimes < ActiveRecord::Migration[7.0]
  def change
    create_table :showtimes do |t|
      t.integer :movie_id
      t.integer :theater_id
      t.datetime :time
      
      t.timestamps
    end
  end
end
