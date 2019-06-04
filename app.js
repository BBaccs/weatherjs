//Initi storage
const storage = new Storage();

//Init weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();

const weatherLocation = storage.getLocationData();



//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage,setLocationData(city, state);

    // Get & Display weather 
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
