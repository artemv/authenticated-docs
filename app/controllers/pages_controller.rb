class PagesController < ApplicationController
  include HighVoltage::StaticPage

  layout false

  private

  def page_finder
    unless request.original_fullpath == '/'
      dir_mode = (request.original_fullpath.ends_with?('/'))
    end
    MyPageFinder.new(params[:id], dir_mode)
  end

end
