class Asset < ActiveRecord::Base
  has_many :scans
  belongs_to :container, class_name: 'Asset'

  before_save do
    if name.nil? || name.empty?
      if tag =~ /^[FR]?\d+[A-C]?[DP]$/
        self.name = "Panel #{tag}"
      else
        self.name = "Unknown"
      end
    end
  end

  def first_scan
    scans.order("created_at ASC").first
  end

  def last_scan=(last_scan)
    @last_scan = last_scan
    @last_scan_set = true
  end

  def last_scan
    @last_scan_set ?
        @last_scan :
        @last_scan ||= scans.order("created_at DESC").first
  end
end