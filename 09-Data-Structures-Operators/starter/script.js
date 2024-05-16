'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//this is an object literal
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0,time = '20:00',address}){
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// restaurant.orderPizza('mushrooms', 'onions','spinach');

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//spread operator also works on objects

// const newRestaurant = {...restaurant, founder : 'Guiseppe'};

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Restaurant Goloka'

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery ({
//   time: '22:30',
//   address: 'Via del sol,21 ',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del sol,21'
// })

// const arr = [2,3,4,5,6,7,8,9,10];
// const [x,y,z] = arr;
// console.log(`${x} ${y} ${z}`);

// let [main,secondary] = restaurant.categories;

// [secondary,main] = [main,secondary]; //switching variables 
// console.log(main, secondary);

// const [starter,mainm] = restaurant.order(2,0);

// //nested destructuring
// const nested = [2,4, [5,6]];
// // const [i,,j] = nested;
// const[i,,[j,k]] = nested;
// console.log(i,j,k);

// //Default values
// const [p = 1,q = 1,r = 1] = [8,9];
// console.log(p,q,r);


const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  },

  
];

// const [firstBook, secondBook] = books;
// console.log(firstBook,secondBook);
// const[,,thirdBook] = books;
// console.log(thirdBook);

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const[[,rating],[,ratingsCount]] = ratings;
// console.log(rating,ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings ,threeStarRatings = 0] = ratingStars;

// console.log(threeStarRatings);


// const {name, openingHours, categories} = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name : restaurantName, 
//   openingHours : Hours, 
//   categories: tags
// } = restaurant;

//Assignment 2.2
// const {menu = [], starterMenu : starters = []} = restaurant;

// console.log(menu,starters);

// //mutating variables
// let a = 111;
// let b = 999;

// const obj = {a:23, b:7 , c:14};

// ({a,b} = obj);
// console.log(a,b);

// //nested objects

// const {name, openingHours, categories} = restaurant;
// const {fri : {open,close}} = openingHours;
// console.log(open,close);


// const [firstBook] = books;

// console.log(firstBook);

// const {title,author,ISBN} = firstBook;
// console.log(title,author,ISBN);

// const {keywords : tags} = books[0];
// console.log(tags);

// const {language,programmingLanguage = 'unknown'} = books[6];
// console.log(language,programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({title : bookTitle, author : bookAuthor} = books[0]);

// console.log(bookTitle,bookAuthor);
// const {thirdParty : {goodreads : {rating : bookRating}}} = books[0];

// console.log(bookRating);

// const printBookInfo = function({title,author: [firstAuthor, ...restAuthors],year = 'year unknown'}){
//   console.log(`Title: ${title} author: ${author} year: ${year}`);
// }

// printBookInfo(books[0]);


//spread operations

// const arr = [7,8,9];
// const newArr = [1,2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //shallow copying
// const mainMenuCopy = [...restaurant.mainMenu];
// //join two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables : arrays, strings, maps, sets, not objects

// const str = 'Vivek';
// const letters = [...str, ' ', 'S.']; //only exected in functions or building a new array
// console.log(letters); 

//Spread operator
// const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// function spellWord(...str){ //rest pattern
//   console.log(str);
// }

// spellWord('JavaScript', 'Java');

// const arr = [1,2, ...[3,4]];
// const [a,b, ...others] = [1,2,3,4,5];

// console.log(arr,others);

// const [Pizza,Risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(Pizza,Risotto,otherFood);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// const add = function(...args) {
//   const sum = args.reduce((accumulator, val) => accumulator + val, 0);
//   console.log(sum);
// }

// add(2,3);
// add(5,3,7,2);

// const x = [1,2,3,4,5];
// add(...x);


// const {keywords : [mainKeyword, ...rest]} = books[0];
// console.log(mainKeyword,rest);

// const {publisher : bookPublisher, ...restOfTheBook} = books[1];

// console.log(bookPublisher,restOfTheBook);

// function printBookAuthorsCount(title,...authors){
//   console.log(`The book ${title} has ${authors.length} authors`);
// }

// printBookAuthorsCount(books[1].title, ...books[1].author);


// function hasExamplesInJava(obj){
//   const languages = (obj.programmingLanguage || '').split(',').map(lang => lang.trim());

//   // Check if any language in the array is 'Java'
//  //return languages.includes('Java');


//   return languages. reduce((accumulator,val) => accumulator || (val === 'Java'),false);
// }

// for (const book of books){
//   console.log(hasExamplesInJava(book));
// }

// for(const book of books){
//   book.onlineContent && console.log(`${book.title} provides online content`);
// }

// // ?? is nullish coalescing operator

// for(const book of books){
//   book.onlineContent || console.log(`${book.title} provides no data about its online content.`);
// }

// for(const book of books){
//   book.edition ??= 1;
//   console.log(book.edition);
// }

// for(const book of books){
//   book.highlighted = (book.thirdParty.goodreads.rating >= 4.2);
//   console.log(book.highlighted);
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2

/* 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/

// for(let i = 0 ; i < game.scored.length; i++) {
//   console.log(`Goal ${i+1} : ${game.scored[i]}`);
// }

// const odds = Object.values(game.odds);
// const sum = Math.round(odds.reduce((acc,val) => acc + val, 0) / odds.length * 100) / 100;
// console.log(sum);

// function createGoalScorers(obj){
//   const newObject = {

//   };

//   for(const scorer of obj.scored){
//     newObject[scorer] ? newObject[scorer]++ : (newObject[scorer] = 1);
//   }

//   return newObject;
// }

// const scorers = createGoalScorers(game);
// console.log(scorers);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu)console.log(item);

// for(const [i,el] of menu.entries()){
//   console.log(`${i+1} : ${el}`);
// }

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1]
//   // ...
// };

// for(const [key,val] of bookData.values()) {
//   newBook[key] = val;
// }

// console.log(newBook);

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   // ...
//   pages,
// }

// console.log(newBook2);

//es6 object literal

//we can compute to get the key

//optional chaining
// console.log(restaurant.openingHours.mon.open);

// if(restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);

//hefty for quickly nested objects

//with optional chaining

// console.log (restaurant.openingHours?.mon?.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for(const day of days){
//   console.log (day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log (`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1) ?? "Method does not exist"); //call if method exists

// //arrays
// const users = [{name: 'viv', email: 'helloviv@gmail.com'}];
// console.log(users[0]?.name ?? 'User array empty');


// function getFirstKeyword(obj){
//   console.log(obj.keywords?.[0]);
// }

// getFirstKeyword(books[0]);


const openingHours =  {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days`;
// console.log(properties);

// const vals = Object.values(openingHours);
// console.log(vals);

// const entries = Object.entries(openingHours);
// console.log(entries);

// entries.forEach(e => console.log(e));

// for(const [key, {open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const entries = [];

// for(const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// //console.log(entries);


// const enter = Object.entries(books[0].thirdParty.goodreads);
// //console.log(enter);

// for(const [index,value] of Object.values(books[0].thirdParty.goodreads).entries()){
//   entries[index].push(value);
// }

// //console.log(entries);

// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries2);

//sets and maps

// const ordersSet = new Set(['Pasta','Pizza','Pasta','Pizza','Risotto']);
// console.log(ordersSet);

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //ordersSet.add();
// //ordersSet.delete();
// for(const order of ordersSet)console.log(order);

// const staff = ['Waiter','Chef','Waiter','Manager'];

// const staffUnique = [...new Set('Gorilla')];
// console.log(staffUnique);

// const allKeywords = [];

// for(const {keywords} of books){
//   allKeywords.push(...keywords);
// }

// console.log(allKeywords);

// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');

// uniqueKeywords.delete('business');

// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// const rest = new Map();
// rest.set('name','Classico Italiano');
// console.log(rest);

//rest.get();
//rest.delete();
//rest.has();

//map keys should point to the same memory location for get operation in heap

// rest.set(document.querySelector('h1'),'Heading');
// console.log(rest);

// const question = new Map([['question', 'What is the best programming language?'],[1,'C'],[2,'Java'],[3,'JavaScript'],['correct',3],[true,'Correct'],[false,'Try again']]);

// console.log(question);
// console.log(Object.entries(openingHours));

// //convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for(const [key, value] of question) {
//   if(typeof key === 'number')console.log(`Answer ${key} : ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// // window.alert(question.get(answer === question.get('correct') ));

// console.log([...question]);

// const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);

// bookMap.set('pages',464);

// const title = bookMap.get('title');
// const author = bookMap.get('author');

// console.log(`${title} by ${author}`);
// console.log(bookMap.size);

// if (bookMap.has('author'))console.log(`The author of the book is ${bookMap.get('author')}`);

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// for(const [key,value] of firstBookMap){
//   if(typeof value === 'number')console.log(key);
// }

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const gameEventsUnique = [...new Set(gameEvents.values())];
// console.log(gameEventsUnique);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

// // gameEvents.forEach((val,key) => key <= 45 ? console.log(`First half ${key} ${val}`) : console.log(`Second half ${key} ${val}`)); 

// for(const [key,val] of gameEvents.entries()) {
//   if (key <= 45)console.log(`First half ${key} ${val}`);
//     else console.log(`Second half ${key} ${val}`);
// }

//strings

// const airline = 'TAP Air India';
// const plane ='A320';

// console.log(plane[0]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(0,airline.lastIndexOf(' ') -2));

// const checkMiddleSeat = function(seat){
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   return console.log(s === 'B' || s === 'E');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof 'Hello');
// console.log(typeof new String('Hello'));

// console.log(airline.toLowerCase());

// const passenger = 'vIvEk';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //check email
// const email = 'hello@vivek.io';
// const loginEmail = ' Hello@Vivek.Io\n';

// const lowerEmail = loginEmail.toLowerCase().trim();
// console.log(lowerEmail);
// console.log(loginEmail.trim());
// console.log(email === lowerEmail);

// //replacing
// const priceGB = '288,97 GB';
// const priceUS = priceGB.replace('GB', '$').replace(',','.');
// console.log(priceUS);

// const announcement = 'Boarding door 23, boarding door 23!';
// console.log(announcement.replace('door','gate'));
// console.log(announcement.replace(/door/g,'gate')); //workaround for replaceAll

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A3'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of the new airbus family');
// }

// const checkBaggage = function(items){
// const baggage = items.toLowerCase();
// if(baggage.includes('knife') || baggage.includes('gun'))console.log('Not allowed');
// else console.log('welcome aboard!!');
// }

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks, shoes, jewellery and camera');
// checkBaggage('I have a gun for protection');

// const index = [6,4,9,8];
// for(const i of index){
// console.log(books[0].ISBN[i]);
// }

// const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));
// console.log(quote.slice(quote.indexOf('boxing')));

// function isContributor(name){
//   name = name.toLowerCase();
//   console.log(name.includes('contributor'));
// }

// isContributor('Julie Sussman (Contributor)');

// function normalizeAuthorName(author){
//   return author.trim().toLowerCase().replace(/(^|\s)\S/g, match => match.toUpperCase()).replace(/\([^()]*\)/g, '');
// }

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// const newBookTitle = books[1].title.replace('Programs','Software');
// console.log(newBookTitle);

// function logBookTheme(title) {
//   title = title.toLowerCase();

//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (title.includes('algorithms') && title.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   } else if ((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating')) {
//     console.log('This book is about some systems, but definitely not about operating systems');
//   }
// }

// books.forEach(book => logBookTheme(book.title));

// //split method

// console.log('a+very+nice+string'.split('+'));
// console.log('Vivek Sarkar'.split(' '));
// const [firstName,lastName] = 'Vivek Sarkar'.split(' ');

// const newName = ['Mr',firstName,lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica and smith davis';

// // const capitalizeName = function(name){
// //   return name.toLowerCase().replace(/(^|\s)\S/g, match =>match.toUpperCase());
// // }

// // console.log(capitalizeName('rretr grJeeSWgrb grtrK'));

// const capitalizeName = function(name){
//   const names = name.toLowerCase().split(' '); //array
//   const newName = [];

//   for(const n of names){
//     newName.push(n.replace(n[0],n[0].toUpperCase()));
//   }

//   console.log(newName.join(' '));
// }

// capitalizeName('vivEk sArKar');

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25,'+').padEnd(35,'+'));
// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*');
// }

// console.log(maskCreditCard(32324213456));
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const a = ':white_check_mark:';
// console.log(a);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// let counter = 1;


// document.querySelector('button').addEventListener('click',function(){
//   const text = document.querySelector('textarea').value;
//   console.log(text);

//   const transform = text.trim().toLowerCase().split('_').map(str => str.replace(str[0],str[0].toUpperCase())).join('');

//   console.log(transform.charAt(0).toLowerCase() + transform.slice(1) + ':white_check_mark:'.repeat(counter));
  
//   counter = counter + 1;

// });

// console.log(flights.split('+'));

// for(const flight of flights.split('+')){
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(50);

//   console.log(output);

// }
