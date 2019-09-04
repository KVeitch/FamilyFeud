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
turn;

describe('GAME CLASS', function() {
  beforeEach(() => { 
    game = new Game(data)
    player1 = new Player('Kirk');
    player2 = new Player('Ayla');
    // round = new Round(game.surveys[0], player1.name, player2.name);
    // turn = new Turn(round.survey.answers, round.currentPlayer);
    // console.log(turn)
  });
  
  it('Should start with no surveys', function() {
    let game2 = new Game();
    expect(game2.surveys.length).to.equal(0)
  });
  
  it('Should get 3 surveys', function() {
    game.getSurveys();
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
    game.makePlayers('Kirk', 'Ayla')
    game.getSurveys();
    game.startRound();
    console.log('ROUND! ',Round)

    // expect(game.round).to.be.an.instanceOf(Round);
    console.log("hi: ", game.round instanceof Round)
    expect(game.round).to.be.an.instanceof(Round)
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