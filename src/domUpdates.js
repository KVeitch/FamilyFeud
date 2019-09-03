//write anything to the dom it goes here
const domUpdates = {

  appendNames(game) {
    $('.jq-name1').text(game.player1.name);
    $('.jq-name2').text(game.player2.name);
  },

  appendSurvey(game) {
    $('#question-text').text(game.round.survey.question);
  }, 

  hideSplashPage() {
    $('.main__player').toggle('hidden');
  },

  appendAnswers(game) {
    console.log(game.round.turn.answers[0])
    $('#jq-answer0').text(game.round.turn.answers[0].answer)
    $('#jq-answer1').text(game.round.turn.answers[1].answer)
    $('#jq-answer2').text(game.round.turn.answers[2].answer)
  },

  revealAnswers(index) {
    $(`#jq-answer${index}`).toggle('hidden');
    $(`#jq-dollar${index}`).toggle('hidden');
  },

  badFeedback() {
    $('.round-feedback').append(
      `<h3>No!</h3>
            <p>You get nothing!</p>`
    )
    $('.round-feedback').toggle('none')
  },

  goodFeedback(answer) {
    $('.round-feedback').append(
      `<h3>Nice Job</h3>
            <p>You won $${answer.respondents} in CA$H MONEY!</p>
            <p>Roger has your $$$</p>
            <p>I think he's gonna keep it.</p>`
    )
    $('.round-feedback').toggle('none')
  },
  
  postScore(game, playerNumber) {
    $(`.player${playerNumber}__score`).text(game[`player${playerNumber}`].score);
  }

}

export default domUpdates 