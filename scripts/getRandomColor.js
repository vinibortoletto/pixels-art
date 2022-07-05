export default function getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 255);
  const colors = document.querySelectorAll('.color');

  for (let i = 1; i < colors.length; i += 1) {
    colors[
      i
    ].style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  }
}
