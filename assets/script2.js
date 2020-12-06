// script.js

// start with variables
// what needs to be changed on the page?  a count? text? image? 

// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");

// Store our li elements in a variable
var timerEl = document.getElementById("timer");
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
timerEl.textContent = ("Timer: enter here");

// Append all of our elements
body.appendChild(h1El);



//use event handlers for onclicks -- ie. when clicked, do this...


// timer: starts at 90 secs and counts down to zero or the end of hte quiz, whichever first.
// displayed in top right corner 
// (middle of class 4.1)
var count = 90;  // start point of the timer
var countBox = document.querySelector("#timer");

setInterval(function() {
    console.log("start of interval");    
}, 1000);

count -= 1;
countBox.textContent = count;

setTimeout(function() {
    clearInterval(interval);
}, 6000);

//Highest Score diplayed in top left corner
// event listener for player name entry for Highest Score list

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
    console.log("event= ", event);
    event.preventDefault();

    console.log(event);

    var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + "";
    submissionResponseEl.textContent = response;
});

// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: 2
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 2
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: 3
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: 2
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: 3
    }
  ];


  
  var questionList = document.querySelector("#question-list");


  renderQuestions();
  
  

  function renderQuestions() {
    // Clear todoList element and update todoCountSpan
    questionList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  


// Button (a vague example)

decrementBtn.addEventListener("click", function(){
    if (count >= 0) {
        count -= 1;
        countBox.textContent = count;
    }
});