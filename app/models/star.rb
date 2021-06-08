# frozen_string_literal: true

class Star < ApplicationRecord
  belongs_to :user
  belongs_to :starable, polymorphic: true
end
