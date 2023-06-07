import cardsData from "../cards-data";

export default function (content) {
  const aboutUsSection = document.createElement("section");
  aboutUsSection.id = "about-us-section";
  content.appendChild(aboutUsSection);

  const h2 = document.createElement("h2");
  h2.textContent = "About us";
  aboutUsSection.appendChild(h2);

  const aboutUsMain = document.createElement("div");
  aboutUsMain.id = "about-us-main";
  aboutUsSection.appendChild(aboutUsMain);

  const left = document.createElement("div");
  left.classList.add("left");
  aboutUsMain.appendChild(left);

  const p = document.createElement("p");
  p.textContent = `Our company was founded by Valekzhanin Vladimir in 1992 at
  the heart of Georgia - Batumi. The restaurant was first an unknown place
  hidden inside the city, but after a while people started to notice the
  extraordinary taste of our dishes, and we became famous. Now we cook over
  40 different Georgian dishes and drinks, and we even ship them!`;
  left.appendChild(p);

  const right = document.createElement("div");
  right.classList.add("right");
  aboutUsMain.appendChild(right);

  const img = cardsData.aboutUs[0].img.src;
  img.alt = "placeholder";
  right.appendChild(img);
}
