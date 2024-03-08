export { search };

import { POKEMONARRAY } from "./pokemon_data.js";
import { createCard, fillCard, styleCard, addCardEvents } from "../script.js";
import { UNOWN } from "./constants.js";

function search (sections, shiny) {
    console.log(shiny)
    const selected = sections.searchInput.value.toLowerCase();
    const filteredArray = POKEMONARRAY.filter(pokemon => {
        return pokemon.name.startsWith(selected) || pokemon.id.startsWith(selected);
    });
    sections.sectionCards.innerHTML = '';
    if (filteredArray.length > 0) {
        for (const pokemon of filteredArray) {
            const card = createCard(sections);
            fillCard(card, pokemon, shiny);
            styleCard(card, pokemon);
            addCardEvents(card);
        }
    } else {
        const card = createCard(sections);
        fillCard(card, UNOWN, shiny);
        styleCard(card, UNOWN);
        addCardEvents(card);
    }
};