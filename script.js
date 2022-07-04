let selectedColor = getDefaultColor();

function createPixels(number) {
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
      pixel.style.backgroundColor = selectedColor;
    });

    pixelBoard.appendChild(pixel);
  }

  // Style board grid
  pixelBoard.style.gridTemplateColumns = `repeat(${numberOfPixels}, 40px)`;
}
createPixels();

// ---------------------------------------------------------------|

function handleColorPalette() {
  const colors = document.querySelectorAll('.color');

  for (const color of colors) {
    color.addEventListener('click', () => {
      selectedColor = window.getComputedStyle(color, null).backgroundColor;

      for (const color of colors) {
        if (color.classList.contains('selected')) {
          color.classList.remove('selected');
        }
      }

      color.classList.add('selected');
    });
  }
}
handleColorPalette();

// ---------------------------------------------------------------|

function getDefaultColor() {
  let defaultColor = document.querySelector('.selected');
  defaultColor = window.getComputedStyle(defaultColor, null).backgroundColor;

  return defaultColor;
}

// ---------------------------------------------------------------|

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

const clearButton = document.querySelector('#clear-board');
clearButton.onclick = clearBoard;

// ---------------------------------------------------------------|

const generateBoardButton = document.querySelector('#generate-board');
generateBoardButton.onclick = setBoardSize;

function setBoardSize() {
  const input = document.querySelector('#board-size');

  // Check if input is empty
  if (input.value === '') return alert('Board inválido!');

  // Create board
  createPixels(input.value);
}
