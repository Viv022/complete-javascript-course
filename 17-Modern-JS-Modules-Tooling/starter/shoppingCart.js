//Exporting module

console.log('Exporting module');

console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity){
    cart.push({product,quantity});
    console.log("Adding to cart");
}

export const totalPrice = 237;
export const totalQuantity = 23;

export default function(product, quantity){
    cart.push({product,quantity});
    console.log("Adding to cart");
}