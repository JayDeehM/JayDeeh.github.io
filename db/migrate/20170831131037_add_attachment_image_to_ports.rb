class AddAttachmentImageToPorts < ActiveRecord::Migration
  def self.up
    change_table :ports do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :ports, :image
  end
end
