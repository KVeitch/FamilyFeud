import chai from 'chai';
const expect = chai.expect;
const Player = require('../src/player');
let player1, player2

describe('PLAYER CLASS', function() {
  beforeEach(() => {
    player1 = new Player('Tina', 1 );
    player2 = new Player('Mildred', 2 );
  })

  it.only('should have a name', function() {
    expect(player1.name).to.equal('Tina');
    expect(player2.name).to.equal('Mildred');
  });

  it.only('should have an initial score of 0', function() {
    expect(player1.score).to.equal(0);
    expect(player2.score).to.equal(0);
  });

  it.only('should be able to update its score', function() {
    expect(player2.score).to.equal(0);
    player2.updateScore(35)
    expect(player2.score).to.equal(35);

  });

});