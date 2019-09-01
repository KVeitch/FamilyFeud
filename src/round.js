const Turn = require('./turn');

class Round {
	constructor(survey, player1, player2) {
		this.survey = survey;
		this.player1Name = player1;
		this.player2Name = player2;
		this.turn = {};
	}

	getRoundWinner() {
		// determines highest player score
	}

	getSurveyAnswers() {
		//pass to turn an array sorted by # of responses
	}

	makeNewTurn() {
	this.turn = new Turn(this.survey.answers, this.player1Name, this.player2Name)
	console.log(this.turn)
	}

	removeCorrectAnswer() {
		// removes a correctly guessed answer from the answer surver - this.survey
	}
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}