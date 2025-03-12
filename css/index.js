function refreshWeather(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    

    cityElement.innerHTML = response.data.city;

    timeElement.innerHTML = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "sunday",
        "Monday",
        "Tuesday",
        "wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apikey = "73740baobffd3t7277d45420a9480268";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);


}


function handlesearchsubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);

}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handlesearchsubmit);
