class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :name
      t.string :github_link
      t.string :website_link
    end
  end
end
