import { POKEMONARRAY } from "./pokemonData.js";

const ROTATED_TRUE = "rotateY(180deg)";
const ROTATED_FALSE = "rotateY(0deg)";
const ROTATE_SPEED = "transform 0.5s ease-in-out";
let previousCard = null;

function main () {
    const sectionCards = createSections().sectionCards;
    addFont();
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
    const containerFrontCover = document.createElement("div");
    const containerBackCover = document.createElement("div");
    const wrapperImage = document.createElement("div");
    const wrapperType = document.createElement("div");
    const elementImage = document.createElement("img");
    const elementIndex = document.createElement("p");
    const elementName = document.createElement("h3");
    const elementType1 = document.createElement("img");
    const elementType2 = document.createElement("img");
    const elementDescription = document.createElement("p");
    sectionCards.appendChild(containerCard);
    containerCard.appendChild(containerFrontCover);
    containerCard.appendChild(containerBackCover);
    containerFrontCover.appendChild(elementIndex);
    containerFrontCover.appendChild(wrapperImage);
    containerFrontCover.appendChild(elementName);
    containerFrontCover.appendChild(wrapperType);
    wrapperType.appendChild(elementType1);
    wrapperType.appendChild(elementType2);
    containerBackCover.appendChild(elementDescription);
    wrapperImage.appendChild(elementImage);
    containerCard.className = "containerCard";
    containerFrontCover.className = "containerFrontCover";
    containerBackCover.className = "containerBackCover";
    return {
        "containerCard": containerCard,
        "containerFrontCover": containerFrontCover, 
        "containerBackCover": containerBackCover,
        "wrapperImage": wrapperImage,
        "wrapperType": wrapperType,
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
    const textElements = [card.elementIndex, card.elementName, card.elementDescription];
    const containersCover = [card.containerFrontCover, card.containerBackCover];
    const typeElements = [card.elementType1, card.elementType2];

    textElements.forEach(element => {
        element.style.marginTop = "10px";
        element.style.textAlign = "center";
        element.style.fontFamily = "Nintendo";
        element.style.fontStyle = "normal";
        element.style.fontWeight= "200";
        element.style.fontSize = "26px";
        element.style.marginBottom = "10px";
    });

    containersCover.forEach(container => {
        container.style.transition = ROTATE_SPEED;
        container.style.backgroundSize = "100% 100%";
        container.style.borderRadius = "10px";
        container.style.backfaceVisibility = "hidden";
        container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.8)";
    });

    typeElements.forEach(element => {
        element.style.maxWidth = "80%";
        element.style.maxHeight = "80%";
    });

    document.body.style.backgroundImage = "url('./assets/static/background.jpg')";
    document.body.style.backgroundSize = "25%";

    card.containerCard.style.position = "relative";

    card.containerFrontCover.style.backgroundImage = `url("./assets/static/card_cover_front/${pokemon.type[0]}.jpg")`;
    card.containerBackCover.style.backgroundImage = `url("./assets/static/card_cover_back/${pokemon.type[0]}.jpg")`;

    card.containerFrontCover.style.position = "relative";
    card.containerFrontCover.style.width = "200px";
    card.containerFrontCover.style.height = "300px";
    card.containerFrontCover.style.display = "flex";
    card.containerFrontCover.style.flexDirection = "column";
    card.containerFrontCover.style.alignItems = "center";

    card.containerBackCover.style.position = "absolute"; 
    card.containerBackCover.style.transform = "rotateY(-180deg)";
    card.containerBackCover.style.top = "0";
    card.containerBackCover.style.width = "100%";
    card.containerBackCover.style.height = "100%";

    card.wrapperImage.style.height = "42%";
    card.wrapperImage.style.width = "100%";
    card.wrapperImage.style.display = "flex";
    card.wrapperImage.style.alignItems = "center"; 
    card.wrapperImage.style.justifyContent = "center";  

    card.wrapperType.style.width = "100%";
    card.wrapperType.style.margin = "0px 0px 0px 0px";
    card.wrapperType.style.height = "14%";
    card.wrapperType.style.display = "flex";
    card.wrapperType.style.justifyContent = "center";  

    card.wrapperType.style.margin = "10px 0px 10px 0px";

    card.elementImage.style.maxWidth = "100%";
    card.elementImage.style.maxHeight = "100%";

    card.elementIndex.style.marginBottom = "0px";
    card.elementIndex.style.width = "100%";
    card.elementIndex.style.textAlign = "left";
    card.elementIndex.style.marginLeft = "22px";
    card.elementIndex.style.fontSize = "20px";

    card.elementName.style.marginTop = "15px";
    card.elementName.style.width = "100%";

    card.elementDescription.style.margin = "12px 10px 10px 10px";
    card.elementDescription.style.fontSize = "22px";
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

function shadowMouseOver (card) {
    card.containerCard.style.filter = "brightness(0.7)";
    card.containerCard.style.transform = "scale(1.05)";
    card.containerCard.style.transition = "transform 0.15s ease-in-out"
};

function shadowMouseOut (card) {
    card.containerCard.style.filter = "brightness(1)";
    card.containerCard.style.transform = "scale(1)";
};

function rotateCard (card) {
    card.containerCard.style.transform = "translateY(-5%) rotate(7deg)";
    if (card.containerFrontCover.style.transform == ROTATED_TRUE) {
        card.containerFrontCover.style.transform = ROTATED_FALSE;
        card.containerBackCover.style.transform = ROTATED_TRUE;
    } else {
        card.containerFrontCover.style.transform = ROTATED_TRUE;
        card.containerBackCover.style.transform = ROTATED_FALSE;
    };
}

function addCardEvents (card) {
    card.containerCard.addEventListener("mouseover", function() {
        shadowMouseOver(card);
    });
    card.containerCard.addEventListener("mouseout", function() {
        shadowMouseOut(card);
    });
    card.containerCard.addEventListener("click", function() {
        if (previousCard && previousCard != card && previousCard.containerFrontCover.style.transform == ROTATED_TRUE) {
            rotateCard(previousCard);
            previousCard.containerCard.style.transform = "translateY(0%) rotate(0deg)";
            rotateCard(card);
        } else if (previousCard == card) {
            rotateCard(card);
        } else {
            rotateCard(card);
        }
        previousCard = card;
    });
}

main();