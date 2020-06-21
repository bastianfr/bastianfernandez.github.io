function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
let daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = new Date().getFullYear();
let fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;

document.getElementById('date').innerHTML = fulldate;

var dat = new Date();
var n = dat.getDay();

if (n != 5) {
    document.getElementsByClassName("banner")[0].classList.toggle("nobanner");
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


//JSON PART//

const url = 'https://byui-cit230.github.io/weather/data/towndata.json';
const townsElement = document.getElementById('towns');
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let towns = data.towns;
        let h = "";
        for (town of towns) {
            if ( town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs")
            h += `<section>
                    <div>
                    <h2>${town.name} </h2>
                    <h3>${town.motto}</h3>
                    <p>Year Founded: ${town.yearFounded}</p>
                    <p>Population: ${town.currentPopulation}</p>
                    <p>Anual Rain Fall: ${town.averageRainfall}</p>
                    </div>
                    <img src= "images/${town.photo}" alt= "${town.name} picture">
                </section>`;
        }
        townsElement.innerHTML = h;  
    });
