class ShowtimesController < ApplicationController
    def index
        showtimes = Showtime.all
        render json: showtimes.as_json(methods: [:tickets])
    end

    def show
        showtime = Showtime.find_by!(id: params[:id])
        render json: showtime
    end
end
