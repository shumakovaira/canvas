const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

context.beginPath();
context.moveTo(140, 20);
context.lineTo(30, 150);
context.lineTo(250, 150);
context.closePath();
context.strokeStyle = '#30B1CB';
context.lineWidth = 10;
context.lineJoin = 'round';
context.fillStyle = '#b8f2e6';
context.fill();
context.stroke();

var centerX = 550;
var centerY = 90;
var radius = 80;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = '#b8c0ff';
context.fill();
context.lineWidth = 10;
context.strokeStyle = '#0d3b66';
context.stroke();

context.beginPath();
context.rect(30, 260, 240, 120);
context.fillStyle = '#87c38f';
context.fill();
context.lineWidth = 7;
context.strokeStyle = '#226f54';
context.stroke();

context.beginPath();
context.arc(550, 260, 100, 0, Math.PI, false);
context.closePath();
context.lineWidth = 5;
context.fillStyle = '#f5ebe0';
context.fill();
context.strokeStyle = '#d5bdaf';
context.stroke();


context.beginPath();
context.moveTo(260, 230);
context.quadraticCurveTo(290, 0, 460, 220);
context.lineWidth = 10;
context.lineCap = 'round';
context.strokeStyle = '#c32f27';
context.stroke();
