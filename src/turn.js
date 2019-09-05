import domUpdates from './domUpdates';
import Game from './game';


class Turn {
  constructor(answers, player) {
    this.answers = answers; //array of answer objects with correct surveyId
    this.player = player; //number 1 or 2
    this.surveyAnswers = answers.map(answer => answer.answer.toLowerCase()); 
  }

  hasAnswer(round) {
    let index; 
    let isCorrect = false;
    let playerGuess = $('.player1__guess').val() ? $('.player1__guess').val().toLowerCase() : $('.player2__guess').val().toLowerCase();
    if (this.surveyAnswers.includes(playerGuess)) {
      isCorrect = true;
      index = this.surveyAnswers.findIndex(answer => answer === playerGuess);
      round.answersRevealed++;
    }
    return {isCorrect, answer: this.answers[index], index};
  }
  
  giveFeedback(answerObj, game) {
    if (game.round.answersRevealed === 3) {
      game.round.getRoundWinner(game);
    } else {
      answerObj.isCorrect ? domUpdates.goodFeedback(answerObj.answer) : domUpdates.badFeedback();
    }
  }

  increaseScore(answer, player, multiplier = 1) {
    answer.answer === undefined ? null : player.score = player.score + multiplier * answer.answer.respondents
  }
}

export default Turn;

