function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    if (n == 0){
        return "Rock";
    }
    else if (n == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getWinner(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice == computerChoice){
        return "It's a draw! You both chose " + playerChoice + "."
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"){
        return "You win! Rock beats scissors."
    }
    else if (playerChoice == "rock" && computerChoice == "paper"){
        return "You lose! Paper beats rock."
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "You win! Scissors beats paper."
    }
    else if (playerChoice == "scissors" && computerChoice == "rock"){
        return "You lose! Rock beats scissors."
    }
    else if (playerChoice == "paper" && computerChoice == "scissors"){
        return "You lose! Scissors beats paper."
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        return "You win! Paper beats rock."
    }
}

window.onclick = playGame;

function playGame(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt();
        console.log(getWinner(playerChoice, getComputerChoice()))
    }
}