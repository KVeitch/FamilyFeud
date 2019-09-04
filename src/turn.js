import domUpdates from './domUpdates';
import Game from './game';


class Turn {
  constructor(answers, player) {
    this.answers = answers; //array of answer objects with correct surveyId
    this.player = player; //number 1 or 2
    this.answerArr = answers.map(answer => answer.answer.toLowerCase()); 
  }

  hasAnswer(round) {
    let index; 
    let isCorrect = false;
    let playerGuess = $('.player1__guess').val() ? $('.player1__guess').val().toLowerCase() : $('.player2__guess').val().toLowerCase();
    if (this.answerArr.includes(playerGuess)) {
      isCorrect = true;
      index = this.answerArr.findIndex(answer => answer === playerGuess);
      round.thisArr.push('bob');
      console.log(round.thisArr.length)
    }
    return {isCorrect:isCorrect, answer:this.answers[index], index:index};
  }
  
  giveFeedback(answerObj, game) {
    if(game.round.thisArr.length === 3){
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

