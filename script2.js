// generate random number and calculate computer answer
let compAns = Math.random();

function getComputerChoice(compAns){
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
// run computer answer converter function
getComputerChoice(compAns);

// display computer answer
console.log(getComputerChoice(compAns));
// console.log(typeof(getComputerChoice(compAns))) // confirmed this is returning a string

// ask for human answer
let humAns = prompt("rock, paper, or scissors?").toLowerCase();

// use function as TOP suggests... seems unnecessary
function getHumanChoice(humAns){
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

// display human answer
console.log(getHumanChoice(humAns));

// score variables
let computerScore = 0;
let humanScore = 0;

// compare human answer to computer answer and display win or lose
function playRound() {
    if (getHumanChoice(humAns) == "rock" &&  getComputerChoice(compAns) == "scissors") {
        console.log("You win!");
        ++ humanScore;
        console.log(humanScore);
        console.log(computerScore);
    } else if (getHumanChoice(humAns) == "paper" && getComputerChoice(compAns) == "rock") {
        console.log("You win!!");
        ++ humanScore;
        console.log(humanScore);
        console.log(computerScore);
    } else if (getHumanChoice(humAns) == "scissors" && getComputerChoice(compAns) == "paper") {
        console.log("You win!!!");
        ++ humanScore;
        console.log(humanScore);
        console.log(computerScore);
    } else {
        console.log("You lose :(");
        ++ computerScore;
        console.log(humanScore);
        console.log(computerScore);
    }
    
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();


