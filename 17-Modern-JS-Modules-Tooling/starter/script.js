//Importing module
// import { addToCart,totalPrice as price,totalQuantity as tq } from "./shoppingCart.js";
// console.log("Importing module");

// addToCart('bread',5);
// console.log(price,tq);

//import * as ShoppingCart from "./shoppingCart.js";

//import add, { addToCart,totalPrice as price,totalQuantity as tq } from "./shoppingCart.js";

// import add , {cart} from "./shoppingCart.js";

// add('pizza',2);
// add('bread',5);
// add('apples',4);
// console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something data');

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);
//     return {title: data.at(-1).title, text: data.at(-1).body};
// }

// const lastPost = await getLastPost();
// console.log(lastPost);

// const shoppingCart2 = (function(){
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function(product, quantity){
//         cart.push({product,quantity});
//         console.log(`Adding to cart: ${product} ${quantity}`);
//     }
    
//     const orderStock = function(product, quantity){
//         console.log("Ordered from supplier");
//     }

//     return{
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };
    
// })();

// shoppingCart2.addToCart('apple',4);
// shoppingCart2.addToCart('pizza',2);
// console.log(shoppingCart2);

// import 'core-js/actual';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import cloneDeep from 'lodash-es';
// import add , {cart} from "./shoppingCart.js";

// const state = {
//     cart: [
//         {product: 'bread', quantity:5},
//         {product: 'pizza', quantity:5}
//     ],
//     user : {loggedIn : true},
// };

// const stateClone = Object.assign({},state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// if(module.hot){
//     module.hot.accept();
// }

// class Person{
//     greeting = 'Hey';
//     constructor(name){
//         this.name = name;
//         console.log(this.name);
//     }
// }

// const vivek = new Person('vivek');
// console.log('vivek' ?? null);

// add('pasta',3);
// console.log(cart);
// console.log(cart.find(el => el.quantity > 2));
// Promise.resolve('TEST').then(x => console.log(x));

