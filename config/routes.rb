Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/movies", to: "movies#index"
  get "/theaters", to: "theaters#index"
  get "/movies/:id", to: "movies#show"
  get "/tickets", to: "tickets#index"
  patch "/tickets/:id/update", to: "tickets#update"

  # Defines the root path route ("/")
  # root "articles#index"
end
