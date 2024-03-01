import { POKEMONARRAY } from "./pokemonData.js";

function main () {
    const sectionCards = document.createElement("section");
    document.body.appendChild(sectionCards);
    styleSection(sectionCards);
    for (const pokemon of POKEMONARRAY) {
        const card = createCard(sectionCards);
        styleCard(card);
        fillCard(card, pokemon);
    }
}

function createCard (sectionCards) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const index = document.createElement("p");
    const name = document.createElement("h3");
    const type = document.createElement("p");
    sectionCards.appendChild(container);
    container.appendChild(image);
    container.appendChild(index);
    container.appendChild(name);
    container.appendChild(type);
    return {
        "container": container, 
        "image": image,
        "index": index,
        "name": name, 
        "type": type, 
    };
}

function styleCard(card) {
    card.container.style.border = "1px red solid";
    card.container.style.width = "170px";
    card.container.style.height = "230px";
    card.container.style.display = "flex";
    card.container.style.flexDirection = "column";
    card.container.style.alignItems = "center";

    card.image.style.height = "50%";
    card.image.style.maxWidth = "90%";


    card.index.style.marginBottom = '0';

    card.name.style.marginBottom = '0';

    card.type.style.marginBottom = '0';
}


function fillCard (card, pokemon) {
    card.image.src = pokemon.thumbnail;
    card.index.innerHTML = `Index: ${pokemon.id}`;
    card.name.innerHTML = pokemon.name.toUpperCase();
    switch (pokemon.type.length) {
        case 1:
            card.type.innerHTML = `Type: ${pokemon.type[0]}`;
            break;
        case 2:
            card.type.innerHTML = `Type: ${pokemon.type[0]} ${pokemon.type[1]}`
            break;
    };
}

function styleSection (sectionCards) {
    sectionCards.style.display = "flex";
    sectionCards.style.flexWrap = "wrap";
    sectionCards.style.justifyContent = "center";
    sectionCards.style.gap = "1vw";
}

main();