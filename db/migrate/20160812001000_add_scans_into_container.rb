class AddScansIntoContainer < ActiveRecord::Migration
  def up
    change_table :scans do |t|
      t.belongs_to :into_container, references: :asset, index: true
    end

    add_foreign_key :scans, :assets, column: :into_container_id
  end
end
