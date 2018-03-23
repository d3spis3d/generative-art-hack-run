(function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const height = canvas.height;
  const width = canvas.width;

  function drawBezier(start, cp1, cp2, end) {
    context.moveTo(start.x, start.y);
    context.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    context.stroke();
  }

  function drawRandomLine(currentPos, sizeX, sizeY) {
    const up = Math.random() >= 0.5;
    if (up) {
      drawBezier(
        { x: currentPos.x, y: currentPos.y },
        { x: currentPos.x + sizeX / 2, y: currentPos.y },
        { x: currentPos.x + sizeX / 2, y: currentPos.y + sizeY },
        { x: currentPos.x + sizeX, y: currentPos.y + sizeY }
      );
    } else {
      drawBezier(
        { x: currentPos.x + sizeX, y: currentPos.y },
        { x: currentPos.x + sizeX / 2, y: currentPos.y },
        { x: currentPos.x + sizeX / 2, y: currentPos.y + sizeY },
        { x: currentPos.x, y: currentPos.y + sizeY }
      );
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

  canvas.imageSmoothingEnabled = true;
})();
