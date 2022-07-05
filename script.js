import createPixels from './scripts/createPixels.js';
import handleColorPalette from './scripts/handleColorPalette.js';
import clearBoard from './scripts/clearBoard.js';
import setBoardSize from './scripts/setBoardSize.js';
import getRandomColor from './scripts/getRandomColor.js';

createPixels();
handleColorPalette();
getRandomColor();

// ---------------------------------------------------------------|

const clearButton = document.querySelector('#clear-board');
clearButton.onclick = clearBoard;

// ---------------------------------------------------------------|

const generateBoardButton = document.querySelector('#generate-board');
generateBoardButton.onclick = setBoardSize;
