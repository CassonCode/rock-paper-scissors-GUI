// Array of options from which the computer can choose 
let computerChoicesArray = ["rock", "paper", "scissors"];
// Initialize the player and computer's scores
let currentPlayerScore = 0;
let currentComputerScore = 0;

// Calculate a random integer that exists within a given interval (from 'min' to 'max')
function calcRandomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Return a random element from 'computerChoicesArray'
function computerPlay() {
    return computerChoicesArray[calcRandomIntFromInterval(0, 2)];
}

// Play one round
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a DRAW!";
        }
        else if (computerSelection === "paper") {
            currentComputerScore++;
            return "You LOSE! Paper beats rock!";
        }
        else {
            currentPlayerScore++;
            return "You WIN! Rock beats scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            currentPlayerScore++;
            return "You WIN! Paper beats rock!";
        }
        else if (computerSelection === "paper") {
            return "It's a DRAW!";
        }
        else {
            currentComputerScore++;
            return "You LOSE! Scissors beats paper!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            currentComputerScore++;
            return "You LOSE! Rock beats paper!";
        }
        else if (computerSelection === "paper") {
            currentPlayerScore++;
            return "You WIN! Scissors beats paper!";
        }
        else {
            return "It's a DRAW!";
        }
    }
}

// Create a five round game
function game() {
    let playerRoundSelection = "";
    let computerRoundSelection = "";
    let currentRound = 0;

    for (i = 0; i < 5; i++) {
        playerRoundSelection = prompt("Choose: rock, paper, or scissors", "");
        computerRoundSelection = computerPlay();
        currentRound++;
        playRound(playerRoundSelection, computerRoundSelection);
        console.log("ROUND " + currentRound +
                    "\nPlayer score / choice:     " + currentPlayerScore + " / " + playerRoundSelection +
                    "\nComputer score / choice:     " + currentComputerScore + " / " + computerRoundSelection);
    }

    if (currentPlayerScore === currentComputerScore) {
        console.log("The match is a DRAW!");
    }
    else if (currentPlayerScore > currentComputerScore) {
        console.log("CONGRATS! You WIN the match!");
    }
    else {
        console.log("Oh no! You LOSE the match!");
    }
}

// Run the game
//game();