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

    //Hero Section
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-image");
    heroImage.src = wineImage;
    heroImage.alt = "Restuaraunt Hero Image"; 

    const heroOverlay = document.createElement("div");
    heroOverlay.classList.add("hero-overlay");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title")
    heroTitle.textContent = "The Fine Diners"

    const heroSubtitle = document.createElement("p");
    heroSubtitle.classList.add("hero-subtitle");
    heroSubtitle.textContent = "Fine Fining Redefined"

    const heroBtn = document.createElement("button");
    heroBtn.classList.add("hero-btn");
    heroBtn.textContent = "Explore our Menu";

    heroOverlay.appendChild(heroTitle);
    heroOverlay.appendChild(heroSubtitle);
    heroOverlay.appendChild(heroBtn);
    hero.appendChild(heroImage);
    hero.appendChild(heroOverlay);
    contentDiv.appendChild(hero);
}