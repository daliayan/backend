class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant
    end

    def create
        restaurant = Restaurant.new(restaurant_params)

        if restaurant.save
            render json: restaurant
        else
            render json: restaurant.errors
        end
        
    end

    def update
        restaurant = Restaurant.find(params[:id])
        if restaurant.update(restaurant_params)
            render json: restaurant
        else
            render json: restaurant.errors
        end
    end

    def destroy
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        render json: {message: "Successfully Deleted #{restaurant.name}"}
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :review, :star, :price)
    end

end
