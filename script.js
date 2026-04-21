console.log("Site loaded");

document.addEventListener("DOMContentLoaded", () => {

  updateProgress();
  setupAccordion();
  updateCheckmarks();

});

// Progress bar
function updateProgress() {
  let completed = 0;

  for (let i = 1; i <= 6; i++) {
    if (localStorage.getItem(`module${i}Complete`)) {
      completed++;
    }
  }

  let percent = (completed / 6) * 100;

  // update circle fill
  let circle = document.querySelector(".circle");
  if (circle) {
    circle.style.background =
      `conic-gradient(#38a169 ${(percent/100) * 3.6}deg, #e6fffa 0deg)`;
  }

  // update text
  let percentText = document.getElementById("percentText");
  if (percentText) {
    percentText.textContent = `${Math.round(percent)}%`;
  }
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
  for (let i = 1; i <= 6; i++) {
    if (localStorage.getItem(`module${i}Complete`)) {
      let header = document.getElementById(`module${i}-header`);
      if (header) {
        let check = header.querySelector(".check");
        if (check) {
          check.textContent = "✔";
        }
      }
    }
  }
}