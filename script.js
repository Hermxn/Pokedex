import { POKEMONARRAY } from "./pokemonData.js";

function main () {
    for (const pokemon of POKEMONARRAY) {
        const card = createCard();
        styleCard(card);
        fillCard(card, pokemon);
    }
}

function createCard () {
    const container = document.createElement("div");
    const name = document.createElement("p")
    const image = document.createElement("img");
    document.body.appendChild(container);
    container.appendChild(name);
    container.appendChild(image);
    return {
        "container": container, 
        "name": name, 
        "image": image, 
    };
}

function styleCard(card) {
    // Установить стили для контейнера
    card.container.style.border = '1px black solid';
    card.container.style.width = '300px'; // Фиксированная ширина контейнера
    card.container.style.height = '400px'; // Фиксированная высота контейнера
    card.container.style.position = 'relative';


    // Установить стили для изображения
    card.image.style.maxWidth = '100%'; // Максимальная ширина изображения равна 80% от ширины контейнера
    card.image.style.maxHeight = '80%'; // Максимальная высота изображения равна 80% от высоты контейнера
    card.image.style.objectFit = 'contain'; // Сохраняет пропорции изображения и вписывает его в контейнер
    card.image.style.position = 'absolute'; // Позиционируем изображение абсолютно внутри контейнера


}


function fillCard (card, pokemon) {
    card.name.innerHTML = pokemon.name;
    card.image.src = pokemon.thumbnail;
}


main()