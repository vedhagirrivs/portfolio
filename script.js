function navigate(section) {
  console.log("Navigating to " + section);

  // Optional: scroll smoothly to section if it exists
  const element = document.getElementById(section.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function exploreProjects() {
  console.log("Exploring Projects...");
  // Scroll to Projects section if available
  const projects = document.getElementById("projects");
  if (projects) {
    projects.scrollIntoView({ behavior: "smooth" });
  }
}
function showSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function showSkill(skill) {
  let description = "";

  switch (skill) {
    case "html":
      description = "HTML (HyperText Markup Language) is the standard language for creating web page structure.";
      break;
    case "css":
      description = "CSS (Cascading Style Sheets) is used to style and design websites with colors, layouts, and animations.";
      break;
    case "js":
      description = "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.";
      break;
    case "php":
      description = "PHP is a server-side scripting language mainly used to develop dynamic and database-driven websites.";
      break;
    case "python":
      description = "Python is a versatile programming language popular for web development, AI, data science, and automation.";
      break;
    case "csharp":
      description = "C# is a modern object-oriented language developed by Microsoft, widely used for desktop, web, and game development.";
      break;
    case "cpp":
      description = "C++ is a powerful general-purpose language used for system programming, game development, and high-performance apps.";
      break;
    default:
      description = "Click on a skill logo to see details.";
  }

  document.getElementById("skillDescription").innerHTML = `<p>${description}</p>`;
}
// Optional: Add interactivity if you want multiple projects later
console.log("Projects Section Loaded ✅");
function connectCommunity() {
  alert("Thanks for joining! 🚀 Redirecting you to my LinkedIn...");
  window.open("https://www.linkedin.com/", "_blank"); // replace with your real link
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop normal form submission

  let email = document.getElementById("email").value;
  let remark = document.getElementById("remark").value;

  if (remark.trim() !== "") {
    // Open default mail app with email + remark
    window.location.href = `mailto:${email}?subject=Portfolio Contact&body=${encodeURIComponent(remark)}`;
  } else {
    alert("Please enter a remark before sending.");
  }
});
// Back-to-top button (optional)
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
});

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
