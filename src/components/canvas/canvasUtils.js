export const setupGrid = (ctx, width, height) => {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const gridSize = 20;
  ctx.strokeStyle = "#f0f0f0";
  ctx.lineWidth = 1;

  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
