var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var quizOptionsEl = document.querySelector('#quiz article');
var scoreEl = document.querySelector('#score');
var startBtn = document.querySelector('startBtn');
var quizH2 = document.querySelector('#quizH2');
var quizH3 = document.querySelector('#quizH3');
var timeEl = document.querySelector(".time");

var cursor = 0;

var questions = [
  { text: "JavaScript is?",
  possible: [
    "a programming language",
    "a drink",
    "a set of shortcuts",
    "a set of files for storage"
  ],
  correct: 1
},
{ text: "JavaScript allows a developer to create?",
  possible: [
    "images",
    "interactive elements",
    "websites",
    "background colors"
  ],
  correct: 2
},
{ text: "CSS is used for?",
  possible: [
    "images",
    "background colors",
    "font sizes",
    "all of the above"
  ],
  correct: 4
},
{ text: "CSS stands for?",
  possible: [
    "Computer System Software",
    "Calculating Starbucks Stops",
    "Cascading Style Sheet",
    "Computer Style Sheet"
  ],
  correct: 3
},
{ text: "Padding is?",
  possible: [
    "actual content of a container",
    "area surrounding the content",
    "area around the border",
    "the outline of an image"
  ],
  correct: 2
},
{ text: "An array is",
  possible: [
    "a computer's thought process",
    "a type of function",
    "a set of conditions",
    "a container that holds variables"
  ],
  correct: 4
},
{ text: "HTML is?",
  possible: [
    "The skeloten of a website",
    "the design elements of a website",
    "a type of image",
    "the design elements of a website"
  ],
  correct: 1
},
  
]

function displayElements(state) {
  switch(state) {
    case "START": {
      startEl.style.display = "flex";
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

function nextQuestion() {
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
var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till next question.";
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

  setTime();