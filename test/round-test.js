import chai from 'chai';
const expect = chai.expect;
const data = require('./survey-sample-data');
const Player = require('../src/player');
const Round = require('../src/round');
const Turn = require('../src/turn');


let 
player1, 
player2, 
round,
turn;

describe('ROUND CLASS', function() {
  beforeEach(() => { 
    player1 = new Player('Kirk');
    player2 = new Player('Ayla');
    round = new Round( );
    turn = new Turn(round.getSurveyAnswers(), player1.name, player2.name);
  });

  it('Should have a single survey', function() {
  	expect(round.survey).to.be.typeof('array')
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