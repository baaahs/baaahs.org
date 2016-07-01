class Asset < ActiveRecord::Base
  has_many :scans
end