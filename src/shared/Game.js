var KaballasMarket = require('./KaballasMarket');
var Player = require('./Player');
var Pile = require('./Pile');

var cards = require('./cards');
var card_types = require('./cards/types');

function Game(deck) {
  if (!(this instanceof Game)) return new Game(deck);

  var all_cards = cards(deck);

  this.started = false;

  this.players = [];
  this.current_player = null;
  this.kaballas_market = new KaballasMarket(deck);

  this.discard_pile = new Pile();
  this.draw_pile = new Pile(all_cards.filter(function(x) {
    return x.type === card_types.KABALLA_DOLLA ||
           x.type === card_types.PLAY_IMMEDIATELY ||
           x.type === card_types.RUN ||
           x.type === card_types.SPECIAL ||
           x.type === card_types.VERY_SPECIAL;
  }));

  this.draw_pile.shuffle();
}

Game.prototype.addPlayer = function(name, cb) {
  var self = this;
  if (self.started) return cb(new Error('Game already started'));
  if (self.players.length >= 4) return cb(new Error('Too many players'));
  self.players.push(Player(name));
  cb();
};

Game.prototype.start = function() {
  var self = this;
  self.started = true;

  // deal 7 cards to each player
  // TODO handle dolla and play immediately
  self.players.forEach(function(player) {
    while (player.hand.length < 7) {
      player.hand.push(self.draw_pile.draw());
    }
  })
};

module.exports = Game;
