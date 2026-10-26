const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-feedback').textContent =
    'This is a portfolio demo. No information was sent or stored. Before launch, connect an approved form destination and test it.';
});
