let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const balls = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBall() {
  const ball = {
    position: getRandomInt(50, 590),
    speed: getRandomInt(2, 6),
    radius: getRandomInt(20, 40),
    color: `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`,
  };
  balls.push(ball);
}

function moveBall(ball) {
  if (ball.position + ball.radius > 640 || ball.position - ball.radius < 0) {
    ball.speed = -ball.speed;
  }
  ball.position += ball.speed;
}

function drawBall(ball) {
  context.beginPath();
  context.arc(ball.position, 50, ball.radius, 0, Math.PI * 2);
  context.fillStyle = ball.color;
  context.fill();
}

function draw() {
  context.clearRect(0, 0, 640, 480);

  for (const ball of balls) {
    moveBall(ball);
    drawBall(ball);
  }

  window.requestAnimationFrame(draw);
}

function handleCanvasClick() {
  createBall();
}

canvas.addEventListener("click", handleCanvasClick);

// Initial setup with a few balls
for (let i = 0; i < 3; i++) {
  createBall();
}

// Start the animation loop
window.requestAnimationFrame(draw);
