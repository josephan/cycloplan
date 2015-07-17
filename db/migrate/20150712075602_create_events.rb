class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :image
      t.string :name
      t.text :description
      t.string :type

      t.timestamps null: false
    end
  end
end
