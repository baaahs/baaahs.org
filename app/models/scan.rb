class Scan < ActiveRecord::Base
  belongs_to :asset
  belongs_to :user
  belongs_to :event
end