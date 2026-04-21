const quizData = [
  {
    question: "What does accessibility mean?",
    options: ["Usability for all", "Only for disabled users", "Design only"],
    answer: 0
  },
  // add 9 more questions
];

function startQuiz() {
  let container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((q, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label><br>
      `).join("")}
    `;
    container.appendChild(div);
  });

  let submitBtn = document.createElement("button");
  submitBtn.innerText = "Submit Quiz";
  submitBtn.onclick = () => submitQuiz();
  container.appendChild(submitBtn);
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  alert(`You scored ${score}/10`);

  // save progress
  localStorage.setItem("module1Complete", "true");
}