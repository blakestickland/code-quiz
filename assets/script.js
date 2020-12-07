// script.js

// declare starting variables
var startQuizBtn = document.querySelector("#start-quiz-btn");
var body = document.body;
let currentQuestion = 0;



// click on Start Quiz button runs buildQuiz function
startQuizBtn.addEventListener("click", function buildQuiz() {

// Create all necessary elements
var questionContainer = document.querySelector("h1");
var choicesContainer = document.getElementById("main");
var header = document.getElementById("header");
var topRow = document.getElementById("topRow");
var middleRow = document.getElementById("middleRow");
var resultBar = document.getElementById("bottomRow");
var bottomRow = document.getElementById("bottomRow");
var main = document.getElementById("main");

// remove unwanted elements
main.remove();
startQuizBtn.remove();


var h1El = document.createElement("h1");
var listEl = document.createElement("ul");
let correctWrongEl = document.createElement("p");

var horiLine = document.createElement("hr");


// render question as a function and loop through q and a

renderQuestion(currentQuestion);

function renderQuestion(questionIndex){
  event.preventDefault();
  header.textContent = questions[questionIndex].title;

  let choices = questions[questionIndex].choices;

  listEl.textContent = "";
  
  for (let ii = 0; ii < choices.length; ii++) {
    const choice = choices[ii];
    const button = document.createElement("button");
  
  
    button.textContent = (ii + 1) + ". " + choice;
    button.setAttribute("data-answer", choice);
    button.setAttribute("class", "btn btnLook mb-2 choiceButtons");
  
  
  
    button.addEventListener("click", function(event){
      // prepare for Correct/Wrong result
      bottomRow.appendChild(correctWrongEl);

      // check if clicked on correct answer
      let choiceMadeByUser = event.target.getAttribute('data-answer');
  
      // second step: display "correct" or "wrong" for 2 seconds
      const isCorrect = choiceMadeByUser === questions[questionIndex].answer;
      if(isCorrect){
        // resultBar.prepend(horiLine);
        bottomRow.textContent = 'Correct';
        setTimeout(function(){resultBar.textContent = "";}, 2000);
      } 
      else { 
        // resultBar.prepend(horiLine);
        resultBar.textContent = 'Wrong';
        setTimeout(function(){resultBar.textContent = "";}, 2000);

        // lose 15 secs from timer for every wrong answer
        timeLeft = timeLeft - 15;
      }
  
      // load next question and choices array unless it was final question
      currentQuestion++;
      
      if (currentQuestion === (Object.keys(questions).length)) {
        // store player score in new variable
        let playerScore = timeLeft;
        // run finalScore after 2 sec display of final question choice result
        setTimeout(finalScore, 2000); 

        function finalScore() {
          event.preventDefault();
            // clearing text
            resultBar = "";
            // change heading text
            header.textContent = "All done!";
            // remove unwanted elements
            listEl.remove();
            // add elements to page
            const pFinalScore = document.createElement("p");
            pFinalScore.textContent = "Your final score is " + (playerScore) + " !!!";
            middleRow.appendChild(pFinalScore);
            // enter intials and click on submit to see position on High Scores list
            const pEnterInitials = document.createElement("p");
            const inputBox = document.createElement("input");
            const submitButton = document.createElement("button");

            inputBox.setAttribute("size", "20");
            inputBox.setAttribute("id", "initials");
            inputBox.setAttribute("style", "display: inline");
            submitButton.setAttribute("class", "btn btnLook ml-3");
            submitButton.setAttribute("id", "submit-button");
            pEnterInitials.setAttribute("id", "enterInitialsText");
          
            pEnterInitials.textContent = "Enter initials: ";
            submitButton.textContent = "Submit";

            bottomRow.appendChild(pEnterInitials);
            let newPara = document.getElementById("enterInitialsText");
            newPara.appendChild(inputBox);
            newPara.appendChild(submitButton);

            let initialsInput = document.getElementById("initials");
            let submitBtnId = document.getElementById("submit-button");

            let msgDiv = document.createElement("div");
            bottomRow.appendChild(msgDiv);            

            function displayMessage(type, message) {
              msgDiv.textContent = message;
              msgDiv.setAttribute("class", type);
            }
            
            submitBtnId.addEventListener("click", function(event) {
              event.preventDefault();
            
            // create user object from submission (activity 23)
            let player = {
              initials: initialsInput.value.trim(),
              score: playerScore
            };


            setTimeout(function(){resultBar.textContent = "";}, 2000);

            //validate the field
            if (player.initials === "") {
              displayMessage("error", "Initials cannot be blank");
            } else {
              displayMessage("success", "Compare your score with others on the Scoreboard");

              // set new scoreboard entry
              localStorage.setItem("player", JSON.stringify(player));

              // get most recent player score
              let = lastPlayer = JSON.parse(localStorage.getItem("player"));

            }

          });

        }
      }
      renderQuestion(currentQuestion);
  
    })
  
    const li = document.createElement('li');
  
  
    li.appendChild(button);
    listEl.appendChild(li);
    
  
  }
}

// Append all of our elements
topRow.appendChild(h1El);
middleRow.appendChild(listEl);


// remove attributes
middleRow.classList.replace("text-center", "text-left");
resultBar.classList.replace("text-center", "text-left");



// Style elements
header.setAttribute("style", "text-align: left");
middleRow.setAttribute("style", "display: flex; float: left");
listEl.setAttribute("style", "padding-left: 0; margin-left:0; list-style: none;");

countdownTimer();

}); // end of QandA page


function showResults() {
  
}


// timer variables
let timeLeft = 75;

let timerEl = document.querySelector("#timer");
timerEl.textContent = timeLeft;

// countdown timer  based on Unit 4 Activities 09 SpeedReader

function countdownTimer() {
  var timeInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0 || (currentQuestion === (Object.keys(questions).length))) {
      timerEl.textContent = "";
      // speedRead();
      clearInterval(timeInterval);
      // timerEl.textContent = timeLeft;
      // playerScore = timeLeft;
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





