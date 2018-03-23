(function () {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const height = canvas.height;
  const width = canvas.width;


  const cellsWide = 60;
  const cellsTall = 60;

  const cellWidth = width / cellsWide;
  const cellHeight = 75//height / cellsTall;

  const lines = [];

  for (let i = 1; i < cellsTall; i++) {
    const line = [];

    for (let j = 0; j <= cellsWide; j++) {
      const random = Math.random();
      const displacement = 10 * (random * j / cellsWide + random * i / cellsTall);
      const position = { x: j * cellWidth, y: Math.log(i*i) * cellHeight + cellHeight / 2 + displacement};
      line.push(position);
    }

    console.log(line)
    lines.push(line);
  }

  lines.forEach(line => {
    const first = line.unshift();
    context.beginPath();
    context.moveTo(first.x, first.y);
    line.forEach(point => {
      context.lineTo(point.x, point.y);
    });
    context.stroke();
  });
})();
