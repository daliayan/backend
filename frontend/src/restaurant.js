RENDERING - LOGIC - FILTERING 

class Restaurant {
    static all = []

    constructor({name, nationality, rating, avatar, city_id}){
        this.name = name
        this.nationality = nationality
        this.rating = rating
        this.avatar = avatar
        this.cityId = city_id

        Restaurant.all.push(this)
        // New elements to add to the array.
        // Appends new elements to the end of an array, and returns the new length of the array.
    }


}