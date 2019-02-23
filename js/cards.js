function initializeCards (row) {
    const cards = Array.prototype.slice.call(row.getElementsByClassName('card'));
    const firstCard = cards[0];
    cards.shift();

    for (let card of cards) {
        card.addEventListener('mouseover', () => {
            firstCard.className += ' shifted-card';
        });
        card.addEventListener('mouseout', () => {
            firstCard.className = firstCard.className.replace(' shifted-card', '');
        });
    }
}

const horizontalRow = document.getElementsByClassName('horizontal-card-row')[0];
initializeCards(horizontalRow);
const verticalRow = document.getElementsByClassName('vertical-card-row')[0];
initializeCards(verticalRow);
