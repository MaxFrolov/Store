class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :category_name
      t.string :category_description
      t.timestamps null: false
    end

    change_table :products do |t|
      t.belongs_to :category, index: true
    end
  end
end
