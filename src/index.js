//any calculation to go to the dom should happen here
import $ from 'jquery';
import domUpdates from './domUpdates';
import './css/base.scss';
import './images/turing-logo.png'
import data from '../test/sample-data-3surveys';
import Game from './game';
let game = new Game(data);



$('.inputs__reset').click(function() {
  location.reload()
})

$('.player__button').click(playerButtonHelper);

$('.player1__button').click(player1ButtonHelper);

// $('.player2__button').click(player2ButtonHelper);

game.getSurveys();

function player1ButtonHelper() {
  game.round.turn.hasAnswer();
}

function playerButtonHelper() {
    game.makePlayers($('.player__input1').val(), $('.player__input2').val());
    game.startRound();
    domUpdates.appendNames(game);
    domUpdates.appendSurvey(game);
    domUpdates.hideSplashPage();
    game.round.makeNewTurn();
    domUpdates.appendAnswers(game);
  }




