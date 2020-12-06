// script.js

// button variables
var startQuizBtn = document.querySelector("#start-quiz-btn");
var body = document.body;

startQuizBtn.addEventListener("click", function buildQuiz() {


// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
    answer: "console.log"
  }
];



// multiple choice quiz page

// Create all necessary elements
var questionContainer = document.querySelector("h1");
var choicesContainer = document.getElementById("main");
var resultBar = document.getElementById("bottomRow");
var header = document.getElementById("header");
var topRow = document.getElementById("topRow");
var middleRow = document.getElementById("middleRow");
var main = document.getElementById("main");

// remove unwanted elements
main.remove();
startQuizBtn.remove();


var h1El = document.createElement("h1");
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3= document.createElement("li");
var li4 = document.createElement("li");

var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

var horiLine = document.createElement("hr");

// Store our li elements in a variale
var listItems = document.getElementsByTagName("li");


// replace text in top row/header
header.innerHTML = questions[0].title;

// Set the text content of relevant elements
btn1.innerText = questions[0].choices[0];
btn2.innerText = questions[0].choices[1];
btn3.innerText = questions[0].choices[2];
btn4.innerText = questions[0].choices[3];


// Append all of our elements
topRow.appendChild(h1El);
middleRow.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

li1.appendChild(btn1);
li2.appendChild(btn2);
li3.appendChild(btn3);
li4.appendChild(btn4);

middleRow.appendChild(horiLine);  // not displaying yet

// remove attributes

middleRow.classList.replace("text-center", "text-left");



// Style all of our elements
// h1El.setAttribute("style", "text-align: left; font-weight:bold; font-size: 2rem;");
header.setAttribute("style", "text-align: left");
middleRow.setAttribute("style", "display: flex; float: left");
listEl.setAttribute("style", "padding-left: 0; margin-left:0; list-style: none;");
// li1.setAttribute("style", "mb-2 ; color:white; background:purple; text-align:center;");
// li2.setAttribute("style", "margin-left: 15px; margin-right: s15px; color:white; background:purple; text-align:center;");
// li3.setAttribute("style", "margin-left: 15px; margin-right: 15px; color:white; background:purple; text-align:center;");
// li4.setAttribute("style", "margin-left: 15px; margin-right: 15px; color:white; background:purple; text-align:center;");

btn1.setAttribute("class", "btn btnLook mb-2");
btn2.setAttribute("class", "btn btnLook mb-2");
btn3.setAttribute("class", "btn btnLook mb-2");
btn4.setAttribute("class", "btn btnLook mb-2");


var correctChoice = "";
var incorrectChoice = "";

correctChoice.addEventListener("click", function () {
  resultBar.textContent = "Correct!";
});

incorrectChoice.addEventListener("click", function () {
  resultBar.textContent = "Incorrect :-(";
});


}); // end of QandA page

function showResults() {

}


var displayQuestion = function () {

}

var displayAnswerChoices = function () {

}

var clickedAnswer = function () {

}


// multiple choice variables

// timer variables
var timeLeft = 75;
var timerEl = document.getElementById("timer");


// countdown timer  based on Unit 4 Activities 09 SpeedReader

function prepareRead() {
  timerEl.textContent = "Timer: " + timeLeft;
  var timeInterval = setInterval(function() {
    timeLeft = 75;
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000); // interval -- decreases by 1 sec at a time
}


// if the quiz is finished early
// take note of the remaining time, store it for the highscores page
function speedRead() {
  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}

prepareRead();



