const quizData = [
  {
    question: "What does the “C” in CRAP design principles stand for?",
    options: ["Clarity", 
      "Consistency", 
      "Contrast", 
      "Composition"],
    answer: 2
  },
  {
    question: "Which of the following best describes the purpose of contrast in accessible design?",
    options: ["To make all content visually identical", 
      "To remove all color from materials", 
      "To highlight important content using differences in size, color, or style", 
      "To increase the amount of text on a page"],
    answer: 2
  },
  {
    question: "Why are sans-serif fonts generally recommended for accessibility?",
    options: ["They use more ink when printed", 
      "They are more readable, especially for dyslexic users", 
      "They are always larger than serif fonts", 
      "They are required by law"],
    answer: 1
  },
  {
    question: "What does “alignment” refer to in accessible document design?",
    options: ["Using the same font across all documents", 
      "The arrangement and organization of content on a page",
      "Ensuring all images are centered", 
      "Making all text bold"],
    answer: 2
  },
  {
    question: "How does using plain language improve accessibility?",
    options: ["It makes documents longer and more detailed", 
      "It removes the need for headings", 
      "t eliminates the need for structure", 
      "It helps users find, understand, and use information more easily"],
    answer: 3
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
  localStorage.setItem("module2Complete", "true");
}