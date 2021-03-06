class User < ActiveRecord::Base
	has_many :plans, dependent: :destroy
	has_many :events, dependent: :destroy

	attr_accessor :remember_token
	before_save {email.downcase!}
	validates :first_name, presence: true, length: {maximum: 50}
	validates :last_name, presence: true, length: {maximum: 50}
	validates :birthday, presence: true
	validates :timezone, inclusion: {in: ActiveSupport::TimeZone.zones_map.keys}, allow_nil: true
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
	validates :email, presence: true, length: {maximum: 255},
										format: {with: VALID_EMAIL_REGEX},
										uniqueness: {case_sensitive: false}
	has_secure_password
	validates :password, presence: true, length: {minimum: 6}, allow_nil: true

	# Returns the hash digest of the given string.
  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

	# Returns a random token.
	def self.new_token
		SecureRandom.urlsafe_base64
	end

	# Remembers a user in the database for use in persistent sessions.
	def remember
		self.remember_token = self.new_token
		update_attribute(:remember_digest, self.digest(remember_token))
	end

	# Returns true if the given token matches the digest.
  def authenticated?(remember_token)
  	return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  # Forgets a user.
  def forget
    update_attribute(:remember_digest, nil)
  end
end
