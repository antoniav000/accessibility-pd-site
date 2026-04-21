console.log("Site loaded");

function updateProgress() {
  let completed = 0;

  for (let i = 1; i <= 6; i++) {
    if (localStorage.getItem(`module${i}Complete`)) {
      completed++;
    }
  }

  let percent = (completed / 6) * 100;

  let progressDiv = document.getElementById("progress");
  if (progressDiv) {
    progressDiv.innerHTML = `
      <p>Progress: ${percent}%</p>
      <div style="background:#ddd; width:300px;">
        <div style="background:green; width:${percent}%; height:20px;"></div>
      </div>
    `;
  }
}

updateProgress();