import cardData from "../cards-data";

export default function (content) {
  const h2 = document.createElement("h2");
  h2.textContent = "Menu";

  const description = document.createElement("p");
  description.textContent = `These are our most beloved dishes of all time. 
  Don't hesitate to try them out yourself!`;

  const menu = document.createElement("section");
  for (let data of cardData.menu) {
    const card = document.createElement("div");
    card.classList.add("card");
    menu.appendChild(card);

    const img = data.img.src;
    img.alt = data.img.alt;
    card.appendChild(img);

    const hr = document.createElement("hr");
    card.appendChild(hr);

    const h3 = document.createElement("h3");
    h3.textContent = data.title;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = data.description;
    card.appendChild(p);
  }

  content.appendChild(h2);
  content.appendChild(description);
  content.appendChild(menu);
}
