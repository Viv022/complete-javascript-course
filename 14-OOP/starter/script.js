'use strict';

// const Person = function(firstName,birthYear){
//     // console.log(this);
//     //Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this.calcAge = function(){
//     //     console.log(2037-this.birthYear);
//     // };
// }

// const vivek = new Person('Vivek',2000);
// // console.log(vivek);
// // Empty object is created
// // function is called. this = new empty object
// // {} linked to a prototype
// // function automatically return {}
// const matilda = new Person('Matilda',2017);
// const jack = new Person('Jack',1975);

// // Prototypes
// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear);
// };
// // console.log(Person.prototype);
// // vivek.calcAge();
// console.log(vivek.__proto__ === Person.prototype);
// //prototye for all objects of class Person created by constructor
// // console.log(Person.prototype.isPrototypeOf(vivek));

// Person.prototype.species = 'Homo sapiens';
// // console.log(vivek.species);
// //.hasOwnProperty -> check for own property (not prototype access)

// console.log(vivek.__proto__.__proto__);
// console.log(vivek.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3,4,5,6,7,5,2,3,6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1);
// console.dir(x => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// class Car{
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }
// }

// console.dir(Car);
// console.dir(Person);

// Car.prototype.accelerate = function(){
//     this.speed = this.speed + 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function(){
//     this.speed = this.speed - 5;
//     console.log(this.speed);
// }

// const sports1 = new Car('BMW',120);
// const sports2 = new Car('Mercedes',95);
// sports1.accelerate();
// sports1.brake();
// sports2.accelerate();
// sports2.brake();

// class PersonCl {
//     constructor(fullName,birthYear){
//         //pseudo properties
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     //prototype
//     calcAge(){
//         console.log(2037-this.birthYear);
//     }

//     get age(){
//         return 2037 - this.birthYear;
//     }

//     //Set a property that already exists
//     set fullName(name){
//         console.log(name);
//         if(name.includes(' '))this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName(){
//         return this._fullName;
//     }

//     //static methods
//     static hey(){
//         console.log('Hey there');
//         console.log(this);
//     }
// }

// const jessica = new PersonCl('Jessica Davis',1996);
// console.log(jessica.age);
// console.dir(jessica);
// //Classes are not hoisted
// //Classes are first-class citizens
// //Classes are executed in strict mode

// const account = {
//     owner : 'vivek',
//     movements: [200,530,120,300],
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov);
//     },
// }

// console.log(account.latest);
// account.latest = 50;

// // const walter = new PersonCl('Walter',1965);
// // //walter.fullName = 'Walter';
// // console.log(walter.fullName);

// PersonCl.hey();

// const PersonProto = {
//     calcAge(){
//         console.log(2037-this.birthYear);
//     },
//     init(firstName, birthYear){
//         this,firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2001;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah',1979);
// sarah.calcAge();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// const Car =  function(make,speed){
//     this.make = make;
//     this.speed = speed;
// }

// class Car {
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate(){
//         this.speed = this.speed + 10;
//         console.log(this.speed);    
//     }

//     brake(){
//         this.speed = this.speed - 5;
//         console.log(this.speed);
//     }

//     set speedUS(speed){
//         this.speed = speed * 1.6;
//     }

//     get speedUS(){
//         console.log(`The speed of ${this.make} is ${this.speed / 1.6} mi/h \n`);
//     }

// }

// console.dir(Car);

// const ford = new Car('Ford',120);
// ford.speedUS = 100;
// ford.accelerate();
// ford.brake();
// ford.speedUS;

//Inheritance
// const Person = function(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear);
// };

// const Student = function(firstName,birthYear,course){
//     Person.call(this,firstName,birthYear);
//     this.course = course;
// }

// //Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike',2020,'Computer Science');

// mike.introduce();
// mike.calcAge();


// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// //set up prototype chain correctly
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// function Car(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
// };

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(this.speed);
// };

// Object.defineProperty(Car.prototype, 'speedUS', {
//     get: function() {
//         console.log(`The speed of ${this.make} is ${this.speed / 1.6} mi/h \n`);
//     },
//     set: function(speed) {
//         this.speed = speed * 1.6;
//     }
// });

// const EV = function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge = charge;
// }



// EV.prototype = Object.create(Car.prototype);

// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
//     console.log(`Charged to ${this.charge}%`);
// }
// const myCar = new EV('Tesla',100,20);
// myCar.chargeBattery(30);
// console.log(myCar.charge);
// // console.log(charge().bind(myCar));
// console.dir(Car);
// myCar.speedUS;

// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
// }

// myCar.accelerate();
// myCar.brake();
// myCar.chargeBattery(90);

// class PersonCl {
//     constructor(fullName,birthYear){
//         //pseudo properties
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     //prototype
//     calcAge(){
//         console.log(2037-this.birthYear);
//     }

//     get age(){
//         return 2037 - this.birthYear;
//     }

//     //Set a property that already exists
//     set fullName(name){
//         console.log(name);
//         if(name.includes(' '))this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName(){
//         return this._fullName;
//     }

//     //static methods
//     static hey(){
//         console.log('Hey there');
//         console.log(this);
//     }
// }


// class StudentCl extends PersonCl {
//     constructor(fullName,birthYear,course){
//         //Always needs to happen first
//         super(fullName,birthYear);
//         this.course = course;
//     }

//     introduce(){
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge(){
//         console.log(`I am ${2037-this.birthYear}  years old but I feel ...`);
//     }
// }

// const martha = new StudentCl('Martha Jones',2012,'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge(){
//         console.log(2037-this.birthYear);
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear,course){
//     PersonProto.init.call(this,firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay',2010,'Computer Science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

// class Account{
//     //Added to instances

//     //Public fields
//     locale = navigator.language;
    
//     //Private fields
//     #movements = [];
//     #pin;

//     constructor(owner,currency,pin){
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;

//         console.log('Thanks for opening an account');
//     }

//     //Added to prototype
//     //Public methods
//     getMovements(){
//         return this.#movements;
//     }
//     //Public interface
//     deposit(val){
//         this.#movements.push(val);
//         return this;
//     }

//     withdraw(val){
//         this.deposit(-val);
//         return this;
//     }

//     requestLoan(val){
//         if(this._approveLoan(val)){
//             this.deposit(val);
//             console.log('Loan approved');
//             return this;
//         }
//     }

//     //Private methods(not yet implemented)
//     _approveLoan(val){
//         return true;
//     }
// }

// const acc1 = new Account('Jonas','EUR',1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);

// //console.log(acc1.#movements);
// //Chaining methods
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2000);
// console.log(acc1.getMovements());

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed);
//         //return this;
//     }
//     brake() {
//         this.speed -= 5;
//         console.log(this.speed);
//         return this;
//     }
//     get speedUS(){
//         console.log(`The speed of ${this.make} is ${this.speed / 1.6} mi/h \n`);
//     }
//     set speedUS(speed){
//         this.speed = speed * 1.6;
//     }
// }

// class EVCl extends CarCl{
//     #charge;

//     constructor(make,speed,charge){
//     super(make,speed);
//     this.#charge = charge;
//     }

//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo;
//         console.log(`Charged to ${this.#charge}%`);
//         return this;
//     }

//     accelerate() {
//         this.speed += 20;
//         this.#charge--;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
//         return this;
//     }
// }

// const myCar = new EVCl('Rivian',120,23);
// console.log(myCar);
// myCar.accelerate();

// myCar.accelerate().brake().chargeBattery(60).accelerate();