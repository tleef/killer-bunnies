var Pile = require('./Pile');

var cards = require('./cards');
var food = require('./food');

var food_types = require('./food/types');
var card_types = require('./cards/types');
var card_kinds = require('./cards/kinds');

function Game(deck) {
  var all_cards = cards(deck);
  var all_food = food(deck);

  this.cabbage_pile = Pile(all_food.filter(function(x) { return x.type === food_types.CABBAGE }));
  this.water_pile   = Pile(all_food.filter(function(x) { return x.type === food_types.WATER }));
  this.carrot_pile = Pile(all_cards.filter(function(x) {
    return x.type === card_types.CARROT_SUPPLY && x.kind === card_kinds.CARROT
  }));
}

module.exports = Game;
