import Cities from './cities';

const API_KEY = "0200f3522106d1b51788392b0fd52be2";

// eslint-disable-next-line import/prefer-default-export
export function getTodayWeatherByCity(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Cities[city].name}&appid=${API_KEY}`)
    .then((response) => response.json())
}
      /* .then(function(data) {
      console.log(data)
     
    document.querySelector('.weather__city').textContent = data.name;

    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    
    document.querySelector('.weather__icon li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
    
    });
  }*/
  