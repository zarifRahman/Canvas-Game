const canvas = document.querySelector('canvas');

// what kind of context
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(){
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
}

// set canvas position in center
const x = canvas.width / 2;
const y = canvas.width / 2;

const player = new Player(x, y, 30, 'blue');
player.draw();
console.log(player);