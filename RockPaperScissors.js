console.log(getUserChoice());
console.log(getComputerChoice());

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
            return "Error!";
    
    }
}


function getUserChoice() {
    let sign = window.prompt("Let's play a game! \n Choose either Rock, Paper, or Scissors and see how you do against the computer");
   
    //clean up the input to only choose from three options and gracefully handle input errors.

    switch (sign.toLowerCase()){
        case "rock":
            return ("You chose Rock");
            break;
        
            case "paper":
            return ("You chose Paper");
            break;

        case "scissors":
            return ("You chose Scissors");
            break;

        default:
            return (sign + " isn't a valid input - try again if you want to!");// "that wasn't a valid input, try again if you want to")
            r

    }
}


