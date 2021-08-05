class CitiesController < ApplicationController

    def index 
        cities = City.all
        #need to render json here
    end

end
