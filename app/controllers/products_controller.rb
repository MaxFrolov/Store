class ProductsController < ApplicationController
  def show
    render_resource_data(@product)
  end

  def index
    @products = Product.all
    render_resources @products
  end

  def create
    @product
    render_resource_or_errors(@product)
  end

  def update
    @product.update(user_params)
    render_resource_or_errors(@product)
  end
end

private

def user_params
  params.require(:resource).permit(:name, :description, :amount)
end
