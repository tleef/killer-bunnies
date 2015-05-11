var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '102', name: 'Kaballa’s Market 3/3 (Starter)' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.STARTER_CARD;
  card.kind = kinds.SHOP;
  return card;
});
