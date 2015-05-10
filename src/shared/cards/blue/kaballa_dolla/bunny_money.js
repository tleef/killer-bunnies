var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '087', name: '1 Dolla' },
  { id: '088', name: '1 Dolla' },
  { id: '089', name: '1 Dolla' },
  { id: '090', name: '1 Dolla' },
  { id: '091', name: '1 Dolla' },
  { id: '092', name: '2 Dolla' },
  { id: '093', name: '2 Dolla' },
  { id: '094', name: '2 Dolla' },
  { id: '095', name: '2 Dolla' },
  { id: '096', name: '2 Dolla' },
  { id: '097', name: '2 Dolla' },
  { id: '098', name: '5 Dolla' },
  { id: '099', name: '5 Dolla' },
  { id: '100', name: '5 Dolla' },
  { id: '101', name: '10 Dolla' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.KABALLA_DOLLA;
  card.kind = kinds.BUNNY_MONEY;
  return card;
});
