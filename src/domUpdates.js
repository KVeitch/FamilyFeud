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
<<<<<<< HEAD
=======
    // console.log(game.round.turn.answers[0].respondents)
>>>>>>> master
    $('#jq-answer0').text(`${game.round.turn.answers[0].answer}`);
    $('#jq-answer1').text(`${game.round.turn.answers[1].answer}`);
    $('#jq-answer2').text(`${game.round.turn.answers[2].answer}`);
    $('#jq-value0').text(`$${game.round.turn.answers[0].respondents}`)
    $('#jq-value1').text(`$${game.round.turn.answers[1].respondents}`)
    $('#jq-value2').text(`$${game.round.turn.answers[2].respondents}`)
  },

  revealAnswers(index) {
    // console.log('reveal: ', index)
    $(`#jq-answer${index}`).toggle('hidden');
    $(`#jq-dollar${index}`).toggle('hidden');
    $(`#jq-value${index}`).toggle('hidden');
  },

  badFeedback() {
    $('.round-feedback').append(
      `<div class='feedback__style'>
          <h3>No!</h3>
          <p class='bad__feedback2'>You get nothing!</p>
        </div>`
    )
    $('.round-feedback').toggle('none')
  },

  goodFeedback(answer) {
    $('.round-feedback').append(
      `<div class='feedback__style'>
          <h3>$$$ Nice Job $$$</h3>
          <p>You won $${answer.respondents} in CA$H MONEY!</p>
        </div>`
    )
    $('.round-feedback').toggle('none')
  },
  
  removeFeedback() {
    setTimeout(()=> {
      $('.round-feedback').toggle('none');
      $('.round-feedback').html('');
    },3000)
  },

  postScore(game, playerNumber) {
    $(`.player${playerNumber}__score`).text(`$ ${game[`player${playerNumber}`].score}`);
  },

  clearGuessInput() {
    $('.jq-guess').val('');
  },

  togglePlayerDisplays() {
    $('.inputs__player1').toggleClass('hidden');
    $('.inputs__player2').toggleClass('hidden');
  },

  displayRoundWinner(winner) {
    $('.round-feedback').append(
      `<div class='feedback__style'>
          <h3>$$$ Nice Job ${winner} $$$</h3>
          <p> You've won this round! </p>
      </div>`
    )
    $('.round-feedback').toggle('none')
  }
}

export default domUpdates 