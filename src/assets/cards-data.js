import grandmaCooking from "./images/aboutUs/grandmaCooking.jpg";
import khachapuri from "./images/menu/khachapuri.jpg";
import khinkali from "./images/menu/khinkali.jpg";
import churchkhela from "./images/menu/churchkhela.jpg";

export default {
  aboutUs: [
    {
      img: {
        alt: "A grandma cooking a dish",
        src: image(grandmaCooking),
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
  ],
  menu: [
    {
      img: {
        alt: "placeholder",
        src: image(khachapuri),
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: image(khinkali),
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: image(churchkhela),
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
  ],
};

function image(reference, width = 300, height = 300) {
  const image = new Image(width, height);
  image.src = reference;
  return image;
}
