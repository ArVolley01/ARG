class Movie < ApplicationRecord
    has_many :theaters
    has_many :showtimes, through: :theaters
end
