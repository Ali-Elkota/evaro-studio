
document.getElementById('Branding').addEventListener('click', function () {
  console.log('🚀 ~ file: home.js:2 ~ document.getElementById ~ click:');
  document.querySelector('.branding-section-ourWork h1').innerHTML = `
  Evaro and Owect: where brand storytelling meets mastery. From the first spark to the final product, our collaboration ensures brands with depth and impact.
  `;
  document
    .querySelector('.navbar-brand .black')
    .setAttribute('src', '../images/logo.svg');
});
