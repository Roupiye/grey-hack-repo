# == Schema Information
#
# Table name: guilds
#
#  id                :bigint           not null, primary key
#  avatar_data       :text
#  badge_data        :text
#  banner_data       :text
#  description       :string
#  name              :string
#  registration      :integer          default("closed")
#  registration_info :string
#  slug              :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  user_id           :bigint
#
# Indexes
#
#  index_guilds_on_name     (name) UNIQUE
#  index_guilds_on_slug     (slug) UNIQUE
#  index_guilds_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :guild do
    association :user

    name { Faker::Lorem.characters(number: 10) }
    description { Faker::Lorem.characters(number: 100) }
    avatar_data { nil }
    badge_data { nil}
    banner_data { nil }
  end
end
