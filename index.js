const canvas = document.querySelector(".myCanvas");

//context
const ctx = canvas.getContext("2d");

//rect
ctx.fillStyle = "red";
ctx.fillRect(100, 50, 200, 100);

ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 50, 200, 100);

//path
ctx.fillStyle = "purple";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
ctx.lineTo(100, 400);
ctx.lineTo(100, 100);
ctx.fill();
ctx.closePath();

//arc
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

//arcTo
/* ctx.strokeStyle = "blue";
ctx.beginPath()
ctx.moveTo(300, 300)
ctx.arcTo(200, 400, 100, 250, 50)
ctx.stroke(); */

canvas.onmousemove = (e) => {
  console.log(e.layerX, e.layerY);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = 300;
  const y = 300;
  const x1 = e.layerX;
  const y1 = e.layerY;
  const x2 = 100;
  const y2 = 250;

  //line 1
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();

  //arcTo
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arcTo(x1, y1, x2, y2, 10);
  ctx.stroke();
};
