

function displayTemperature(response) {
    console.log(response.data.name);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

   celsiusTemperature = response.data.main.temp;
   temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    
}

let apiKey = "62231151ce343c4d68652e1617efc22f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);