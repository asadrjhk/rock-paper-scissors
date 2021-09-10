//Generate randomly rock, paper or scissors
function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
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

//results of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock crushes scissors");
    return "Win";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    console.log("You Lose! Rock crushes scissors");
    return "Lose";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
    return "Lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    return "Win";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! scissors cuts paper");
    return "Lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! scissors cuts paper");
    return "Win";
  } else {
    console.log("Tie");
    return "tie";
  }
}

function game() {
  let playerScore = 0;  // keep track of player overall score
  let computerScore = 0;  // keep track of computer overall score
  let tie=0;
  let numberOfRound = 5;
  for (let i = 1; i <= numberOfRound; i++) {
    console.log("Round-" + i);
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result === "Win") {
      playerScore++;
    } else if (result === "Lose") {
      computerScore++;
    } else {
        tie++;
    }
    console.log("Computer Selection: " + computerSelection);
    console.log("Player Selection: " + playerSelection);
  }
  console.log("\n");
  let scoreMessage = `Computer-Score=${computerScore} Your-Score=${playerScore} Tie=${tie}`;
  if (playerScore > computerScore) {
    console.log("You Win.");
  } else if (playerScore < computerScore) {
    console.log("Computer Win.");
  } else {
    console.log("Tie");
  }
  console.log(scoreMessage);
}
//Game starts 
game();
