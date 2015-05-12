var Pile = require('./Pile');

var cards = require('./cards');
var food = require('./food');

var food_types = require('./food/types');
var card_types = require('./cards/types');
var card_kinds = require('./cards/kinds');

/*
 * Any player may buy supplies anytime during his turn from Kaballa’s Market (if the market is open).
   The supplies that are sold at the market are: Cabbage Cards and Water Cards (which are used by a player
   to Feed The Bunny), and Carrots (which are used by a player to win the game). A player does not need a
   bunny in The Bunny Circle to buy supplies from Kaballa’s Market.

 * Kaballa’s Market is open at the start of the game. RUN cards exist that either change the prices at
   Kaballa’s Market, or close the market. The market does not need to be closed first to change the prices
   using a Kaballa’s Market card. New prices are listed on these cards.

 * Cards such as Carrot Top Casino, The Mad, Mad Donnelaith Bakery and Supplies Surprise will not reward
   Cabbage Cards, Water Cards or Carrots if the market is closed. Free Cabbage or Free Water cards cannot be
   used if the market is closed. However, since Free Cabbage and Free Water cards are Special cards, they can
   be saved and used when the market is opened again.

 * Choose A Carrot and Carrot Thief cards may always be used even if the market is closed. Let’s face it,
   a good thief would know how to break into the market after hours.
 */

function KaballasMarket(deck) {
  if (!(this instanceof KaballasMarket)) return new KaballasMarket(deck);

  var all_cards = cards(deck);
  var all_food = food(deck);

  this.open = true;

  this.cabbage_price = 3;
  this.water_price = 3;
  this.carrot_price = 10;

  this.cabbage_pile = new Pile(all_food.filter(function(x) { return x.type === food_types.CABBAGE }));
  this.water_pile   = new Pile(all_food.filter(function(x) { return x.type === food_types.WATER }));
  this.carrot_pile = new Pile(all_cards.filter(function(x) {
    return x.type === card_types.CARROT_SUPPLY && x.kind === card_kinds.CARROT
  }));

  this.cabbage_pile.shuffle();
  this.water_pile.shuffle();
  this.carrot_pile.shuffle();
}

KaballasMarket.prototype.close = function(cb) {
  this.open = false;
  cb();
};

KaballasMarket.prototype.open = function(cb) {
  this.open = true;
  cb();
};



module.exports = KaballasMarket;
