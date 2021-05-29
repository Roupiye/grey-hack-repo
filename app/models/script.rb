# frozen_string_literal: true

class Script < ApplicationRecord
  belongs_to :post

  validates :content, presence: true, length: {minimum: 10}

  after_commit :set_highlighted_content, on: [:create, :update]

  def set_highlighted_content
    HighlightJob.perform_later(self) unless content == old_content
  end
end
