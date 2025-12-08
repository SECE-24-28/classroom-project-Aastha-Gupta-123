// 1. We need all the instances (DOM Elements)
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Random Number between 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// 2.1 Create a variable for score
let scr = 20;
let highscr = 0;

// *** Function to Display Message ***
function displayMessage(message) {
  msg.textContent = message;
}

// Button Functionalities
// Check button
checkBtn.addEventListener("click", () => {
  let userGuess = Number(guess.value);

  // Condition 1: No input
  if (!userGuess) {
    displayMessage("⛔ No Number!");

    // Condition 2: Correct guess
  } else if (userGuess === randomNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = randomNumber;
    number.style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";

    // Update Highscore
    if (scr > highscr) {
      highscr = scr;
      highScore.textContent = highscr;
    }

    // Condition 3: Guess Wrong
  } else if (userGuess !== randomNumber) {
    if (scr > 1) {
      displayMessage(userGuess > randomNumber ? "📈 Too High!" : "📉 Too Low!");
      scr--;
      score.textContent = scr;
    } else {
      displayMessage("💥 You Lost!");
      score.textContent = 0;
      document.body.style.backgroundColor = "#8b0000";
    }
  }
});

// Again Button - Reset Game
againBtn.addEventListener("click", () => {
  scr = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  score.textContent = scr;
  number.textContent = "?";
  number.style.width = "15rem";
  guess.value = "";
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
});


//3.Check Button Func
//1.event that we want to occur 2. CallBack
checkBtn.addEventListener("click", () => {
  let inputVal = Number(guess.Value);
  if(!inputVal){
    alert("Please enter a number");
    msg.textContent = " No Number";
  }
//3.1 Input value is equal to random number
 else if(inputVal === randomNumber){
  //3.1.1 Change the background to green
  document.body.style.backgroundColor = "green";
  //3.1.2 Instead of ? put the random number
  number.textContent = randomNumber;
  //3.1.3 At  highscore we have to put value of score
  highScore.textContent = scr;
  //3.3.2 Show message "Correct Value"
  msg.textContent = "Correct value";
  //3.2 if input is greater then random number
  //3.2.1 Decrease score by 1
  scr -= 1;
  score.textContent = scr;
  //3.2.2 Show Message "Too High"
  msg.textContent = "Too High";
}else if (inputVal < randomNumber){
  console.log("Number is  too low");
  //3.3 if input is less then random number
  //3.3.1 Decrease score by 1
  scr -= 1;
  score.textContent = scr;
  //3.3.2 Show Message "Too Low";
  msg.textContent = "Too Low";
}
});

//4.again Button Func
let init=()=>{

  //4.1 Reset all the values to initial stage
  scr = 20;
  score.textContent = scr;
  number.textContent = "?";
  guess.value = "";
  msg.textContent = "Start guessing...";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
  console.log("random Number");
};

againBtn.addEventListener("click",init);
