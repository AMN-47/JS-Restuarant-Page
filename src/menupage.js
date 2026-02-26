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
    const menuData = [
    {
      category: "Starters",
      items: [
        { name: "Seared Scallops", desc: "Pan-seared scallops with cauliflower purée, crispy capers, and brown butter.", price: "$22" },
        { name: "Burrata & Heirloom Tomato", desc: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic.", price: "$18" },
        { name: "Foie Gras Torchon", desc: "House-cured foie gras with brioche, fig jam, and Sauternes gel.", price: "$28" },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Dry-Aged Ribeye", desc: "28-day dry-aged ribeye with truffle butter, roasted bone marrow, and pommes purée.", price: "$68" },
        { name: "Butter-Poached Lobster", desc: "Maine lobster tail with saffron risotto, tarragon emulsion, and caviar.", price: "$74" },
        { name: "Roasted Duck Breast", desc: "Moulard duck breast with cherry gastrique, charred leeks, and wild rice.", price: "$52" },
        { name: "Wild Mushroom Risotto", desc: "Arborio rice with porcini, truffle oil, parmesan crisp, and chive oil.", price: "$38" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Fondant", desc: "Warm valrhona chocolate fondant with salted caramel ice cream and praline.", price: "$16" },
        { name: "Crème Brûlée", desc: "Classic vanilla crème brûlée with seasonal berries and tuile.", price: "$14" },
        { name: "Cheese Selection", desc: "Curated board of five artisan cheeses with honeycomb, walnuts, and house crackers.", price: "$24" },
      ],
    },
    {
      category: "Wines",
      items: [
        { name: "Château Margaux 2015", desc: "Bordeaux, France — Full-bodied with notes of blackcurrant, cedar, and violet.", price: "$420" },
        { name: "Opus One 2018", desc: "Napa Valley, California — Rich and structured with dark fruit and mocha.", price: "$380" },
        { name: "Cloudy Bay Sauvignon Blanc", desc: "Marlborough, NZ — Crisp and aromatic with citrus, passionfruit, and herbs.", price: "$85" },
      ],
    },
  ];

    //Menu Sections
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    menuData.forEach(({category, items}) => {
        const section = document.createElement("section");
        section.classList.add("menu-section");
        
        const categoryHeading = document.createElement("h2");
        categoryHeading.classList.add("menu-category");
        categoryHeading.textContent = category;

        const divider = document.createElement("span");
        divider.classList.add("menu-divider");

        section.appendChild(categoryHeading);
        section.appendChild(divider);

        items.forEach(({name, desc, price}) => {
          const item = document.createElement("div");
          item.classList.add("menu-item");

          const itemHeader = document.createElement("div");
          itemHeader.classList.add("menu-item-header");

          const itemName = document.createElement("h3");
          itemName.classList.add("menu-item-name");
          itemName.textContent = name;

          const itemPrice = document.createElement("span");
          itemPrice.classList.add("menu-item-price");
          itemPrice.textContent = price;
          
          const itemDesc = document.createElement("p");
          itemDesc.classList.add("menu-item-desc");
          itemDesc.textContent = desc;

          itemHeader.appendChild(itemName);
          itemHeader.appendChild(itemPrice);
          item.appendChild(itemHeader);
          item.appendChild(itemDesc);
          section.appendChild(item);
        });

        menuWrapper.appendChild(section);
    })
    contentDiv.appendChild(menuWrapper);
}