class FixColumnNameInEvents < ActiveRecord::Migration
  def change
  	rename_column :events, :description, :about
  end
end
