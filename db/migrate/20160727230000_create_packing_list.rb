class CreatePackingList < ActiveRecord::Migration
  def up
    create_table :packing_lists do |t|
      t.string :name, null: false
      t.string :notes, null: true
      t.string :state, index: true, null: true
      t.references :creator, references: :user, index: true
      t.timestamps null: false
    end

    add_foreign_key :packing_lists, :users, column: :creator_id

    create_table :packing_list_assets do |t|
      t.belongs_to :packing_list, null: false
      t.belongs_to :asset, index: true, null: false
      t.string :email, index: true, unique: true
      t.timestamps null: false
    end

    add_index :packing_list_assets, [:packing_list_id, :asset_id], unique: true
  end
end
