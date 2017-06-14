class CreateHouseTable < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |t|
      t.string :color
      t.timestamps
    end
  end
end
