class Turn {
  constructor(answers, player) {
    this.answers = answers; //array of answer objects with correct surveyId
    this.player = player;
    this.answerArr = answers.map(answer => answer.answer.toLowerCase());
  }

  hasAnswer() {
    let index;
    let playerGuess = $('.player1__guess').val().toLowerCase();
    if(this.answerArr.includes(playerGuess)) {
    index = this.answerArr.findIndex(answer => answer === playerGuess);
    console.log(index)
    $(`#jq-answer${index}`).toggle('hidden');
    $(`#jq-dollar${index}`).toggle('hidden');
    }
  }
  

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