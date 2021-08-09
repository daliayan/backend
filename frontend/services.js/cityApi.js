class CityApi {

    static url = `${baseURL}/cities`

    getCities(){
        fetch(this.url)
        .then(resp => resp.json())
        .then(json => { json.forEach(cityObj => {
            let cit = City.findOrCreateBy(cityObj)
        })

        })
    }
    // fetch requests of API from Rails backend
    // .then (resp => resp.json())
    // . then

}