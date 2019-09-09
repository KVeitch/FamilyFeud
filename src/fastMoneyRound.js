import Round from './round'
// import Game from './game';

class FastMoneyRound extends Round {
  constructor(survey, player1, player2, currentPlayer) {
    super(survey, player1, player2, currentPlayer)
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

    function stopTimer() {
      clearInterval(game.round.timerId);
      game.round.removeTimerText();
    }
    
    window.countdown = countdown;
    window.stopTimer = stopTimer; 
  }

  fastRoundTimeout(game) {
    if (game.roundCount === 3) {
      domUpdates.hideAnswers();
      game.startFastRound();
      domUpdates.appendNames(game)
      game.round.playerTimeOut();
      domUpdates.setFastRoundHeader();
    } else if (game.roundCount === 4) {
      console.log('fastRoundTimeOut round 4')
    }
  }

  removeTimerText() {
    $('.container__round--timer').text('')
  } // needs to go to domUpdates

  assignMultiplier(multiplier) {
    this.multiplier = multiplier;
  }
}

export default FastMoneyRound;