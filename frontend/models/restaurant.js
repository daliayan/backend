// RENDERING - LOGIC - FILTERING 

class Restaurant {
    static all = []

    constructor({id, name, nationality, rating, avatar, city_id}){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.rating = rating;
        this.avatar = avatar;
        this.cityId = city_id;

        Restaurant.all.push(this)
        // New elements to add to the array.
        // Appends new elements to the end of an array, and returns the new length of the array.
    };
    
    getRestaurant(){
        const li = document.createElement('li');
        const deleteRes = document.createElement('button');
        li.innerText = this.name;
        deleteRes.classList.add('delete-btn');
        deleteRes.innerText = 'x';

        deleteRes.addEventListener('click', () => {
            console.log(this, 'Selected!');
        });

        li.appendChild(deleteRes);

        return li;
    };

    static findByName(name){
        return this.all.find(function(restaurant) {restaurant.name === name})
    }

}