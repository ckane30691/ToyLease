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

class Leasing < ApplicationRecord
  validates :start_date, :end_date, :toy_id, :leaser_id, presence: true
  validate :start_date_before_end_date
  validate :after_today
  validate :ensure_no_overlapping_leases

  belongs_to :toy,
            primary_key: :id,
            foreign_key: :toy_id,
            class_name: :Toy

  belongs_to :leaser,
            primary_key: :id,
            foreign_key: :leaser_id,
            class_name: :User

  def start_date_before_end_date
    unless (self.start_date <=> self.end_date) == -1
      errors[:base] << 'Start date must come before end date'
    end
  end

  def after_today
    if self.start_date
      unless self.start_date >= Date.today
        errors[:base] << 'Please pick a date after today'
      end
    end
  end

  def lease_duration
    (self.end_date - self.start_date).to_i
  end

  def total_cost_of_lease
    self.toy.price * self.lease_duration
  end

  def ensure_no_overlapping_leases
    unless overlapping_leases.empty?
      errors[:base] << 'Sorry this toy is already booked for those dates!'
    end
  end

  def overlapping_leases
    Leasing
      .where.not(id: self.id)
      .where(toy_id: toy_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT( (start_date > :end_date) OR (end_date < :start_date) )
      SQL
  end
end
