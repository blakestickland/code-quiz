// script.js

// start with variables
// what needs to be changed on the page?  a count? text? image? 

// timer: starts at 90 secs and counts down to zero or the end of hte quiz, whichever first.
// displayed in top right corner 
// (middle of class 4.1)
var count = 90;  // start point of the timer
var countBox = document.querySelector("#countdown");

setInterval(function() {
    console.log("startof interval");    
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
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];


// Button (a vague example)

decrementBtn.addEventListener("click", function(){
    if (count >= 0) {
        count -= 1;
        countBox.textContent = count;
    }
})