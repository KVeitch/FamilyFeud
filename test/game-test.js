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

  it('Should keep track of rounds', function() {
    expect(game.roundCount).to.equal(0);
    game.startRound();
    expect(game.roundCount).to.equal(1);
    game.startRound();
    expect(game.roundCount).to.equal(2);
  });
  
  it.only('Should be able to instantiate a new round', () => {
    game.startRound();
    expect(game.round).to.be.an.instanceof(Round);
    // game.startRound();
    // expect(round2).to.be.an.instanceof(Round);
    // game.startRound();
    // expect(round3).to.be.an.instanceof(Round);
  })
  



})