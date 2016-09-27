# config/initializers/high_voltage.rb
HighVoltage.configure do |config|
  config.route_drawer = HighVoltage::RouteDrawers::Root
  config.content_path = 'site/'
  # config.home_page = 'index'
  config.routes = false
end
