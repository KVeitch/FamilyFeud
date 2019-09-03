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
    let playerGuess = $('.player1__guess').val().toLowerCase();
    if (this.answerArr.includes(playerGuess)) {
      isCorrect = true;
      index = this.answerArr.findIndex(answer => answer === playerGuess)
      this.answerArr.splice([index], 1);
    }
    this.giveFeedback(isCorrect, this.answers[index])
    return ({index, isCorrect})
  }
  
  
  giveFeedback(isCorrect, answer) {
    if (this.answerArr.length === 1 ) {
      isCorrect ? domUpdates.goodFeedback(answer) : domUpdates.badFeedback();
    }

  }


  changePlayer(currentPlayer) {}
  //fire off hide show

  //multiplyer will need it change for fast money
  //currentplayer from round.currentPlayer
  increaseScore(multiplier = 1, answer) {
    `player${this.player}`.score += multiplier * answer.respondents;
    //call domUpdates.postScore(this.player)
  }

}

export default Turn;

