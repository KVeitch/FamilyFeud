import Round from './round'
import Game from './game';

class FastMoneyRound extends Round {
  constructor(survey, player1, player2) {
    super(survey, player1, player2)
    this.timerId = 0;
    this.multiplier = 1;
  }

  startTime(game) {
    let timeLeft = 30;
    game.round.timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(game.round.timerId);
        game.round.removeTimerText();
        // game.round.fastRoundTimeout(game);
      } else {
        $('.container__round--timer').text(timeLeft + ' seconds remaining');
        timeLeft--;
      }
    } 
  }

  clearTimer(game) {
    console.log(game.round)
    clearInterval(game.round.timerId);
    game.round.removeTimerText();
    // playerTimeOut();
  }

  fastRoundTimeout(game) {
    if (game.roundCount === 3) {
      domUpdates.hideAnswers();
      domUpdates.setFastRoundPlayer1();
      game.startFastRound();
      game.round.playerTimeOut();
      domUpdates.setFastRoundHeader();
    } else if (game.roundCount === 4) {
      console.log('fastRoundTimeOut round 4')
    } else if (game.roundCount === 5) {
      console.log('fastRoundTimeOut round 5')
    }
  }

  removeTimerText() {
    $('.container__round--timer').text('')
  } // needs to go to domUpdates

  playerRoundFeedback() {
    // Gives feedback to player for Fast Round
  }

  assignMultiplier(multiplier) {
    this.multiplier = multiplier;
  }
}

export default FastMoneyRound;