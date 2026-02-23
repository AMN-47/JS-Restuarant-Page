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

    //Code for info section
    const infoSection = document.createElement("section");
    infoSection.classList.add("info-selection");

    const infoHeading = document.createElement("h2");
    infoHeading.classList.add("info-heading");
    infoHeading.textContent = "Welcome to the finediner";

    const infoText = document.createElement("p");
    infoText.classList.add("info-text");
    infoText.textContent = "In the heart of the city, FineDiners offfers a unparalleded dining experience";

    infoSection.appendChild(infoHeading);
    infoSection.appendChild(infoText);
    contentDiv.appendChild(infoSection);

    //Highlights section
    const highlights = document.createElement("section");
    highlights.classList.add("highlights"); 

    const highlightData = [
    { icon: "🍷", title: "Curated Wine List", desc: "Over 200 selections from the world's finest vineyards." },
    { icon: "🍽️", title: "Seasonal Menu", desc: "Our menu changes with the seasons to bring you the freshest flavors." },
    { icon: "🎶", title: "Live Music", desc: "Enjoy live jazz every Friday and Saturday evening." },];

    highlightData.forEach(({icon, title, desc}) => {
        const card = document.createElement("div");
        card.classList.add("highlight-card");
        
        const cardIcon = document.createElement("span");
        cardIcon.classList.add("highlight-icon");
        cardIcon.textContent = icon;

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("highlight-title");
        cardTitle.textConenet = title;

        const cardDesc = document.createElement("p");
        cardDesc.classList.add("highlight-desc");
        cardDesc.textContent = desc;

        card.appendChild(cardIcon);
        card.appendChild(cardTitle);
        card.appendChild(cardDesc);
        highlights.appendChild(card);

    });

    contentDiv.appendChild(highlights);

    //Design for footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.textContent = "© 2024 The Abyss | Business Casual Attire Required | 123 Fine St, New York, NY";

    footer.appendChild(footerText);
    contentDiv.appendChild(footer);
}