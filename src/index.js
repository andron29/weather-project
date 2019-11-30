import sum from './js/sum';
import './styles/style.scss';
import Cities from './js/cities';

console.log(Cities);
const locationSelect = document.getElementById('location-select');
locationSelect.addEventListener('change', (event) => {
  console.log(event.target.value);
  const city = event.target.value;
  const defaultCity = 'img/skyline.jpg';
  const cityImage = document.getElementById('location-image');
  if (!Cities [city]) {
    cityImage.src = defaultCity;
    return;

  }
  document.getElementById('location-image').src = Cities[city].url
});

// document.addEventListener('change');
// document.getElementById('location-image').src = Cities.paris.url;
console.log(sum(1, 2));
console.log(sum(1, 5));
console.log('Proof that it works');
