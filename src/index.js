import { initialPageLoad } from './initial-page-loads.js';
import { menuPageLoad } from './menupage.js';
import { contactPageLoad } from './contactPage.js';

import './style.css' 

/*
1. Make Home Page
2. Make Menu Page
3. Contact Page
4. Use JS to make them
*/ 

function clearContent() {
  document.querySelector("#content").innerHTML = "";
}

function navigate(page) {
  clearContent();
  if (page === "home") initialPageLoad();
  else if (page === "menu") menuPageLoad();
  else if (page === "contact") contactPageLoad();
}

function bindNavLinks() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });
}

window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

initialPageLoad();
bindNavLinks();

console.log("Hello World"); 