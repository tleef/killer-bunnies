var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

module.exports = [
  { id: '068', name: 'Free Cabbage' },
  { id: '069', name: 'Free Water' },
  { id: '071', name: 'Half Price Coupon' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.SPECIAL;
  card.kind = kinds.COUPON;
  return card;
});
