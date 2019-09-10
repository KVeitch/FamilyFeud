import Turn from './turn';
import domUpdates from './domUpdates';

class Round {
  constructor(survey, player1, player2, currentPlayer = 1) {
    this.survey = survey;
    this.player1Name = player1;
    this.player2Name = player2;
    this.turn = {};
    this.currentPlayer = currentPlayer;
    this.answersRevealed = 0;
    this.guessedAnswers = [];
  }

  togglePlayer(fnfire) {
    this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1
  }

  getRoundWinner(game) {
    let winner = game.player1.score > game.player2.score ? this.player1Name 
      : this.player2Name;
    domUpdates.displayRoundWinner(winner);
  }
  
  getGameWinner(game) {
    let winner =  game.player1.score > game.player2.score ? this.player1Name 
      : this.player2Name;
    return winner;
	}
	
  makeNewTurn() {
    this.turn = new Turn(this.survey.answers, this.currentPlayer)
  }

  addAnswerToGuessedAnswers(answer) {
    this.guessedAnswers.push(answer)
  }
}

export default Round;
