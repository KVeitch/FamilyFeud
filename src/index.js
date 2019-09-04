//any calculation to go to the dom should happen here
import $ from 'jquery';
import domUpdates from './domUpdates';
import './css/base.scss';
import './images/turing-logo.png'
import data from '../test/sample-data-3surveys';
import Game from './game';
let game = new Game(data);
game.getSurveys();



$('.inputs__reset').click(function() {
  location.reload()
})

$('.player__button').click(playerButtonHelper);

$('.jq-submit').click(playerSubmitButtonHelper);

// $('.player2__button').click(player2ButtonHelper);


function playerSubmitButtonHelper() {
  if($('.player1__guess').val() || $('.player2__guess').val()) {
    let currentPlayer = game[`player${game.round.currentPlayer}`]
    let answer = game.round.turn.hasAnswer();
    
    game.round.turn.giveFeedback(answer);
    game.round.turn.increaseScore(answer, currentPlayer);
    domUpdates.postScore(game, game.round.currentPlayer);
    domUpdates.clearGuessInput();
    domUpdates.removeFeedback();
    checkToRevealAnswer(answer);
    game.round.togglePlayer();
    game.round.makeNewTurn();
    domUpdates.togglePlayerDisplays();
  }
}

function playerButtonHelper() {
  if( $('.player__input1').val() &&  $('.player__input2').val()) {
    game.makePlayers($('.player__input1').val(), $('.player__input2').val());
    game.startRound();
    domUpdates.appendNames(game);
    domUpdates.appendSurvey(game);
    domUpdates.hideSplashPage();
    game.round.makeNewTurn();
    domUpdates.appendAnswers(game);
  }
}

function checkToRevealAnswer(answer) {
  if (answer.isCorrect) {
    domUpdates.revealAnswers(answer.index)
  }
}
