let userScore = parseInt(0);
let computerScore = parseInt(0);


function computerPlay() {

    const randomNumber = Math.floor(Math.random() * 3); //Math.floor function rounds the number a nearest integer as Math.random returns a floating value. That's why!//
    switch (randomNumber) {

        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'siss';
    };

};

function singleRound(playerSelection, computerSelection) {

    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'siss') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'siss' && computerSelection === 'paper')) {
        userScore++;
        return 'Player Win'; // Statements after Return don't execute.
    } else if ((playerSelection.toLowerCase() === 'siss' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'siss')) {

        computerScore++;
        return 'Computer Win'; // Statements after Return don't execute.

    } else if (playerSelection.toLowerCase() === computerSelection) {
        return 'It\'s a tie';
    } else {
        return 'typo mistake';
    }

}


function myGame() {
    for (var i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter either of Rock, Paper or Siss:")
        const computerSelection = computerPlay();
        console.log(`Player selection is ${playerSelection} and Player Score is ${userScore}`);
        console.log(`Computer selection is ${computerSelection} and Computer Score is ${computerScore}`);
        console.log(singleRound(playerSelection, computerSelection));

    }

}

console.log(myGame());