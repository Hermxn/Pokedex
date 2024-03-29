export { addFont, styleCard, styleSections };

import { ROTATE_SPEED, SECTION_LOGO_MARGIN, SECTION_LOGO_HEIGHT } from "./constants.js";

const BACKGROUND_IMAGE = "url('./assets/static/background/background.jpg')";
const FRONT_COVER_IMAGE_URL = "url(./assets/static/card_cover_front/";
const BACK_COVER_IMAGE_URL = "url(./assets/static/card_cover_back/";

document.body.style.margin = 0;

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

    document.body.style.backgroundImage = BACKGROUND_IMAGE;
    document.body.style.backgroundSize = "25%";

    card.containerCard.style.position = "relative";

    card.containerFrontCover.style.backgroundImage = FRONT_COVER_IMAGE_URL + pokemon.type[0] + ".jpg)";
    card.containerBackCover.style.backgroundImage = BACK_COVER_IMAGE_URL + pokemon.type[0] + ".jpg)";

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

function styleSections (sections) {
    sections.sectionCards.style.display = "flex";
    sections.sectionCards.style.flexWrap = "wrap";
    sections.sectionCards.style.justifyContent = "center";
    sections.sectionCards.style.gap = "1.5vw";

    sections.sectionLogo.style.position = "relative";
    sections.sectionLogo.style.height = SECTION_LOGO_HEIGHT;
    sections.sectionLogo.style.margin = SECTION_LOGO_MARGIN;

    sections.logoWrapper.style.position = "absolute";
    sections.logoWrapper.style.height = "100%";
    sections.logoWrapper.style.width = "100%";
    sections.logoWrapper.style.display = "flex";
    sections.logoWrapper.style.justifyContent = "space-around";

    sections.backgroundLinesImage.style.position = "absolute";
    sections.backgroundLinesImage.style.width = "100%";
    sections.backgroundLinesImage.style.top = "0";
    sections.backgroundLinesImage.style.objectFit = "cover";
    
    sections.backgroundLogoImage.style.height = "100%";
    sections.backgroundLogoImage.style.objectFit = "contain";
    sections.backgroundLogoImage.style.zIndex = 1;
    sections.backgroundLogoImage.style.marginTop = "5px";

    sections.backgroundDexImage.style.zIndex = 1;
    sections.backgroundDexImage.style.marginTop = "5px";
    
    sections.backgroundBallImage.style.zIndex = 1;
    sections.backgroundBallImage.style.marginTop = "5px";

    sections.sectionSearch.style.margin = "30px 0 30px 0";
    sections.sectionSearch.style.display = "flex";
    sections.sectionSearch.style.justifyContent = "center";

    sections.searchInput.style.zIndex = 1;
    sections.searchInput.style.borderRadius = "7px";
    sections.searchInput.style.fontFamily = "Nintendo";
    sections.searchInput.style.fontWeight= "200";
    sections.searchInput.style.fontSize = "26px";
    sections.searchInput.style.textAlign = "center";

    sections.backgroundDexImage.style.scale = "1.35";
};
