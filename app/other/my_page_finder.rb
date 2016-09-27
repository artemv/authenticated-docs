class MyPageFinder < HighVoltage::PageFinder
  def initialize(id, dir_mode)
    super(id)
    @dir_mode = dir_mode
  end

  def find
    paths = @page_id.split('/')
    Rails.logger.debug("MyPageFinder.find: #{paths.inspect}; @dir_mode: #{@dir_mode.inspect}, self: #{self.inspect}")
    paths << 'index' if @dir_mode
    directory = ['site'] + paths[0..-2]
    filename = paths[-1]

    result = File.join(*directory, filename)
    Rails.logger.debug("MyPageFinder.find result: #{result.inspect}")
    result
  end
end
