import cardData from "./card-data";

export default () => {
  const content = document.getElementById("content");

  const header = generateHeader();
  const hero = generateHeroSection();
  const bestDishes = generateDishesSection();
  const footer = generateFooter();

  content.appendChild(header);
  content.appendChild(hero);
  content.appendChild(bestDishes);
  content.appendChild(footer);
};

function generateHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.id = "pages";

  const pageIDs = ["home", "about-us", "menu"];
  for (let id of pageIDs) {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = cleanName(id);

    const li = document.createElement("li");
    li.appendChild(button);

    ul.appendChild(li);
  }

  nav.appendChild(ul);
  header.appendChild(nav);

  const h1 = document.createElement("h1");
  const hr = document.createElement("hr");
  h1.textContent = "Georgian cuisine";

  header.appendChild(h1);
  header.appendChild(hr);

  return header;
}

function generateHeroSection() {
  const section = document.createElement("section");
  section.id = "hero";

  const left = document.createElement("div");
  left.classList.add("left");
  const right = document.createElement("div");
  left.classList.add("right");

  const h2 = document.createElement("h2");
  h2.textContent = "A heaven for lovers of Georgia";
  left.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = `You can try out dozens of different georgian dishes in our 
  restaurant by democratic prices. What are you even waiting for?`;
  left.appendChild(p);

  const callToActionButton = document.createElement("button");
  callToActionButton.textContent = "Book a table!";
  left.appendChild(callToActionButton);

  const img = document.createElement("img");
  img.setAttribute("alt", "placeholder");
  right.appendChild(img);

  section.appendChild(left);
  section.appendChild(right);
  return section;
}

function generateDishesSection() {
  const section = document.createElement("section");
  section.id = "best-dishes";

  const h2 = document.createElement("h2");
  h2.textContent = "Our best dishes";
  section.appendChild(h2);

  const cards = document.createElement("div");
  cards.id = "cards";
  section.appendChild(cards);

  for (let i = 0; i < 3; i++) {
    const data = cardData[i];

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("alt", data.img.alt);
    cardDiv.appendChild(img);

    const hr = document.createElement("hr");
    cardDiv.appendChild(hr);

    const h2 = document.createElement("h2");
    h2.textContent = data.title;
    cardDiv.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = data.description;
    cardDiv.appendChild(p);

    cards.appendChild(cardDiv);
  }

  return section;
}

function generateFooter() {
  const footer = document.createElement("footer");

  const span = document.createElement("span");
  span.textContent = "Made by ";

  const githubLink = document.createElement("a");
  githubLink.textContent = "Valdemar_check";
  githubLink.setAttribute("href", "https://github.com/Valdemarcheck");
  githubLink.setAttribute("target", "_blank");

  span.appendChild(githubLink);
  footer.appendChild(span);

  return footer;
}

function cleanName(name) {
  let capitalized = name[0].toUpperCase() + name.substring(1, name.length);
  return capitalized;
}
