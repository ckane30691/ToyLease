# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  self.table_name = 'toylease.users'
  
  attr_reader :password

  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true
  validates :username, :password_digest, :session_token, presence: true

  after_initialize :ensure_session_token

  has_many :toys,
           primary_key: :id,
           foreign_key: :owner_id,
           class_name: :Toy,
           dependent: :destroy

  has_many :leasings,
          primary_key: :id,
          foreign_key: :leaser_id,
          class_name: :Leasing,
          dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
