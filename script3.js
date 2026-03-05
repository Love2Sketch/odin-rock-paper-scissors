//play the game- play rounds, find winner 
function playGame(){


    //score variables
    let humanScore = 0;
    let computerScore = 0;


    //round function- gen computer choice, get human choice, display choices, compare choices, log scores
    function playRound(){

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

        let computerChoice = getComputerChoice();

        // prompt for human answer
        function getHumanChoice(){
            let humAns = prompt("Rock, Paper, or Scissors?").toLowerCase();
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

        let humanChoice = getHumanChoice();

        //display choices
        console.log(computerChoice);
        console.log(humanChoice);

        //find winner for round
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
                console.log("Scissors gets smashed by rock. You lose:(");
            }
            else if (computerChoice == "paper" && humanChoice == "rock") {
                ++computerScore;
                console.log("Rock gets covered by paper. You lose:(");
            }
            else if (computerChoice == "scissors" && humanChoice == "paper") {
                ++computerScore;
                console.log("Paper gets cut by scissors. You lose:(");
            }
            else {
                console.log("It's a tie!");
            }
        //display round scores
        console.log(computerScore);
        console.log(humanScore);
    }
    //play rounds one through five
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    //find who wins the game
    if (computerScore > humanScore) {
        console.log("Computer Won the Game!");
    }
    else if (computerScore < humanScore) {
        console.log("You Won the Game!");
    }
    else {
        console.log("The Game was a Tie");
    }

}

//activate game
playGame();

