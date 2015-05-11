var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');
var dice = require('../../../consts/dice');

module.exports = [
  { id: '051', aggressive: true, name: 'Bad Karma' },
  { id: '052', aggressive: true, name: 'Baker Street' },
  { id: '053', dice: [dice.GREEN], aggressive: true, name: 'Black Cat' },
  { id: '054', dice: [dice.VIOLET], aggressive: true, roaming: true, name: 'Cyber Bunny' },
  { id: '055', aggressive: true, name: 'Defector Detector' },
  { id: '056', aggressive: true, name: 'Drought' },
  { id: '064', aggressive: true, name: 'Maggots' },
  { id: '065', aggressive: true, name: 'Poverty Poker' }
  //{ id: '066', aggressive: true, name: 'Carrot Top Casino' },
  //{ id: '067', aggressive: true, name: 'Carrot Top Casino' },
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.MISC;
  return card;
});
