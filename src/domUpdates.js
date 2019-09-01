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
    }
}

export default domUpdates 