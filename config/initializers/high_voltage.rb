# config/initializers/high_voltage.rb
HighVoltage.configure do |config|
  config.route_drawer = HighVoltage::RouteDrawers::Root
  config.content_path = ENV['STATIC_VIEWS_CONTENT_PATH'] + '/'
  # config.home_page = 'index'
  config.routes = false
end
