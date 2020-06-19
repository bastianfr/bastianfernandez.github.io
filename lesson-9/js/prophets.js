const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cardsElemet = document.getElementById('cards');
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let prophets = data.prophets;
        let h = "";
        for (prophet of prophets) {
            h += `<section>
                    <h2>${prophet.name} ${prophet.lastname}</h2>
                    <p>Date of Birth: ${prophet.birthdate}</p>
                    <p>Place of Birth: ${prophet.birthplace}</p>
                    <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname} - ${prophet.order}">
                </section>`;
        }
        cardsElemet.innerHTML = h;  
    });