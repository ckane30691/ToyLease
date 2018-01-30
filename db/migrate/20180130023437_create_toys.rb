class CreateToys < ActiveRecord::Migration[5.1]
  def change
    create_table :toys do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :price, null: false
      t.string :toy_type, null: false
      t.text :about
      t.timestamps
    end

    add_index :toys, :owner_id
    add_index :toys, :title
  end
end
