import chai from 'chai';
const expect = chai.expect;
const data = require('./survey-sample-data');
import Game from '../src/game'
import Player from '../src/player';
import Round from '../src/round';
import Turn from '../src/turn';


let 
player1, 
player2, 
round,
turn,
game;

describe('ROUND CLASS', function() {
  beforeEach(() => { 
    game = new Game(data)
    player1 = new Player('Kirk');
    player2 = new Player('Ayla');
    round = new Round();
    turn = new Turn(round.getSurveyAnswers(), player1.name, player2.name);
  });

  it('Should have a single survey', () => {
    game.getSurveys();
    game.startRound();

    expect(game.round.survey).to.be.an('object');
    expect(game.round.survey.answers).to.have.a.lengthOf(3);
  });

  it('Should create its own turns', () => {
    game.makePlayers('Kirk', 'Ayla');
    game.getSurveys();
    game.startRound();
    game.round.makeNewTurn();

    expect(game.round.turn.player).to.equal(1);
    game.round.togglePlayer();
    game.round.makeNewTurn();
  	expect(game.round.turn.player).to.equal(2);
  });

  describe('getRoundWinner', () => {
    it('Should declare a winner when all correct answers are guessed', () => {
      
    });
  });
});