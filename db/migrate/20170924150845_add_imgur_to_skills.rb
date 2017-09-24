class AddImgurToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :imgur, :string
  end
end
