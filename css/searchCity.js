function searchCity(city) {
    let apikey = "73740baobffd3t7277d45420a9480268";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshweather);

}
