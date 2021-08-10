class RestaurantApi {

    static url = `${baseURL}/restaurants`

    getRestaurants(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.forEach(restObj => {
            Restaurant.findOrCreateBy(restObj)
        }))
    }
    // fetch requests of API from Rails backend
    // .then (resp => resp.json())
    // . then
}