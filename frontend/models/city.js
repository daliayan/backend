// RENDERING - LOGIC - FILTERING 

class City {

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
        
        
         // New elements to add to the array.
        // Appends new elements to the end of an array, and returns the new length of the array.
    };

    renderCity() {
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');

        cityDiv.classList.add('city-list');

        // const cityName = document.createElement('h1');
        // cityName.innerText = this.name;

        const cityInfo = this.renderCityInfo();
        const restaurants = this.renderCityRestaurants;

        cityDiv.appendChild(cityInfo);
        cityList.appendChild(restaurants);
        City.container.appendChild(cityList);

    };

    renderCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `
        <h1> ${this.name}</h1>
        <p>Restaurants: ${this.restaurants}<p>
        `; 
        return cityData;
    }

    renderCityRestaurants(){
        const restaurantUl = document.createElement('li');
        restaurantUl.classList.add('restaurants');

        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(this.restaurant);
            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

    renderRestaurantForm(){

    };

};