class Movie < ApplicationRecord
    has_many :showtimes
    has_many :theaters, through: :showtimes
end
