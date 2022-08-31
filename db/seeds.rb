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

# 5.times do Movie.create(name: Faker::Movie.title, description: Faker::Quote.jack_handey, runtime: Faker::Number.between(from: 100, to: 200), rating: "PG", genre: Faker::Book.genre, release_date: Faker::Date.backward) end
Movie.create(name: "The Invitation", imdb_id: 'tt12873562')
Movie.create(name: "Dragon Ball Super: Super Hero", imdb_id: 'tt14614892')
Movie.create(name: "Beast", imdb_id: 'tt13223398')
Movie.create(name: "Breaking", imdb_id: 'tt12311620')
Movie.create(name: "Bullet Train", imdb_id: 'tt12593682')
Movie.create(name: "DC League of Super-Pets", imdb_id: 'tt8912936')
Movie.create(name: "Top Gun: Maverick", imdb_id: 'tt1745960')
Movie.create(name: "Bodies Bodies Bodies", imdb_id: 'tt8110652')
Movie.create(name: "Minions: The Rise of Gru", imdb_id: 'tt5113044')

8.times do Showtime.create(movie_id: Movie.all.sample().id, theater_id: Theater.all.sample().id, time: Faker::Date.forward) end

20.times do Ticket.create(price: Faker::Commerce.price(range: 15..18), showtime_id: Showtime.all.sample().id) end

puts "Done seeding"