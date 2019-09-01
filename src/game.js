const Round = require('../src/round');


class Game {
  constructor(data) {
    this.data = data;
    this.surveys = [];
    this.roundCount = 0;
    this.round;
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
    
    this.round = new Round(this.surveys[this.roundCount - 1]);
  }
  


}


if (typeof module !== 'undefined') {
  module.exports = Game;
}