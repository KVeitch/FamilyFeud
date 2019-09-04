import chai from 'chai';
import domUpdates from '../src/domUpdates';
const expect = chai.expect;
// const data = require('./survey-sample-data');
import data from './sample-data-3surveys';
// const Game = require('../src/game');
// const Player = require('../src/player');
// const Round = require('../src/round');
// const Turn = require('../src/turn');
import Game from '../src/game';
import Player from '../src/player'
import Round from '../src/round';
import FastMoney from '../src/fastMoney'
import Turn from '../src/turn';
const spies = require('chai-spies');
chai.use(spies);
chai.spy.on(domUpdates, ['appendNames', 'appendSurvey', 'hideSplashPage', 'appendAnswers', 'revealAnswers', 'badFeedback', 'goodFeedback', 'removeFeedback', 'postScore', 'clearGuessInput', 'togglePlayerDisplays' ]);

let 
game,
player1, 
player2, 
round,
turn;

describe('GAME CLASS', function() {
  beforeEach(() => { 
    game = new Game(data)
    player1 = new Player('Kirk');
    player2 = new Player('Ayla');
    round = new Round();
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
  
  it('Should be able to instantiate a new round', () => {
    game.startRound();
    expect(game.round).to.be.an.instanceof(Round);
  });
  
  it('Should be able to instantiate player1 and player2', () => {
    game.makePlayers('Wilson', 'Susan');
    
    expect(game.player1.name).to.equal('Wilson');
    expect(game.player2.name).to.equal('Susan');
    expect(game.player1.score).to.equal(0);
    expect(game.player2.score).to.equal(0);
  });

  it('should fire one time', () => {

    domUpdates.appendNames(game);
    expect(domUpdates.appendNames(game)).to.be.called(1);
  })
})