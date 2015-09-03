class ItemsController < ApplicationController
  def index
    #@items = Item.paginate(page: params[:page]).as_json(include: [:sub_category, :category])
    @items = Item.all.as_json(include: [:sub_category, :category])
    @sub_categories = SubCategory.all.as_json
    @categories = Category.all
  end
end
