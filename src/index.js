//any calculation to go to the dom should happen here
import $ from 'jquery';
import domUpdates from './domUpdates';
import './css/base.scss';
import './images/turing-logo.png'
import Game from './game';


/////////////////////////////////////////////////////////////////////////
////////////comment out the following for live data fetch////////////////
/////////////////////////////////////////////////////////////////////////

// import data from '../test/sample-data-3surveys';
// let game = new Game(data);
// game.getSurveys()

/////////////////////////////////////////////////////////////////////////
//////////////comment out the above for live data fetch//////////////////
/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
//////////Uncomment out the following for live data fetch////////////////
/////////////////////////////////////////////////////////////////////////

let game
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(fetchData => fetchData.json())
  .then(fdata => createGame(fdata.data) )
  .catch(error => console.log(error))



function createGame(data) {
  game = new Game(data);
  game.getSurveys();
}

/////////////////////////////////////////////////////////////////////////
////////////Uncomment out the above for live data fetch//////////////////
/////////////////////////////////////////////////////////////////////////

$('.inputs__reset').click(() => location.reload());

$('.player__button').click(playerButtonHelper);

$('.jq-submit').click(playerSubmitButtonHelper);

$(document).ready(() => {
  $('.player__input1').focus()
})

$('.round-feedback').click( (event)=> {
  if (event.target.id === 'multiplier-btn') {
  continueFR();
  }
});

function continueFR() {
  repopulateDOM();
  domUpdates.removeFeedback();
  game.round.startTime(game);
}

function playerSubmitButtonHelper() {
  console.log('rndCT: ', game.roundCount)
  console.log(game.round.turn.answers)
  if ($('.player1__guess').val() || $('.player2__guess').val()) {
    let currentPlayer = game[`player${game.round.currentPlayer}`]
    let answer = game.round.turn.hasAnswer(game.round);
    game.roundCount >= 3 ? roundFastRoundGuess(answer, currentPlayer) : round1And2ButtonHelper(answer, currentPlayer);
  }
}

function roundFastRoundGuess(answer, currentPlayer) {
  game.round.turn.increaseScore(answer, currentPlayer, game.round.multiplier);
  domUpdates.postScore(game, game.round.currentPlayer);
  domUpdates.clearGuessInput();
  checkToRevealAnswer(answer);
  checkNewRoundStart();
  btnEndGame();
} 

function btnEndGame() {
  if(game.roundCount === 4 && game.round.answersRevealed === 3) {
    domUpdates.displayGameWinner(game.round.getGameWinner(game))
  }
}

function round1And2ButtonHelper(answer, currentPlayer) {
  game.round.turn.giveFeedback(answer, game);
  game.round.turn.increaseScore(answer, currentPlayer);
  domUpdates.postScore(game, game.round.currentPlayer);
  domUpdates.clearGuessInput();
  checkToRevealAnswer(answer);
  game.round.togglePlayer();
  game.round.makeNewTurn();
  domUpdates.togglePlayerDisplays();
  setTimeout(() => {
    domUpdates.removeFeedback()
  }, 2000);
  checkNewRoundStart();
}

function playerButtonHelper() {
  if ( $('.player__input1').val() &&  $('.player__input2').val()) {
    domUpdates.removeDarkenFilter();
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

function checkNewRoundStart() {
  if (game.roundCount < 3 && game.round.answersRevealed === 3) { 
    domUpdates.hideAnswers();
    game.startRound();
    game.round.makeNewTurn();
    repopulateDOM();
    game.roundCount++ //new test
  } else if (game.roundCount === 3 && game.round.answersRevealed === 3) {
    console.log('in CNRS elseIf', game.roundCount)
    // game.roundCount++;
    // console.log('after', game.roundCount)
    domUpdates.hideAnswers();
    // game.round.clearTimer(game); //stop timer if they guess three correct answers
    domUpdates.setFastRoundHeader();  game.startFastRound(); 
    game.round.multiplier = parseInt($('#multiplier-input').val());
    setTimeout(()=> {
      let currentPlayer = game[`player${game.round.currentPlayer}`].name;
      domUpdates.displayFastRoundWarning(currentPlayer);
    }, 4000);
    game.roundCount++ //new test
  }
} // we will update this to be a switch statement

function repopulateDOM() {
  domUpdates.appendSurvey(game);
  domUpdates.appendAnswers(game);
  domUpdates.updateRoundNumber(game);
}