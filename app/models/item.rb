class Item < ActiveRecord::Base
  belongs_to :sub_category

  delegate :category, to: :sub_category

  validates :sub_category, presence: true
  validates :name, uniqueness: true
end
