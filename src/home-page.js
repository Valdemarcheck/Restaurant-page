export default () => {
  const content = document.getElementById("content");
  console.log(content);

  const header = generateHeader();
  const hero = generateHeroSection();

  content.appendChild(header);
  content.appendChild(hero);
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

function cleanName(name) {
  let capitalized = name[0].toUpperCase() + name.substring(1, name.length);
  return capitalized;
}
