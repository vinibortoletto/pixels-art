// Create Pixel Board ---------------------------------|
const pixelBoard = document.querySelector('#pixel-board');

function createPixels() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

for (let i = 0; i < 25; i++) createPixels();
