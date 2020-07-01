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
