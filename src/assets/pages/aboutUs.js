import cardsData from "../cards-data";

export default function (content) {
  const h2 = document.createElement("h2");
  h2.textContent = "About us";

  const main = document.createElement("main");

  const left = document.createElement("div");
  left.classList.add("left");

  const p = document.createElement("p");
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Ipsum accusantium ipsam modi eius. Temporibus iure distinctio numquam 
  recusandae eos a aperiam autem? Nostrum, reiciendis. Doloribus, hic harum. 
  Commodi sint tenetur magnam exercitationem, debitis quod excepturi porro, 
  ipsam voluptatem ex et voluptate doloribus ipsa repellendus repudiandae ad 
  eaque temporibus maxime ea.`;
  left.appendChild(p);

  const right = document.createElement("div");
  right.classList.add("right");

  const img = cardsData.aboutUs[0].img.src;
  img.alt = "placeholder";
  right.appendChild(img);

  main.appendChild(left);
  main.appendChild(right);

  content.appendChild(h2);
  content.appendChild(main);
}
