export { search };

import { POKEMONARRAY } from "./pokemon_data.js";
import { createCard, fillCard, styleCard, addCardEvents } from "../script.js";

function search (sections) {
    const selected = sections.searchInput.value.toLowerCase();
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