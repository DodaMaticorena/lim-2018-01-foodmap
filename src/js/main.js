const firstView = () => {
  document.querySelector('#splash-view').style.display = 'none';
  document.querySelector('.container').style.display = 'flex';
}
window.onload = setTimeout(firstView, 2000);