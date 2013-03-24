class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :print_domain

  private

  def print_domain
    p request.domain
  end
end
