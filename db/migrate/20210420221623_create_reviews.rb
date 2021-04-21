class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :artist
      t.text :album
      t.text :content

      t.timestamps
    end
  end
end
