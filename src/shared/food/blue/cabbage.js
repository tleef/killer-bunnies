var decks = require('../../consts/decks');
var types = require('../types');

module.exports = [
  { amount: 1 },
  { amount: 1 },
  { amount: 1 },
  { amount: 1 },
  { amount: 1 },
  { amount: 2 },
  { amount: 2 },
  { amount: 2 },
  { amount: 2 },
  { amount: 5 },
  { amount: 5 },
  { amount: 10 }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.CABBAGE;
  return card;
});
