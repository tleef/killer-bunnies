var gamejs = require('gamejs');

gamejs.preload(['images/cards/001_Blue_Congenial_Bunny-thumbnail.png']);

gamejs.ready(function () {

  var display = gamejs.display.getSurface();

  var bunny = gamejs.image.load('images/cards/001_Blue_Congenial_Bunny-thumbnail.png');
  display.blit(bunny);

  gamejs.event.onEvent(function (event) {
    // event handling
  });
  // there are also more special functions
  // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...

  gamejs.onTick(function (msDuration) {
    // game loop
  });
});
