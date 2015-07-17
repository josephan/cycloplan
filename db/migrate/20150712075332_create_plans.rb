class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.integer :user_id
      t.date :date
      t.time :start_at
      t.time :end_at
      t.integer :event_id

      t.timestamps null: false
    end
  end
end
