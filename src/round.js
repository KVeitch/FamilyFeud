import Turn from './Turn';

class Round {
	constructor(survey, player1, player2) {
		this.survey = survey;
		this.player1Name = player1;
		this.player2Name = player2;
		this.turn = {};
		this.currentPlayer = 1;
	}
	togglePlayer() {
		this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
	}

	getRoundWinner() {
		// determines highest player score
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
