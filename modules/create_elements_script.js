export { createSections, createCard, fillCard };

const BACKGROUND_IMAGE_LINES = "./assets/static/background/background_lines.png";
const BACKGROUND_IMAGE_LOGO = "./assets/static/background/pokemon_logo.png";
const BACKGROUND_IMAGE_DEX = "./assets/static/background/dex.png";
const BACKGROUND_IMAGE_BALL = "./assets/static/background/ball.png";
const LOGO_IMAGE = "./assets/static/logo_types/";

function createSections () {
    const sectionLogo = document.createElement("section");
    const sectionSearch = document.createElement("section");
    const sectionCards = document.createElement("section");
    const logoWrapper = document.createElement("div");
    const backgroundLinesImage = document.createElement("img");
    const backgroundLogoImage = document.createElement("img");
    const backgroundBallImage = document.createElement("img");
    const backgroundDexImage = document.createElement("img");
    const searchInput = document.createElement("input");
    document.body.appendChild(sectionLogo);
    document.body.appendChild(sectionSearch);
    document.body.appendChild(sectionCards);
    sectionLogo.appendChild(logoWrapper);
    sectionSearch.appendChild(searchInput);
    logoWrapper.appendChild(backgroundLinesImage);
    logoWrapper.appendChild(backgroundBallImage);
    logoWrapper.appendChild(backgroundLogoImage);
    logoWrapper.appendChild(backgroundDexImage);
    backgroundLinesImage.src = BACKGROUND_IMAGE_LINES;
    backgroundLogoImage.src = BACKGROUND_IMAGE_LOGO;
    backgroundDexImage.src = BACKGROUND_IMAGE_DEX;
    backgroundBallImage.src = BACKGROUND_IMAGE_BALL;
    searchInput.type = "text";
    searchInput.placeholder = "search your pokemon";
    return {
        "sectionLogo": sectionLogo,
        "sectionSearch": sectionSearch,
        "sectionCards": sectionCards,
        "logoWrapper": logoWrapper,
        "backgroundLinesImage": backgroundLinesImage,
        "backgroundLogoImage": backgroundLogoImage,
        "backgroundDexImage": backgroundDexImage,
        "backgroundBallImage": backgroundBallImage,
        "searchInput": searchInput,
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
            card.elementType1.src = LOGO_IMAGE + pokemon.type[0] + ".png";
            break;
        case 2:
            card.elementType1.src = LOGO_IMAGE + pokemon.type[0] + ".png";
            card.elementType2.src = LOGO_IMAGE + pokemon.type[1] + ".png";
            break;
    };
    card.elementDescription.innerHTML = pokemon.description;
};
