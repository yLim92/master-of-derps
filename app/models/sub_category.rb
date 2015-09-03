class SubCategory < ActiveRecord::Base
  belongs_to :category
  has_many :items

  validates :category, presence: true
  validates :name, uniqueness: true
end
