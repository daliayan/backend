class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        restaurant = Restaurant.find(params[:id])
        # need to render json here
    end

    def create
        restaurant = Restaurant.new(restaurant_params)

        if restaurant.save
            #render json
        else
            #render json
        end
        
    end

    def destroy
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        # need to render json here
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :review, :star, :price)
    end

end
