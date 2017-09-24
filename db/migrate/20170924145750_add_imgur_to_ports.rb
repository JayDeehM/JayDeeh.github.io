class AddImgurToPorts < ActiveRecord::Migration
  def change
    add_column :ports, :Imgur, :string
  end
end
