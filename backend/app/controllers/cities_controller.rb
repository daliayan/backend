class CitiesController < ApplicationController

    def index 
        cities = City.includes(:restaurants)
        render json: cities
    end

end
