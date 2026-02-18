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

// /* ============================================
//    NAVBAR LIGHTEN OVER DARK AREAS
//    ============================================ */

// const navbar = document.getElementById('navbar');

// const darkSections = document.querySelectorAll('#coming-soon, .rsvp-section');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       navbar.classList.add('light-text');
//     } else {
//       // Only remove if no other dark section is intersecting
//       const anyDarkVisible = [...darkSections].some(section => {
//         const rect = section.getBoundingClientRect();
//         return rect.top <= 80 && rect.bottom >= 0; // 80px = approx nav height
//       });
//       if (!anyDarkVisible) {
//         navbar.classList.remove('light-text');
//       }
//     }
//   });
// }, {
//   threshold: 0,
//   rootMargin: '-0px 0px -95% 0px' // triggers when section enters top ~5% of viewport (where nav is)
// });

// darkSections.forEach(section => observer.observe(section));

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
  updateCountdown();
  setInterval(updateCountdown, 1000);

  initScrollAnimations();
  initNavbarScroll();
  initSmoothScroll();
  //initFormHandling(); <-- remove this

  // Navbar dark section detection
  const navbar = document.getElementById('navbar');
  const darkSections = document.querySelectorAll('.dark-section');

  function updateNavColor() {
    const navBottom = navbar.getBoundingClientRect().bottom;
    const isDark = [...darkSections].some(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= navBottom && rect.bottom >= 0;
    });
    navbar.classList.toggle('light-text', isDark);
  }

  window.addEventListener('scroll', updateNavColor);
  updateNavColor(); // run once on load


  console.log('Wedding website initialized ✨');
});



