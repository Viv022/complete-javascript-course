'use strict';

function Roll(){
    return Math.ceil(Math.random() * 6);
}
//change image of dice roll
let diceimage = document.querySelector('.dice');
console.log(diceimage);
let diceroll = document.querySelector('.btn--roll')
console.log(diceroll)
let currscore = document.querySelector('#current--0')
let currscore2 = document.querySelector('#current--1')
console.log(currscore)
let holdbtn = document.querySelector('.btn--hold')
let firstScore = document.querySelector('#score--0')
let secondScore = document.querySelector('#score--1')

let newGame = document.querySelector('.btn--new')

let p0 = document.querySelector('.player--0')
let p1 = document.querySelector('.player--1')


diceroll.addEventListener('click',function(){
    if(isGameOver())return;

    let value = Roll();
    diceimage.src = `dice-${value}.png`;
    diceimage.classList.remove('hidden');

    console.log(value);
    let activeClass = p0.classList.contains('player--active') ? p0 : p1;

    if(value == 1){
        //switching player logic
        
        if(activeClass == p0){
            currscore.textContent = "0";
            p0.classList.remove('player--active');
            p1.classList.add('player--active');
        }else if(activeClass == p1){
            currscore2.textContent = "0";
            p1.classList.remove('player--active');
            p0.classList.add('player--active');
        }
    }else{
        if(activeClass == p0){
            let curr = currscore.textContent;
            curr = parseInt(curr);
            curr += value;
            currscore.textContent = String(curr);
        }else if(activeClass == p1){
            let curr = currscore2.textContent;
            curr = parseInt(curr);
            curr += value;
            currscore2.textContent = String(curr);
        }
    }
});

holdbtn.addEventListener('click',function(){
    if(isGameOver())return;
    let activeClass = p0.classList.contains('player--active') ? p0 : p1;
    if(activeClass == p0){
        let scoreToAdd = currscore.textContent;
        scoreToAdd = parseInt(scoreToAdd) + parseInt(firstScore.textContent);
        firstScore.textContent = String(scoreToAdd);
        currscore.textContent = "0";
        p0.classList.remove('player--active');
        if(scoreToAdd >= 100){
            p0.classList.add('player--winner');
            diceimage.classList.add('hidden');

        }else p1.classList.add('player--active');

    }else if(activeClass == p1){
        let scoreToAdd = currscore2.textContent;
        scoreToAdd = parseInt(scoreToAdd) + parseInt(secondScore.textContent);
        secondScore.textContent = String(scoreToAdd);
        currscore2.textContent = "0";
        p1.classList.remove('player--active');
        if(scoreToAdd >= 100){
            p1.classList.add('player--winner');
            diceimage.classList.add('hidden');

        }else p0.classList.add('player--active');
    }
})

newGame.addEventListener('click',function(){
    firstScore.textContent = "0";
    secondScore.textContent = "0";
    currscore.textContent = "0";
    currscore2.textContent = "0";
    p1.classList.remove('player--active');
    p0.classList.add('player--active');
    if(isGameOver()){
        p0.classList.remove('player--winner');
        p1.classList.remove('player--winner');

    }
    diceimage.classList.add('hidden');

})

function isGameOver(){
    if(p0.classList.contains('player--winner'))return true;
    if(p1.classList.contains('player--winner'))return true;
    return false;
}