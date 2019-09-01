class Turn {
  constructor(answers, player1name, player2name) {
    this.answers = answers; //array of answer objects with correct surveyId
    this.player1 = player1name; //string name only
    this.player2 = player2name //string name only
  }

  hasAnswer(guess) {}
  //is the answer on the survey

  giveFeedback(boulean) {}
    // you're answer is wrong now CardiB is sad for you
    // you're right XX% of people 

  changePlayer(currentPlayer) {}
  //fire off hide show

  increaseScore(multiplier=1) {}
  //multiplyer will need it change for fast money






}


if (typeof module !== 'undefined') {
  module.exports = Turn;
}