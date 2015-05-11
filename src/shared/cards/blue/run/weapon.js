var decks = require('../../../consts/decks');
var types = require('../../types');
var kinds = require('../../kinds');
var dice = require('../../../consts/dice');

module.exports = [
  { id: '031', aggressive: true, subtitle: 'Weapon Level 01', name: 'Kitchen Whisk' },
  { id: '032', aggressive: true, subtitle: 'Weapon Level 02', name: 'Green Gelatin (with Evil Pineapple Chunks)' },
  { id: '033', aggressive: true, subtitle: 'Weapon Level 03', name: 'Ice Pick' },
  { id: '034', aggressive: true, subtitle: 'Weapon Level 04', name: 'Butcher’s Cleaver' },
  { id: '035', aggressive: true, subtitle: 'Weapon Level 04', name: 'Food Processor' },
  { id: '036', aggressive: true, subtitle: 'Weapon Level 05', name: 'Boiling Tar' },
  { id: '037', aggressive: true, subtitle: 'Weapon Level 05', name: 'Roaches' },
  { id: '038', aggressive: true, subtitle: 'Weapon Level 06', name: 'Bow & Arrow' },
  { id: '039', aggressive: true, subtitle: 'Weapon Level 06', name: 'Chain Saw' },
  { id: '040', aggressive: true, subtitle: 'Weapon Level 07', name: 'Guillotine' },
  { id: '041', aggressive: true, subtitle: 'Weapon Level 07', name: 'Sword' },
  { id: '042', aggressive: true, subtitle: 'Weapon Level 08', name: 'Flame Thrower' },
  { id: '043', aggressive: true, subtitle: 'Weapon Level 08', name: 'Torus Ring' },
  { id: '044', aggressive: true, subtitle: 'Weapon Level 09', name: 'Fluorine Gas' },
  { id: '045', aggressive: true, subtitle: 'Weapon Level 09', name: 'Laser Gun' },
  { id: '046', aggressive: true, subtitle: 'Weapon Level 10', name: 'Trojan Bunny, The' },
  { id: '047', aggressive: true, roaming: true, subtitle: 'Weapon Level 11', name: 'Ebola Virus, The' },
  { id: '048', aggressive: true, subtitle: 'Weapon Level 12', name: 'Nuclear Warhead' }
].map(function(card) {
  card.deck = decks.BLUE;
  card.type = types.RUN;
  card.kind = kinds.WEAPON;
  card.dice = [dice.BLACK];
  return card;
});
