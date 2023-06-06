import cardData from "../cards-data";

export default function (content) {
  const hero = generateHeroSection();
  const bestDishes = generateDishesSection();

  content.appendChild(hero);
  content.appendChild(bestDishes);
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

function generateDishesSection(content) {
  const section = document.createElement("section");
  section.id = "best-dishes";

  const h2 = document.createElement("h2");
  h2.textContent = "Our best dishes";
  section.appendChild(h2);

  const cards = document.createElement("div");
  cards.id = "cards";
  section.appendChild(cards);

  for (let i = 0; i < 3; i++) {
    const data = cardData.menu[i];
    console.log(data.img.src);

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const image = data.img.src;
    image.alt = data.img.alt;
    cardDiv.appendChild(image);

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
