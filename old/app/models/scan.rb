class Scan < ActiveRecord::Base
  belongs_to :asset
  belongs_to :user
  belongs_to :event
  belongs_to :container_scan, class_name: "Scan"
  belongs_to :into_container, class_name: "Asset"
end