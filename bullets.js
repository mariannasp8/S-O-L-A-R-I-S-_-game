class Bullet {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.radius = 3;
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
    this.sound = new Audio();
  }

  //to create the bullet:
  drawBullet = () => {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    /* this.game.ctx.fillRect(this.x, this.y, 2, 2) */
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
    //to move the bullet:
    this.y -= 3;
  };

  //BULLETS LIMITS (use this for establish the colisions):
  topBullet() {
    return this.y;
  }

  bottomBullet() {
    return this.y + this.height;
  }
  //PUT THE RADIUS BECAUSE THE BULLET IS A CIRCLE:
  rigthBullet() {
    return this.x + this.radius;
  }

  leftBullet() {
    return this.x;
  }

  /*  //SOUND - SHOOT (not sure yet):
    shootSound() {
      this.sound.src =
      "./docs/assets/sounds/get points-fairy-arcade-sparkle-866.wav";
    this.sound.loop = false;
    this.sound.play();
    } */

  //CONDITIONS FOR THE COLLISION:
  crashWith(alien) {
    return !(
      this.bottomBullet() < alien.topAlien() ||
      this.topBullet() > alien.bottomAlien() ||
      this.rigthBullet() < alien.leftAlien() ||
      this.leftBullet() > alien.rightAlien()
    );
  }
}


