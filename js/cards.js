function initializeCards (row) {
    // get the card elements from the row and convert into an array of elements
    const cards = Array.prototype.slice.call(row.getElementsByClassName('card'));
    const firstCard = cards[0];
    // we don't need an event listener on the first card
    cards.shift();

    const lastCard = cards[cards.length - 1];
    cards.splice(-1,1);

    for (let card of cards) {
        card.addEventListener('mouseover', () => {
            firstCard.className += ' shifted-card';
        });
        card.addEventListener('mouseout', () => {
            firstCard.className = firstCard.className.replace(' shifted-card', '');
        });
    }

    lastCard.addEventListener('mouseover', () => {
        firstCard.className += ' shifted-card--last';
    });
    lastCard.addEventListener('mouseout', () => {
        firstCard.className = firstCard.className.replace(' shifted-card--last', '');
    });
}

const horizontalRow = document.getElementsByClassName('horizontal-card-row')[0];
initializeCards(horizontalRow);
const verticalRow = document.getElementsByClassName('vertical-card-row')[0];
initializeCards(verticalRow);
