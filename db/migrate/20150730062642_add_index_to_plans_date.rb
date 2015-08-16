class AddIndexToPlansDate < ActiveRecord::Migration
  def change
  	add_index :plans, [:user_id, :date]
  end
end
