class ProductsController < ApplicationController
  def show
    render_resource_data(@product)
  end

  def index
    @product = Product.all
  end
end
