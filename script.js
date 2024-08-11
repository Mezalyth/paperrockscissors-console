console.log("Hello, world!");

//Get computer choice
function getComputerChoice()
{
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
  console.log(computerChoice);
}
console.log("Computer Choice: " + getComputerChoice());
