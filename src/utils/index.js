function setAlpha(color, value) {
  const div = document.createElement('div');
  div.style.color = color;
  div.style.display = 'none';
  document.body.appendChild(div);
  const colorStr = getComputedStyle(div).color;
  document.body.removeChild(div);
  const rgb = /\((.*)\)/.exec(colorStr)[1];
  return 'rgba(' + rgb + ', ' + value + ')';
}

export { setAlpha };