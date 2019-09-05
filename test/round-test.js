import chai from 'chai';
const expect = chai.expect;
const data = require('./survey-sample-data');
import Game from '../src/game'
// const Player = require('../src/player');
import Player from '../src/player';
// const Round = require('../src/round');
import Round from '../src/round';
// const Turn = require('../src/turn');
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
    // turn = new Turn(round.getSurveyAnswers(), player1.name, player2.name);
  });

  it.only('Should have a single survey', () => {
    game.getSurveys();
    game.startRound();
    console.log(round.survey)
  	expect(round.survey).to.have.a.lengthOf(1);
  });

  it('Should create its own turns', function() {
  	expect(turn.player1).to.equal('Kirk');
  	round.makeNewTurn();
  	expect(turn.player1).to.equal('?');
  });

  it('Should know how many answers are left', function() {

  });

  it('Should declare a winner when all correct answers are guessed', function() {

  });
});