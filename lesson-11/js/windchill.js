//Connect with JSON to get weather information
const apiKey = '03d4df0de6cfef49bdedb2f58427f4e5';
const baseURL = '//api.openweathermap.org/data/2.5/';
let townName = document.getElementById('place').textContent;
let cityid = '0'
if (townName == "Preston Idaho") {
    cityid = '5604473';
} else if (townName == "Fish Haven Idaho"){
    cityid = '5605242';
} else {
    cityid = '5607916';
}
let method = 'weather';
let units = 'imperial';
let apiURL = baseURL + 
            method + '?' + 
            'id=' + cityid + 
            '&appid=' + apiKey + 
            '&units=' + units;

//const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5604473&appid=03d4df0de6cfef49bdedb2f58427f4e5&units=imperial';


fetch(apiURL)
    .then( response => response.json() )
    .then( data => {
        //Information
        console.log(data);

        document.getElementById('currently').innerText = data.weather[0].main;
        document.getElementById('high').innerText = data.main.temp_max;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('windS').innerText = data.wind.speed;

        // Calculate the Wind Chill

        if (data.main.temp_max <= 50 && data.wind.speed >= 3) { 
            var f = (35.74 + (0.6215 * data.main.temp_max) - (35.75 * Math.pow(data.wind.speed,0.16)) + (0.4275 * data.main.temp_max * (Math.pow(data.wind.speed,0.16))));
            var final = Math.round(f) + " °F";
        } else {
            var final = 'N/A'
        }
        document.getElementById('windC').innerHTML = final;

        });



// Connect with JSON to get forecast infromation

method = 'forecast';
apiURL = baseURL + 
            method + '?' + 
            'id=' + cityid + 
            '&appid=' + apiKey + 
            '&units=' + units;

//const api2URL = '//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=03d4df0de6cfef49bdedb2f58427f4e5&units=imperial';

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

fetch(apiURL)
    .then( response => response.json() )
    .then( data => {
        //Information
        console.log(data);

        let list = data.list;
        i = 0;
        days = document.getElementsByClassName('day');
        temp_show = document.getElementsByClassName('temp');
        image = document.getElementsByClassName('icon');
        for(item of list){
            if(item.dt_txt.includes("18:00:00")){
                temp = Math.round(parseFloat(item.main.temp));
                temp_show[i].innerText = temp;

                dt = item.dt;
                date = new Date(dt * 1000);
                days[i].innerText = dayOfWeek[date.getDay()];

                imagesrc = 'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png';  
        
                desc = item.weather[0].descripction;

                image[i].innerText = imagesrc;
                image[i].setAttribute('src', imagesrc);
                image[i].setAttribute('alt', desc);

                i++;
            }
        }

    });
