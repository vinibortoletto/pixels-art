import getSelectedColor from './getSelectedColor.js';

export default function createPixels(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  let numberOfPixels = 0;

  // Set number of pixels
  if (number) numberOfPixels = number;
  else numberOfPixels = 5;

  // Create board
  for (let i = 0; i < numberOfPixels * numberOfPixels; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = getSelectedColor();
    });

    pixelBoard.appendChild(pixel);
  }

  // Style board grid
  pixelBoard.style.gridTemplateColumns = `repeat(${numberOfPixels}, 40px)`;
}
