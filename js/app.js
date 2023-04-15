// DO NOT SHARE YOUR API KEY
const API_KEY = `20d061f495e23af37c9503eafbfa5752`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    console.log(data.weather[0].main);
    const temperature = document.getElementById('temp');
    temperature.innerText = data.main.temp;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city; 
    loadTemperature(city);
})



loadTemperature('dhaka');