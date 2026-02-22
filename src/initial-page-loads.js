import wineImage from "./Images/duynod-wine-8346641_1920.jpg"
import logoImage from "./Images/Logo.svg"

export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const nav = document.querySelector("nav");

    //Code for NavBar
    const logo = document.createElement("img");
    logo.classList.add("nav-logo");
    logo.src = logoImage;
    logo.alt = "Restuarant Logo";

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");
    
    ["Home", "Menu", "Contact"].forEach((linkText) =>{
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = linkText;
        a.classList.add("nav-link")
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    nav.appendChild(logo);
    nav.appendChild(navLinks);
}