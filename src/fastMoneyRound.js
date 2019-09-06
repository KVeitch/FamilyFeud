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
      } else {
        $('.container__round--timer').text(timeLeft + ' seconds remaining');
        timeLeft--;
      }
    }
  }

  playerTimeOut() {
    console.log('times run out lil bitch');
    $('.container__round--timer').text('')
  }

  playerRoundFeedback() {
    // Gives feedback to player for Fast Round
  }

}

export default FastMoneyRound;