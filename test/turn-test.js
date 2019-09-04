import chai from 'chai';
const expect = chai.expect;
import data from './sample-data-3surveys';
// const data = require('./test/sample-data-3survey');
import Game from '../src/game';
import Player from '../src/player'
import Round from '../src/round';
import Turn from '../src/turn';
// const Game = require('../src/game');
// const Player = require('../src/player');
// const Round = require('../src/round');
// const Turn = require('../src/turn');


let game, player1, player2, round, turn;

describe('TURN CLASS', function() {
  beforeEach(() => {
    console.log(Game)
    game = new Game(data);
    game.getSurveys();
    round = new Round(game.surveys[0]);
    player1 = new Player('Kirk');
    player2 = new Player('Ayla');
    turn = new Turn(round.survey.answers, round.currentPlayer);
  })

  it('check to see if the answers to a survey contain the player answer', function() {
    expect(turn.hasAnswer(guess1)).to.equal(false);
    expect(turn.hasAnswer(guess2)).to.equal(true);
  });
  
  describe('.giveFeedback', function() {
    it('should let player know if they were right or wrong', function() {
      expect(turn.giveFeedback(boo)).to.equal('feedback');
      expect(turn.giveFeedback(boo2)).to.equal('feedback');
    });

    it('when a play is correct it should tell the the survey result for their answer', function() {
      expect(turn.giveFeedback(boo1)).to.equal('feedback');
    });
  })

  it('it should change active player after an answer is given', function() {
    expect('player1.classList.includes()').to.equal(true);
    expect('player2.classList.includes()').to.equal(false);

    turn.changePlayer();

    expect('player1.classList.includes()').to.equal(false);
    expect('player2.classList.includes()').to.equal(true);
  });

  describe('.increaseScore()', function() {
    it('should increase the score by the amount of people that gave the same answer', function() {
      expect(true).to.equal(true);
    });

    it('should increase the score by the amount of people that gave the same answer multiplied by the multiplyer', function() {
      expect(true).to.equal(true);
    });
  })
});

