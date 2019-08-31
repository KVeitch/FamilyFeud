class Game {
  constructor(data) {
    this.data = data
  }

  getSurveys() {
    let surveys = []
    while(surveys.length < 3) {
      let id = Math.ceil(Math.random() * this.data.surveys.length);
      if(surveys.indexOf(id) === -1) surveys.push(id);
    }
    surveys = surveys.map(idNum => {
      let question = this.data.surveys.find(survey => survey.id===idNum);
      let answers =  this.data.answers.filter(answer=> {
        return (answer.surveyId === idNum);
      });
      return ({question: question.question, answers: answers});
    });
    this.surveys = surveys;
  }

  startRound() {}



}


if (typeof module !== 'undefined') {
  module.exports = Game;
}