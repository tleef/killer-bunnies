var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');
var dice = require('../../../consts/dice');

module.exports = [
  { id: '070', aggressive: true, name: 'Geneva Convention' },
  { id: '074', dice: [dice.RED], pawn: true, name: 'The Mad, Mad Donnelaith Bakery' },
  { id: '075', dice: [dice.RED], pawn: true, name: 'The Mad, Mad Donnelaith Bakery' },
  { id: '076', dice: [dice.VIOLET, dice.ORANGE, dice.GREEN, dice.YELLOW, dice.BLUE], pawn: true, name: 'The Magic Fountain' },
  { id: '077', dice: [dice.VIOLET, dice.ORANGE, dice.GREEN, dice.YELLOW, dice.BLUE], pawn: true, name: 'The Magic Fountain' },
  { id: '078', dice: [dice.VIOLET, dice.ORANGE, dice.GREEN, dice.YELLOW, dice.BLUE], pawn: true, name: 'Supplies Surprise' },
  { id: '079', dice: [dice.VIOLET, dice.ORANGE, dice.GREEN, dice.YELLOW, dice.BLUE], pawn: true, name: 'Supplies Surprise' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.SPECIAL;
  card.kind = kinds.MISC;
  return card;
});
