RENDERING - LOGIC - FILTERING 

class City {
    static all = []

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
        
        City.all.push(this)
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

        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv);

    };

    renderCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `
        <h1> ${this.name}</h1>
        <p>Restaurants: ${this.restaurants}<p>
        `; 
        return cityData;
    }

};