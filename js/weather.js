const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=51.547&lon=-0.1094&appid=4f6eb20d2bbb64f3a7d904bceab37bba";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    displayWeather(jsObject);
  });

function displayWeather(jsObject) {
    celsiusTemp = jsObject.main.temp - 273.15;
    document.querySelector('.temp').textContent = celsiusTemp.toFixed(2);
    document.querySelector('.des').textContent = jsObject['weather']['0']['description'];
    document.querySelector('.hum').textContent = jsObject.main.humidity;
    //document.querySelector('#windSpeed').textContent = jsObject.main.temp;
    //document.querySelector('.des').textContent = jsObject.main.feels_like;

}
