const quizData = [
  {
    question: "Why are video and audio materials considered some of the least accessible forms of content?",
    options: ["They require internet access", 
      "They rely on multiple senses such as hearing and vision", 
      "They are always too long", 
      "They cannot be edited easily"],
    answer: 1
  },
  {
    question: "What is the key principle of accessible media described as “If it’s spoken, caption it. If it’s visual, describe it”?",
    options: ["Replace all videos with text", 
      "Ensure information is available in an equivalent alternative format", 
      "Use only audio content", 
      "Avoid using multimedia in teaching"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a requirement of effective captions for prerecorded videos?",
    options: ["Synchronized with speech", 
      "Identification of speakers when necessary", 
      "100% automatic generation without edits", 
      "Inclusion of sound effects"],
    answer: 2
  },
  {
    question: "What is the main difference between captions and transcripts?",
    options: ["Captions are longer than transcripts", 
      "Transcripts are synchronized with video",
      "Transcripts only include visual information", 
      "Captions are synchronized with media, while transcripts are not"],
    answer: 3
  },
  {
    question: "When are audio descriptions (AD) most necessary?",
    options: ["When important information is only shown visually", 
      "When a video has background music", 
      "When the video is longer than 10 minutes", 
      "When captions are already available"],
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

  alert(`You scored ${score}/5`);

  // save progress
  localStorage.setItem("module4Complete", "true");
}