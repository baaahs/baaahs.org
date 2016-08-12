# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160812001000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string   "tag",                          null: false
    t.string   "name"
    t.string   "notes"
    t.string   "state"
    t.boolean  "is_container", default: false
    t.integer  "container_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "assets", ["container_id"], name: "index_assets_on_container_id", using: :btree
  add_index "assets", ["name"], name: "index_assets_on_name", using: :btree
  add_index "assets", ["state"], name: "index_assets_on_state", using: :btree
  add_index "assets", ["tag"], name: "index_assets_on_tag", using: :btree

  create_table "assets_labels", force: :cascade do |t|
    t.integer "asset_id", null: false
    t.integer "label_id", null: false
  end

  add_index "assets_labels", ["asset_id", "label_id"], name: "index_assets_labels_on_asset_id_and_label_id", unique: true, using: :btree
  add_index "assets_labels", ["label_id", "asset_id"], name: "index_assets_labels_on_label_id_and_asset_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "labels", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "labels", ["name"], name: "index_labels_on_name", unique: true, using: :btree

  create_table "packing_list_assets", force: :cascade do |t|
    t.integer  "packing_list_id", null: false
    t.integer  "asset_id",        null: false
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "packing_list_assets", ["asset_id"], name: "index_packing_list_assets_on_asset_id", using: :btree
  add_index "packing_list_assets", ["email"], name: "index_packing_list_assets_on_email", using: :btree
  add_index "packing_list_assets", ["packing_list_id", "asset_id"], name: "index_packing_list_assets_on_packing_list_id_and_asset_id", unique: true, using: :btree

  create_table "packing_lists", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "notes"
    t.string   "state"
    t.integer  "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "packing_lists", ["creator_id"], name: "index_packing_lists_on_creator_id", using: :btree
  add_index "packing_lists", ["state"], name: "index_packing_lists_on_state", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "asset_id",   null: false
    t.integer  "scan_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "photos", ["asset_id"], name: "index_photos_on_asset_id", using: :btree
  add_index "photos", ["scan_id"], name: "index_photos_on_scan_id", using: :btree

  create_table "scans", force: :cascade do |t|
    t.integer  "asset_id",                                   null: false
    t.integer  "user_id"
    t.integer  "event_id"
    t.decimal  "latitude",          precision: 10, scale: 6
    t.decimal  "longitude",         precision: 10, scale: 6
    t.decimal  "accuracy",          precision: 10, scale: 1
    t.decimal  "altitude",          precision: 10, scale: 6
    t.decimal  "altitude_accuracy", precision: 10, scale: 1
    t.integer  "container_scan_id"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.integer  "into_container_id"
  end

  add_index "scans", ["asset_id"], name: "index_scans_on_asset_id", using: :btree
  add_index "scans", ["container_scan_id"], name: "index_scans_on_container_scan_id", using: :btree
  add_index "scans", ["created_at"], name: "index_scans_on_created_at", using: :btree
  add_index "scans", ["into_container_id"], name: "index_scans_on_into_container_id", using: :btree
  add_index "scans", ["updated_at"], name: "index_scans_on_updated_at", using: :btree
  add_index "scans", ["user_id"], name: "index_scans_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree

  add_foreign_key "assets", "assets", column: "container_id"
  add_foreign_key "assets_labels", "assets"
  add_foreign_key "assets_labels", "labels"
  add_foreign_key "packing_lists", "users", column: "creator_id"
  add_foreign_key "photos", "assets"
  add_foreign_key "photos", "scans"
  add_foreign_key "scans", "assets"
  add_foreign_key "scans", "assets", column: "into_container_id"
  add_foreign_key "scans", "events"
  add_foreign_key "scans", "scans", column: "container_scan_id"
  add_foreign_key "scans", "users"
end
