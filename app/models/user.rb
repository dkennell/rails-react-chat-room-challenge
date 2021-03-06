class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

has_many :chat_rooms, dependent: :destroy
has_many :messages, dependent: :destroy


validates :first_name, :last_name, presence: true

end
