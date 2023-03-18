const projectCarts = document.getElementById('project-carts');

const cartsData = [
  {
    id: '1',
    title: 'Salsal Development Group Website',
    desc: 'SalsalDevGroup Website is a platform to showcase the Salsal Developers group recent projects, maintain the information and history of the group recent projects, the short biography of each developer, and the link to recent projects. it will also provide the context for receiving proposals and contacting the clients in its future features.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p1.png',
    demoLink: 'https://ab-noori.github.io/SalsalDevGroup',
    sourceLink: 'https://github.com/ab-noori/SalsalDevGroup',
  },
  {
    id: '2',
    title: 'Awesom Books Project with ES6',
    desc: 'Awesome Books ES6 is a simple website that is created using ES6 syntax and modules to displays a list of books and allows you to add and remove books from that list.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p2.png',
    demoLink: 'https://ab-noori.github.io/AwesomeBooksES6',
    sourceLink: 'https://github.com/ab-noori/AwesomeBooksES6',
  },
  {
    id: '3',
    title: 'To Do List Project with Webpack',
    desc: 'In this project, we will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p3.png',
    demoLink: 'https://ab-noori.github.io/To-Do-List/dist',
    sourceLink: 'https://github.com/ab-noori/To-Do-List',
  },
  {
    id: '4',
    title: 'Online Book Store Project with ES6',
    desc: 'A simple book store with vanilla JavaScript. You can select multiple numbers of books. Adding them to cart, removing them from cart, decreasing and increasing the cart amount and calculating the total cost of the cart.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p4.png',
    demoLink: 'https://ab-noori.github.io/OnlineBookStore',
    sourceLink: 'https://github.com/ab-noori/OnlineBookStore',
  },
  {
    id: '5',
    title: 'Simple Webpack Joke Application',
    desc: ' A simple webpack joke application. but actually it is a frontend webpack environment boilerplate for building JavaScript applications, which I can later use as a starting point in my projects.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p5.png',
    demoLink: 'https://ab-noori.github.io/Webpack-Joke-App/dist',
    sourceLink: 'https://github.com/ab-noori/Webpack-Joke-App',
  },
  {
    id: '6',
    title: 'Awesom Books Project No Modules',
    desc: 'Awesome Books is a simple website that displays a list of books and allows you to add and remove books from that list.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/p6.png',
    demoLink: 'https://ab-noori.github.io/Awesome-Books',
    sourceLink: 'https://github.com/ab-noori/Awesome-Books',
  },
];

function generatProjectCarts() {
  projectCarts.innerHTML = cartsData.map((x) => {
    const {
      id, title, desc, technogies, img, demoLink, sourceLink,
    } = x;
    return `
          <div class="recent-work-carts">
              <div class="cart-snapshoot">
                <img src="${img}" width="100%" alt="desktop popup snapshoot">
              </div>
              <div class="cart-summary">
                  <h2 class="project-title">${title}</h2>
                  <ul class="project-tags">
                      <li >${technogies[0]}</li>
                      <li >${technogies[1]}</li>
                      <li >${technogies[2]}</li>
                      <li >${technogies[3]}</li>
                  </ul>
                  <button class="btn"  data-modal-target="#modal${id}">See Project</button>
              </div>
          </div>

          <div class="modal" id="modal${id}">
            <button data-modal-close-button class="modal-header-close-button"><img src="images/Icons/Icom-popup-close.svg" alt="Link icon"></button>
            <button data-modal-close-button class="modal-header-close-button-desktop"><img src="images/Icons/Icom-popup-close-desktop.svg" alt="Link icon"></button>
            <div class="popup-snapshoot">
              <img src="${img}" id="popup-snapshoot-desktop" alt="desktop popup snapshoot">
              <img src="${img}" width="100%" id="popup-snapshoot-mobile" alt="mobile popup snapshoot">
            </div>
            <div class="modal-header">
              <div class="modal-header-content">
                <div class="modal-header-title">${title}</div>
                <div class="modal-top-links">
                  <button class="btn"><a href="${demoLink}"> See Live <img src="images/Icons/Icon-see-live.svg" alt="Link icon"></a></button>
                  <button class="btn"><a href="${sourceLink}"> See Source <img src="images/Icons/Icon-see-source.svg" alt="GitHub icon"></a></button>
                </div>
              </div>  
              <ul class="project-tags">
                <li >${technogies[0]}</li>
                <li >${technogies[1]}</li>
                <li >${technogies[2]}</li>
                <li >${technogies[3]}</li>
              </ul>
            </div>
            <div class="modal-body">${desc}</div>
            <div class="modal-bottom-links">
              <button class="btn"><a href="${demoLink}"> See Live <img src="images/Icons/Icon-see-live.svg" alt="Link icon"></a></button>
              <button class="btn"><a href="${sourceLink}"> See Source <img src="images/Icons/Icon-see-source.svg" alt="GitHub icon"></a></button>
            </div>
          </div>
          <div id="overlay"></div> 
      `;
  }).join('');
}

generatProjectCarts();

const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navBranding = document.querySelector('.nav-branding');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBranding.classList.toggle('active');
});

document.querySelectorAll('.nav-link')
  .forEach((links) => links.addEventListener('click', () => {
    humburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// -----------------------------Modal Scripts---------------------------------------

const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-modal-close-button');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// -------------------------Form Validations-----------------------

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
  const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailRegex.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    const msg = document.querySelector('small');
    msg.innerText = 'The email should be in lowercase';
  }
});
