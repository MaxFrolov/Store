class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include FrontendHelper
  respond_to :json

  protected

  def render_resource_or_errors(resource, options = {})
    if resource.errors.empty?
      render_resource_data(resource, options)
    else
      render_resource_errors(resource)
    end
  end

  def render_resource_data(resource, options = {})
    render options.merge({ json: resource, root: :resource })
  end

  def render_resource_errors(resource)
    render json: { errors: resource.errors }, status: :unprocessable_entity
  end

  def render_resources(resources, options = {})
    total = resources.respond_to?(:total_count) ? resources.total_count : resources.length
    default = { root: :resources, meta: { total: total } }
    result = resources

    render({ json: result }.merge(default).merge(options))
  end
end
