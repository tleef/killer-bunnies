var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '083', subtitle: 'Terrible Misfortune', name: 'Fiat' },
  { id: '084', subtitle: 'Terrible Misfortune', name: 'Hedge' },
  { id: '085', subtitle: 'Terrible Misfortune', name: 'Plutonium' },
  { id: '086', subtitle: 'Terrible Misfortune', name: 'Yogurt' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.PLAY_IMMEDIATELY;
  card.kind = kinds.TERRIBLE_MISFORTUNE;
  return card;
});
