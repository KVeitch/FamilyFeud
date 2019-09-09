import domUpdates from './domUpdates';


class Turn {
  constructor(answers, player) {
    this.answers = answers;
    this.player = player;
    this.surveyAnswers = answers.map(answer => answer.answer.toLowerCase()); 
  }

  hasAnswer(round) {
    let index; 
    let isCorrect = false;
    let playerGuess = $('.player1__guess').val() ? $('.player1__guess').val().toLowerCase() 
      : $('.player2__guess').val().toLowerCase();
    if (this.surveyAnswers.includes(playerGuess) 
      && !round.guessedAnswers.includes(playerGuess)) {
      isCorrect = true;
      index = this.surveyAnswers.findIndex(answer => answer === playerGuess);
      round.answersRevealed++;
      round.addAnswerToGuessedAnswers(playerGuess)
    }
    return {isCorrect, answer: this.answers[index], index};
  }
  
  giveFeedback(answerObj, game) {
    if (game.round.answersRevealed === 3) {
      game.round.getRoundWinner(game);
    } else {
      answerObj.isCorrect ? domUpdates.goodFeedback(answerObj.answer) 
        : domUpdates.badFeedback();
    }
  }

  increaseScore(answer, player, multiplier = 1) {
    answer.answer === undefined ? null : 
      player.updateScore( parseInt(multiplier) * parseInt(answer.answer.respondents))
  }
}

export default Turn;

