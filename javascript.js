const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// randomly return either rock, paper, scissor
function computerPlay() {

    return options[Math.floor(Math.random() * options.length)];
}

// play a round of rock, paper, scissors
function playRound(e) {
    let playerSelection = this.getAttribute('id'); 
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();

    const resultContainer = document.querySelector(".result");

    if (playerSelection == computerSelection)
    {
        resultContainer.textContent = "Tie! You both chose " + computerSelection;
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ||
              (playerSelection == "paper" && computerSelection == "rock") ||
              (playerSelection == "scissors" && computerSelection == "paper"))
    {
        resultContainer.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
        const scoreContainer = document.querySelector(".player-score");
        scoreContainer.textContent = playerScore;
    }
    else
    {
        resultContainer.textContent = "You lose :( " + computerSelection + " beats " + playerSelection;
        computerScore++;
        const scoreContainer = document.querySelector(".computer-score");
        scoreContainer.textContent = computerScore;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
