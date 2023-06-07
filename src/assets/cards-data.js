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
        alt: "Khachapuri on a long narrow dish",
        src: image(khachapuri),
      },
      title: "Khachapuri",
      description: `Khachapuri is one of the most popular and traditional 
      Georgian dishes. It's a gooey cheese-filled bread that looks a 
      little like pizza.`,
    },
    {
      img: {
        alt: "Khinkali on a long narrow dish",
        src: image(khinkali),
      },
      title: "Khinkali",
      description: `Khinkali is another iconic Georgian food. It resembles 
      the soup dumplings you can find in China but they aren't the same, 
      thanks to the distinctive use of Georgian spices.`,
    },
    {
      img: {
        alt: "Colorful churchkhela stripes",
        src: image(churchkhela),
      },
      title: "Churchkhela",
      description: `The main ingredients are almonds, walnuts, hazelnuts 
      or sometimes raisins that are threaded onto a string.
      A healthy candy for a sweet tooth like me!`,
    },
  ],
};

function image(reference, width = 300, height = 300) {
  const image = new Image(width, height);
  image.src = reference;
  return image;
}
