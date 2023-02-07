const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navlink=document.querySelector('.nav-item')
humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
navlink.addEventListener ('click', () =>{
   navMenu.style.display = 'none';
   

})
