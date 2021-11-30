var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var quizOptionsEl = document.querySelector('#quiz article');
var scoreEl = document.querySelector('#score');
var startBtn = document.querySelector('startBtn');
var quizH2 = document.querySelector('#quizH2');
var quizH3 = document.querySelector('#quizH3');

var cursor = 0;

var questions = [
  { text: "JavaScript is?",
  possible: [
    "a",
    "b",
    "c",
    "d",
  ],
  correct: 3
},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
  { text: "JavaScript is?"},
]

function displayElements(state) {
  switch(state) {
    case "START": {      startEl.style.display = "flex";
      quizEl.style.display = "none";
      scoreEl.style.display = "none";
      break;
    }
    case "QUIZ": {
      startEl.style.display = "none";
      quizEl.style.display = "flex";
      scoreEl.style.display = "none";
      break;
    }
    case "SCORE": {
      startEl.style.display = "none"
      quizEl.style.display = "none";
      scoreEl.style.display = "flex";
      break;
    }
    default: {
      startEl.style.display = "flex";
      quizEl.style.display = "none";
      scoreEl.style.display = "none";
    }
  }
}

function init() {
  displayElements("START");
}

function playQuiz() {
  displayElements("QUIZ");
  renderQuestion();
}

function enterScore() {
  displayElements("SCORE");
}

function renderQuestion() {
  cursor++;
  renderQuestion();
}

function renderQuestion() {
  var currentQuestion = question[cursor];
  if (currentQuestion) {
    quizH3.textContent = currentQuestion.text;
    quizOptionsEl.innerHTML = "";
    for (var i in currentQuestion.possible) {
      var answerEl = document.createElement('div');
      answerEl.textContent = currentQuestion.possible[i];
      answerEl.dataset.index = i;
      quizOptionsEl.appendChild(answerEl);
    }
  } else {
    enterScore();
  }
}

function pickAnswer(event) {
  var currentQuestion = question[cursor];
  if (event.target.matches("div")) {
    if (Number(event.target.dataset.index === currentQuestion.correct)) {
      console.log("CORRECT");
    } else {
      console.log("WRONG");
    }
  }
}

startBtn.addEventListener("click", playQuiz);
quizH2.addEventListener("click", enterScore);
quizH3.addEventListener("click", nextQuestion);
quizEl.addEventListener("click", pickAnswer);

init();