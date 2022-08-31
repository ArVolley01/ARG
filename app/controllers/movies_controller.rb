class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        movie = Movie.find_by!(id: params[:id])
        render json: movie
    end

    def showtimes
        theater = Theater.find_by!(id: params[:theater_id])
        movie = Movie.find_by!(id: params[:id])
        render json: {
            theater: theater,
            movie: movie.as_json(methods: [:showtimes])
        }
    end
end
