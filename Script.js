const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((links) => links.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
