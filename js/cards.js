function initializeCards(row) {
    // get the card elements from the row and convert into an array of elements
    const cards = Array.prototype.slice.call(row.getElementsByClassName('card'));
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];

    // we dont need the standard mouseover listeners on either the first or last cards
    cards.shift();
    cards.splice(-1, 1);

    // need to add listeners to each card that adds/removes a class to/from the first card
    for (let card of cards) {
        card.addEventListener('mouseover', () => {
            firstCard.className += ' shifted-card';
        });
        card.addEventListener('mouseout', () => {
            firstCard.className = firstCard.className.replace(' shifted-card', '');
        });
    }

    // the last card adds a special class to the first card
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

