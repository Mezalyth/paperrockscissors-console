console.log("Hello, world!");
let humanScore = 0;
let computerScore = 0;

//Get computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

//Get user userChoice
function getUserChoice() {
    let userChoice = window.prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase();
    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert("Invalid userChoice! Try again.");
        return getUserChoice();
    } else {
        return userChoice;
    }
}
//Compare choices and determine winner
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert("Draw! You: " + humanScore + ". Computer: " + computerScore);
        return;
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore ++;
        alert("You win this round!  You: " + humanScore + ". Computer: " + computerScore);    
    } else {
        computerScore ++;
        alert("You lose this round. You: " + humanScore + ". Computer: " + computerScore);
    }
}

while (humanScore < 3 && computerScore <3) {
const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Computer Choice: " + computerSelection);
console.log("Human Choice: " + humanSelection);
console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);
}

if (humanScore === 3) {
    alert("You win! Refresh to play again.");
} else if (computerScore === 3) {
    alert("You lose. Refresh to play again.");
}

//Reset if 3 victories
computerScore = 0;
humanScore = 0;
