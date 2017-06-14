class Person < ActiveRecord::Base
  validates :name, presence: true

  has_many :houses,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: 'House'

end
