window.onload = t;

function t() {
  const canvas = document.querySelector("canvas");

  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(100, 250);
  ctx.lineTo(550, 250);
  ctx.lineWidth = 4;
  ctx.stroke();
}
