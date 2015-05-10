var gamejs = require('gamejs');

var cards = require('../shared/cards');

console.log('cards:', cards);

gamejs.preload([]);

gamejs.ready(function () {

  var display = gamejs.display.getSurface();

  gamejs.event.onEvent(function (event) {
    // event handling
  });
  // there are also more special functions
  // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...

  gamejs.onTick(function (msDuration) {
    // game loop
  });
});
