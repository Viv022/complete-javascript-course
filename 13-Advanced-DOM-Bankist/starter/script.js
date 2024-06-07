'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn){
  btn.addEventListener('click', openModal);
});
  
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Smooth scrolling
btnScrollTo.addEventListener('click',function(e){
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll position',scrollX,scrollY);
  // console.log('height,width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // window.scrollTo({
  //   left : s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({behavior:'smooth'});
})

////////////////////////////////

//Event delegation
//Add event listener to common parent element
//Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  // console.log(e.target);
  if(e.target.classList.contains('nav__link')){
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

//Tabbed components


tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  
  if(!clicked) return;
  
  tabs.forEach(function(t){
    t.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  //Activate content area
  tabsContent.forEach(function(t){
    t.classList.remove('operations__content--active');
  });
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//Handle hover in nav
const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

//Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function(e){
//   //console.log(this.scrollY);
//   if(this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const obsCallBack = function(entries,observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// const obsOptions = {
//   root:null,
//   threshold: 0,
// };
// const observer = new IntersectionObserver(obsCallBack,obsOptions);
// observer.observe(section1);

const stickyNav = function(entries){
  const [entry] = entries;
  //console.log(entry);
  if(!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`${-navHeight}px`});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries,observer){
  const [entry] = entries;
  //console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,{root:null,threshold:0.15});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);
const loadImg =  function (entries,observer) {
  const [entry] = entries;
  //console.log(entry);
  if(!entry.isIntersecting)return;
  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg,{root:null,threshold:0,rootMargin:'200px'});
imgTargets.forEach(img => imgObserver.observe(img));

////////////////////////////////
//Sliders

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();



// const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');

// let curSlide = 0;
// const maxSlide = slides.length;
// const slider = document.querySelector('.slider');
// //slider.style.transform = 'scaleX(0.5)';
// //slider.style.overflow = 'visible';

// slides.forEach((s, i) => (
//   s.style.transform = `translateX(${100 * i}%`));

// const goToSlide = function(slide) {
//   slides.forEach((s, i) => (
//     s.style.transform = `translateX(${100 * (i-slide)}%`));
// }

// goToSlide(0);
// //Next slide
// const nextSlide = function(){
//   if(curSlide === maxSlide-1){
//     curSlide = 0;
//   }else curSlide++;
  
//   goToSlide(curSlide);
// }

// const prevSlide = function(){
//   if(curSlide === 0){
//     curSlide = maxSlide-1;
//   }else curSlide--;
//   goToSlide(curSlide);
// }
// btnRight.addEventListener('click',nextSlide);
// btnLeft.addEventListener('click',prevSlide);

// document.addEventListener('keydown',function(e){
//   if(e.key === 'ArrowLeft')prevSlide();
//   else if(e.key === 'ArrowRight')nextSlide();
// })

// const dotContainer = document.querySelector('.dots');


// const createDots = function(){
//   slides.forEach(function(_,i){
//     dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`);
//   });
// }
// createDots();
// const dots = dotContainer.querySelectorAll('.dots__dot');
// dotContainer.firstElementChild.classList.add('dots__dot--active');

// dotContainer.addEventListener('click', function(e) {
//   // Early exit if the clicked dot is already active
//   if (e.target.classList.contains('dots__dot--active')) return;

//   // Check if the clicked element is a dot
//   if (e.target.classList.contains('dots__dot')) {
//     e.preventDefault();  // Prevent default action

//     const to = Number(e.target.dataset.slide);  // Target slide number
//     let from = 0;  // Initialize variable to store the current active slide number

//     // Loop through all dots to update the active class
//     dots.forEach(dot => {
//       const slideNumber = Number(dot.getAttribute('data-slide'));
//       if (slideNumber === to) {
//         dot.classList.add('dots__dot--active');  // Activate the clicked dot
//       } else if (dot.classList.contains('dots__dot--active')) {
//         from = slideNumber;  // Store the current active slide number
//         dot.classList.remove('dots__dot--active');  // Deactivate the current dot
//       }
//     });

//     // Determine the direction and animate the slides accordingly
//     if (from < to) {
//       for (let i = from; i < to; i++) nextSlide();  // Move to the next slide
//     } else {
//       for (let i = to; i < from; i++) prevSlide();  // Move to the previous slide
//     }
//   }
// });



/////////////////////////////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements
// //.insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent
// message.innerHTML = 'We use cookies for improved performance. <button class="btn btn--close-cookie">Got it</button>';
// //header.prepend(message);
// header.append(message);
// //header.appendChild(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //deleting elements
// document.querySelector ('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// })

// //Styles
// message.style.backgroundColor = '#37393d';
// message.style.width = '120%';
// console.log(getComputedStyle(message));

// message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// //Non-standard
// // console.log(logo.getAttribute('designer'));
// // logo.setAttribute('company','Bankist');
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data attributes (store data in UI elements)
// console.log(logo.dataset.versionNumber);

// //classes
// //.add, .remove, .toggle, .contains
// // logo.className = 'vivek'; (don't use)

// const h1 = document.querySelector('h1');

// const alertH1 = function(e){
//   alert('addEventListener: Great!');
//   h1.removeEventListener('mouseenter',alertH1);
// }
// h1.addEventListener('mouseenter',alertH1);

// h1.onmouseenter = function(e){
//   alert('addEventListener: Great!');
// }

// //rgb(255,255,255)
// const randomInt = (min,max) => 
// Math.floor(Math.random() * (max - min) + min);

// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK',e.target,e.currentTarget);
//   console.log(e.currentTarget === this);
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER',e.target,e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV',e.target,e.currentTarget);
//   console.log(e.currentTarget === this);
// });


////////////////////////////////
//DOM traversal

// const h1 = document.querySelector('h1');
// //going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //nodelist
// console.log(h1.children); //collection
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// });


//////////////////////////////////////////////



// nav.addEventListener('mouseover', function(e){
//   handleHover(e,0.5);
// });

// nav.addEventListener('mouseout', function(e){
//   handleHover(e,1);
// });

// document.addEventListener('DOMContentLoaded', function(e){
//   console.log('HTML parsed and DOM tree built',e);
// });

// window.addEventListener('load', function(e){
//   console.log('Page fully loaded',e);

// });

// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = false;
// });