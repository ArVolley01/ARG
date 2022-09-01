class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies.as_json(methods: [:theaters])
    end

    def show
        movie = Movie.find_by!(id: params[:id])
        render json: movie, include: :theaters
    end

    def tickets
        movie = Movie.find_by!(id: params[:id])
        showtime = Showtime.find_by!(id: params[:showtime_id])
        render json: {
            movie: movie,
            showtime: showtime.as_json(methods: [:tickets])
        }
    end

    def showtimes
        movie = Movie.find_by!(id: params[:id])
        showtimes = movie.showtimes
        render json: {
            movie: movie,
            showtimes: showtimes
        }
    end

    def showtimes_by_theater
        movie = Movie.find_by!(id: params[:id])
        theater = Theater.find_by!(id: params[:theater_id])
        showtimes = movie.showtimes.find_by!(theater_id: params[:theater_id])
        render json: {
            theater: theater,
            showtimes: showtimes
        }
    end
end
