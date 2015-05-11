var decks = require('../consts/decks');
var Card = require('./Card');

module.exports = function(deck) {
  var cards = [];
  if (deck >= decks.BLUE)   cards = cards.concat(require('./blue'));

  return cards.map(Card);
};
