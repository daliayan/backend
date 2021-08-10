class CityApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getCities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then( cities => 
            cities.forEach(cityObj => {
                let newCity = new City(cityObj)

            })
        //     json => { json.forEach(cityObj => {
        //     let cit = City.findOrCreateBy(cityObj)
        //     cit.addToDropDown()
        // })
        )
    }

}