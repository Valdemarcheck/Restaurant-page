import exampleImage from "./images/image.png";

export default {
  aboutUs: [
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
  ],
  menu: [
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
    {
      img: {
        alt: "placeholder",
        src: ".",
      },
      title: "WOAH",
      description: "This is a random description of some random bootleg dish.",
    },
  ],
};

function image(reference) {
  const image = new Image();
  image.src = reference;
  return image;
}
