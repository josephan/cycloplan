class AddHourViewToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :twelve_hours, :boolean
  end
end
