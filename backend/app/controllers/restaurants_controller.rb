class RestaurantsController < ApplicationController
    
    before_action :made_restaurant, only: [:show, :update, :destroy]

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
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
        if restaurant.update(restaurant_params)
            render json: restaurant
        else
            render json: restaurant.errors
        end
    end

    def destroy
        restaurant.destroy
        render json: {message: "Successfully Deleted #{restaurant.name}"}
    end

    private

    def made_restaurant
        restaurant = Restaurant.find(params[:id])
    end

    def restaurant_params
        params.require(:restaurant).permit(:name, :review, :star, :price)
    end

end
