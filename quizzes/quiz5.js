const quizData = [
  {
    question: "Which statement best reflects the philosophy of inclusive teaching?",
    options: [
      "Accessibility and flexibility should be built into course design from the beginning",
      "Fairness means treating every student exactly the same",
      "Accessibility and flexibility should be built into course design from the beginning",
      "Accessibility should only be provided after a student requests accommodations"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of an inclusive course policy?",
    options: [
      "Strict no-exception deadlines for all assignments",
      "Participation grades based only on speaking in class",
      "A 24–48 hour grace period for assignment submissions",
      "Timed exams with no alternative formats"
    ],
    answer: 2
  },
  {
    question: "Why can timed exams create accessibility barriers for some students?",
    options: [
      "They are always easier than projects",
      "They may measure speed more than actual learning",
      "They prevent instructors from grading fairly",
      "They eliminate student engagement"
    ],
    answer: 1
  },
  {
    question: "Which communication practice best supports accessibility in a course?",
    options: [
      "Waiting for students to disclose disabilities before discussing accommodations",
      "Referring to accommodations as special treatment",
      "Normalizing accommodations and support early in the course",
      "Requiring students to explain personal medical details publicly"
    ],
    answer: 2
  },
  {
    question: "Which strategy helps foster inclusive student engagement and community?",
    options: [
      "Requiring all participation to occur through live verbal discussion",
      "Using only one method of communication for all students",
      "Providing multiple ways for students to participate and engage",
      "Avoiding student feedback to maintain consistency"
    ],
    answer: 2
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

  document.getElementById("result-text").innerText =
    `You scored ${score}/${quizData.length}`;

  document.getElementById("result-modal").classList.remove("hidden");

  // save progress
  localStorage.setItem("module5Complete", "true");
}

function closeModal() {
  document.getElementById("result-modal").classList.add("hidden");
}