class TheatersController < ApplicationController

    def index
        theaters = Theater.all
        render json: theaters.as_json(methods: [:movies])
    end

    def show
        theater = Theater.find_by!(id: params[:id])
        render json: theater, include: :movies
    end

    def showtimes
        theater = Theater.find_by!(id: params[:id])
        showtimes = theater.showtimes
        render json: {
            theater: theater,
            showtimes: showtimes
        }
    end

    def showtimes_by_movie
        theater = Theater.find_by!(id: params[:id])
        movie = Movie.find_by!(id: params[:movie_id])
        showtimes = theater.showtimes.find_by!(movie_id: params[:movie_id])
        render json: {
            movie: movie,
            showtimes: showtimes.as_json(methods: [:tickets])
        }
    end
end
