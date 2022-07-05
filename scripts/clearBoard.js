export default function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}
