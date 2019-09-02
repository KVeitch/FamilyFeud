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
    if(this.answerArr.includes(playerGuess)) {
      isCorrect = true;
      index = this.answerArr.findIndex(answer => answer === playerGuess);
    }
    return ({index:index, isCorrect:isCorrect})
  }
  

  giveFeedback(answer) {
    this.hasAnswer.index;
    if (this.hasAnswer.isCorrect) {
      domUpdates.goodFeedback(answer)
      // $('.round-feedback').append(
      //   `<h3>Nice Job</h3>
      //   <p>You won /$${answer.respondents} in CA$H MONEY!</p>
      //   <p>Roger has your $$$</p>
      //   <p>I think he's gonna keep it.</p>`
      )
    } else {
      domUpdates.badFeedback()
      // $('.round-feedback').append(
      //   `<h3>No!</h3>
      //   <p>You get nothing!</p>`
    };
  }
    // you're answer is wrong now CardiB is sad for you
    // you're right XX% of people 

  changePlayer(currentPlayer) {}
  //fire off hide show

  //multiplyer will need it change for fast money
  //currentplayer from round.currentPlayer
  increaseScore(multiplier=1, answer) {
    `player${this.player}`.score += multiplier * answer.respondents;
    //call domUpdates.postScore(this.player)
  }






}


if (typeof module !== 'undefined') {
  module.exports = Turn;
}