document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('[data-open-btn]'); 
  const closeMenuBtn = document.querySelector('[data-close-btn]');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
    });

    closeMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  } 
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal-window="true"]');
  const acceptButton = document.querySelector('[data-accept-cookies="true"]');
  const declineButton = document.querySelector('[data-decline-cookies="true"]');

  
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    modal.classList.add('is-open');
  }


  acceptButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    modal.classList.remove('is-open');
  });

 
  declineButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    modal.classList.remove('is-open');
  });
});


 
  const headerButtons = document.querySelectorAll('.header-button');

  headerButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.classList.add('active');
    });

    button.addEventListener('mouseup', () => {
      setTimeout(() => {
        button.classList.remove('active');
      }, 3000); 
    });

    button.addEventListener('mouseleave', () => {
      button.classList.remove('active');
    });
  });

   