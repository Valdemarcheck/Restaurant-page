import exampleImage from "./images/image.png";

export default {
  0: {
    img: {
      alt: "first ever image",
      src: image(exampleImage),
    },
    title: "Random dish",
    description: "This is a random description of some random bootleg dish.",
  },
  1: {
    img: {
      alt: "placeholder",
      src: image(exampleImage),
    },
    title: "Random dish",
    description: "This is a random description of some random bootleg dish.",
  },
  2: {
    img: {
      alt: "placeholder",
      src: image(exampleImage),
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  3: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  4: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  5: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  6: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  7: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
  8: {
    img: {
      alt: "placeholder",
      src: ".",
    },
    title: "WOAH",
    description: "This is a random description of some random bootleg dish.",
  },
};

function image(reference) {
  const image = new Image();
  image.src = reference;
  return image;
}
