const tagButtons = document.querySelectorAll('.tags .tag');
const cardImages = document.querySelectorAll('.card-image');

tagButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const isActive = this.classList.contains('active');

    // Remove the "active" class from all tag buttons first
    tagButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    if (!isActive) {
      this.classList.add('active');
    }

    const selectedTag = isActive ? '' : this.innerText.toLowerCase();

    cardImages.forEach((card) => {
      const tagElement = card.querySelector('.tag');
      const tag = tagElement ? tagElement.innerText.toLowerCase() : '';
    });
  });
});
const button = document.querySelector('.navbar-toggler');

// Function to check if the button contains the "collapsed" class
//function checkButtonState() {
//  if (button.classList.contains('collapsed')) {
//    document.querySelector('header').classList.remove('mobile');
//    document.querySelector('#navbarScroll').classList.add('d-none');
//  } else {
//    document.querySelector('header').classList.add('mobile');
//    document.querySelector('#navbarScroll').classList.remove('d-none');
//  }
//  setTimeout(function () {
//    document.querySelector('#navbarScroll').classList.remove('d-none');
//  }, 0);
//}

button.addEventListener('click', checkButtonState);

document.getElementById('nav-item').addEventListener('click', function () {
  document.getElementById('services-menu').classList.toggle('shown');
});
