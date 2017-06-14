class House < ActiveRecord::Base
  validates :color, presence: true

  belongs_to :person,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: 'Person'
end
