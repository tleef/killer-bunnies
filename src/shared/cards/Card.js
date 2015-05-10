
function Card(data) {
  if (!(this instanceof Card)) return new Card(data);

  this.id = data.id;
  this.name = data.name;
  this.deck = data.deck;
  this.type = data.type;
  this.kind = data.kind;
  this.dice = data.dice;
  this.aggressive = data.aggressive;
  this.pawn = data.pawn;
  this.roaming = data.roaming;
  this.subtitle = data.subtitle;
}

module.exports = Card;
