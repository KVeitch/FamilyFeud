class Round {
	constructor(survey, player1, player2) {
		this.survey = survey
		this.player1Name = player1
		this.player2Name = player2
	}

	getRoundWinner() {
		// determines highest player score
	}

	getSurveyAnswers() {
		//pass to turn an array sorted by # of responses
	}

	makeNewTurn() {
		// instantiates a new turn
	}

	removeCorrectAnswer() {
		// removes a correctly guessed answer from the answer surver - this.survey
	}
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}