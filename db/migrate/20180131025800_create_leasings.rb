class CreateLeasings < ActiveRecord::Migration[5.1]
  def change
    create_table :leasings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :toy_id, null: false
      t.integer :leaser_id, null: false
      t.timestamps
    end
  end
end
