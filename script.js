function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('open');
}

function setActive(element) {
  const links = document.querySelectorAll('.nav a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');

  // Close nav on mobile
  document.getElementById('navbar').classList.remove('open');
}
function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}
// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('open');
}

// Highlight active nav item and scroll
function setActive(element) {
  const links = document.querySelectorAll('.nav a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');

  // Scroll to the section smoothly
  const sectionId = element.getAttribute('href').substring(1);
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // Close mobile menu if open
  document.getElementById('navbar').classList.remove('open');
}

// Scroll for "Hire Me" button
function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

// Toggle mobile nav
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('open');
}

// Set active link and scroll to section
function setActive(element) {
  const links = document.querySelectorAll('.nav a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');

  const sectionId = element.getAttribute('href').substring(1);
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  document.getElementById('navbar').classList.remove('open');
}

// Scroll to content section from Hero
function scrollToContent() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

// Animate project cards on scroll
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.project-card');
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.style.transform = 'rotateY(0deg) scale(1.03)';
      card.style.transition = 'transform 0.6s ease-out';
    } else {
      card.style.transform = 'rotateY(5deg)';
    }
  });
});
// Smooth scroll for nav links (optional, already works with CSS)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: animate project section when it comes into view
const projectSection = document.querySelector('.projects-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      projectSection.classList.add('animate');
    }
  });
}, {
  threshold: 0.2
});

observer.observe(projectSection);
// Animate each skill card with delay
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});
// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission (demo only)
function sendMessage(event) {
  event.preventDefault();
  alert("Message sent successfully!");
  event.target.reset();
}
document.querySelectorAll('footer a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

