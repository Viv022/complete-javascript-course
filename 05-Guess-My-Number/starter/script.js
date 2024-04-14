'use strict';


//console.log(document.querySelector('.message').textContent); //get entire element and its text content

//document.querySelector('.message').textContent = 'Correct number!';

//document.querySelector('.number').textContent = 13;

//document.querySelector('.score').textContent = 10;

//document.querySelector('.guess').value = 23; //manipulate textbox value

let secretNumber = 1 + Math.trunc(20 * Math.random());
let score = 20; //store score in code instead of DOM only
let highscore = 0; //store highscore in code instead of DOM only

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    //when there is no guess
    if(!guess) {
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');

        //when player wins
    }else if(guess === secretNumber) {

         displayMessage('Correct number!');
        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }
        
        //when guess is too high
    
    }else{

        //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';

        displayMessage(guess > secretNumber ? 'Too high' : 'Too low');

        if(score > 1){
            score --;
            document.querySelector('.score').textContent = score;
        }else document.querySelector('.score').textContent = 'you lost the game!'
    }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = '20';
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = 1 + Math.trunc(20 * Math.random());
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
});







