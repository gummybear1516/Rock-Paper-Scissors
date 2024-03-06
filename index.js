let computerScore = 0;
let playerScore = 0;

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const result = document.createElement('div');
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let roundOutcome = "";
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection === computerSelection) {
    roundOutcome = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundOutcome = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
  } else {
    roundOutcome = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
  }
  return roundOutcome;
}

function playGame(playerSelection,computerSelection) {

  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(`Computer: ${computerScore}, Player: ${playerScore}`);

  if (computerScore > playerScore) {
    console.log("Game Over, you lose!");
  } else if (computerScore < playerScore) {
    console.log("Congratulations, you win!");
  } else {
    console.log("Game Over! It's a tie!");
  }
}

buttons.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    computerSelection = getComputerChoice();
    result.innerHTML = playRound(btn.textContent,computerSelection);
    body.appendChild(result);
  })
})

