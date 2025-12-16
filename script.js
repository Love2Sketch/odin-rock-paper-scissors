
let compAns = Math.random();

function getComputerChoice(compAns){
    if (compAns <= 0.3333333) {
        console.log("rock");
    }
    else if (compAns > 0.3333333 && compAns <= 0.6666666) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
}

getComputerChoice(compAns);
