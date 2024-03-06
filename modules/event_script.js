export { addCardEvents };

import { ROTATED_TRUE, ROTATED_FALSE } from "./constants.js";

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
};
