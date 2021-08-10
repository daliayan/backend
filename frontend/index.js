// const baseURL = 'http://localhost:3000'

const cityApi = new CityApi('http://localhost:3000/cities')

document.addEventListener('DOMContentLoaded', () => {
    cityApi.getCities();
});