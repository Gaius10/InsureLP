
const buttonElement = document.getElementById('mobile-nav-button');
const navLinksElement = document.getElementById('mobile-nav-links');

buttonElement.addEventListener('click', () => {
  navLinksElement.classList.toggle('hidden');
});
