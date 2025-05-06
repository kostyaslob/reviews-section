const heroButtons = document.querySelectorAll('.hero-button');
heroButtons.forEach(button => {
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
