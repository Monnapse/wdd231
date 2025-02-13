import { places } from "../data/places.js"

function createPlaceCard(title, desc, add, img) {
    const card = document.createElement("div");

    card.innerHTML = `
        <div class="place-card">
            <img loading="lazy" src="${img}" alt="${title}">
            <h2>${title}</h2>
            <address>${add}</address>
            <p>${desc}</p>
            <button>Learn More</button>
        </div>
    `

    return card;
}

const discoverContainer = document.getElementById("discoverContainer");

places.forEach((place)=> {
    const card = createPlaceCard(place.name, place.description, place.address, place.photo_url);
    discoverContainer.appendChild(card);
})