import generateHomePage from "./home-page";
import generateAboutUsPage from "./about-us";
import generateMenuPage from "./menu";

const content = document.getElementById("content");

const header = ((content) => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.id = "pages";

  const pageIDs = ["home", "about-us", "menu"];
  for (let id of pageIDs) {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = cleanName(id);
    button.addEventListener("click", (e) => generateOtherPage(e, content));

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
})(content);
const footer = (() => {
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
})();

function generateOtherPage(e, content) {
  clearPage(content);
  content.appendChild(header);
  const buttonId = e.target.id;

  if (buttonId === "home") {
    generateHomePage(content);
  } else if (buttonId === "about-us") {
    generateAboutUsPage(content);
  } else if (buttonId === "menu") {
    generateMenuPage(content);
  }

  content.appendChild(footer);
}

function clearPage(content) {
  content.textContent = "";
}

function cleanName(name) {
  let capitalized = name[0].toUpperCase() + name.substring(1, name.length);
  return capitalized;
}

function initialGeneration(content) {
  content.appendChild(header);
  generateHomePage(content);
  content.appendChild(footer);
}

initialGeneration(content);
