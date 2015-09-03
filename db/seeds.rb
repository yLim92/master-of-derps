5.times do |i|
	c = Category.find_or_create_by!(name: "cat_#{i + 1}")

  (sub_cats_per_cat = 5).times do |j|
    sc = c.sub_categories.find_or_create_by!(name: "sub_cat_#{i * sub_cats_per_cat + j + 1}")

    (items_per_sub_cat = 10).times do |k|
      it = sc.items.find_or_create_by!(name: "item_#{items_per_sub_cat * (i * sub_cats_per_cat + j) + k + 1}")
    end
  end
end