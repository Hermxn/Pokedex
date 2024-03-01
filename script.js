import { POKEMONARRAY } from "./pokemonData.js";

function main () {
    const sectionCards = createSections();
    styleSections(sectionCards);
    for (const pokemon of POKEMONARRAY) {
        const card = createCard(sectionCards);
        fillCard(card, pokemon);
        styleCard(card);
        card.containerCard.addEventListener("mouseover", shadowMouseOver);
        card.containerCard.addEventListener("mouseout", shadowMouseOut);
        card.containerCard.addEventListener("click", rotateCard);
    }
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
    containerBack.appendChild(elementDescription);
    wrapperImage.appendChild(elementImage);
    wrapperContent.appendChild(elementIndex);
    wrapperContent.appendChild(elementName);
    wrapperContent.appendChild(elementType);
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
    card.elementDescription.innerHTML = "HOLAA";
}

function styleCard(card) {
    card.containerCard.style.position = "relative";

    card.containerFront.style.zIndex = "1";
    card.containerFront.style.backfaceVisibility = "hidden";
    card.containerFront.style.transition = "transform 0.5s ease-in-out";
    card.containerFront.style.position = "relative";
    card.containerFront.style.border = "1px gray solid";
    card.containerFront.style.width = "200px";
    card.containerFront.style.height = "300px";
    card.containerFront.style.display = "flex";
    card.containerFront.style.flexDirection = "column";
    card.containerFront.style.alignItems = "center";
    card.containerFront.style.backgroundColor = "#d9e6f2";

    card.wrapperImage.style.height = "65%";
    card.wrapperImage.style.width = "100%";
    card.wrapperImage.style.display = "flex";
    card.wrapperImage.style.alignItems = "center"; 
    card.wrapperImage.style.justifyContent = "center"; 
    card.wrapperImage.style.backgroundImage = "url('./media/assets/background.jpg')";
    card.wrapperImage.style.backgroundSize = "cover"

    card.wrapperContent.style.top = "195px";
    card.wrapperContent.style.width = "100%";

    card.elementImage.style.maxWidth = "100%";
    card.elementImage.style.maxHeight = "100%";

    card.elementIndex.style.marginTop = "0";
    card.elementIndex.style.textAlign = "center";

    card.elementName.style.marginTop = "0";
    card.elementName.style.textAlign = "center";

    card.elementType.style.marginTop = "0";
    card.elementType.style.textAlign = "center";

    card.containerBack.style.position = "absolute"; 
    card.containerBack.style.zIndex = "0";
    card.containerBack.style.backfaceVisibility = "hidden";
    card.containerBack.style.transition = "transform 0.5s ease-in-out";
    card.containerBack.style.transform = "rotateY(-180deg)"
    card.containerBack.style.top = "0";
    card.containerBack.style.width = "100%";
    card.containerBack.style.height = "100%";

}


function createSections () {
    const sectionCards = document.createElement("section");
    return document.body.appendChild(sectionCards);
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
    console.log(this)
};

function shadowMouseOut () {
    this.style.filter = "brightness(1)";
    this.style.transform = "scale(1)";
};

function rotateCard () {
    const containerFront = this.querySelector(".containerFront");
    const containerBack = this.querySelector(".containerBack");
    if (containerFront.style.transform == "rotateY(180deg)") {
        containerFront.style.zIndex = "1";
        containerFront.style.transform = "rotateY(0deg)";
        containerBack.style.zIndex = "0";
        containerBack.style.transform = "rotateY(180deg)";
    } else {
        containerFront.style.zIndex = "-1";
        containerFront.style.transform = "rotateY(180deg)";
        containerBack.style.zIndex = "2";
        containerBack.style.transform = "rotateY(0deg)";
    }
}

main();