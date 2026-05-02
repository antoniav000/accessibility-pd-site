console.log("Site loaded");

document.addEventListener("DOMContentLoaded", () => {
  updateProgress();
  setupAccordion();
  updateCheckmarks();
});

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
  circle.style.strokeDashoffset = offset;

  document.getElementById("progress-percent").textContent = `${percent}%`;
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
          check.textContent = "Complete! ✓";
        }
      }
    }
  }
}

updateProgress();