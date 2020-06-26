 
let apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=03d4df0de6cfef49bdedb2f58427f4e5&units=imperial';

apiURL = 'weather.json';

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

fetch(apiURL)
    .then( response => response.json() )
    .then( data => {
        //Information
        console.log(data);

        document.getElementById('current-temp').innerText = data.main.temp;
        
        const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';  // note the concatenation
        console.log(imagesrc);

        const desc = data.weather[0].descripction;

        document.getElementById('imagesrc').innerText = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

        const dt = data.dt;
        let date = new Date(dt * 1000);
        console.log(date);
        document.getElementById('dow').innerText = dayOfWeek[date.getDay()];


        });