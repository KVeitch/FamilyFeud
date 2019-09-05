import Round from './Round';
import Player from '../src/player'
import FastMoney from '../src/fastMoney'
import domUpdates from './domUpdates';
// const FastMoney = require('../src/fastMoney');
// const Player = require('../src/player');


class Game {
  constructor(data) {
    this.data = data;
    this.surveys = [];
    this.round = {};
    this.roundCount = 0;
    this.player1 = {};
    this.player2 = {};
  }

  getSurveys() {
    while (this.surveys.length < 3) {
      let id = Math.ceil(Math.random() * this.data.surveys.length);
      if (this.surveys.indexOf(id) === -1) this.surveys.push(id);
    }

    this.surveys = this.surveys.map(idNum => {
      let question = this.data.surveys.find(survey => survey.id === idNum);
      let answers =  this.data.answers.filter(answer => (answer.surveyId === idNum));
      return ({question: question.question, answers: answers});
    });
  
    this.surveys.forEach(survey => survey.answers
      .sort((answerA, answerB)=> answerB.respondents - answerA.respondents))
  }

  startRound() {
    this.roundCount++;
    if(this.roundCount === 3) {
      this.round = new FastMoney(this.surveys[2]);
    } else {
      this.round = new Round(this.surveys[this.roundCount - 1], this.player1.name, this.player2.name);
    }
  }

  continueGame() {
    domUpdates.hideAnswers();
    this.round = new Round(this.surveys[this.roundCount - 1], this.player1.name, this.player2.name);
  }

  makePlayers(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

}

export default Game;