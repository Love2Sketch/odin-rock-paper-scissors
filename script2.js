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
let humAns = prompt("rock, paper, or scissors?");

// console.log(typeof(humAns)); // this is a string

// display human answer
console.log(humAns);


// compare human answer to computer answer and display win or lose
function playRound(humAns, getComputerChoice) {
    if (humAns == "rock" &&  getComputerChoice(compAns) == "scissors") {
        console.log("You win!");
    } else if (humAns == "paper" && getComputerChoice(compAns) == "rock") {
        console.log("You win!!");
    } else if (humAns == "scissors" && getComputerChoice(compAns) == "paper") {
        console.log("You win!!!");
    } else {
        console.log("You lose :(");
    }
    
}
// run comparing function
playRound();