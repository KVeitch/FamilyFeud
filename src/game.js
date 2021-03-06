import Round from './round';
import Player from '../src/player';
import FastMoneyRound from './fastMoneyRound';

class Game {
  constructor(data) {
    this.data = data;
    this.surveys = [];
    this.round = {};
    this.roundCount = 1;
    this.player1 = {};
    this.player2 = {};
  }

  getSurveys() {
    while (this.surveys.length < 4) {
      let id = Math.ceil(Math.random() * this.data.surveys.length);
      if (this.surveys.indexOf(id) === -1) this.surveys.push(id);
    }

    this.surveys = this.surveys.map(idNum => {
      let question = this.data.surveys.find(survey => survey.id === idNum);
      let answers = this.data.answers.filter(
        answer => answer.surveyId === idNum
      );
      return { question: question.question, answers: answers };
    });

    this.surveys.forEach(survey =>
      survey.answers.sort((ansA, ansB) => ansB.respondents - ansA.respondents)
    );
  }

  startRound() {
    this.round = new Round(
      this.surveys[this.roundCount - 1],
      this.player1.name,
      this.player2.name,
      this.round.currentPlayer
    );
  }

  startFastRound() {
    this.round = new FastMoneyRound(
      this.surveys[this.roundCount - 1],
      this.player1.name,
      this.player2.name,
      this.round.currentPlayer
    );
    this.round.makeNewTurn();
  }
    
  makePlayers(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }
}

export default Game;
