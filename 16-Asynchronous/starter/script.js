// 'use strict';

// const btn = document.querySelector('.btn-country');

// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const renderCountry = function(data,country,className){
//     data = data.filter(res => res.name.toLowerCase() === country.toLowerCase())[0];
//     const languages = [...data.languages].map(lang => lang.name);
//     const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population /1000000).toFixed(1)}M</p>
//                 <p class="country__row"><span>🗣️</span>${languages}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//             </div>
//             </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbor = function (country){

//     const request = new XMLHttpRequest();
//     const name = country;
//     request.open('GET',`https://countries-api-836d.onrender.com/countries/name/${name}`);
//     request.send();

//     request.addEventListener('load',function(){
//         //console.log(this.responseText);
//         const data = JSON.parse(this.responseText).filter(res => res.name.toLowerCase() === name.toLowerCase())[0];
//         console.log(data);

//         renderCountry(data);

//         //Get neighbor country
//         const neighbour = data.borders?.[0];
//         if(!neighbour) return;


//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load',function(){
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);
//             renderCountry(data2,'neighbour');
//         })
//     });
// }

// //getCountryAndNeighbor('india');

// //setTimeout(function(){getCountryAndNeighbor('denmark')},1000);

// // setTimeout(() => {
// //     console.log('1 second passed');
// //     setTimeout(() => {
// //         console.log('2 second passed');
// //         setTimeout(() => {
// //             console.log('3 second passed');
// //             setTimeout(() => {
// //                 console.log('4 second passed');
// //             },1000);
// //         },1000);
// //     },1000);
// // },1000);

// // const request = fetch(`https://countries-api-836d.onrender.com/countries/name/india`);
// // console.log(request);

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity = 1;
}

// const getsJSON = async function(url,errorMsg = 'Something went wrong'){
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return await response.json();
// }
// // const getCountryData = function(country){
// //     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     .then((response) => {
// //         if(!response.ok)throw new Error(`Country not found ! (${response.status})`);
// //         return response.json();
// //     })
// //     .then((data) => {
// //         renderCountry(data[1]);
// //         //const neighbour = data[1].borders?.[0];
// //         const neighbour = 'gdfrgrfdg';
// //         if(!neighbour)return;
// //         return fetch(`https://countries-api-836d.onrender.com/countries/name/${neighbour}`);
// //     })
// //     .then((response) => {
// //         if(!response.ok)throw new Error(`Country not found ! (${response.status})`);
// //         return response.json();
// //     })
// //     .then((data) => renderCountry(data[0],'neighbour'))
// //     .catch((err) => {
// //         console.error(err);
// //         renderError(`Something went wrong. ${err.message}`);
// //     })
// //     .finally(() => {
// //         countriesContainer.style.opacity = 1;
// //     });

// // };


// const getCountryData = function(country){
//     getsJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`,`Country not found !`)
//     .then((data) => {
//         console.log(data);
//         data = data.filter(res => res.name.toLowerCase() === country.toLowerCase())[0];
//         renderCountry(data);
//         const neighbour = data.borders?.[0];
//         if(!neighbour)throw new Error('No neighbour found');

//         return getsJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,`Country not found !`);
//     })
//     .then((data) => renderCountry(data,'neighbour'))
//     .catch((err) => {
//         console.error(err);
//         renderError(`Something went wrong. ${err.message}`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });

// };


// // btn.addEventListener('click',function(){
// //     getCountryData('germany');
// // });


// ////////////////
// // Here are your tasks:

// // PART 1
// // 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// // 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// // The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// // 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// // 4. Chain a .catch method to the end of the promise chain and log errors to the console
// // 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// //114561683366135e15724100x114394


// async function getJSON(latitude,longitude,errorMsg = 'Error getting data from server'){
//     const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=114561683366135e15724100x114394`);

//     if(response.status === 403){
//         throw new Error(`Rate limit exceeded`);
//     }
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     console.log(response);
//     return await response.json();
// }

// function whereAmI(lat,lng){
//     getJSON(lat,lng)
//     .then(data => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(data,"application/xml");
        
