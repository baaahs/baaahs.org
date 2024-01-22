class CreateSchema < ActiveRecord::Migration
  def up
    create_table :assets do |t|
      t.string :tag, index: true, unique: true, null: false
      t.string :name, index: true, null: true
      t.string :notes, null: true
      t.string :state, index: true, null: true
      t.boolean :is_container, default: false
      t.belongs_to :container, references: :asset, index: true
      t.timestamps null: false
    end

    add_foreign_key :assets, :assets, column: :container_id

    create_table :users do |t|
      t.string :name, index: true, unique: true, null: false
      t.string :email, index: true, unique: true
      t.timestamps null: false
    end

    create_table :events do |t|
      t.string :name, null: false
      t.timestamps null: false
    end

    create_table :scans do |t|
      t.belongs_to :asset, index: true, foreign_key: true, null: false
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :event, foreign_key: true
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.decimal :accuracy, precision: 10, scale: 1
      t.decimal :altitude, precision: 10, scale: 6
      t.decimal :altitude_accuracy, precision: 10, scale: 1
      t.belongs_to :container_scan, references: :scan, index: true
      t.timestamps index: true, null: false
    end

    add_foreign_key :scans, :scans, column: :container_scan_id

    create_table :photos do |t|
      t.belongs_to :asset, index: true, foreign_key: true, null: false
      t.belongs_to :scan, index: true, foreign_key: true, null: false
      t.timestamps null: false
    end

    create_table :labels do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index :labels, [:name], unique: true

    create_table :assets_labels do |t|
      t.belongs_to :asset, foreign_key: true, null: false
      t.belongs_to :label, foreign_key: true, null: false
    end
    add_index :assets_labels, [:asset_id, :label_id], unique: true
    add_index :assets_labels, [:label_id, :asset_id]
  end
end
