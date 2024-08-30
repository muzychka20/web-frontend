let x = 70;
let y = 70;
let difference = 50;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.canvas.width = 500;
ctx.canvas.height = 500;

ctx.beginPath();
ctx.moveTo(x, y);

function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

document.getElementById("up").addEventListener("click", () => {
  console.log("up");
  y -= difference;
  drawLine(x, y);
});

document.getElementById("down").addEventListener("click", () => {
  console.log("down");
  y += difference;
  drawLine(x, y);
});

document.getElementById("right").addEventListener("click", () => {
  console.log("right");
  x += difference;
  drawLine(x, y);
});

document.getElementById("left").addEventListener("click", () => {
  console.log("left");
  x -= difference;
  drawLine(x, y);
});
