class AddDefaultTimezoneToUsers < ActiveRecord::Migration
  def change
  	change_column :users, :timezone, :string, :default => "Eastern Time (US & Canada)"
  end
end
