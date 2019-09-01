class Game {
  constructor(data) {
    this.data = data
    this.surveys = [];
  }

  getSurveys() {
    while (this.surveys.length < 3) {
      let id = Math.ceil(Math.random() * this.data.surveys.length);
      if (this.surveys.indexOf(id) === -1) surveys.push(id);
    }
    surveys = surveys.map(idNum => {
      let question = this.data.surveys.find(survey => survey.id === idNum);
      let answers =  this.data.answers.filter(answer => (answer.surveyId === idNum));
      return ({question: question.question, answers: answers});
    });
  
    this.surveys.forEach(survey => survey.answers
      .sort((answerA, answerB)=> answerB.respondents - answerA.respondents))
  }

  startRound() {}



}


if (typeof module !== 'undefined') {
  module.exports = Game;
}