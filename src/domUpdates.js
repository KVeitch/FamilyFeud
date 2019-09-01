const Game = require('./game');
const data = require('../test/survey-sample-data');
const game = new Game(data);

$('.player__button').click(function () {
  game.makePlayers($('.player__input1').val(), $('.player__input2').val())
  $('.main__player').toggle('hidden')
})




