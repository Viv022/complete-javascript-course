'strict-mode'
//shallow freeze
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
spendingLimits.jay = 200;
console.log(spendingLimits);

const getLimit = (limits,user) => limits?.[user] ?? 0;

//pure function
const addExpense = function (state,limits,value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return  value <= getLimit(cleanUser) ? 
    [...state, { value: -value,description, user: cleanUser}] : state;
    //budget.push({ value: -value,description, user: cleanUser});
};

const newBudget1 = addExpense(budget,spendingLimits,10, 'Pizza 🍕');

const newBudget2 = addExpense(newBudget1,spendingLimits,100, 'Going to movies 🍿', 'Matilda');

const newBudget3 = addExpense(newBudget2,spendingLimits,200, 'Stuff', 'Jay');

console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

const checkExpenses = (state,limits) =>
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits,entry.user))
  //     entry.flag = 'limit';
  
  state.map(entry => 
    entry.value < -getLimit(limits,entry.user) ? {...entry,flag: 'limit'} : entry
  );


const finalBudget = checkExpenses(newBudget3,spendingLimits);

console.log(finalBudget);
console.log(budget);

const logBigExpenses = function (bigLimit,state) {
  // let output = '';
  // for (const entry of budget) {
  //     output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '' // Emojis are 2 chars 
  // }

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join('/');

  console.log(bigExpenses);

};

logBigExpenses(1000,finalBudget);
