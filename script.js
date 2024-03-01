import { POKEMONARRAY } from "./pokemonData.js";

function main () {
    const sectionCards = createSections();
    styleSections(sectionCards);
    for (const pokemon of POKEMONARRAY) {
        const card = createCard(sectionCards);
        fillCard(card, pokemon);
        styleCard(card);
        card.mainContainer.addEventListener("mouseover", hooverBright);
        card.mainContainer.addEventListener("mouseout", hooverDark);
    }
}

function createCard (sectionCards) {
    const mainContainer = document.createElement("div");
    const wrapperImage = document.createElement("div");
    const wrapperDescription = document.createElement("div");
    const imageElement = document.createElement("img");
    const indexElement = document.createElement("p");
    const nameElement = document.createElement("h3");
    const typeElement = document.createElement("p");
    sectionCards.appendChild(mainContainer);
    mainContainer.appendChild(wrapperImage);
    mainContainer.appendChild(wrapperDescription);
    wrapperImage.appendChild(imageElement);
    wrapperDescription.appendChild(indexElement);
    wrapperDescription.appendChild(nameElement);
    wrapperDescription.appendChild(typeElement);
    return {
        "mainContainer": mainContainer, 
        "wrapperImage": wrapperImage,
        "wrapperDescription": wrapperDescription,
        "imageElement": imageElement,
        "indexElement": indexElement,
        "nameElement": nameElement, 
        "typeElement": typeElement, 
    };
}

function fillCard (card, pokemon) {
    card.imageElement.src = pokemon.thumbnail;
    card.indexElement.innerHTML = `#${pokemon.id}`;
    card.nameElement.innerHTML = pokemon.name.toUpperCase();
    switch (pokemon.type.length) {
        case 1:
            card.typeElement.innerHTML = `Type: ${pokemon.type[0]}`;
            break;
        case 2:
            card.typeElement.innerHTML = `Type: ${pokemon.type[0]} ${pokemon.type[1]}`
            break;
    };
}

function styleCard(card) {
    card.mainContainer.style.border = "1px gray solid";
    card.mainContainer.style.width = "200px";
    card.mainContainer.style.height = "300px";
    card.mainContainer.style.display = "flex";
    card.mainContainer.style.flexDirection = "column";
    card.mainContainer.style.alignItems = "center";
    card.mainContainer.style.position = "relative";
    card.mainContainer.style.backgroundColor = "#d9e6f2";

    card.wrapperImage.style.position = "absolute";
    card.wrapperImage.style.left = "0";
    card.wrapperImage.style.top = "0";
    card.wrapperImage.style.height = "65%";
    card.wrapperImage.style.width = "100%";
    card.wrapperImage.style.backgroundImage = "url('./media/assets/background.jpg')";
    card.wrapperImage.style.backgroundSize = "cover"
    card.wrapperImage.style.display = "flex";
    card.wrapperImage.style.alignItems = "center"; 
    card.wrapperImage.style.justifyContent = "center"; 

    card.wrapperDescription.style.position = "absolute";
    card.wrapperDescription.style.top = "195px";
    card.wrapperDescription.style.width = "100%";

    card.imageElement.style.maxWidth = "100%";
    card.imageElement.style.maxHeight = "100%";

    card.indexElement.style.marginTop = "0";
    card.indexElement.style.textAlign = "center";

    card.nameElement.style.marginTop = "0";
    card.nameElement.style.textAlign = "center";

    card.typeElement.style.marginTop = "0";
    card.typeElement.style.textAlign = "center";
}


function createSections () {
    const sectionCards = document.createElement("section");
    return document.body.appendChild(sectionCards);
}

function styleSections (sectionCards) {
    sectionCards.style.display = "flex";
    sectionCards.style.flexWrap = "wrap";
    sectionCards.style.justifyContent = "center";
    sectionCards.style.gap = "1vw";
}

function hooverBright () {
    this.style.filter = "brightness(0.7)";
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.15s ease-in-out"
};

function hooverDark () {
    this.style.filter = "brightness(1)";
    this.style.transform = "scale(1)";
};


main();