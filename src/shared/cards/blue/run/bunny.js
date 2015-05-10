var decks = require('../../../consts/decks');
var types = require('../../../consts/types');
var kinds = require('../../../consts/kinds');

module.exports = [
  { id: '001', name: 'Blue Congenial' },
  { id: '002', name: 'Blue Gleeful' },
  { id: '003', name: 'Blue Lumbering' },
  { id: '004', name: 'Blue Sinister' },
  { id: '005', name: 'Blue Timid' },
  { id: '006', name: 'Green Congenial' },
  { id: '007', name: 'Green Gleeful' },
  { id: '008', name: 'Green Lumbering' },
  { id: '009', name: 'Green Sinister' },
  { id: '010', name: 'Green Timid' },
  { id: '011', name: 'Orange Congenial' },
  { id: '012', name: 'Orange Gleeful' },
  { id: '013', name: 'Orange Lumbering' },
  { id: '014', name: 'Orange Sinister' },
  { id: '015', name: 'Orange Timid' },
  { id: '057', name: 'Free Agent' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.BUNNY;
  return card;
});
