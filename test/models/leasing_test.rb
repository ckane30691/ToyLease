# == Schema Information
#
# Table name: leasings
#
#  id         :integer          not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  toy_id     :integer          not null
#  leaser_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LeasingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
