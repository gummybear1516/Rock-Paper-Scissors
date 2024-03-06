let computerScore = 0;
let playerScore = 0;
const WINNING_SCORE = 5;

const body = document.querySelector("body");
const resetBtn = document.querySelector(".reset");
const choiceBtns = document.querySelectorAll(".choices");
const result = document.createElement("div");

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

function updateGameDisplay() {

  result.innerHTML += `Computer: ${computerScore}, Player: ${playerScore}`;

  if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
    if (computerScore > playerScore) {
      result.innerHTML +="Game Over, you lose!";
    } else if (computerScore < playerScore) {
      result.innerHTML +="Congratulations, you win!";
    } else {
      result.innerHTML +="Game Over! It's a tie!";
    }
    choiceBtns.forEach((btn)=>{
      btn.disabled = true;
    })
  }
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  result.innerHTML = '';

  choiceBtns.forEach((btn)=>{
    btn.disabled = false;
  })
}

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = btn.textContent;
    result.innerHTML = playRound(playerSelection, computerSelection);
    body.appendChild(result);
    updateGameDisplay();
  });
});


resetBtn.addEventListener("click",resetGame);