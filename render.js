var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

// Utility functions

function point(o) {
  ctx.fillRect(o.x-2,o.y-2,4,4);
};

function line(a,b) {
  ctx.beginPath();
  ctx.moveTo(a.x,a.y);
  ctx.lineTo(b.x,b.y);
  ctx.stroke();
};

function lines(points, closed) {
  ctx.beginPath();
  ctx.moveTo(points[0].x,points[0].y);
  for (var i = 1; i<points.length; i++)
    ctx.lineTo(points[i].x,points[i].y);
  if (closed) ctx.lineTo(points[0].x,points[0].y);
  ctx.stroke();
};

function fill(str) {
  ctx.fillStyle = str;
};

function stroke(str) {
  ctx.strokeStyle = str;
};


