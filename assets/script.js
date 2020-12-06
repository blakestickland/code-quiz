// script.js

// button variables
var startQuizBtn = document.querySelector("#start-quiz-btn");
var body = document.body;

// click on Start Quiz button runs buildQuiz function
startQuizBtn.addEventListener("click", function buildQuiz() {


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

let currentQuestion = 0;

renderQuestion(currentQuestion);

function renderQuestion(questionIndex){
  header.innerHTML = questions[questionIndex].title;

  let choices = questions[questionIndex].choices;

  listEl.textContent = "";
  
  for (let ii = 0; ii < choices.length; ii++) {
    const choice = choices[ii];
    const button = document.createElement('button');
  
  
    button.textContent = (ii + 1) + ". " + choice;
    button.setAttribute('data-answer', choice);
    button.setAttribute("class", "btn btnLook mb-2 choiceButtons");
  
  
  
    button.addEventListener('click', function(event){
  
      // check if clicked on correct answer
      let choiceMadeByUser = event.target.getAttribute('data-answer');
  
      // second step: display "correct" or "wrong"
      const isCorrect = choiceMadeByUser === questions[questionIndex].answer;
      if(isCorrect){
        resultBar.textContent = 'Correct'
      }else{
        resultBar.textContent = 'Wrong'
        // 
      }
  
      // load next question and choices array
      currentQuestion++;
      renderQuestion(currentQuestion);
  
    })
  
    const li = document.createElement('li');
  
  
    li.appendChild(button);
    listEl.appendChild(li)
    
  
  }
}

// Append all of our elements
topRow.appendChild(h1El);
middleRow.appendChild(listEl);


// remove attributes
middleRow.classList.replace("text-center", "text-left");



// Style elements
header.setAttribute("style", "text-align: left");
middleRow.setAttribute("style", "display: flex; float: left");
listEl.setAttribute("style", "padding-left: 0; margin-left:0; list-style: none;");



for (var i = 0; i < Object.keys(questions).length; i++) {
  console.log(Object.keys(questions[i]));
}


}); // end of QandA page


function showResults() {

}


// timer variables
let timeLeft = 75;
let timerEl = document.getElementById("#timer");
timerEl.textContent = "Timer: " + timeLeft;

// countdown timer  based on Unit 4 Activities 09 SpeedReader

function prepareRead() {
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



