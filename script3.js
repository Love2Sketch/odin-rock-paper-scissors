// generate random number for answer
let compAns = Math.random();

// convert number to answer
function getComputerChoice(){
    if (compAns <= 0.3333333) {
            return "rock";
        }
        else if (compAns > 0.3333333 && compAns <= 0.6666666) {
            return "paper";
        }
        else {
            return "scissors";
        }
}


console.log(getComputerChoice(compAns));

// prompt for human answer
let humAns = prompt("Rock, Paper, or Scissors?").toLowerCase();

function getHumanChoice(){
    if (humAns == "rock") {
            return "rock";
        }
        else if (humAns == "paper") {
            return "paper";
        }
        else {
            return "scissors";
        }
}

console.log(getHumanChoice(humAns));

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// compare for winnning conditions
function playRound(computerChoice, humanChoice){
    if (computerChoice == "scissors" && humanChoice == "rock") {
            return "Rock smashes scissors. You won!";
        }
        else if (computerChoice == "rock" && humanChoice == "paper") {
            return "Paper covers rock. You won!";
        }
        else if (computerChoice == "paper" && humanChoice == "scissors") {
            return "Scissors cuts paper. You won!";
        }
        else {
            return "You lost:(";
        }
}

// run and display results
playRound(computerChoice, humanChoice);
console.log(playRound(computerChoice, humanChoice));