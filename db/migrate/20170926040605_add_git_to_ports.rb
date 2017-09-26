class AddGitToPorts < ActiveRecord::Migration
  def change
    add_column :ports, :git, :string
  end
end
