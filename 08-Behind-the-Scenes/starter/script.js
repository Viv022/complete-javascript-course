'use strict';

const firstName = 'Dave';

// function calcAge(birthYear){
//     const age = 2024 - birthYear;
//     //console.log(firstName);
//     function printAge(){
//         const output = `You are ${age} years old
//         born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1997 && birthYear <= 2010){
//             var genZ = true;
//             const msg = `GenZ Alert , ${firstName}`;
//             console.log(msg);
//         }
//         console.log(genZ);
//     }
//     printAge();
//     return age;
// }


//functions are block scoped only in strict mode
//Variables declared using let or const do not create props on window object

const calcAge = function(birthYear){
    console.log(2037-birthYear);
    console.log(this); //returns undefined
}

const calcAgeArrow = birthYear =>{
    console.log(2037-birthYear);
    console.log(this); //returns window object
}

calcAge(2000);
calcAgeArrow(2000);

const viv = {
    birthYear: 2000,
    calcAge: function(birthYear){
        console.log(2037-this.birthYear);
    }
};

const jon = {
    birthYear:2010,
};

jon.calcAge = viv.calcAge; //method borrowing
console.log(jon);
jon.calcAge(); 

//this keyword depends on the object calling the function

const f = viv.calcAge;

var first = "Viv"; //creates a window object property
console.log(first);


const vivek = {
    firstName: "Viv",
    year: 1990,

    calcAge: function(){
        console.log(2024 - this.year);
        //solution 1
        // const self = this; //way to preserve this keyword (pre ES6)
        // const isMill = function(){
        //     console.log(self.year > 1981 && self.year < 1996);
        // };

        //solution 2
        const isMill = () => {
            console.log(this.year > 1981 && this.year < 1996); //uses this keyword from parent
        };
        isMill();
    }
};

const addExpr = function (a,b){
    console.log(arguments);
    return a + b;
}

addExpr(2,5);
addExpr(2,5,8,12);

vivek.calcAge();

const jess = {
    first : 'Jesse',
    last: 'Will',
    age : 28,
}

const marrjess = jess;
marrjess.last = 'Can';
console.log(jess);
console.log(marrjess);

const jesscopy = Object.assign({},marrjess); //new object created
jesscopy.last = 'Will';
console.log(jesscopy);
console.log(marrjess);