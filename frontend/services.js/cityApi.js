class CityApi {

    static url = `${baseURL}/cities`

    getCities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => { json.forEach(cityObj => {
            let cit = City.findOrCreateBy(cityObj)
            cit.addToDropDown()
        })
        })
    }

}