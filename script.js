console.log("Hello, world!");

//Get user choice
function getUserChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        alert("Invalid choice! Try again.");
        return getUserChoice;
    } else {
        console.log("User Choice: " + choice);
        return choice;
    }
}
getUserChoice();

//Get computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
    console.log(computerChoice);
}
console.log("Computer Choice: " + getComputerChoice());
