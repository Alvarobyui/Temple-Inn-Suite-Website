//get and display weather 

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '4f6eb20d2bbb64f3a7d904bceab37bba';

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  //const hours12Format = hour >= 12 ? hour %24: hour
  const minutes = time.getMinutes();
  const amOrpm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML = (hour < 10 ? '0' + hour: hour) + ':' + (minutes < 10 ? '0' + minutes: minutes) + `<span id="am-pm">${amOrpm}</span>`;

  dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

getWeatherData();
function getWeatherData (){
  navigator.geolocation.getCurrentPosition((success) => { 

      let {latitude, longitude} = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=4f6eb20d2bbb64f3a7d904bceab37bba`)
        .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject);
        showWeatherData(jsObject);
        });
  })
}

function showWeatherData(jsObject) {
    let {description, humidity, pressure, wind_speed, sunset, sunrise} = jsObject.current;

    timeZone.innerHTML = jsObject.timezone;
    countryEl.innerHTML = jsObject.lat + 'N ' + jsObject.lon + 'E';
    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Condition</div>
        <div>${description}</div>
    </div>
    <div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise *1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset *1000).format('HH:mm a')}</div>
    </div>`;

    let otherDayForecast = '';
    jsObject.daily.forEach((day, idx) => {
      if(idx == 0){
          currentTempEl.innerHTML = `
          <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather-icon" class="w-icon">
          <div class="first-card">
              <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
              <div class="temp">Night - ${day.temp.night}&#176; C</div>
              <div class="temp">Day - ${day.temp.day}&#176; C</div>     
          </div>`
      }
      else{
        otherDayForecast += 
        `<div class="weather-forecast-item">
            <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather-icon" class="w-icon">
            <div class="temp">Night - ${day.temp.night}&#176; C</div>
            <div class="temp">Day - ${day.temp.day}&#176; C</div>    
        </div>`
      }
    })

    weatherForecastEl.innerHTML = otherDayForecast;

};