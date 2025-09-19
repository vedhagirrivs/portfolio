let progress = document.querySelector(".progress");
let loadingScreen = document.getElementById("loading");
let mainContent = document.getElementById("main-content");

let width = 0;
let loading = setInterval(() => {
  if (width >= 100) {
    clearInterval(loading);
    // Fade out loading screen
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto"; // enable scrolling
      mainContent.style.display = "block";
    }, 800);
  } else {
    width++;
    progress.style.width = width + "%";
  }
}, 30); // speed of loading (30ms per step)
function showIntro(skill) {
  const introBox = document.getElementById("skill-intro");
  let introText = "";

  switch(skill) {
    case "html":
      introText = "HTML5 is the standard markup language for structuring web pages. It defines the content and layout of a webpage.";
      break;
    case "css":
      introText = "CSS3 is used to style HTML elements. It controls colors, layouts, fonts, and responsiveness of websites.";
      break;
    case "js":
      introText = "JavaScript is a programming language that adds interactivity to websites, making them dynamic and engaging.";
      break;
    case "react":
      introText = "React.js is a popular JavaScript library for building fast and reusable UI components for modern web applications.";
      break;
    case "python":
      introText = "Python is a powerful, high-level programming language known for its simplicity. It’s widely used in web development, data science, AI, and automation.";
      break;
    default:
      introText = "Click on a skill logo to see details.";
  }

  introBox.innerHTML = `<p>${introText}</p>`;
}
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple form feedback
  const name = document.getElementById('name').value;
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

  // Reset form
  form.reset();
});
