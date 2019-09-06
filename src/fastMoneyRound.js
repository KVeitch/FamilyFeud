import Round from './round'
import Game from './game';

class FastMoneyRound extends Round {
  constructor(survey, player1, player2) {
    super(survey, player1, player2)
  }

  startTime(game) {
    let timeLeft = 30;
    let timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        game.round.playerTimeOut();
        fastRoundTimeout();
      } else {
        $('.container__round--timer').text(timeLeft + ' seconds remaining');
        timeLeft--;
      }
    } 
  }

  fastRoundTimeout() {
    if (game.roundCount === 3) {
      domUpdates.hideAnswers();
      domUpdates.setFastRoundPlayer1();
      game.startFastRound();
      game.round.playerTimeOut();
      domUpdates.setFastRoundHeader();
    } else if (game.roundCount === 4) {
      
    }
  }

  playerTimeOut() {
    $('.container__round--timer').text('')
  } // needs to go to domUpdates

  playerRoundFeedback() {
    // Gives feedback to player for Fast Round
  }

}

export default FastMoneyRound;


// be able to switch players and create a new fastMoneyRound
// end the actual game in DOM & functionality & instantiates a new Game
// finish all testing
// overall refactor 
// finish CSSing
// multiplier make it happen baby
