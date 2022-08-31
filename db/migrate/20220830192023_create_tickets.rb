class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.float :price
      t.integer :showtime_id
      t.boolean :available, :default => true
      t.timestamps
    end
  end
end
