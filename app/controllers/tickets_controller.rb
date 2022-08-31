class TicketsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        tickets = Ticket.all
        render json: tickets
    end
    def update
        ticket = Ticket.find_by!(id: params[:id])
        if ticket.update(ticket_params)
            render json: ticket
        else
            render json: :edit, status: :unprocessable_entity
        end
    end

    private
    def ticket_params
      params.permit(:showtime_id, :price, :available)
    end
end
