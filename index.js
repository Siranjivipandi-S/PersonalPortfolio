const changeMode = document.getElementById("changemode");
const modeIcon = document.getElementById("modeicon");
const container = document.querySelector(".container");
const about = document.querySelector(".about");
const navcontainer = document.querySelector(".nav");
const separator = document.querySelector(".separator");

// Load the mode from localStorage on page load
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  activateDarkMode();
}

changeMode.addEventListener("click", () => {
  container.classList.toggle("dark");
  navcontainer.classList.toggle("dark");
  about.classList.toggle("dark");
  separator.classList.toggle("dark");

  // Save the mode to localStorage
  if (container.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    modeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.removeItem("darkMode");
    modeIcon.classList.replace("fa-sun", "fa-moon");
  }
});

function activateDarkMode() {
  container.classList.add("dark");
  navcontainer.classList.add("dark");
  about.classList.add("dark");
  separator.classList.add("dark");
  modeIcon.classList.replace("fa-moon", "fa-sun");
}

// Text change logic
const textElement = document.getElementById("developer-role");
const texts = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "CS Graduate & Aspiring Master's Candidate in MCA",
];
let index = 0;

function changeText() {
  textElement.classList.add("hidden");
  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
    textElement.classList.remove("hidden");
  }, 1500);
}

setInterval(changeText, 4000);

// Intersection Observer for About Section
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".about-image > img");
  const aboutContent = document.querySelector(".about-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.classList.add("show");
        aboutContent.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(img);
});

// Intersection Observer for Tech Stack
document.addEventListener("DOMContentLoaded", function () {
  const techContent = document.querySelector(".tech-stack");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        techContent.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(techContent);
});
