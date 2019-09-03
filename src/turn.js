import domUpdates from './domUpdates';


class Turn {
  constructor(answers, player) {
    this.answers = answers; //array of answer objects with correct surveyId
    this.player = player; //number 1 or 2
    this.answerArr = answers.map(answer => answer.answer.toLowerCase());
  }

  hasAnswer() {
    let index; 
    let isCorrect = false;
    let playerGuess = $('.player1__guess').val() ? $('.player1__guess').val().toLowerCase() : $('.player2__guess').val().toLowerCase();

    if (this.answerArr.includes(playerGuess)) {
      isCorrect = true;
      index = this.answerArr.findIndex(answer => answer === playerGuess)
      this.answerArr.splice([index], 1);
    }
    return {isCorrect:isCorrect, answer:this.answers[index]};
  }
  
  giveFeedback(answerObj) {
    answerObj.isCorrect ? domUpdates.goodFeedback(answerObj.answer) : domUpdates.badFeedback();
  }

  increaseScore(answer, player, multiplier = 1) {
    console.log(answer.answer)
    player.score = player.score + multiplier * answer.answer.respondents
  }

}

export default Turn;

