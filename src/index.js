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


import logoImage from "./Images/Logo.svg";

import "./style.css";

/* ================================
   CREATE STATIC LAYOUT (HEADER/NAV)
================================ */

function createLayout() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  // Logo
  const logo = document.createElement("img");
  logo.classList.add("nav-logo");
  logo.src = logoImage;
  logo.alt = "Restaurant Logo";

  // Nav links
  const navLinks = document.createElement("ul");
  navLinks.classList.add("nav-links");

  ["Home", "Menu", "Contact"].forEach((linkText) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = linkText;
    a.classList.add("nav-link");
    a.dataset.page = linkText.toLowerCase(); // important

    li.appendChild(a);
    navLinks.appendChild(li);
  });

  nav.appendChild(logo);
  nav.appendChild(navLinks);
  header.appendChild(nav);

  document.body.prepend(header);
}

/* ================================
   PAGE NAVIGATION
================================ */

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

/* ================================
   SCROLL EFFECT
================================ */

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* ================================
   INITIAL LOAD
================================ */

createLayout();        // build header/nav once
initialPageLoad();     // load Home content
bindNavLinks();        // attach listeners

console.log("App Loaded");