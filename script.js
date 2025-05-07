// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message about ${service} services has been received. We'll contact you soon at ${email}.`);
    
    // Reset the form
    form.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
/*const images = [
    'images/image5.jpeg',
    'images/image7.jpeg',
    'images/image14.jpeg'
];
let currentIndex = 0;
const heroSection = document.getElementById('home');

function setBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    setBackground();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setBackground();
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 7000);

// Set initial background
setBackground();*/
const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Initial slide
        showSlide(currentSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);