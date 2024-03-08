export { createCard, fillCard, styleCard, addCardEvents };

import { POKEMONARRAY } from "./modules/pokemon_data.js";
import { addFont, styleCard, styleSections } from "./modules/style_script.js";
import { createSections, createCard, fillCard } from "./modules/create_elements_script.js";
import { addCardEvents, addSearchEvents } from "./modules/event_script.js";

function main () {
    const sections = createSections();
    addFont();
    styleSections(sections);
    addSearchEvents(sections);
    for (const pokemon of POKEMONARRAY) {
        const card = createCard(sections);
        fillCard(card, pokemon);
        styleCard(card, pokemon);
        addCardEvents(card);
    };
};

main();