let computerScore = 0;
let playerScore = 0;
const WINNING_SCORE = 5;

const body = document.querySelector("body");
const resetBtn = document.querySelector(".reset");
const choiceBtns = document.querySelectorAll(".choices");
const result = document.createElement("div");

//function to random select and return computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

//function that return the result for each round base on the player's and computer's selection
function playRound(playerSelection, computerSelection) {
  let roundOutcome = "";

  if (playerSelection === computerSelection) {
    roundOutcome = "<br>It's a tie!</br>";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundOutcome = `<br>You win! ${playerSelection} beats ${computerSelection}</br>`;
    playerScore += 1;
  } else {
    roundOutcome = `<br>You lose! ${computerSelection} beats ${playerSelection}</br>`;
    computerScore += 1;
  }
  result.innerHTML = roundOutcome;
  return roundOutcome;
}

function updateGameDisplay() {
  result.innerHTML += `<br>Computer: ${computerScore}, Player: ${playerScore}</br>`;

  if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
    if (computerScore > playerScore) {
      result.innerHTML += "<br>Game Over, you lose!</br>";
    } else if (computerScore < playerScore) {
      result.innerHTML += "<br>Congratulations, you win!</br>";
    } else {
      result.innerHTML += "<br>Game Over! It's a tie!</br>";
    }
    choiceBtns.forEach((btn) => {
      btn.disabled = true;
    });
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result.innerHTML = "";

  choiceBtns.forEach((btn) => {
    btn.disabled = false;
  });
}

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = btn.dataset.id;
    result.innerHTML = playRound(playerSelection, computerSelection);
    body.appendChild(result);
    updateGameDisplay();
  });
});

resetBtn.addEventListener("click", resetGame);
