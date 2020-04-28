class CreateUserFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_files do |t|
      t.binary :content, null: false
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :description
      t.timestamps
    end
    add_index :user_files, :owner_id
    add_index :user_files, :name
  end
end
