//Declare and initialise scores

let humanScore    = 0;
let computerScore = 0;
let humanWin = false;
let computerWin = false;
let gameLength = 5; //How many rounds of the game to play

//declaring functions
//playRound is the individual round which is looped "gameLength" times
function playRound(humanChoice, computerChoice){
    console.log("You chose", humanChoice, ", the computer chose", computerChoice)

    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
        humanWin = true;
        computerWin = true;
        return;
    }

    if (humanChoice == "Rock"){
        if (computerChoice == "Paper"){
            console.log("The computer won that, paper wraps rock") 
            return computerWin = true, humanWin = false;
        }
        if (computerChoice == "Scissors"){
            console.log("You won that, rock blunts scissors")
            return humanWin = true, computerWin = false;
        }
    }
    
    if (humanChoice == "Paper"){
        if (computerChoice == "Rock"){
            console.log("You won that, paper wraps rock")
            return humanWin = true, computerWin = false;
        }
        if (computerChoice == "Scissors"){
            console.log("The computer won that, scissors cut paper")
            return computerWin = true, humanWin = false;
        }
    }

    if (humanChoice == "Scissors"){
        if (computerChoice == "Rock"){
            console.log("The computer won that, rock blunts scissors")
            return computerWin = true, humanWin = false;
        }
        if (computerChoice == "Paper"){
            console.log("You won that, scissors cut paper")
            return humanWin = true, comp = false;
        }
    }
     
    } 

function getComputerChoice(){
    const maxValue = 3;

    switch (Math.floor(Math.random() * maxValue)){
        
        case 0:
            return "Rock";
            break;
        
        case 1:
            return "Paper";
            break;
    
        case 2:
            return "Scissors";
            break;
    
        default:
            console.log("error with the computer selection process!")
            return "Error!";
    
    }
}


function getUserChoice() {
    let sign = window.prompt("Let's play a game! \nChoose either Rock, Paper, or Scissors.\nSee how you do against the computer");
   
    //clean up the input to only choose from three options and gracefully handle input errors.

    switch (sign.toLowerCase()){
        case "rock":
            return "Rock";
            break;
        
            case "paper":
            return "Paper";
            break;

        case "scissors":
            return "Scissors";
            break;

        default:
            return (sign + " isn't a valid input - try again if you want to!\n");

    }
}


function playGame(gameLength){
// initialise the variables and play the correct number of rounds of the game
       for (let i = 0; i < gameLength; i++){
           playRound(getUserChoice(), getComputerChoice())
//update the scores
                if (humanWin==true) {
                    humanScore ++;
                }
        
                if (computerWin==true){
                        computerScore ++;
                }

           console.log("Your score is " + humanScore, " The computer's score is " + computerScore)
        }
       if (humanScore > computerScore) {
        console.log("You won!")
        }

       if (humanScore < computerScore) {       
        console.log("You lost!")
        }

       if (humanScore == computerScore) {
        console.log("It was a tie!")
        }
       
       console.log("Your final score was " + humanScore, " The computer's score was " + computerScore)

     
   
}

   playGame(gameLength);
