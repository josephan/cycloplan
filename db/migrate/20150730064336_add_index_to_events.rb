class AddIndexToEvents < ActiveRecord::Migration
  def change
  	add_index :events, [:user_id, :type]
  	add_index :events, :type
  end
end
