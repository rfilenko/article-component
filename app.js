const body = document.querySelector('body');
const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
  body.classList.toggle('visible');
});
