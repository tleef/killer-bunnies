
function Food(data) {
  if (!(this instanceof Food)) return new Food(data);

  this.deck = data.deck;
  this.type = data.type;
  this.amount = data.amount;
}

module.exports = Food;
