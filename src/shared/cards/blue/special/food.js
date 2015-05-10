var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '072', pawn: true, name: 'Large Prune Danish' },
  { id: '073', pawn: true, name: 'Large Prune Danish' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.SPECIAL;
  card.kind = kinds.FOOD;
  return card;
});
