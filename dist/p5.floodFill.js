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

eval("\n\n(function () {\n\n    let p5 = window.p5;\n\n    /*\n        arguments: x, y, color\n        OR\n        arguments: gfx, x, y, color\n    */\n    p5.prototype.floodFill = function (a, b, c, d) {\n\n        let gfx, x, y, col;\n        let w, h;\n        let px;\n\n        // using args:  x, y, col\n        if (typeof (a) == 'number') {\n            gfx = this;\n            [x, y, col] = [a, b, c];\n        }\n        // using args:  gfx, x, y, col\n        else {\n            [gfx, x, y, col] = [a, b, c, d];\n        }\n\n        gfx.loadPixels();\n        px = gfx.pixels;\n        [w, h] = [gfx.width, gfx.height];\n\n        x = p5.prototype.floor(x);\n        y = p5.prototype.floor(y);\n\n        let idx = getIdx(x, y);\n        let target = [px[idx + 0], px[idx + 1], px[idx + 2], px[idx + 3]];\n        let stack = [];\n\n        function hitEdgeOfCanvas(top) {\n            return top.x < 0 || top.y < 0 || top.x > w - 1 || top.y > h - 1\n        }\n\n        function getIdx(x, y) {\n            return (y * w + x) * 4;\n        }\n\n        function matchesTarget(x, y) {\n            let idx = getIdx(x, y);\n\n            return target[0] === px[idx] &&\n                target[1] === px[idx + 1] &&\n                target[2] === px[idx + 2] &&\n                p5.prototype.abs(target[3] - px[idx + 3]) < 50;\n        }\n\n        stack.push({ x, y });\n\n        let numPixels = 0;\n        while (stack.length > 0) {\n\n            let top = stack[stack.length - 1];\n\n            if (!matchesTarget(top.x, top.y) || hitEdgeOfCanvas(top)) {\n                stack.pop();\n                continue;\n            }\n\n            let idx = getIdx(top.x, top.y);\n\n            px[idx + 0] = p5.prototype.red(col);\n            px[idx + 1] = p5.prototype.green(col);\n            px[idx + 2] = p5.prototype.blue(col);\n            let a = col.levels[3];\n\n            px[idx + 3] = px[idx + 3] > 0 ? px[idx + 3] : a;\n            numPixels++;\n\n            stack.push({ x: top.x, y: top.y + 1 });\n            stack.push({ x: top.x - 1, y: top.y });\n            stack.push({ x: top.x + 1, y: top.y });\n            stack.push({ x: top.x, y: top.y - 1 });\n        }\n        gfx.updatePixels();\n        return numPixels;\n    };\n\n})();\n\n\n\n//# sourceURL=webpack://p5.floodfill/./src/index.js?");

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