# frozen_string_literal: true

class Comments::Card::Component < ApplicationComponent
  def initialize(comment:, user:)
    @comment = comment
    @user = user
  end
end
