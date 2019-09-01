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
    }
}

export default domUpdates 