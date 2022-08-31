# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Starting seeding"

puts "Destroying any old data"

Theater.destroy_all
Movie.destroy_all
Showtime.destroy_all
Ticket.destroy_all

puts "creating new seed data"

2.times do Theater.create(name: Faker::University.name, street_address: Faker::Address.street_address) end

Movie.create(name: "The Invitation", description: "", runtime: Faker::Number.between(from: 100, to: 200), rating: "PG", genre: Faker::Book.genre, release_date: Faker::Date.backward) end

8.times do Showtime.create(movie_id: Movie.all.sample().id, theater_id: Theater.all.sample().id, time: Faker::Date.forward) end

20.times do Ticket.create(price: Faker::Commerce.price(range: 15..18), showtime_id: Showtime.all.sample().id) end

puts "Done seeding"