function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It a Tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
