function singleRound (playerSelection, computerSelection) {

if ((playerSelection === 'rock' && computerSelection === 'siss') ||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'siss' && computerSelection === 'paper')) {
        console.log('Player win')
    } else if((playerSelection === 'siss' && computerSelection === 'rock')||
              (playerSelection ==='rock' && computerSelection === 'paper')||
              (playerSelection === 'paper' && computerSelection === 'siss')){

        console.log('Computer Win');
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }
    
    else {
        console.log('typo mistake');
    }

}

const playerSelection = 'siss';
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

for (let i = 0; i < 5; i++) {
console.log(`Player selected ${playerSelection}`);
console.log(`Computer selected ${computerSelection}`);
console.log(singleRound(playerSelection, computerSelection));    
}

// console.log(`Player selected ${playerSelection}`);
// console.log(`Computer selected ${computerSelection}`);
// console.log(singleRound(playerSelection, computerSelection)); 
 


