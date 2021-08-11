class CityApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    getCities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(cities => 
            console.log(cities))
        
            
            // json => 
            //     json.forEach(cityObj => {
            //     let cit = City.findOrCreateBy(cityObj)
            //     cit.render()
            // })
    };

};