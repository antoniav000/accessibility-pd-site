const quizData = [
  {
    question: "What does accessibility (A11y) primarily aim to do?",
    options: ["Reduce course workload", "Ensure equal access and usability for all users", "Simplify grading for instructors", "Replace traditional teaching methods"],
    answer: 1
  },
  {
    question: "What does accessibility (A11y) primarily aim to do?",
    options: ["Reduce course workload", "Ensure equal access and usability for all users", "Simplify grading for instructors", "Replace traditional teaching methods"],
    answer: 1
  },
  {
    question: "What does accessibility (A11y) primarily aim to do?",
    options: ["Reduce course workload", "Ensure equal access and usability for all users", "Simplify grading for instructors", "Replace traditional teaching methods"],
    answer: 1
  },
  {
    question: "What does accessibility (A11y) primarily aim to do?",
    options: ["Reduce course workload", "Ensure equal access and usability for all users", "Simplify grading for instructors", "Replace traditional teaching methods"],
    answer: 1
  },
  {
    question: "What does accessibility (A11y) primarily aim to do?",
    options: ["Reduce course workload", "Ensure equal access and usability for all users", "Simplify grading for instructors", "Replace traditional teaching methods"],
    answer: 1
  }
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

  alert(`You scored ${score}/5`);

  // save progress
  localStorage.setItem("module1Complete", "true");
}