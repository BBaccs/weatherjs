class Weather {
    constructor(city, state){
        this.apiKey = '113423455';
        this.city = city;
        this.state = state;
    }

    //fetch weather from API
    
    async getWeather(){
        const response = await fetch(`http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1527811200&
        appid=${e1007103bb895d80b93232f91b310fb3}`)
        const responseData = await response.json();
        return responseData.cuttent_observation;
    }
    //Change weather
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}
