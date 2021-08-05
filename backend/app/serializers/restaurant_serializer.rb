class RestaurantSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :city
    attributes :name, :review, :star, :price

end