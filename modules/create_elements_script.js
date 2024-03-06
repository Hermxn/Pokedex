export { createSections, createCard, fillCard };

function createSections () {
    const sectionLogo = document.createElement("section");
    const sectionCards = document.createElement("section");
    const logoWrapper = document.createElement("div");
    const logoBackgroundImage = document.createElement("img");
    const logoImage2 = document.createElement("img");
    document.body.appendChild(sectionLogo);
    document.body.appendChild(sectionCards);
    sectionLogo.appendChild(logoWrapper);
    logoWrapper.appendChild(logoBackgroundImage);
    logoWrapper.appendChild(logoImage2);
    logoBackgroundImage.src = "./assets/static/background_lines.png"
    logoImage2.src = "./assets/static/pokemon_logo.png"
    return {
        "sectionLogo": sectionLogo,
        "sectionCards": sectionCards,
        "logoWrapper": logoWrapper,
        "logoBackgroundImage": logoBackgroundImage,
        "logoImage2": logoImage2,
    };
};

function createCard (sections) {
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
    sections.sectionCards.appendChild(containerCard);
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
};

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
};
