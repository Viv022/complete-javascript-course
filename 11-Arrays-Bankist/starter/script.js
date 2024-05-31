'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements,sort  = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;

  movs.forEach(function(mov,i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

//displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// // console.log(arr.slice(2,4));
// // console.log(arr.slice(1,-2));
// // console.log(arr.slice());
// // console.log([...arr]);

// // //SPLICE
// // console.log(arr.splice(2));
// // arr.splice(-1);
// // arr.splice(1,2);
// // console.log(arr);

// //Reverse
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse()); //mutates the array
// console.log(arr2);

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);

// //join
// console.log(letters.join(' - '));

// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr.slice(-1)[0]); //last element
// console.log(arr.at(-2));

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉
*/
const Julia =  [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

/*
Julia = [9, 16, 6, 8, 3];
Kate = [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(dogsJulia, dogsKate) {
//   const newJulia = [...dogsJulia];
//   newJulia.shift();
//   newJulia.splice(-2);
//   newJulia.push(...dogsKate);
//   newJulia.forEach(function(age,i){
//     const msg = age < 3 ? "still a puppy 🐶" : "an adult";
//     console.log(`Dog number ${i+1} is ${msg}`);
//   });
//   return newJulia;
// }

//can also use .concat method

// const newDogs = checkDogs(Julia,Kate);
// console.log(newDogs);

// //map creates a new array
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(mov =>
//   Math.round(mov * euroToUsd));

// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements){
//   movementsUSDfor.push(mov * euroToUsd);
// }
// console.log(movementsUSDfor);

const movementsDescription = movements.map((mov,i) =>{
  if(mov > 0){
    return  `Movement ${i+1}: You deposited ${mov}`;
  }else{
    return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`;
  }
});

//console.log(movementsDescription);

//forEach has side effects

//const user = 'Steven Thomas Williams';

const createUserNames = function(accs){
  const accountsName = accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(part => part[0]).join('');
  });
}

createUserNames(accounts);
//console.log(accounts);

// const deposits = movements.filter(mov => mov > 0);
// //console.log(deposits);

// const depositsFor = [];
// for(const mov of movements)if(mov > 0)depositsFor.push(mov);
// //console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// //console.log(withdrawals);

// const balance = movements.reduce(function(acc,curr){
//   return acc + curr;
// },0);

//console.log(balance);

const calcDisplayBalance = function(acc) {
  const balance = acc.movements.reduce((acc,mov) => acc+mov,0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`
};

//calcDisplayBalance(account1.movements);

const max = movements.reduce((acc,mov) => Math.max(acc,mov),movements[0]);
//console.log(max);

// Coding Challenge #2

/* 


1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

*/

//TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
//TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

//GOOD LUCK 😀

// function calcAverageHumanAge(data){
//   const humanAge = data.map(age =>
//     age > 2 ? 16 + age * 4 : 2 * age
//   ).filter(age => age >= 18);

//   const averageAge = humanAge.reduce((acc,age)=>acc + age/humanAge.length ,0);

//   console.log(averageAge);
// }

// calcAverageHumanAge(ages);

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc,movement)=>acc + movement,0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc,movement)=>acc + movement,0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(dep => dep * acc.interestRate).filter((inter)=>inter >= 1).reduce((acc,inter)=>acc + inter,0);
  labelSumInterest.textContent = `${interest}€`
}

//calcDisplaySummary(account1.movements);

const firstWithdrawal = movements.find(mov =>mov < 0);
//console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(account);


let currentAccount;

function updateUI(currentAccount){
  //Display movements
displayMovements(currentAccount.movements);
//Display balance
calcDisplayBalance(currentAccount);
//Display summary
calcDisplaySummary(currentAccount);
}
//Event handlers
btnLogin.addEventListener('click',function(e) {
  e.preventDefault(); //prevent form from submitting
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
   
  }
});

btnTransfer.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username ===inputTransferTo.value);
  //console.log(amount,receiverAcc);

  if(amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc?.username !== currentAccount.username){
    //console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);

  }

  

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});

