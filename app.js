const currentRoundText = document.querySelector("h2");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const rockButton = document.querySelector("#hand-rock-button");
const paperButton = document.querySelector("#hand-paper-button");
const scissorsButton = document.querySelector("#hand-scissors-button");
const newGameButton = document.querySelector(".new-game-button");
 
let computerChoicesArray = ["rock", "paper", "scissors"];
let currentPlayerScore = 0;
let currentComputerScore = 0;
let currentRound = 1;

// Calculate a random integer that exists within a given interval (from 'min' to 'max')
function calcRandomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// Return a random element from 'computerChoicesArray'
function computerPlay() {
    return computerChoicesArray[calcRandomIntFromInterval(0, 2)];
}

function resetGame() {
    currentPlayerScore = 0;
    currentComputerScore = 0;
    currentRound = 1;
    currentRoundText.textContent = "Round 1";
    playerScore.textContent = "Player Score: 0/5";
    computerScore.textContent = "Computer Score: 0/5";
    playerChoice.style.backgroundImage = "none";
    playerChoice.style.boxShadow = "none";
    computerChoice.style.backgroundImage = "none";
    computerChoice.style.boxShadow = "none";
}

// function playerWinsRound() {
//     playerChoice.style.boxShadow = "0 0 15px 5px #6FC96F";
// }

// function playerLosesRound() {
//     playerChoice.style.boxShadow = "0 0 15px 5px #EA4D4D";
// }

// function computerWinsRound() {
//     computerChoice.style.boxShadow = "0 0 15px 5px #6FC96F";
// }

// function computerLosesRound() {
//     computerChoice.style.boxShadow = "0 0 15px 5px #EA4D4D";
// }

// function tieRound() {
//     playerChoice.style.boxShadow = "0 0 15px 5px #ccc";
//     computerChoice.style.boxShadow = "0 0 15px 5px #ccc";
// }

function playGame(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    currentRoundText.textContent = "Round " + currentRound;

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-gray-96.png')";
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-gray-96.png')";
            //tieRound();
        }
        else if (computerSelection === "paper") {
            currentComputerScore++;
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-red-96.png')";
            //playerLosesRound();
            computerScore.textContent = "Computer Score: " + currentComputerScore + "/5";
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-green-96.png')";
            //computerWinsRound();
        }
        else {
            currentPlayerScore++;
            playerScore.textContent = "Player Score: " + currentPlayerScore + "/5";
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-green-96.png')";
            //playerWinsRound();
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-red-96.png')";
            //computerLosesRound();
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            currentPlayerScore++;
            playerScore.textContent = "Player Score: " + currentPlayerScore + "/5";
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-green-96.png')";
            //playerWinsRound();
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-red-96.png')";
            //computerLosesRound();
        }
        else if (computerSelection === "paper") {
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-gray-96.png')";
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-gray-96.png')";
            //tieRound();
        }
        else {
            currentComputerScore++;
            computerScore.textContent = "Computer Score: " + currentComputerScore + "/5";
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-red-96.png')";
            //playerLosesRound();
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-green-96.png')";
            //computerWinsRound();
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            currentComputerScore++;
            computerScore.textContent = "Computer Score: " + currentComputerScore + "/5";
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-red-96.png')";
            //playerLosesRound();
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-rock-green-96.png')";
            //computerWinsRound();
        }
        else if (computerSelection === "paper") {
            currentPlayerScore++;
            playerScore.textContent = "Player Score: " + currentPlayerScore + "/5";
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-green-96.png')";
            //playerWinsRound();
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-paper-red-96.png')";
            //computerLosesRound();
        }
        else {
            playerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-gray-96.png')";
            computerChoice.style.backgroundImage = "url('Images/icons8-hand-scissors-gray-96.png')";
            //tieRound();
        }
    }

    currentRound++;

    if (currentComputerScore === 5) {
        alert("You LOSE!");
        resetGame();
    }
    else if (currentPlayerScore === 5) {
        alert("You WIN!");
        resetGame();
    }   
}

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);
newGameButton.addEventListener("click", resetGame);