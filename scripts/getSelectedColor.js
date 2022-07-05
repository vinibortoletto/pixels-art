export default function getSelectedColor() {
  let selectedColor = document.querySelector('.selected');
  selectedColor = window.getComputedStyle(selectedColor, null).backgroundColor;

  return selectedColor;
}
