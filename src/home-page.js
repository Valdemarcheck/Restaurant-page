export default () => {
  const content = document.getElementById("content");
  console.log(content);

  const header = generateHeader(content);
  content.appendChild(header);
};

function generateHeader() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.id = "pages";

  const pageIDs = ["home", "about-us", "menu"];
  for (let id of pageIDs) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.id = id;
    button.textContent = cleanName(id);
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

function cleanName(name) {
  let capitalized = name[0].toUpperCase() + name.substring(1, name.length);
  return capitalized;
}
