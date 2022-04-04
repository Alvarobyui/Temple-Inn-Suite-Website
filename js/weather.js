const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=51.547&lon=-0.1094&appid=4f6eb20d2bbb64f3a7d904bceab37bba";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    displayWeather(jsObject);
  });

function displayWeather(jsObject) {
    celsiusTemp = jsObject.main.temp - 273.15;
    //document.querySelector('.temp').textContent = celsiusTemp.toFixed(1);
    document.querySelector('.des').textContent = jsObject['weather']['0']['description'];
    document.querySelector('.hum').textContent = jsObject.main.humidity;
    //document.querySelector('#windSpeed').textContent = jsObject.main.temp;
    //document.querySelector('.des').textContent = jsObject.main.feels_like;

}

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherEl = document.getElementById("current-weather-items");
const timeZone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hours12Format = hour >= 12 ? hour %12: hour
  const minutes = time.getMinutes();
  const amOrpm = hour >= 12 ? "PM" : "Am"

  timeEl.innerHTML = hours12Format + ':' + minutes + `<span id="am-pm">${amOrpm}</span>`

  //dateEl.innerHTML = 
}, 1000);
