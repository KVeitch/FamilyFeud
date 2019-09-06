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
    $('#jq-answer0').text(`${game.round.turn.answers[0].answer}`);
    $('#jq-answer1').text(`${game.round.turn.answers[1].answer}`);
    $('#jq-answer2').text(`${game.round.turn.answers[2].answer}`);
    $('#jq-value0').text(`$${game.round.turn.answers[0].respondents}`)
    $('#jq-value1').text(`$${game.round.turn.answers[1].respondents}`)
    $('#jq-value2').text(`$${game.round.turn.answers[2].respondents}`)
  },

  revealAnswers(index) {
    $(`#jq-answer${index}`).toggle();
    $(`#jq-dollar${index}`).toggle();
    $(`#jq-value${index}`).toggle();
  },

  hideAnswers() {
    setTimeout(()=> {
      $('#jq-answer0').toggle();
      $('#jq-dollar0').toggle();
      $('#jq-value0').toggle();
      $('#jq-answer1').toggle();
      $('#jq-dollar1').toggle();
      $('#jq-value1').toggle();
      $('#jq-answer2').toggle();
      $('#jq-dollar2').toggle();
      $('#jq-value2').toggle();
    },3000)
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
  
  removeFeedback(game) {
    setTimeout(()=> {
      $('.round-feedback').toggle('none');
      $('.round-feedback').html('');
    }, 3000)
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
  },

  removeDarkenFilter() {
    $('.jq-filter').removeClass('darken')
  },

  updateRoundNumber(game) {
    $('#round-number').text(game.roundCount)
  },

  appendTimer() {
    // Appends timer to DOM
  },

  setFastRoundPlayer1() {
    $('.inputs__player1').removeClass('hidden');
    $('.inputs__player2').addClass('hidden');
  },

  setFastRoundHeader() {
    $('.container__round').html('F A $ T - R O U N D')
  },

}

export default domUpdates 