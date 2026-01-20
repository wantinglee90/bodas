/* ============================================
   SOFIA & GREGORY WEDDING WEBSITE
   Main JavaScript
   ============================================ */

// Configuration - UPDATE THESE VALUES
const CONFIG = {
  weddingDate: 'December 12, 2026 18:00:00',
  coupleNames: {
    person1: 'Wan Ting',
    person2: 'Jonathan'
  }
};


/* ============================================
   Thank you note
   ============================================ */

function showThankYou() {
  setTimeout(() => {
    document.querySelector('.rsvp-form').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
  }, 500);
}

/* ============================================
   COUNTDOWN TIMER
   ============================================ */
function updateCountdown() {
  const weddingDate = new Date(CONFIG.weddingDate).getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownEl = document.getElementById('countdown');

  if (!countdownEl) return;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
  } else {
    countdownEl.innerHTML = '<p class="married-message">We\'re Married!</p>';
  }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ============================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  });
}

/* ============================================
   FORM HANDLING
   ============================================ */
//function initFormHandling() {
//  const form = document.querySelector('.rsvp-form');
//
//  if (!form) return;
//
//  form.addEventListener('submit', function(e) {
//    e.preventDefault();
//
//    // Get form data
//    const formData = new FormData(form);
//    const data = Object.fromEntries(formData);
//
//    console.log('RSVP Submitted:', data);
//    form.reset();
//  });
//}

/* ============================================
   INITIALIZE ON DOM LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  // Start countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Initialize all features
  initScrollAnimations();
  initNavbarScroll();
  initSmoothScroll();
  initFormHandling();

  console.log('Wedding website initialized ✨');
});
