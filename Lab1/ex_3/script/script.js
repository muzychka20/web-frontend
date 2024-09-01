let x = parseInt(prompt("Start x ="));
let y = parseInt(prompt("Start y = "));
let difference = parseInt(prompt("Step = "));

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.canvas.width = 500;
ctx.canvas.height = 500;

// Set the line properties
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "rgb(60, 131, 255)";

ctx.moveTo(x, y);

drawPoint(x, y);

// Draw the point
function drawPoint(x, y) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI); // Draw a circle to mark the point
  ctx.fill();
}

// Draw the line
function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Draw the line with point at the end
function draw(x, y) {
  drawLine(x, y);
  drawPoint(x, y);
}

document.getElementById("up").addEventListener("click", () => {
  if (y - difference > 0) {
    ctx.moveTo(x, y - 10);
    y -= difference;
    draw(x, y);
  }
});

document.getElementById("down").addEventListener("click", () => {
  if (y + difference < ctx.canvas.height) {
    ctx.moveTo(x, y + 10);
    y += difference;
    draw(x, y);
  }
});

document.getElementById("right").addEventListener("click", () => {
  if (x + difference < ctx.canvas.width) {
    ctx.moveTo(x + 10, y);
    x += difference;
    draw(x, y);
  }
});

document.getElementById("left").addEventListener("click", () => {
  if (x - difference > 0) {
    ctx.moveTo(x - 10, y);
    x -= difference;
    draw(x, y);
  }
});
