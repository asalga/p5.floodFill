'use strict';

(function () {

    let p5 = window.p5;

    /*
        arguments: x, y, color
        OR
        arguments: gfx, x, y, color
    */
    p5.prototype.floodFill = function (a, b, c, d) {

        let gfx, x, y, col;
        let w, h;
        let px;

        // using args:  x, y, col
        if (typeof (a) == 'number') {
            gfx = this;
            [x, y, col] = [a, b, c];
        }
        // using args:  gfx, x, y, col
        else {
            [gfx, x, y, col] = [a, b, c, d];
        }

        gfx.loadPixels();
        px = gfx.pixels;
        [w, h] = [gfx.width, gfx.height];

        x = p5.prototype.floor(x);
        y = p5.prototype.floor(y);

        let idx = getIdx(x, y);
        let target = [px[idx + 0], px[idx + 1], px[idx + 2], px[idx + 3]];
        let stack = [];

        function hitEdgeOfCanvas(top) {
            return top.x < 0 || top.y < 0 || top.x > w - 1 || top.y > h - 1
        }

        function getIdx(x, y) {
            return (y * w + x) * 4;
        }

        function matchesTarget(x, y) {
            let idx = getIdx(x, y);

            return target[0] === px[idx] &&
                target[1] === px[idx + 1] &&
                target[2] === px[idx + 2] &&
                p5.prototype.abs(target[3] - px[idx + 3]) < 50;
        }

        stack.push({ x, y });

        let numPixels = 0;
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
            let a = col.levels[3];

            px[idx + 3] = px[idx + 3] > 0 ? px[idx + 3] : a;
            numPixels++;

            stack.push({ x: top.x, y: top.y + 1 });
            stack.push({ x: top.x - 1, y: top.y });
            stack.push({ x: top.x + 1, y: top.y });
            stack.push({ x: top.x, y: top.y - 1 });
        }
        gfx.updatePixels();
        return numPixels;
    };

})();

