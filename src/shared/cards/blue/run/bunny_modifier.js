var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '058', aggressive: true, name: 'The Heavenly Halo' },
  { id: '059', aggressive: true, name: 'Lucky Clover' },
  { id: '060', aggressive: true, name: 'Double Lucky Clover' },
  { id: '061', aggressive: true, name: 'Triple Lucky Clover' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.BUNNY_MODIFIER;
  return card;
});
