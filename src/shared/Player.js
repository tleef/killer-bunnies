
function Player(name) {
  if (!(this instanceof Player)) return new Player(name);

  this.name = name;

  this.top_run = null;
  this.bottom_rum = null;

  this.hand = [];

  this.kaballa_dolla = [];

  this.carrots = [];

}

module.exports = Player;
