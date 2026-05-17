const quizData = [
  {
    question: "What is the primary purpose of a screen reader?",
    options: ["To translate websites into different languages", 
      "To convert digital content into audio or braille output for users", 
      "To increase internet speed", 
      "To create PDF documents"],
    answer: 1
  },
  {
    question: "Which of the following is an example of good alt text?",
    options: ["“photo.png”", 
      "“Image of stuff”", 
      "“Students using a laptop with a screen reader enabled”", 
      "“Click here”"],
    answer: 2
  },
  {
    question: "Why is proper heading structure important for screen readers?",
    options: ["It changes the font size automatically", 
      "It helps users navigate and understand page organization", 
      "It adds color to the document", 
      "It prevents images from loading"],
    answer: 1
  },
  {
    question: "What does OCR (Optical Character Recognition) do?",
    options: ["Adds animations to PDFs", 
      "Converts scanned image text into selectable, readable text",
      "Deletes inaccessible content", 
      "Creates hyperlinks automatically"],
    answer: 1
  },
  {
    question: "What is considered the best practice for creating an accessible PDF?",
    options: ["Scan every page as an image", 
      "Add accessibility features only after exporting", 
      "Make the original source document accessible first", 
      "Avoid using headings and tags"],
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
  localStorage.setItem("module3Complete", "true");
}

function closeModal() {
  document.getElementById("result-modal").classList.add("hidden");
}