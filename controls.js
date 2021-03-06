class Controls {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          if (this.player.x + this.player.width < 580) {
            this.player.moveRight();
          }
          break;
        case "ArrowLeft":
          if (this.player.x > 20) {
            this.player.moveLeft();
          }
          break;
        case "Space":
          this.game.bullets.push(
            new Bullet(
              this.game,
              this.player.x + this.player.width / 2,
              this.player.y
            )
          );
          break;
      }
    });
  }
}
