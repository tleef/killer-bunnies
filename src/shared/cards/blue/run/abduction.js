var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '049', aggressive: true, name: 'Area 51' },
  { id: '050', aggressive: true, name: 'Area 51' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.ABDUCTION;
  return card;
});
