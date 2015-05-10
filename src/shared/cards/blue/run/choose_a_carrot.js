var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '016', name: 'Choose A Carrot' },
  { id: '017', name: 'Choose A Carrot' },
  { id: '018', name: 'Choose A Carrot' },
  { id: '019', name: 'Choose A Carrot' },
  { id: '020', name: 'Choose A Carrot' },
  { id: '021', name: 'Choose 2 Carrots' },
  { id: '022', name: 'Choose 2 Carrots' },
  { id: '023', name: 'Choose 2 Carrots' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.CHOOSE_A_CARROT;
  return card;
});
