class Category < ActiveRecord::Base
	has_many :sub_categories
  has_many :items, through: :sub_categories

  validates :name, uniqueness: true
end
