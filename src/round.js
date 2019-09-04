import Turn from './turn';
import domUpdates from './domUpdates';

class Round {
	constructor(survey, player1, player2) {
		this.survey = survey;
		this.player1Name = player1;
		this.player2Name = player2;
		this.turn = {};
		this.currentPlayer = 1;
		this.counter = 0; 
		this.thisArr = []
	}

	togglePlayer() {
		this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
	}

	getRoundWinner(game) {
		// determines highest player score
		if(this.thisArr.length === 3) {
			let winner = game.player1.score > game.player2.score ? this.player1Name : this.player2Name;
			console.log(winner);
			// return winner
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
