
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// generate random number and assign computer answer to rock, paper, or scissors.
let compAns = Math.random();

let computerAnswer = function getComputerChoice(compAns){
    if (compAns <= 0.3333333) {
        return rock;
    }
    else if (compAns > 0.3333333 && compAns <= 0.6666666) {
        return paper;
    }
    else {
        return scissors;
    }
}

// run function to get computer answer
// getComputerChoice();

//show computer's choice
console.log(getComputerChoice(compAns));

// prompt to get human answer
let humAns = prompt("rock, paper, or scissors?");

// convert human answer string into variable
let humanAnswer = function getHumanChoice(humAns){
    if (humAns === "rock") {
        return rock;
    } else if (humAns === "paper") {
        return paper;
    } else {
        return scissors;
    }
}
// run converter function
// getHumanChoice();

// display human answers
console.log(getHumanChoice(humAns));


// let computerChoice = getComputerChoice(compAns);
// let humanChoice = getHumanChoice(humAns);

// display who won
function playRound(humanAnswer, computerAnswer, rock, scissors, paper) {
   if (humanAnswer === rock && computerAnswer === scissors) {
       console.log("You win! Rock crushes scissors.");
   }
   else if (humanAnswer === paper && computerAnswer === rock) {
       console.log("You win! Paper covers rock.");
   }
   else if (humanAnswer === scissors && computerAnswer === paper) {
       console.log("You win! Scissors cut paper.");
   }
   else {
       console.log("You lose:(");
   }
}

playRound();


let humanScore = 0;
let computerScore = 0;


