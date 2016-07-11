class Asset < ActiveRecord::Base
  has_many :scans

  def first_scan
    scans.order("created_at ASC").first
  end

  def last_scan
    scans.order("created_at DESC").first
  end
end