Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/movies", to: "movies#index"
  get "/theaters", to: "theaters#index"
  get "/theaters/:id", to: "theaters#show"
  get "/movies/:id", to: "movies#show"
  get "/tickets", to: "tickets#index"
  get "/tickets/:id", to: "tickets#show"
  patch "/tickets/:id/update", to: "tickets#update"
  get "/theaters/:id/showtimes", to: "theaters#showtimes"
  get "/movies/:id/showtimes", to: "movies#showtimes"
  get "/theaters/:id/movies/:movie_id/showtimes", to: "theaters#showtimes_by_movie"
  get "/movies/:id/theaters/:theater_id/showtimes", to: "movies#showtimes_by_theater"
  get "/showtimes", to: "showtimes#index"
  get "/showtimes/:id", to: "showtimes#index"

  # Defines the root path route ("/")
  # root "articles#index"
end
