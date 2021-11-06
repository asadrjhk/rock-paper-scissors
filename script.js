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

function game() {
  const numberOfRound = 5;

  for (let i = 0; i < numberOfRound; i++) {
    console.log(`%c ${"Round - " + (i + 1)}`,'font-size: 16px; font-weight: bold; background-color: #BC8CF2');
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
     
    console.log(playRound(playerSelection, computerSelection));
    console.log("Computer Selection: " + computerSelection);
    console.log("Player Selection: " + playerSelection);
     
  }
  console.log("\n");
  let scoreMessage = `Computer-Score=${computerScore} Your-Score=${playerScore} Tie=${tie}`;
  let result = "";
  if (playerScore > computerScore) {
    result = "You win the game! ";
  } else if (computerScore > playerScore) {
    result = "You Lose the game! ";
  } else {
    result =  "Game is tie! ";
  }
  console.log(`%c ${result}`, 'font-size: 18px; background-color: #AA14F0; color: #fff');
  console.log(scoreMessage);
}
console.log('%c Welcome to the console!','font-size: 34px; font-weight: bold; background-color: red; color: green;');
console.log('%c Call game() function to start playing the game.','font-size: 24px; font-weight: bold; background-color: green; color: red;')
