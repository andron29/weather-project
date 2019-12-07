import Cities from './cities';
import { kelvinToCelsius } from './utils';
import { getTodayWeatherByCity } from './api';
import cities from './cities';

console.log(Object.keys(Cities));

const promises = Object.keys(Cities).map((city) => getTodayWeatherByCity(city));
 Object.keys(Cities).map((city) => getTodayWeatherByCity(city)
   .then((result) => {
     renderListItem(result);
   }));
   

// eslint-disable-next-line no-use-before-define
  Promise.all(promises)
  .then((result) => result.map(renderListItem))
  .then(() => {
    const loading = document.getElementById('loading');
    loading.classList.add('hide');
  });

  
  function renderListItem(data) {
    const { name, main, weather } = data;
  
    const container = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${name}:  ${kelvinToCelsius(main.temp)}`;
    container.append(li);
  }

console.log(cities);
let out = '';
for (var key in cities) {
  out+= cities[key].name + '<br>';
  // <img src="">
  out+='<img src="'+cities[key].url+'">';
  out+='<hr>';
}
  document.getElementById('out').innerHTML = out;


  
  