function randomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

//Generate randomly either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let randomChoice = randomNumber();
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

//Taking input from user
function playerPlay() {
  let flag = false;
  let choose = prompt("Choose rock, paper or scissors").toLowerCase();
  do {
    if (choose === "rock" || choose == "scissors" || choose == "paper") {
      flag = true;
    } else {
      choose = prompt(
        "Try again? Choose rock, paper or scissors"
      ).toLowerCase();
    }
  } while (!flag);
  return choose;
}

let playerScore = 0; // keep track of player overall score
let computerScore = 0; // keep track of computer overall score
let tie = 0;

//results of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock crushes scissors";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock crushes scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! scissors cuts paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! scissors cuts paper";
  } else {
    return "This round is Tie";
  }


}

//ui code
const buttons = document.querySelectorAll('button');

//buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector('#restart');

//div for displaying results
const displayScore = document.querySelector(".display-score");
const displayResult = document.querySelector(".display-result");
const playerScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");
const result = document.createElement("div");
const winner = document.querySelector('.winner');
playerScoreDisplay.textContent = "Player-Score: 0";
computerScoreDisplay.textContent = "Computer-Score: 0";

function game(playerSelection) {
  const computerSelection = computerPlay();
  console.log("Computer Selection: " + computerSelection);
  console.log("Player Selection: " + playerSelection);
  result.textContent = playRound(playerSelection, computerSelection);
  playerScoreDisplay.textContent = `Player-Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer-Score: ${computerScore}`;

  if (playerScore == 5) {
    console.log("You win:");
    winner.textContent = "You win: the game!!!";
    winner.classList.add('active');
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore == 5) {
    console.log("Computer win: you lose, you loser!!!");
    winner.textContent = "Computer win: the game!!!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    winner.classList.add('active');
  }
}
  
rockBtn.addEventListener("click", () => {
  game("rock");
  rockBtn.classList.add("active");
});
 

paperBtn.addEventListener("click", () => {
  game("paper");
  paperBtn.classList.add("active");
});

scissorsBtn.addEventListener("click", () => {
  game("scissors");
  scissorsBtn.classList.add("active");
});

restartBtn.addEventListener('click', () => {
  location.reload();
});


//removeing active class when transition end
function removeTransition(event) {
  if (event.propertyName !== 'transform') return; //skip if its not a transform property
  this.classList.remove('active'); 
   
}
buttons.forEach(button => {
  button.addEventListener('transitionend', removeTransition);
})

//adding to the dom
displayScore.appendChild(playerScoreDisplay);
displayScore.appendChild(computerScoreDisplay);

displayResult.appendChild(result);

