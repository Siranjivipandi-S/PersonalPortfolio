const changeMode = document.getElementById("changemode");
const modeIcon = document.getElementById("modeicon");
const container = document.querySelector(".portfolio-container");
const contactcontainer = document.querySelector(".wrap-contact");
const navcontainer = document.querySelector(".nav");

// Load the mode from localStorage on page load
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  container.classList.add("dark");
  navcontainer.classList.add("dark");
  contactcontainer.classList.add("dark");
  modeIcon.classList.replace("fa-moon", "fa-sun"); // Switch to sun icon
}

changeMode.addEventListener("click", () => {
  container.classList.toggle("dark");
  navcontainer.classList.toggle("dark");
  contactcontainer.classList.toggle("dark");

  // Save the mode to localStorage
  if (container.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    modeIcon.classList.replace("fa-moon", "fa-sun"); // Switch to sun icon
  } else {
    localStorage.removeItem("darkMode");
    modeIcon.classList.replace("fa-sun", "fa-moon"); // Switch back to moon icon
  }
});

// Image observer logic
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".imagepart-contact > img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(img);
});
document.addEventListener("DOMContentLoaded", () => {
  const resumeLink = document.querySelector('a[href="./resume/resume.html"]');

  if (window.location.pathname.includes("resume.html")) {
    resumeLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent navigation if already on the resume page
    });
    resumeLink.style.cursor = "default"; // Change cursor to indicate it's inactive
  }
});
