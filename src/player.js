class Player {
  constructor(name, id) {
    this.name = name;
    this.id = `player${id}`;
    this.score = 0;
  }

  updateScore(points) {
    this.score += points;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Player;
}