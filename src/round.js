import Turn from './turn';
import domUpdates from './domUpdates';

class Round {
  constructor(survey, player1, player2) {
    this.survey = survey;
    this.player1Name = player1;
    this.player2Name = player2;
    this.turn = {};
    this.currentPlayer = 1;
    this.answersRevealed = 0
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  getRoundWinner(game) {
    if (this.answersRevealed === 3) {
	  game.roundCount++
      let winner = game.player1.score > game.player2.score ? this.player1Name : this.player2Name;
      domUpdates.displayRoundWinner(winner)
    }
  }

  getSurveyAnswers() {
    //pass to turn an array sorted by # of responses
  }

  makeNewTurn() {
    this.turn = new Turn(this.survey.answers, this.currentPlayer)
  }

  removeCorrectAnswer() {
    // removes a correctly guessed answer from the answer surver - this.survey
  }
}

export default Round;
