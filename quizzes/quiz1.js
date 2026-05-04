const quizData = [
  {
    question: "What is the best definition of accessibility (A11y) in the context of education?",
    options: ["Designing content only for students with disabilities", 
      "Ensuring all students have equal access to information and learning experiences", 
      "Making websites look visually appealing", 
      "Providing extra help only when students ask for it"],
    answer: 1
  },
  {
    question: "According to the U.S. Department of Education definition, what must accessible content ensure for students with disabilities?",
    options: ["Faster access than other students", 
      "Identical user interfaces", 
      "Equal opportunity to obtain information as independently as possible", 
      "Additional grading flexibility"],
    answer: 2
  },
  {
    question: "Which group benefits from accessible design beyond students with disabilities?",
    options: ["Only faculty members", 
      "Only graduate students", 
      "Students with temporary or situational limitations", 
      "Only students in STEM courses"],
    answer: 2
  },
  {
    question: "Which of the following is NOT one of the POUR principles?",
    options: ["Perceivable", 
      "Operable",
      "Understandable", 
      "Reasonable"],
    answer: 3
  },
  {
    question: "Which is an example of a common barrier in digital learning for students with disabilities?",
    options: ["Lack of captions, transcripts, or alt text", 
      "Too many group projects", 
      "Having too many office hours", 
      "Using too many textbooks"],
    answer: 0
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

  //alert(`You scored ${score}/5`);

  // save progress
  localStorage.setItem("module1Complete", "true");
}

function closeModal() {
  document.getElementById("result-modal").classList.add("hidden");
}