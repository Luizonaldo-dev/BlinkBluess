const scrollToFooterButton = document.getElementById('scroll-to-footer');
const footerElement = document.getElementById('footer');

scrollToFooterButton.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default link behavior
  footerElement.scrollIntoView({ behavior: 'smooth' });
});