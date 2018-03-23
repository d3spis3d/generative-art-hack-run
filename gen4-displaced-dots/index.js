(function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const height = canvas.height;
  const width = canvas.width;

  function displace(x, y) {
    return Math.log(x) * Math.log(y);
  }

  function drawDisplacedDot(centre, height) {
    const displacement = displace(centre.x, centre.y) * Math.random() * (centre.x + centre.y) * 2 / width;
    context.beginPath()
    context.arc(centre.x, centre.y + displacement, 0.5, 0, 2 * Math.PI, false);
    context.fill();
  }

  const cellsWide = 600;
  const cellsTall = 600;

  const cellWidth = width / cellsWide;
  const cellHeight = height / cellsTall;

  for (let i = -5; i < cellsTall; i++) {
    for (let j = 0; j < cellsWide; j++) {
      const position = { x: j * cellWidth + cellWidth / 2, y: i * cellHeight + cellHeight / 2 };
      drawDisplacedDot(position, cellHeight);
    }
    console.log('row done');
  }

  canvas.imageSmoothingEnabled = true;
})();
