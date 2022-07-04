let selectedColor = getDefaultColor();

// ---------------------------------------------------------------|

function createPixels() {
  const pixelBoard = document.querySelector('#pixel-board');
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = selectedColor;
  });

  pixelBoard.appendChild(pixel);
}

for (let i = 0; i < 25; i++) createPixels();

// ---------------------------------------------------------------|

// Handle Color Palette
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
