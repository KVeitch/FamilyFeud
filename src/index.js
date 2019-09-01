//any calculation to go to the dom should happen here
import $ from 'jquery';
import domUpdates from './domUpdates';
import './css/base.scss';
import './images/turing-logo.png'
import data from '../test/survey-sample-data';

const Game = require('./game');
let game = new Game(data);



$('.inputs__reset').click(function() {
  location.reload()
})

$('.player__button').click(playerButtonHelper);
game.getSurveys();

function playerButtonHelper() {
    game.makePlayers($('.player__input1').val(), $('.player__input2').val());
    game.startRound();
    domUpdates.appendNames(game);
    domUpdates.appendSurvey(game);
    domUpdates.hideSplashPage();
  }


