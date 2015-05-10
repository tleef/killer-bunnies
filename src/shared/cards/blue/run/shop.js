var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '062', name: 'Kaballa’s Market – 4/5' },
  { id: '063', name: 'Kaballa’s Market – Closed' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.SHOP;
  return card;
});
