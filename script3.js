// generate random number for answer
// convert number to answer
function getComputerChoice(){
    let compAns = Math.random();
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
// let computerChoice = getComputerChoice();

// prompt for human answer
function getHumanChoice(){
    let humAns = prompt("Rock, Paper, or Scissors?");
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
// let humanChoice = getHumanChoice();

// console.log(humanChoice);

//score variables
let humanScore = 0;
let computerScore = 0;

// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();

//play the game
function playGame(){

// compare for winnning conditions, increment scores
function playRound(){
    // getComputerChoice();
    // getHumanChoice();
    console.log(getComputerChoice());
    console.log(getHumanChoice());
    if (getComputerChoice() == "scissors" && getHumanChoice == "rock") {
            ++humanScore;
            console.log("Rock smashes scissors. You win!");
        }
        else if (getComputerChoice() == "rock" && getHumanChoice == "paper") {
            ++humanScore;
            console.log("Paper covers rock. You win!");
        }
        else if (getComputerChoice() == "paper" && getHumanChoice == "scissors") {
            ++humanScore;
            console.log("Scissors cuts paper. You win!");
        }
        else if (getComputerChoice() == "rock" && getHumanChoice == "scissors") {
            ++computerScore;
            console.log("Rock smashes scissors. You lose:(");
        }
        else if (getComputerChoice() == "paper" && getHumanChoice == "rock") {
            ++computerScore;
            console.log("Paper covers rock. You lose:(");
        }
        else if (getComputerChoice() == "scissors" && getHumanChoice == "paper") {
            ++computerScore;
            console.log("Scissors cuts paper. You lose:(");
        }
        else {
            console.log("It's a tie!");
        }
    console.log(computerScore);
    console.log(humanScore);
}
//round one
playRound(getComputerChoice, getHumanChoice);

// round two
playRound(getComputerChoice, getHumanChoice);

}

playGame(getComputerChoice, getHumanChoice);

