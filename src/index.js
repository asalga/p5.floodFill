'use strict';

(function () {

    let p5 = window.p5;

    p5.prototype.floodFill = function (gfx, x, y, col, predicate) {

        x = p5.prototype.floor(x);
        y = p5.prototype.floor(y);

        gfx.loadPixels();

        let px;

        // if passed in main gfx
        if (gfx._pixelsState.pixels.length > 0) {
            px = gfx._pixelsState.pixels;
        } else {
            px = gfx.pixels;
        }

        let idx = getIdx(x, y);
        let target = [px[idx + 0], px[idx + 1], px[idx + 2], px[idx + 3]];
        let stack = [];

        function hitEdgeOfCanvas(top) {
            return top.x < 0 || top.y < 0 || top.x > gfx.width - 1 || top.y > gfx.height - 1
        }

        function getIdx(x, y) {
            return (y * gfx.width + x) * 4;
        }

        function matchesTarget(x, y) {
            let idx = getIdx(x, y);

            return target[0] === px[idx] &&
                target[1] === px[idx + 1] &&
                target[2] === px[idx + 2] &&
                p5.prototype.abs(target[3] - px[idx + 3]) < 50;
        }

        if (x && y) {
            stack.push({ x, y });
        }

        while (stack.length > 0) {

            let top = stack[stack.length - 1];

            if (!matchesTarget(top.x, top.y) || hitEdgeOfCanvas(top)) {
                stack.pop();
                continue;
            }

            let idx = getIdx(top.x, top.y);

            px[idx + 0] = p5.prototype.red(col);
            px[idx + 1] = p5.prototype.green(col);
            px[idx + 2] = p5.prototype.blue(col);
            px[idx + 3] = px[idx + 3] > 0 ? px[idx + 3] : 255;

            stack.push({ x: top.x, y: top.y + 1 });
            stack.push({ x: top.x - 1, y: top.y });
            stack.push({ x: top.x + 1, y: top.y });
            stack.push({ x: top.x, y: top.y - 1 });
        }
        gfx.updatePixels();
    };

})();

