function singleRound (computerSelection, playerSelection) {

    if (playerSelection === "rock" && computerSelection === "siss") {
        console.log('Player Win');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player Win');
    } else if (playerSelection === 'siss' && computerSelection === 'paper') {
        console.log('Player Win');
    } else if (playerSelection === 'siss' && computerSelection === 'rock') {
        console.log('Computer Win');
    } else if (playerSelection ==='rock' && computerSelection === 'paper') {
        console.log('Computer Win');
    } else if (playerSelection === 'paper' && computerSelection === 'siss') {
        console.log('Computer Win');
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie");
    } else {
        console.log("Typo Error");
    }
}   
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    
    
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
    
    // console.log(computerSelection);
    console.log(`Player Selection is ${playerSelection}`);
    console.log(`Computer selection is ${computerSelection}`);
    console.log(singleRound(playerSelection, computerSelection)); 
     
    
    
    