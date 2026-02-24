export function menuPageLoad() {
    const contentDiv = document.querySelector("#content");

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("page-header");

    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("page-title");
    pageTitle.textContent = "Our Menu";

    const pageLine = document.createElement("span");
    pageLine.classList.add("page-title-line");

    const pageSubtitle = document.createElement("p");
    pageSubtitle.classList.add("page-subtitle");
    pageSubtitle.textContent = "Thoughtfully Crafted. Seasonally inspired.";

    pageHeader.appendChild(pageTitle);
    pageHeader.appendChild(pageLine);
    pageHeader.appendChild(pageSubtitle)
    contentDiv.appendChild(pageHeader);

    //Menu Items
}