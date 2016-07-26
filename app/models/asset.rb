class Asset < ActiveRecord::Base
  has_many :scans
  has_one :container

  before_save do
    if (name.nil? || name.empty?) && tag =~ /^[FR]?\d+[A-C]?[DP]?$/
      self.name = "Panel #{tag}"
    end
  end

  def first_scan
    scans.order("created_at ASC").first
  end

  def last_scan
    scans.order("created_at DESC").first
  end
end