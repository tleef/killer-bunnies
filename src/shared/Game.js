var KaballasMarket = require('./KaballasMarket');
var Pile = require('./Pile');

var cards = require('./cards');
var card_types = require('./cards/types');

function Game(deck) {
  var all_cards = cards(deck);

  this.kaballas_market = new KaballasMarket(deck);

  this.draw_pile = Pile(all_cards.filter(function(x) {
    return x.type === card_types.KABALLA_DOLLA ||
           x.type === card_types.PLAY_IMMEDIATELY ||
           x.type === card_types.RUN ||
           x.type === card_types.SPECIAL ||
           x.type === card_types.VERY_SPECIAL;
  }));
}

module.exports = Game;
