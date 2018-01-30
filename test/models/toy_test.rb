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

require 'test_helper'

class ToyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
