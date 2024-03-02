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
        src: url('./media/assets/font.ttf') format('truetype'); 
    }
    `;
    document.head.appendChild(styleElement);
}

function createCard (sectionCards) {
    const containerCard = document.createElement("div");
    const containerFront = document.createElement("div");
    const containerBack = document.createElement("div");
    const wrapperImage = document.createElement("div");
    const wrapperContent = document.createElement("div");
    const elementImage = document.createElement("img");
    const elementIndex = document.createElement("p");
    const elementName = document.createElement("h3");
    const elementType = document.createElement("p");
    const elementDescription = document.createElement("p");
    sectionCards.appendChild(containerCard);
    containerCard.appendChild(containerFront);
    containerCard.appendChild(containerBack);
    containerFront.appendChild(wrapperImage);
    containerFront.appendChild(wrapperContent);
    containerBack.appendChild(elementType);
    containerBack.appendChild(elementDescription);
    wrapperImage.appendChild(elementImage);
    wrapperContent.appendChild(elementIndex);
    wrapperContent.appendChild(elementName);
    containerFront.className = "containerFront";
    containerBack.className = "containerBack";
    return {
        "containerCard": containerCard,
        "containerFront": containerFront, 
        "containerBack": containerBack,
        "wrapperImage": wrapperImage,
        "wrapperContent": wrapperContent,
        "elementDescription": elementDescription,
        "elementImage": elementImage,
        "elementIndex": elementIndex,
        "elementName": elementName, 
        "elementType": elementType, 
    };
}

function fillCard (card, pokemon) {
    card.elementImage.src = pokemon.thumbnail;
    card.elementIndex.innerHTML = `#${pokemon.id}`;
    card.elementName.innerHTML = pokemon.name.toUpperCase();
    switch (pokemon.type.length) {
        case 1:
            card.elementType.innerHTML = `Type: ${pokemon.type[0]}`;
            break;
        case 2:
            card.elementType.innerHTML = `Type: ${pokemon.type[0]} ${pokemon.type[1]}`
            break;
    };
    card.elementDescription.innerHTML = pokemon.description;
}

function styleCard(card, pokemon) {

    // if (pokemon.type.includse("water")) {
    //     console.log(pokemon.id, pokemon.type)
    // }

    const descriptionElements = [card.elementIndex, card.elementName, card.elementType, card.elementDescription];
    const containers = [card.containerFront, card.containerBack];

    descriptionElements.forEach(element => {
        element.style.marginTop = "5px";
        element.style.textAlign = "center";
        element.style.fontFamily = "Nintendo";
        element.style.fontStyle = "normal";
        element.style.fontWeight= 200;
        element.style.fontSize = "26px";
    });

    containers.forEach(container => {
        container.style.backgroundSize = "100% 100%"
    });

    document.body.style.backgroundImage = "url('./media/assets/bg.jpg')";
    document.body.style.backgroundSize = "25%";
    document.body.style.backgroundRepeat = "repeat";

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
    card.containerFront.style.backgroundImage = "url('./media/assets/card.png')";

    card.containerBack.style.position = "absolute"; 
    card.containerBack.style.zIndex = "0";
    card.containerBack.style.backfaceVisibility = "hidden";
    card.containerBack.style.transition = ROTATE_SPEED;
    card.containerBack.style.transform = "rotateY(-180deg)"
    card.containerBack.style.top = "0";
    card.containerBack.style.width = "100%";
    card.containerBack.style.height = "100%";
    card.containerBack.style.backgroundImage = "url('./media/assets/card_back.png')";

    card.wrapperImage.style.height = "55%";
    card.wrapperImage.style.width = "100%";
    card.wrapperImage.style.display = "flex";
    card.wrapperImage.style.alignItems = "center"; 
    card.wrapperImage.style.justifyContent = "center";     

    card.wrapperContent.style.height = "25%";
    card.wrapperContent.style.width = "100%";

    card.elementImage.style.maxWidth = "100%";
    card.elementImage.style.maxHeight = "100%";

    card.elementType.style.margin = "10px 0px 10px 0px";

    card.elementDescription.style.margin = "0px 10px 10px 10px"

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