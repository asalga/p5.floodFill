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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\n(function () {\n\n    let p5 = window.p5;\n\n    p5.prototype.floodFill = function (gfx, x, y, col, predicate) {\n\n        x = p5.prototype.floor(x);\n        y = p5.prototype.floor(y);\n\n        gfx.loadPixels();\n\n        let px;\n\n        // if passed in main gfx\n        if (gfx._pixelsState.pixels.length > 0) {\n            px = gfx._pixelsState.pixels;\n        } else {\n            px = gfx.pixels;\n        }\n\n        let idx = getIdx(x, y);\n        let target = [px[idx + 0], px[idx + 1], px[idx + 2], px[idx + 3]];\n        let stack = [];\n\n        function hitEdgeOfCanvas(top) {\n            return top.x < 0 || top.y < 0 || top.x > gfx.width - 1 || top.y > gfx.height - 1\n        }\n\n        function getIdx(x, y) {\n            return (y * gfx.width + x) * 4;\n        }\n\n        function matchesTarget(x, y) {\n            let idx = getIdx(x, y);\n\n            return target[0] === px[idx] &&\n                target[1] === px[idx + 1] &&\n                target[2] === px[idx + 2] &&\n                p5.prototype.abs(target[3] - px[idx + 3]) < 50;\n        }\n\n        if (x && y) {\n            stack.push({ x, y });\n        }\n\n        while (stack.length > 0) {\n\n            let top = stack[stack.length - 1];\n\n            if (!matchesTarget(top.x, top.y) || hitEdgeOfCanvas(top)) {\n                stack.pop();\n                continue;\n            }\n\n            let idx = getIdx(top.x, top.y);\n\n            px[idx + 0] = p5.prototype.red(col);\n            px[idx + 1] = p5.prototype.green(col);\n            px[idx + 2] = p5.prototype.blue(col);\n            px[idx + 3] = px[idx + 3] > 0 ? px[idx + 3] : 255;\n\n            stack.push({ x: top.x, y: top.y + 1 });\n            stack.push({ x: top.x - 1, y: top.y });\n            stack.push({ x: top.x + 1, y: top.y });\n            stack.push({ x: top.x, y: top.y - 1 });\n        }\n        gfx.updatePixels();\n    };\n\n})();\n\n\n\n//# sourceURL=webpack://p5.floodfill/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;