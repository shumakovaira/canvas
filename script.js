const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

context.beginPath();
context.moveTo(400, 30);
context.lineTo(30, 360);
context.lineTo(770, 360);
context.closePath();
context.strokeStyle = '#30B1CB';
context.lineWidth = 10;
context.lineJoin = 'round';
context.fillStyle = '#84C7A6';
context.fill();
context.stroke();
