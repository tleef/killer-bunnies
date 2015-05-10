var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '080', name: 'The Magic Spatula' },
  { id: '081', aggressive: true, name: 'Rooney’s Reusables' },
  { id: '082', name: 'Sunny Day' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.VERY_SPECIAL;
  card.kind = kinds.MISC;
  return card;
});
