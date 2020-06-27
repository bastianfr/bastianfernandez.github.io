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

