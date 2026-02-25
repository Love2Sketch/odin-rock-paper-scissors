    function getCompAns(){
        let compAns = Math.random();
        return compAns;
    }
    
    // generate random number for computer choice
    getCompAns();

    function getHumAns(){
        let humAns = prompt("Rock, paper, or scissors?");
        return humAns;
    }
    
    // prompt for human choice
    getHumAns();


    // convert random number to choice string
    function getComputerChoice(getCompAns){
        if (getCompAns <= 0.3333333) {
            return "rock";
        }
        else if (getCompAns > 0.3333333 && getCompAns <= 0.6666666) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    getComputerChoice(getCompAns);

    // use function as TOP suggests
    function getHumanChoice(getHumAns){
        if (getHumAns == "rock") {
            return "rock";
        }
        else if (getHumAns == "paper") {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    getHumanChoice();

    // score variables
    let computerScore = 0;
    let humanScore = 0;

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();


        // compare human answer to computer answer and display win or lose
        function playRound() {
            if (humanChoice === "rock" &&  computerChoice === "scissors") {
                console.log("You win!");
                ++ humanScore;
                console.log(humanScore);
                console.log(computerScore);
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("You win!!");
                ++ humanScore;
                console.log(humanScore);
                console.log(computerScore);
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



