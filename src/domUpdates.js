const Game = require('./game');
const Round = require('./round');
const data = require('../test/survey-sample-data');
const game = new Game(data);

$('.player__button').click(playerButtonHelper);

function createPlayers() {
  game.makePlayers($('.player__input1').val(), $('.player__input2').val());
}

function appendNames() {
  $('.jq-name1').text(game.player1.name);
  $('.jq-name2').text(game.player2.name);
}

function playerButtonHelper() {
  $('.main__player').toggle('hidden');
  game.getSurveys();
  createPlayers();
  game.startRound();
  appendNames();
  appendSurvey();
}

function appendSurvey() {
  $('#question-text').text(game.round.survey.question);
}



