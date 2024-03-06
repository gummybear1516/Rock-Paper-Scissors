let computerScore = 0;
let playerScore = 0;

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
    playerScore+=1;
  } else {
    roundOutcome = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore+=1;
  }
  return roundOutcome;
}

function playGame(){
  for(let i = 0; i <5;){
    const computerSelection = getComputerChoice();
    playerSelection = prompt("Enter either \"Rock\",\"Paper\" or \"Scissors\"");

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection== 'rock' || playerSelection=='paper'|| playerSelection == 'scissors'){
      console.log(`Round ${i+1}`);
      console.log(playRound(playerSelection,computerSelection));
      i++
    } else{
      console.log('Invalid input! Please enter again!');
    }
  }
  console.log(`Computer: ${computerScore}, Player: ${playerScore}`);

  if(computerScore>playerScore){
    console.log('Game Over, you lose!');
  } else if(computerScore<playerScore){
    console.log('Congratulations, you win!');
  } else{
    console.log('Game Over! It\'s a tie!');
  }
}

playGame();