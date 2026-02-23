import { initialPageLoad } from './initial-page-loads.js';

import './style.css' 

/*
1. Make Home Page
2. Make Menu Page
3. Contact Page
4. Use JS to make them
*/ 

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });


document.addEventListener("DOMContentLoaded", initialPageLoad);

console.log("Hello World"); 