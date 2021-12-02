var startEl = document.querySelector('#START');
var quizEl = document.querySelector('#QUIZ');
var scoreEl = document.querySelector('#SCORE');

var startBtn = document.querySelector('#startBtn');

var quizQuestion = document.querySelector('#quizQuestion');
var quizAnswers = document.querySelector('#quizAnswers');
//var quizH2 = document.querySelector('#quizH2');

//var timeEl = document.querySelector(".time");

var cursor = 0;

var questions = [
  { text: "JavaScript is?",
  possible: [
    "a programming language",
    "a drink",
    "a set of shortcuts",
    "a set of files for storage"
  ],
  correct: 0
},
{ text: "JavaScript allows a developer to create?",
  possible: [
    "images",
    "interactive elements",
    "websites",
    "all of the above"
  ],
  correct: 3
},
{ text: "CSS is used for?",
  possible: [
    "images",
    "background colors",
    "font sizes",
    "all of the above"
  ],
  correct: 3
},
{ text: "CSS stands for?",
  possible: [
    "Computer System Software",
    "Calculating Starbucks Stops",
    "Cascading Style Sheet",
    "Computer Style Sheet"
  ],
  correct: 2
},
{ text: "Padding is?",
  possible: [
    "actual content of a container",
    "area surrounding the content",
    "area around the border",
    "the outline of an image"
  ],
  correct: 1
},
{ text: "An array is",
  possible: [
    "a computer's thought process",
    "a type of function",
    "a set of conditions",
    "a container that holds variables"
  ],
  correct: 3
},
{ text: "HTML is?",
  possible: [
    "Hyper Text Markup Language",
    "the design elements of a website",
    "a type of image",
    "the design elements of a website"
  ],
  correct: 0
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
  var currentQuestion = questions[cursor];
  if (currentQuestion) {
    quizQuestion.textContent = currentQuestion.text;
    quizAnswers.innerHTML = "";
    for (var i in currentQuestion.possible) {
      var answerEl = document.createElement('button');
      answerEl.textContent = currentQuestion.possible[i];
      answerEl.dataset.index = i;
      quizAnswers.appendChild(answerEl);
    }
  } else {
    enterScore();
  }
}

function pickAnswers(event) {
  var correctIndex = questions[cursor].correct;
  var answer = questions[cursor].possible[correctIndex];
  if (event.target.type === "submit"){
    console.log(event.target.textContent,answer)
  }
}



startBtn.addEventListener("click", playQuiz);
//quizH3.addEventListener("click", nextQuestion);
quizAnswers.addEventListener("click", pickAnswers);

init();
//var secondsLeft = 30;

//function setTime() {
  //var timerInterval = setInterval(function() {
    //secondsLeft--;
    //timeEl.textContent = secondsLeft + " seconds left till next question.";
    //if(secondsLeft === 0) {
      //clearInterval(timerInterval);
      //nextQuestion();
    //}
  //}, 1000);
//}

  //setTime();