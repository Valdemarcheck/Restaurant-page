/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-data */ \"./src/cards-data.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(content) {\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"About us\";\n\n  const main = document.createElement(\"main\");\n\n  const left = document.createElement(\"div\");\n  left.classList.add(\"left\");\n\n  const p = document.createElement(\"p\");\n  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. \n  Ipsum accusantium ipsam modi eius. Temporibus iure distinctio numquam \n  recusandae eos a aperiam autem? Nostrum, reiciendis. Doloribus, hic harum. \n  Commodi sint tenetur magnam exercitationem, debitis quod excepturi porro, \n  ipsam voluptatem ex et voluptate doloribus ipsa repellendus repudiandae ad \n  eaque temporibus maxime ea.`;\n  left.appendChild(p);\n\n  const right = document.createElement(\"div\");\n  right.classList.add(\"right\");\n\n  const img = document.createElement(\"img\");\n  img.setAttribute(\"alt\", \"placeholder\");\n  right.appendChild(img);\n\n  main.appendChild(left);\n  main.appendChild(right);\n\n  content.appendChild(h2);\n  content.appendChild(main);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/cards-data.js":
/*!***************************!*\
  !*** ./src/cards-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import exampleImage from \"./images/example.png\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  0: {\n    img: {\n      alt: \"placeholder\",\n      // src: new Image().src(exampleImage), // Creating a DOM element out of it\n    },\n    title: \"Random dish\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  1: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"Random dish\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  2: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  3: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  4: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  5: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  6: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  7: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n  8: {\n    img: {\n      alt: \"placeholder\",\n      src: \".\",\n    },\n    title: \"WOAH\",\n    description: \"This is a random description of some random bootleg dish.\",\n  },\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/cards-data.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-data */ \"./src/cards-data.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(content) {\n  const hero = generateHeroSection();\n  const bestDishes = generateDishesSection();\n\n  content.appendChild(hero);\n  content.appendChild(bestDishes);\n}\n\nfunction generateHeroSection() {\n  const section = document.createElement(\"section\");\n  section.id = \"hero\";\n\n  const left = document.createElement(\"div\");\n  left.classList.add(\"left\");\n  const right = document.createElement(\"div\");\n  left.classList.add(\"right\");\n\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"A heaven for lovers of Georgia\";\n  left.appendChild(h2);\n\n  const p = document.createElement(\"p\");\n  p.textContent = `You can try out dozens of different georgian dishes in our \n  restaurant by democratic prices. What are you even waiting for?`;\n  left.appendChild(p);\n\n  const callToActionButton = document.createElement(\"button\");\n  callToActionButton.textContent = \"Book a table!\";\n  left.appendChild(callToActionButton);\n\n  const img = document.createElement(\"img\");\n  img.setAttribute(\"alt\", \"placeholder\");\n  right.appendChild(img);\n\n  section.appendChild(left);\n  section.appendChild(right);\n  return section;\n}\n\nfunction generateDishesSection(content) {\n  const section = document.createElement(\"section\");\n  section.id = \"best-dishes\";\n\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Our best dishes\";\n  section.appendChild(h2);\n\n  const cards = document.createElement(\"div\");\n  cards.id = \"cards\";\n  section.appendChild(cards);\n\n  for (let i = 0; i < 3; i++) {\n    const data = _cards_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\n\n    const cardDiv = document.createElement(\"div\");\n    cardDiv.classList.add(\"card\");\n\n    const img = document.createElement(\"img\");\n    img.setAttribute(\"alt\", data.img.alt);\n    cardDiv.appendChild(img);\n\n    const hr = document.createElement(\"hr\");\n    cardDiv.appendChild(hr);\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = data.title;\n    cardDiv.appendChild(h2);\n\n    const p = document.createElement(\"p\");\n    p.textContent = data.description;\n    cardDiv.appendChild(p);\n\n    cards.appendChild(cardDiv);\n  }\n\n  return section;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst header = ((content) => {\n  const header = document.createElement(\"header\");\n  const nav = document.createElement(\"nav\");\n  const ul = document.createElement(\"ul\");\n  ul.id = \"pages\";\n\n  const pageIDs = [\"home\", \"about-us\", \"menu\"];\n  for (let id of pageIDs) {\n    const button = document.createElement(\"button\");\n    button.id = id;\n    button.textContent = cleanName(id);\n    button.addEventListener(\"click\", (e) => generateOtherPage(e, content));\n\n    const li = document.createElement(\"li\");\n    li.appendChild(button);\n    ul.appendChild(li);\n  }\n\n  nav.appendChild(ul);\n  header.appendChild(nav);\n\n  const h1 = document.createElement(\"h1\");\n  const hr = document.createElement(\"hr\");\n  h1.textContent = \"Georgian cuisine\";\n\n  header.appendChild(h1);\n  header.appendChild(hr);\n\n  return header;\n})(content);\nconst footer = (() => {\n  const footer = document.createElement(\"footer\");\n\n  const span = document.createElement(\"span\");\n  span.textContent = \"Made by \";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.textContent = \"Valdemar_check\";\n  githubLink.setAttribute(\"href\", \"https://github.com/Valdemarcheck\");\n  githubLink.setAttribute(\"target\", \"_blank\");\n\n  span.appendChild(githubLink);\n  footer.appendChild(span);\n\n  return footer;\n})();\n\nfunction generateOtherPage(e, content) {\n  clearPage(content);\n  content.appendChild(header);\n  const buttonId = e.target.id;\n\n  if (buttonId === \"home\") {\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n  } else if (buttonId === \"about-us\") {\n    (0,_about_us__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n  } else if (buttonId === \"menu\") {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n  }\n\n  content.appendChild(footer);\n}\n\nfunction clearPage(content) {\n  content.textContent = \"\";\n}\n\nfunction cleanName(name) {\n  let capitalized = name[0].toUpperCase() + name.substring(1, name.length);\n  return capitalized;\n}\n\nfunction initialGeneration(content) {\n  content.appendChild(header);\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n  content.appendChild(footer);\n}\n\ninitialGeneration(content);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-data */ \"./src/cards-data.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(content) {\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Menu\";\n\n  const description = document.createElement(\"p\");\n  description.textContent = `These are our most beloved dishes of all time. \n  Don't hesitate to try them out yourself!`;\n\n  const menu = document.createElement(\"section\");\n  for (let data of Object.values(_cards_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"card\");\n    menu.appendChild(card);\n\n    const img = document.createElement(\"img\");\n    img.setAttribute(\"alt\", data.img.alt);\n    card.appendChild(img);\n\n    const hr = document.createElement(\"hr\");\n    card.appendChild(hr);\n\n    const h3 = document.createElement(\"h3\");\n    h3.textContent = data.title;\n    card.appendChild(h3);\n\n    const p = document.createElement(\"p\");\n    p.textContent = data.description;\n    card.appendChild(p);\n  }\n\n  content.appendChild(h2);\n  content.appendChild(description);\n  content.appendChild(menu);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;