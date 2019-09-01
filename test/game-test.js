import chai from 'chai';
const expect = chai.expect;
const data = require('./survey-sample-data');
const Game = require('../src/game');
const Player = require('../src/player');
const Round = require('../src/round');
const Turn = require('../src/turn');

let 
game,
player1, 
player2, 
round,
turn;

describe('GAME CLASS', function() {
  beforeEach(() => { 
    game = new Game(data)
    player1 = new Player('Kirk', 1);
    player2 = new Player('Ayla', 2);
    round = new Round( );
    turn = new Turn(round.getSurveyAnswers(), player1.name, player2.name);
  });

  it('Should start with no surveys', function() {
    expect(game.surveys.length).to.equal(0)
  });

  it('Should get 3 surveys', function() {
    game.getSurveys()
    expect(game.surveys.length).to.equal(3)
  });

  
  



})