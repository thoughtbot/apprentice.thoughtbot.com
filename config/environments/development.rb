ThoughtbotDotCom::Application.configure do
  config.action_controller.perform_caching = false
  config.action_mailer.default_url_options = {
    host: 'thoughtbot.local'
  }
  config.action_mailer.raise_delivery_errors = false
  config.active_record.migration_error = :page_load
  config.active_support.deprecation = :log
  config.assets.debug = true
  config.cache_classes = false
  config.consider_all_requests_local = true
  config.eager_load = false
end
