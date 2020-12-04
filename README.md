# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


To Do:
* make files: yes

* use Krishna's suggestions for quiz questions and answers

* use "contact page" from Unit 4 Day 2 @22:45 in video for entering name for Highest Score

* use local storage to diplay Highest Scores

* Use count-down timer for the quiz timer

* use Bootstrap for layout? 

* use event.preventDefault(); at top of JS ? Maybe if using objects. 


** LAYOUT image(1).png GAME
text is sans-serif
1 row of 2 columns at top header; col-1 is aligned left; col-2 is aligned right
1 row, empty, used as spacer between header and container
then 1 container; has a max-width and can fold down to probaby 300px ok;
    container has:
        question in bold
        4 x buttons with color=white; background-color=purple; rounded corners
then <hr>
the italicised response to multiple-choice appears after multi-choice button clicked.


** LAYOUT image.png TITLE PAGE
as above for header and spacer

container has:
    name of game in bold "Coding Quiz Challenge"
    description and parameters of the game
    space
    button for "Start Quiz"


** LAYOUT image(2).png END OF GAME/TIMER OUT
as above for header and spacer

container has:
    title of end of game "All done!"
    space
    textContent    "Your final score is " + score + ".";
    space
    textContent     "Enter initials: <textarea> <button>Submit</submit> 
    NOTE: Submit button has same styling as other buttons

** LAYOUT image(3).png
blank header and spacer

container has: 
    text "Highscores"
    space
    results ranked from 1. down, include: position on the scoreboard, player name, hypen, score
    text is black; background-color is lilac.



