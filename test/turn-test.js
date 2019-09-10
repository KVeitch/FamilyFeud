import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
import data from './sample-data-3surveys';
import Game from '../src/game';
import Turn from '../src/turn';
import domUpdates from '../src/domUpdates';
chai.use(spies);

let game, round, turn;

describe('TURN CLASS', function() {
  beforeEach(() => {
    chai.spy.on(Turn, ['hasAnswer', 'giveFeedback'], () => true)
    chai.spy.on(domUpdates, [''])
    global.$ = require('jquery');
    global.window = window;
    game = new Game(data);
    game.getSurveys();
    game.startRound();
    game.makePlayers('Kirk', 'Ayla');
    game.round.makeNewTurn();

    
    afterEach(() => {
      chai.spy.restore(domUpdates);
    });

  })
  
  describe('hasAnswer', () => {
    it.only('check to see if the hasAnswer method has been called', () => {
      
      game.round.turn.hasAnswer(round);
      expect(game.round.turn.hasAnswer).to.have.been.called(1);
      expect(game.round.turn.hasAnswer).to.to.have.been.called(2);
    });
  })
  
  describe('giveFeedback', function() {
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
  });
  
});