btnClose.addEventListener('click',function(e) {
  e.preventDefault();
  //console.log('Delete');

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    
    //console.log(index);
    //deleting the account
    accounts.splice(index,1);
    inputCloseUsername.value = '';
    inputClosePin.value = '';
    //hide UI
    containerApp.style.opacity = 0;
  }
});

// const anyDeposits = movements.some(mov => mov > 0);

//some condition
btnLoan.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    
  }
  inputLoanAmount.value = '';
});

//every condition
// console.log(account4.movements.every(mov => mov > 0));

// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr.flat());

// const arr2 = [[[1,2],3],[4,[5,6]],[7,8,9]];
// console.log(arr2.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
//console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc,mov) => acc + mov,0);

// const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc + mov,0);
// console.log(overallBalance);

// //flatmap
// const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc + mov,0);

// const owners = ['Vivek','Zach','Adam','Martha'];
// console.log(owners.sort());

// movements.sort((a,b) => a-b);
// console.log(movements);

let sorted = false;
btnSort.addEventListener('click',function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
})

// const x = new Array(7);
// x.fill(1,3);
// console.log(x);

// //Array.from
// const y = Array.from({length : 7},() => 1);
// console.log(y);
// const z = Array.from({length : 7},(_,i) => i+1);
// console.log(z);

//suppose movements is only present in UI

labelBalance.addEventListener('click',function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value')).map(mov => Number(mov.textContent.replace('€','')));

  console.log(movementsUI);
});

//Array Methods Practice

// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum,cur)=>sum+cur,0);
// console.log(bankDepositSum);

// //count number of deposits with at least 1000 dollars
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).reduce((acc,mov) => acc + (mov >= 1000),0);
// console.log(numDeposits1000);

//create an object which contains sum of deposits and withdrawals

// const {deposits,withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums,cur)=> {
//   // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return sums;
// },{deposits : 0,withdrawals : 0});

// console.log(deposits,withdrawals);

// const convertTitleCase = function(title){
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a','an','the','but','or','in','with','and'];
//   const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');

//   return capitalize(titleCase);

// }
// console.log(convertTitleCase('and this is a nice title But NoT too long'));

// dogs.forEach(function(dog){
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// });
// console.log(dogs);

// const isUnderWeight = (cur,recom) => cur < 0.9 * recom;

// const isOverWeight = (cur,recom) => cur > 1.1 * recom;

// dogs.forEach(function(dog){
//   if(dog.owners.includes('Sarah')){
//     if(isUnderWeight(dog.curFood,dog.recommendedFood)){
//       console.log('Dog is under weight');
//     }else if(isOverWeight(dog.curFood,dog.recommendedFood)){
//       console.log('Dog is over weight');
//     }
//   }
// });

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(function(dog){
//   if(isUnderWeight(dog.curFood,dog.recommendedFood)){
//     ownersEatTooLittle.push(...dog.owners);
//   }else if(isOverWeight(dog.curFood,dog.recommendedFood)){
//     ownersEatTooMuch.push(...dog.owners);

//   }
// });

// console.log(ownersEatTooLittle,ownersEatTooMuch);

// const underWeightOwners = ownersEatTooLittle.join(' and ').concat("'s dogs eat too little\n");
// const overWeightOwners = ownersEatTooMuch.join(' and ').concat("'s dogs eat too much");
// console.log(underWeightOwners,overWeightOwners);

// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// const checkDogs = dogs => dogs.some(dog => !isOverWeight(dog.curFood,dog.recommendedFood) && !isUnderWeight(dog.curFood,dog.recommendedFood));

// console.log(checkDogs(dogs));

// const goodDogs = [];

// dogs.forEach(function(dog) {
//   const newDog = [];
//   newDog.push(dog);
//   if (checkDogs(newDog)) goodDogs.push(newDog);
// });
// console.log(goodDogs);

// const newDogs = dogs.slice();
// console.log(newDogs);
// newDogs.sort((a,b) => a.recommendedFood - b.recommendedFood);
// console.log(newDogs);