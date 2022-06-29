let userScore = parseInt(0);
let computerScore = parseInt(0);

function computerPlay() {                                    

    const randomNumber = Math.floor(Math.random()*3);            //Math.floor function rounds the number a nearest integer as Math.random returns a floating value. That's why!//
    switch (randomNumber) {

        case 0: 
            return 'rock';

        case 1: 
            return 'paper';

        case 2: 
            return 'siss';
    };  

};

function singleRound (playerSelection, computerSelection) {

if ((playerSelection === 'rock' && computerSelection === 'siss') ||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'siss' && computerSelection === 'paper')) {
        userScore++;
        return 'Player Win';                                           // Statements after Return don't execute.
    } else if((playerSelection === 'siss' && computerSelection === 'rock')||
              (playerSelection ==='rock' && computerSelection === 'paper')||
              (playerSelection === 'paper' && computerSelection === 'siss')){

        computerScore++;        
        return 'Computer Win';                                          // Statements after Return don't execute.
        
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie';
    }
    
    else {
        return 'typo mistake';
    }

}


function myGame() {
    for (var i = 0; i<5; i++) {
        const playerSelection = "rock"
        const computerSelection = computerPlay();
        console.log(`Player selection is ${playerSelection} and Player Score is ${userScore}`);
        console.log(`Computer selection is ${computerSelection} and Computer Score is ${computerScore}`);
        console.log(singleRound(playerSelection, computerSelection));
    
    }
    
}

 console.log(myGame());


