export default function handleColorPalette() {
  const colors = document.querySelectorAll('.color');

  for (const color of colors) {
    color.addEventListener('click', () => {
      for (const color of colors) color.classList.remove('selected');
      color.classList.add('selected');
    });
  }
}
