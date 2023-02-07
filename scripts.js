const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
