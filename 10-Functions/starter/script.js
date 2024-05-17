'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123',2);
// createBooking('LH123',undefined,1000);

// const flight = 'LH234';
// const vivek = {
//     name : 'Vivek Sarkar',
//     passport : 44232422,
// }

// const checkIn = function(flightNum,passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 44232422){
//         alert('Check in');
//     }else{
//         alert('Wrong passport');
//     }
// }

// checkIn(flight,vivek);
// console.log(flight);
// console.log(vivek);

// const flightNum = flight;
// const passenger = vivek;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000);
//     console.log(person);
// }

// newPassport(vivek);
// checkIn(flight,vivek);

//higher order functions

// const oneword = function(str){
//     return str.replaceAll(' ','');
// }

// const upperFirstWord = function(str){
//     const [first,...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }

// const transformer = function(str,fn){
//     console.log(str);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by ${fn.name}`);
// }

// transformer('Javascript is the best!',upperFirstWord);
// transformer('Javascript is the best',oneword);

// const high5 = function(){
//     console.log(':wave:');
// }
// document.body.addEventListener('click',high5);

// ['Vivek','Martha','Adam'].forEach(high5);

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('vivek');
// greeterHey('steven');
// greet('Hello')('viv');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hello')('viv');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight : `${this.iataCode}${flightNum}`, name});
//     }
// }

// lufthansa.book(238,'vivek grfrs');
// lufthansa.book(424,'john smith');
// console.log(lufthansa);

// const eurowings = {
//     airline : 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const swiss = {
//     airline : 'Swiss',
//     iataCode: 'LX',
//     bookings: [],
// };

// const book = lufthansa.book;
// //does not work

// book.call(eurowings,23,'Sarah William');
// book.call(lufthansa,24,'John Smith');

// const flightData = [432,'George Cooper'];
// book.apply(lufthansa,flightData);
// book.call(eurowings,...flightData);

// //bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings,23); //partial application
// bookEW23('Viv Try');

// //with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa)); //this keyword always points to the element its attached to

// //Partial application
// const addTax = (rate,value) => value + value * rate;
// console.log(addTax(0.1,200));

// // const addVAT = addTax.bind(null,0.23);
// // console.log(addVAT(100));

// //create a HO function for addVAT

// const addVAT = function(rate){
//     return function(value){
//         return value + rate * value;
//     }
// }

// const VAT = addVAT(0.25);

// console.log(VAT(100));

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     displayResults(typ = 'array'){
//         if(typ == 'array')console.log(this.answers);
//         else console.log(`${this.answers.join(', ')}`);
//     },
//     answers: new Array(4).fill(0),
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){

//         const option = Number(prompt(`What is your favourite programming language? 
//         0 : 'JavaScript',
//         1 : 'Python',
//         2 : 'Rust',
//         3 : 'C++',`));

//         if(isNaN(option) || option < 0 || option > 3){
//             alert('Choose a valid option!');
//             this.registerNewAnswer();
//         }else{
//             alert(`You chose ${this.options[option]}`);
//             this.answers[option]++;
//             this.displayResults();
//             this.displayResults('string');
//         }
//     }
// };

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));


// poll.displayResults.call({answers : [5,2,3]},'string');
// poll.displayResults.call({answers : [5,2,3]})
// ;

//IIFE functions
// const runOnce = function(){
//     console.log('This will never run again');
// };

// runOnce();

// //IIFE is not used anymore for restricting access
// (function(){
//     console.log('This will never run again');
// })();

// (() =>console.log('This will never run again'))
// ();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }

// console.log(notPrivate);

//Closures
// const secureBooking = function (){
//     let passengerCount = 0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();
// booker();

// console.dir(booker);

// let f;

// const g = function(){
//     const a = 23;
//     f = function(){ //f can still access a
//         console.log(a*2);
//     }
// }

// const h = function(){
//     const b = 777;
//     f = function(){
//         console.log(b*2);
//     }
// }

// g();
// f();
// console.dir(f);
// //change closure of f
// h();
// f();
// console.dir(f);

// //Example 2
// const boardPassengers = function(n,wait){
//     const perGroup = n/3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups , each with ${perGroup} passengers`);
//     },wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// boardPassengers(180,3);

// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

    
//     document.querySelector('body').addEventListener('click', function(){
//         header.style.color = 'blue';
//     });
    
// })();