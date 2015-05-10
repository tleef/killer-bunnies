var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '024', aggressive: true, name: 'Feed The Bunny 1/1' },
  { id: '025', aggressive: true, name: 'Feed The Bunny 2/1' },
  { id: '026', aggressive: true, name: 'Feed The Bunny 1/3' },
  { id: '027', aggressive: true, name: 'Feed The Bunny 3/1' },
  { id: '028', aggressive: true, name: 'Feed The Bunny 3/4' },
  { id: '029', aggressive: true, name: 'Feed The Bunny 5/4' },
  { id: '030', aggressive: true, name: 'Feed The Bunny 5/5' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.FEED_THE_BUNNY;
  return card;
});
