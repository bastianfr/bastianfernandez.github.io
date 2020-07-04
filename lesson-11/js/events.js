const url = 'https://byui-cit230.github.io/weather/data/towndata.json';
const townsElement = document.getElementById('events');
let placeName = document.getElementById('place').textContent;
let place = "";
if (placeName == "Preston Idaho") {
    place = "Preston";
} else if (placeName == "Fish Haven Idaho"){
    place = "Fish Haven";
} else {
    place = "Soda Springs";
}
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let towns = data.towns;
        let h = "";
        let events = "";
        let i = 0;
        for (town of towns) {
            if ( town.name == place){
                events = town.events;
                i = 0;
                for (event of events) {
                    h += `<p>${events[i]}</p>`;
                    i ++;
                } 
            }       
       }
        townsElement.innerHTML = h;  
    });
