export default function getDefaultColor() {
  let defaultColor = document.querySelector('.selected');
  defaultColor = window.getComputedStyle(defaultColor, null).backgroundColor;

  return defaultColor;
}
