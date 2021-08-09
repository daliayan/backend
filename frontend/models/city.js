RENDERING - LOGIC - FILTERING 

class City {
    static all = []

    constructor({name, id, restaurants = []}){
        this.name = name
        this.id = id
        this.restaurants = restaurants
        
        City.all.push(this)
         // New elements to add to the array.
        // Appends new elements to the end of an array, and returns the new length of the array.
    }


}