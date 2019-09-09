import Round from './round'
import domUpdates from './domUpdates';

class FastMoneyRound extends Round {
  constructor(survey, player1, player2, currentPlayer) {
    super(survey, player1, player2, currentPlayer)
    this.timerId = 0;
    this.multiplier = 1;
  }

  startTime(game) {
    let timeLeft = 5;
    game.round.timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(game.round.timerId);
        game.round.removeTimerText();
        game.roundCount === 4 ? domUpdates.displayGameWinner(game.round.getGameWinner(game)) : (startRound3or4(), hideAnswers()) ;
      } else {
        $('.container__round--timer').text(timeLeft + ' seconds remaining');
        timeLeft--;
      }
    }

    function stopTimer() {
      clearInterval(game.round.timerId);
      game.round.removeTimerText();
    }
    
    window.countdown = countdown;
    window.stopTimer = stopTimer; 
  }

  // fastRoundTimeout(game) {
  //     domUpdates.hideAnswers();
  //     game.startFastRound();
  //     domUpdates.appendNames(game)
  //     game.round.playerTimeOut();
  //     domUpdates.setFastRoundHeader();
  // }

  removeTimerText() {
    $('.container__round--timer').text('')
  } // needs to go to domUpdates

  assignMultiplier(multiplier) {
    this.multiplier = multiplier;
  }
}

export default FastMoneyRound;