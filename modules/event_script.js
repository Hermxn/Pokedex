export { addCardEvents, addSearchEvents };

import { ROTATED_TRUE, ROTATED_FALSE } from "./constants.js";
import { POKEMONARRAY } from "./pokemon_data.js";
import { createCard, fillCard, styleCard } from "../script.js";

let previousCard = null;

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
};

function addSearchEvents (searchButton, searchInput, sections) {
    searchButton.addEventListener("click", function () {
       search(sections, searchInput);
    })
};

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
};

function search (sections, searchInput) {
    const selected = searchInput.value.toLowerCase();
    const filteredArray = POKEMONARRAY.filter(pokemon => {
        return pokemon.name.startsWith(selected);
    });
    sections.sectionCards.innerHTML = '';
    for (const pokemon of filteredArray) {
        const card = createCard(sections);
        fillCard(card, pokemon);
        styleCard(card, pokemon);
        addCardEvents(card);
    }
};