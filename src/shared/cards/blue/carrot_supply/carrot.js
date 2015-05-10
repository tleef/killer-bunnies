var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '103', subtitle: 'Carrot #01', name: 'Tucker' },
  { id: '104', subtitle: 'Carrot #02', name: 'Abu' },
  { id: '105', subtitle: 'Carrot #03', name: 'Hikaru' },
  { id: '106', subtitle: 'Carrot #04', name: 'Flo' },
  { id: '107', subtitle: 'Carrot #05', name: 'Remington' },
  { id: '108', subtitle: 'Carrot #06', name: 'Butch' },
  { id: '109', subtitle: 'Carrot #07', name: 'Presto' },
  { id: '110', subtitle: 'Carrot #08', name: 'Seth' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.CARROT_SUPPLY;
  card.kind = kinds.CARROT;
  return card;
});
