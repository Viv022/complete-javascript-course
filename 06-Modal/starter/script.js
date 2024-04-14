'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function() {
    //console.log("Button clicked");
    modal.classList.remove('hidden'); // for multiple use commas
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0 ; i<btnsOpenModal.length ; i++) {
    //console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click',openModal);
}


btnCloseModal.addEventListener('click', closeModal);

//when we click outside the modal, close the modal

overlay.addEventListener('click', closeModal);
    
//how to respond to keyboard events??
document.addEventListener('keydown',function(e){
    if(e.key == 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})