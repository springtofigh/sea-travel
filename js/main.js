// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');
console.log(navLinks);

// Toggle navigation
const toggleMenu = () => {
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click' , toggleMenu);

// Add/remove header border bottom on scroll
const headerScrollEvent = () => {
    if (this.scrollY >= 30) {
        headerElement.classList.add('active-scroll');
    } else {
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll' , headerScrollEvent);

// Add selected link styles to the link clicked and close navigation when clicking the links
navLinks.forEach(link => link.addEventListener('click' , () => {
    navMobile.classList.remove('active');
    headerElement.classList.remove('active');

    let current = document.getElementsByClassName('current');
    current[0].className = current[0].className.replace(' current' , "");
    link.className += " current"
}));

// const navbar = document.querySelector('.navbar');
document.addEventListener('click', (event) => {
  if (!navMobile.contains(event.target)) {
    // click target is outside the Navbar
    navMobile.classList.remove('active');
    headerElement.classList.remove('active')
  }
});


// Scroll Reveal
const scroll = ScrollReveal({
        distance: '25px',
        duration: 2500
});

scroll.reveal(`.image-left , .plan-trip` , {
    origin:'left'
});

scroll.reveal(`.image-center` , {
    origin:'bottom'
});

scroll.reveal(`.image-right, .popular-destinations-data ,.showcase-data` ,{
    origin:'right'
});

scroll.reveal('.beach-data-wrapper', {
    origin:'bottom',
    interval: 250
});

scroll.reveal('.newsletter-container' , {
    origin:'top'
});

scroll.reveal(`.footer-container-inner > div, .footer-sperator , .copyright`, {
    origin:'bottom',
    interval: 250
});