(function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const height = canvas.height;
  const width = canvas.width;

  function draw(start, end) {
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.stroke();
  }

  function drawRandomLine(currentPos, sizeX, sizeY) {
    const left = Math.random() >= 0.5;
    if (left) {
      draw(currentPos, { x: currentPos.x + sizeX, y: currentPos.y + sizeY });
    } else {
      draw({ x: currentPos.x + sizeX, y: currentPos.y }, { x: currentPos.x, y: currentPos.y + sizeY });
    }
  }

  const cellsWide = 20;
  const cellsTall = 20;

  const cellWidth = width / cellsWide;
  const cellHeight = height / cellsTall;

  for (let i = 0; i < cellsTall; i++) {
    for (let j = 0; j < cellsWide; j++) {
      const position = { x: j * cellWidth, y: i * cellHeight };
      drawRandomLine(position, cellWidth, cellHeight);
    }
  }
})();
