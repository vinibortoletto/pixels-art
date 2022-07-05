import createPixels from './createPixels.js';

export default function setBoardSize() {
  const input = document.querySelector('#board-size');
  let numberOfPixels = input.value;

  // Check if input is empty
  if (numberOfPixels === '') return alert('Board inválido!');

  if (numberOfPixels < 5) numberOfPixels = 5;
  if (numberOfPixels > 50) numberOfPixels = 50;

  createPixels(numberOfPixels);
}
