
function Pile(items) {
  if (!(this instanceof Pile)) return new Pile(items);

  this.items = items || [];
}

Pile.prototype.shuffle = function() {
  var i = this.items.length;
  while (i) {
    var j = Math.floor(Math.random() * i);
    var x = this.items[--i];
    this.items[i] = this.items[j];
    this.items[j] = x;
  }
};

Pile.prototype.draw = function() {
  this.items.pop();
};

Pile.prototype.placeOnTop = function(item) {
  this.items.push(item);
};

Pile.prototype.placeOnBottom = function(item) {
  this.items.unshift(item);
};

module.exports = Pile;
