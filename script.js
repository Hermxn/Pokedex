import { POKEMONARRAY } from "./pokemonData.js";

const ROTATED_TRUE = "rotateY(180deg)";
const ROTATED_FALSE = "rotateY(0deg)";
const ROTATE_SPEED = "transform 0.5s ease-in-out";

function main () {
    addFont();
    const sectionCards = createSections().sectionCards;
    styleSections(sectionCards);
    for (const pokemon of POKEMONARRAY) {
        const card = createCard(sectionCards);
        fillCard(card, pokemon);
        styleCard(card, pokemon);
        addCardEvents(card);
    }
}

function addFont () {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = 
    `
    @font-face {
        font-family: 'Nintendo'; 
        src: url('./assets/nintendo_font.ttf') format('truetype'); 
    }
    `;
    document.head.appendChild(styleElement);
}

function createCard (sectionCards) {
    const containerCard = document.createElement("div");
    const containerFront = document.createElement("div");
    const containerBack = document.createElement("div");
    const wrapperImage = document.createElement("div");
    const wrapperImageType = document.createElement("div");
    const elementImage = document.createElement("img");
    const elementIndex = document.createElement("p");
    const elementName = document.createElement("h3");
    const elementType1 = document.createElement("img");
    const elementType2 = document.createElement("img");
    const elementDescription = document.createElement("p");
    sectionCards.appendChild(containerCard);
    containerCard.appendChild(containerFront);
    containerCard.appendChild(containerBack);
    containerFront.appendChild(elementIndex);
    containerFront.appendChild(wrapperImage);
    containerFront.appendChild(elementName);
    containerFront.appendChild(wrapperImageType);
    wrapperImageType.appendChild(elementType1);
    wrapperImageType.appendChild(elementType2);
    containerBack.appendChild(elementDescription);
    wrapperImage.appendChild(elementImage);
    containerCard.className = "containerCard";
    containerFront.className = "containerFront";
    containerBack.className = "containerBack";
    return {
        "containerCard": containerCard,
        "containerFront": containerFront, 
        "containerBack": containerBack,
        "wrapperImage": wrapperImage,
        "wrapperImageType": wrapperImageType,
        "elementDescription": elementDescription,
        "elementImage": elementImage,
        "elementIndex": elementIndex,
        "elementName": elementName, 
        "elementType1": elementType1, 
        "elementType2": elementType2, 
    };
}

function fillCard (card, pokemon) {
    card.elementImage.src = `assets/static/pokemon_image/${pokemon.thumbnail}`;
    card.elementIndex.innerHTML = `#${pokemon.id}`;
    card.elementName.innerHTML = pokemon.name.toUpperCase();
    switch (pokemon.type.length) {
        case 1:
            card.elementType1.src = `./assets/static/logo_types/${pokemon.type[0]}.png`;
            break;
        case 2:
            card.elementType1.src = `./assets/static/logo_types/${pokemon.type[0]}.png`;
            card.elementType2.src = `./assets/static/logo_types/${pokemon.type[1]}.png`;
            break;
    };
    card.elementDescription.innerHTML = pokemon.description;
}

