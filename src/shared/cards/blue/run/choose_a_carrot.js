var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '016', needs_bunny: true, name: 'Choose A Carrot' },
  { id: '017', needs_bunny: true, name: 'Choose A Carrot' },
  { id: '018', needs_bunny: true, name: 'Choose A Carrot' },
  { id: '019', needs_bunny: true, name: 'Choose A Carrot' },
  { id: '020', needs_bunny: true, name: 'Choose A Carrot' },
  { id: '021', needs_bunny: true, name: 'Choose 2 Carrots' },
  { id: '022', needs_bunny: true, name: 'Choose 2 Carrots' },
  { id: '023', needs_bunny: true, name: 'Choose 2 Carrots' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.CHOOSE_A_CARROT;
  return card;
});
