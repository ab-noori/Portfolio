const projectCarts = document.getElementById('project-carts');

const cartsData = [
  {
    id: '1',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
  {
    id: '2',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
  {
    id: '3',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
  {
    id: '4',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
  {
    id: '5',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
  {
    id: '6',
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur. Labore blanditiis adipisci facilis tenetur minima, dolores voluptatem earum deserunt, laudantium harum incidunt.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: 'images/project-cart-snapshoot.svg',
    demoLink: 'https://ab-noori.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ab-noori/My-Portfolio',
  },
];

function generatProjectCarts() {
  projectCarts.innerHTML = cartsData.map((x) => {
    const {
      id, title, desc, technogies, demoLink, sourceLink,
    } = x;
    return `
          <div class="recent-work-carts">
              <div class="cart-snapshoot">
                
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
              <img src="images/desktop-popup-image.png" id="popup-snapshoot-desktop" alt="desktop popup snapshoot">
              <img src="images/mobile-popup-image.svg" id="popup-snapshoot-mobile" alt="mobile popup snapshoot">
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
