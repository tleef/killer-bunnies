var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '049', aggressive: true, name: 'Area 51' },
  { id: '050', aggressive: true, name: 'Area 51' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.ABDUCTION;
  return card;
});
