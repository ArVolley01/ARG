class Theater < ApplicationRecord
    has_many :showtimes
    has_many :movies
end
