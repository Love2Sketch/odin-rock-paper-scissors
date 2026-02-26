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

// compare for winnning conditions, increment scores
function playRound(computerChoice, humanChoice){
    if (computerChoice == "scissors" && humanChoice == "rock") {
            ++humanScore;
            console.log("Rock smashes scissors. You win!");
        }
        else if (computerChoice == "rock" && humanChoice == "paper") {
            ++humanScore;
            console.log("Paper covers rock. You win!");
        }
        else if (computerChoice == "paper" && humanChoice == "scissors") {
            ++humanScore;
            console.log("Scissors cuts paper. You win!");
        }
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            ++computerScore;
            console.log("Rock smashes scissors. You lose:(");
        }
        else if (computerChoice == "paper" && humanChoice == "rock") {
            ++computerScore;
            console.log("Paper covers rock. You lose:(");
        }
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            ++computerScore;
            console.log("Scissors cuts paper. You lose:(");
        }
        else {
            console.log("It's a tie!");
        }
}

// run and display results
playRound(computerChoice, humanChoice);

console.log(computerScore);
console.log(humanScore);

