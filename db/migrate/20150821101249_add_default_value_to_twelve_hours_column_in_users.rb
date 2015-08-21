class AddDefaultValueToTwelveHoursColumnInUsers < ActiveRecord::Migration
  def change
  	change_column :users, :twelve_hours, :boolean, :default => true
  end
end
