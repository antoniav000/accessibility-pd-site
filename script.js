console.log("Site loaded");

document.addEventListener("DOMContentLoaded", () => {
  updateProgress();
  setupAccordion();
  updateCheckmarks();
});

function animateNumber(targetPercent) {
  const el = document.getElementById("progress-percent");
  let current = 0;

  const interval = setInterval(() => {
    if (current >= targetPercent) {
      clearInterval(interval);
    } else {
      current++;
      el.textContent = `${current}%`;
    }
  }, 15); // speed (lower = faster)
}

// Progress circle
function updateProgress() {
  let completed = 0;

  for (let i = 1; i <= 5; i++) {
    if (localStorage.getItem(`module${i}Complete`)) {
      completed++;
    }
  }

  const percent = Math.round((completed / 5) * 100);

  const circle = document.getElementById("progress-ring");
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDasharray = circumference;
  // Start at 0%
  //circle.style.strokeDashoffset = circumference;

  // Force browser to apply initial state before animating
  setTimeout(() => {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }, 50);

  //document.getElementById("progress-percent").textContent = `${percent}%`;
  animateNumber(percent);
}

// Module dropdowns
function setupAccordion() {
  const headers = document.querySelectorAll(".module-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // close all other modules
      document.querySelectorAll(".module-content").forEach(c => {
        if (c !== content) c.style.display = "none";
      });

      // toggle current module
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
}

// Check marks for completed modules
function updateCheckmarks() {
  for (let i = 1; i <= 5; i++) {
    if (localStorage.getItem(`module${i}Complete`)) {
      const header = document.getElementById(`module${i}-header`);
      if (header) {
        const check = header.querySelector(".check");
        if (check) {
          //check.textContent = "Complete! ✓";
          check.innerHTML = `
          <span class="completed-badge">
            ✓ Completed
          </span>
        `;
        }
      }
    }
  }
}

// Scroll module page bar 
let lastScrollY = window.scrollY;
const banner = document.getElementById("top-banner");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling DOWN → hide banner
    banner.classList.add("hidden");
  } else {
    // scrolling UP → show banner
    banner.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

updateProgress();