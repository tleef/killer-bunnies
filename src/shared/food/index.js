var decks = require('../consts/decks');
var Food = require('./Food');

module.exports = function(deck) {
  var food = [];
  if (deck >= decks.BLUE)   food = food.concat(require('./blue'));

  return food.map(Food);
};
