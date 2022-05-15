const options = ['rock', 'paper', 'scissors'];

// randomly return either rock, paper, scissor
function computerPlay() {

    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection)
    {
        return "tie";
    }

    let playerWins = false;
    switch (playerSelection)
    {
        case "rock":
            if (computerSelection == "scissors") playerWins = true; 
            break;
        case "paper":
            if (computerSelection == "rock") playerWins = true;
            break;
        case "scissors":
            if (computerSelection == "paper") playerWins = true;
            break;
        default:
            return "Invalid input...";
    }

    if (playerWins)
    {
        return "player";
    }
    return "computer";
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Please enter rock, paper, or scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == "tie")
        {
            console.log("Tie! You both chose " + computerSelection);
        }
        else if (result == "player")
        {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
        }
        else if (result == "computer")
        {
            console.log("You lose :( " + computerSelection + " beats " + playerSelection);
        }
        else
        {
            console.log("Invalid input...");
        }
    }
}

game();
