const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navBranding = document.querySelector('.nav-branding');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBranding.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((links) => links.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
