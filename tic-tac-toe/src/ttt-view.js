class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
    this.bindEvents()
    this.handleClick = this.handleClick.bind(this)
  }

  setupBoard() {
    const ul = document.createElement("ul");
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const li = document.createElement("li");
        li.dataset.pos = JSON.stringify([row, col])
        ul.append(li);
      }
    }
    this.el.append(ul)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