//         if(xmlDoc.getElementsByTagName('error').length){
//             const errorMsg = xmlDoc.getElementsByTagName('code')[0].textContent;
//             throw new Error(`City not found! ${errorMsg}`);
//         }

//         const city = xmlDoc.getElementsByTagName('city')[0].textContent;
//         const country = xmlDoc.getElementsByTagName('country')[0].textContent;
//         console.log(`You are in ${city}, ${country}`);
//         return country;
//     })
//     .then(country => getCountryData(country))
//     .catch(err => console.error(err));
// }

// btn.addEventListener('click',function(){
//     whereAmI(52.508,13.381);
// });


// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'),0);
// Promise.resolve('Resolve promise 1').then((res) => console.log(res));
// Promise.resolve('Resolve promise 2').then((res) => {
//     for(let i = 0; i < 10000000 ; i++){

//     }
//     console.log(res);
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function(resolve, reject){
//     console.log('Lottery draw');

//     setTimeout(function(){
//         if(Math.random() >= 0.5){
//             resolve('You win!');
//         }else{
//             reject(new Error('You lost your money'));
//         }
//     },2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds * 1000)
//     });
// }

// wait(2).then(() => {
//     console.log('I waited');
//     return wait(1);
// })
// .then(() => console.log('I waited'));

// Promise.resolve('abc').then((x) => console.log(x));

// // Promise.reject(new Error('abc')).then((x) => console.log(x));

// navigator.geolocation.getCurrentPosition(position => console.log(position),err => console.log(err));
// console.log('Getting position');

// const getPosition = function(){
//     return new Promise(function(resolve,reject){
//         // navigator.geolocation.getCurrentPosition(position => resolve(position),err => reject(err));
//         navigator.geolocation.getCurrentPosition(resolve,reject);
//     })
// }

// const getsJSON = async function(url,errorMsg = 'Something went wrong'){
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return await response.json();
// }


// const getCountryData = function(country){
//     getsJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`,`Country not found !`)
//     .then((data) => {
//         console.log(data);
//         data = data.filter(res => res.name.toLowerCase() === country.toLowerCase())[0];
//         renderCountry(data);
//         const neighbour = data.borders?.[0];
//         if(!neighbour)throw new Error('No neighbour found');

//         return getsJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,`Country not found !`);
//     })
//     .then((data) => renderCountry(data,'neighbour'))
//     .catch((err) => {
//         console.error(err);
//         renderError(`Something went wrong. ${err.message}`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });

// };

// async function getJSON(latitude,longitude,errorMsg = 'Error getting data from server'){
//     const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=xml&auth=114561683366135e15724100x114394`);

//     if(response.status === 403){
//         throw new Error(`Rate limit exceeded`);
//     }
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     console.log(response);
//     return await response.text();
// }

// const whereAmI = function(){
//     getPosition().then(pos => {
//         const {latitude : lat ,longitude : lng} = pos.coords;

//         return getJSON(lat,lng);
//     })
//     .then(data => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(data,"application/xml");
        
//         if(xmlDoc.getElementsByTagName('error').length){
//             const errorMsg = xmlDoc.getElementsByTagName('code')[0].textContent;
//             throw new Error(`City not found! ${errorMsg}`);
//         }

//         const city = xmlDoc.getElementsByTagName('city')[0].textContent;
//         const country = xmlDoc.getElementsByTagName('country')[0].textContent;
//         console.log(`You are in ${city}, ${country}`);
//         return country;
//     })
//     .then(country => getCountryData(country))
//     .catch(err => console.error(err));
// }

// btn.addEventListener('click',whereAmI());

// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// const createImage = function(imgPath) {
//     const image = document.createElement('img');
//     const parent = document.querySelector('.images');
//     //parent.style.opacity = 0;
//     parent.appendChild(image);

//     return new Promise(function(resolve, reject) {
//         image.addEventListener('load', function() {
//             //parent.style.opacity = 1;
//             resolve(image);
//         });

//         image.addEventListener('error', function() {
//             reject(new Error('Image failed to load'));
//         });

//         image.src = imgPath;
//     });
// }

// const wait = function(t) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, t * 1000);
//     });
// }
// createImage('img/img-1.jpg')
// .then((img) => wait(2).then(() => img.remove()))
// .then(() => wait(2))
// .then(() => createImage('img/img-2.jpg'))
// .then((img) => wait(2).then(() => img.remove()))
// .catch(err => console.error(err));

// const getPosition = function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(resolve,reject);
//     })
// }

// const whereAmI = async function(){
//     try{
//         const pos = await getPosition();
//         const {latitude : lat ,longitude : lng} = pos.coords;

//         const resGeo = await getJSON(lat,lng);
//         console.log(resGeo.country);
        
//         const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${resGeo.country}`);
//         const data = await res.json();
//         if(!res.ok) throw new Error('Problem getting country');
//         if(res.status === 403)throw new Error('Rate limit exceeded');
//         renderCountry(data,resGeo.country);
        
//         return `You are in ${resGeo.city},${resGeo.country}`;
//     }catch(err){
//         console.log(err);
//         renderError(`Something went wrong ${err.message}`);

//         //Reject promise returned from async
//         throw err;
//     }
// };

// // console.log('FIRST');
// // whereAmI().then(city => console.log(city)).catch(err => console.log('Hello, world!'));
// // console.log('Finished');

// (async function(){
//     console.log('FIRST');
//     try{
//         const city = await whereAmI();
//         console.log(city);
//     }catch(err){
//         console.error(err);
//     }
//     console.log('Finished');
// })();

// (async function(){
//     try{
//         throw new Error();
//     }catch(err){
//         console.error(`Hello world!`);
//     }
// })();


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
//       return response.json();
//     });
//   };

// const get3Countries = async function(c1, c2, c3){
//     try{
//         // const [_,data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);

//         // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);

//         // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

//         //promise combinator
//         const data = await Promise.all([
//             getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//             getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//             getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)
//         ]);

//         console.log(data.map(d => d[0].capital));
//         //console.log(data);

//     }catch(err){
//         console.error(err);
//     }
// }

// (async function(){
//     const res = await Promise.race([
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`)
//     ]);
//     console.log(res[0]);
// })();

// const timeout = function(sec){
//     return new Promise((_, reject) =>{
//         setTimeout(function(){
//             reject(new Error('Request timed out'));
//         },sec * 1000);
//     });
// }

//first resolve or reject wins
// Promise.race([getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),timeout(0.1)]).then(res => console.log(res[0])).catch(err => console.log(err));

// //return an array of all settled promises
// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('Failed'),
//     Promise.resolve('Success')
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));

// //Promise.any [ES 2021] (ignore rejected promises)
// Promise.any([
//     Promise.reject('Success'),
//     Promise.reject('Failed'),
//     Promise.reject('Success')
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));

// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

// GOOD LUCK 😀
// */

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
*/

// const data = fetch('https://countries-api-836d.onrender.com/countries/name/italy');
// data.then((data) => data.json()).then((data) => console.log(data));

// const createImage = function(imgPath) {
    

//     return new Promise(function(resolve, reject) {
//         const image = document.createElement('img');
//         const parent = document.querySelector('.images');
//     //parent.style.opacity = 0;
//         parent.appendChild(image);

//         image.addEventListener('load', function() {
//             //parent.style.opacity = 1;
//             resolve(image);
//         });

//         image.addEventListener('error', function() {
//             reject(new Error('Image failed to load'));
//         });

//         image.src = imgPath;
//     });
// }

// const wait = function(t) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, t * 1000);
//     });
// }

// const loadNPause = async function(){
//     try{
//         await createImage('img/img-1.jpg');
//         await wait(2);
//         image.remove();
//         await wait(2);
//         await createImage('img/img-2.jpg');
//         await wait(2);
//         image.remove();
//     }catch(err){
//         console.error(err);
//     }
// }

// //loadNPause();

// const imgArr = ['img/img-1.jpg', 'img/img-2.jpg','img/img-3.jpg'];

// const loadAll = async function(images){
//     const imgs = images.map(async image => await createImage(image));
//     const imgPaths = await Promise.all(imgs);
//     console.log(imgPaths);
//     imgPaths.forEach(img => img.classList.add('parallel'));
// }

// loadAll(imgArr);