function styleCard(card, pokemon) {

    card.containerFront.style.backgroundImage = `url("./assets/static/card_cover_front/${pokemon.type[0]}.jpg")`;
    card.containerBack.style.backgroundImage = `url("./assets/static/card_cover_back/${pokemon.type[0]}.jpg")`;

    const descriptionElements = [card.elementIndex, card.elementName, card.elementDescription];
    const containers = [card.containerFront, card.containerBack];

    descriptionElements.forEach(element => {
        element.style.marginTop = "10px";
        element.style.textAlign = "center";
        element.style.fontFamily = "Nintendo";
        element.style.fontStyle = "normal";
        element.style.fontWeight= "200";
        element.style.fontSize = "26px";
        element.style.marginBottom = "10px"
    });

    card.elementIndex.style.marginBottom = "0px";
    card.elementIndex.style.width = "100%";
    card.elementIndex.style.textAlign = "left";
    card.elementIndex.style.marginLeft = "22px";
    card.elementIndex.style.fontSize = "20px";

    card.elementName.style.marginTop = "15px";


    containers.forEach(container => {
        container.style.backgroundSize = "100% 100%";
        container.style.borderRadius = "10px";
    });

    document.body.style.backgroundImage = "url('./assets/static/background.jpg')";
    document.body.style.backgroundSize = "25%";

    card.containerCard.style.position = "relative";

    card.containerFront.style.zIndex = "1";
    card.containerFront.style.backfaceVisibility = "hidden";
    card.containerFront.style.transition = ROTATE_SPEED;
    card.containerFront.style.position = "relative";
    card.containerFront.style.width = "200px";
    card.containerFront.style.height = "300px";
    card.containerFront.style.display = "flex";
    card.containerFront.style.flexDirection = "column";
    card.containerFront.style.alignItems = "center";

    card.containerBack.style.position = "absolute"; 
    card.containerBack.style.zIndex = "0";
    card.containerBack.style.backfaceVisibility = "hidden";
    card.containerBack.style.transition = ROTATE_SPEED;
    card.containerBack.style.transform = "rotateY(-180deg)"
    card.containerBack.style.top = "0";
    card.containerBack.style.width = "100%";
    card.containerBack.style.height = "100%";

    card.wrapperImage.style.height = "42%";
    card.wrapperImage.style.width = "100%";
    card.wrapperImage.style.display = "flex";
    card.wrapperImage.style.alignItems = "center"; 
    card.wrapperImage.style.justifyContent = "center";     


    card.elementImage.style.maxWidth = "100%";
    card.elementImage.style.maxHeight = "100%";

    card.wrapperImageType.style.margin = "10px 0px 10px 0px";

    card.elementDescription.style.margin = "12px 10px 10px 10px";
    card.elementDescription.style.fontSize = "22px";

    card.elementName.style.width = "100%";
    card.wrapperImageType.style.width = "100%";
    card.wrapperImageType.style.margin = "0px 0px 0px 0px";
    card.wrapperImageType.style.height = "14%";
    card.wrapperImageType.style.display = "flex";
    card.wrapperImageType.style.justifyContent = "center";

    card.elementType1.style.maxWidth = "80%";
    card.elementType1.style.maxHeight = "80%";
    card.elementType2.style.maxWidth = "80%";
    card.elementType2.style.maxHeight = "80%";

    card.containerFront.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.8)";
    card.containerBack.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.8)";
}


function createSections () {
    const sectionLogo = document.createElement("section");
    const sectionCards = document.createElement("section");
    document.body.appendChild(sectionLogo);
    document.body.appendChild(sectionCards);
    return {
        "sectionLogo": sectionLogo,
        "sectionCards": sectionCards,
    }
}

function styleSections (sectionCards) {
    sectionCards.style.display = "flex";
    sectionCards.style.flexWrap = "wrap";
    sectionCards.style.justifyContent = "center";
    sectionCards.style.gap = "1.5vw";
}

function shadowMouseOver () {
    this.style.filter = "brightness(0.7)";
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.15s ease-in-out"
};

function shadowMouseOut () {
    this.style.filter = "brightness(1)";
    this.style.transform = "scale(1)";
};

function rotateCard () {
    const containerFront = this.querySelector(".containerFront");
    const containerBack = this.querySelector(".containerBack");
    if (containerFront.style.transform == ROTATED_TRUE) {
        containerFront.style.zIndex = 1;
        containerFront.style.transform = ROTATED_FALSE;
        containerBack.style.zIndex = 0;
        containerBack.style.transform = ROTATED_TRUE;
    } else {
        containerFront.style.zIndex = -1;
        containerFront.style.transform = ROTATED_TRUE;
        containerBack.style.zIndex = 2;
        containerBack.style.transform = ROTATED_FALSE;
    }
}

function addCardEvents (card) {
    card.containerCard.addEventListener("mouseover", shadowMouseOver);
    card.containerCard.addEventListener("mouseout", shadowMouseOut);
    card.containerCard.addEventListener("click", rotateCard);
}

main();