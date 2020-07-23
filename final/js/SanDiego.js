
//Connect with JSON to get weather information
const apiKey = '03d4df0de6cfef49bdedb2f58427f4e5';
const baseURL = '//api.openweathermap.org/data/2.5/';
let cityid = '1690158';
let method = 'weather';
let units = 'imperial';
let apiURL = baseURL +
    method + '?' +
    'id=' + cityid +
    '&appid=' + apiKey +
    '&units=' + units;


fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        //Information

        document.getElementById('currentlySD').innerText = data.weather[0].main;
        document.getElementById('highSD').innerText = data.main.temp_max;
        document.getElementById('humiditySD').innerText = data.main.humidity;
        document.getElementById('windSSD').innerText = data.wind.speed;


    });

cityid = '51299';
apiURL = baseURL +
    method + '?' +
    'id=' + cityid +
    '&appid=' + apiKey +
    '&units=' + units;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        //Information

        document.getElementById('currentlySG').innerText = data.weather[0].main;
        document.getElementById('highSG').innerText = data.main.temp_max;
        document.getElementById('humiditySG').innerText = data.main.humidity;
        document.getElementById('windSSG').innerText = data.wind.speed;


    });

cityid = '5946473';
apiURL = baseURL +
        method + '?' +
        'id=' + cityid +
        '&appid=' + apiKey +
        '&units=' + units;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        //Information

        document.getElementById('currentlySP').innerText = data.weather[0].main;
        document.getElementById('highSP').innerText = data.main.temp_max;
        document.getElementById('humiditySP').innerText = data.main.humidity;
        document.getElementById('windSSP').innerText = data.wind.speed;


    });

cityid = '5697916';
apiURL = baseURL +
        method + '?' +
        'id=' + cityid +
        '&appid=' + apiKey +
        '&units=' + units;
    
    
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        //Information

        document.getElementById('currentlyP').innerText = data.weather[0].main;
        document.getElementById('highP').innerText = data.main.temp_max;
        document.getElementById('humidityP').innerText = data.main.humidity;
        document.getElementById('windSP').innerText = data.wind.speed;


    });