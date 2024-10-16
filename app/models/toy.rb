# == Schema Information
#
# Table name: toys
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  image_url  :string           not null
#  price      :integer          not null
#  toy_type   :string           not null
#  about      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Toy < ApplicationRecord
  self.table_name = 'toylease.toys'
  
  validates :owner_id, :title, :image_url, :title, presence: true
  validates_uniqueness_of :title, scope: [:owner_id]
  validates :toy_type, inclusion: {
    in: ['Stuffed Animal', 'Action Figure', 'Doll', 'Sports', 'Other']
  }

  after_initialize :ensure_default_image

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :leasings,
          primary_key: :id,
          foreign_key: :toy_id,
          class_name: :Leasing,
          dependent: :destroy

  def ensure_default_image
    self.image_url ||= 'sample.jpg'
  end

end
