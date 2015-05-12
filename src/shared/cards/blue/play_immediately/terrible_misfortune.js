var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');

/*
 * If a player draws a PLAY IMMEDIATELY (Terrible Misfortune) card during play, then he must stop the game,
   announce that he has the card, and kill one of his own bunnies in The Bunny Circle.

 * If a player draws a PLAY IMMEDIATELY card but has no bunny in The Bunny Circle, then he must place the
   card on an opponent’s bunny in The Bunny Circle causing it to die (discarded). This is also true if the
   player’s only bunny in The Bunny Circle is protected by The Heavenly Halo.
 */

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
