# p5.floodFill
Flood fill area of a sketch.

<img src="img.jpg" width="500"/>

## Usage
```js
new p5(p => {
    p.setup = _ => {
        p.createCanvas(500, 500);
        p.pixelDensity(1);
        p.randomSeed(0);
        p.noFill();

        for (let i = 0; i < 20; i++) {
            p.ellipse(p.random(p.width), p.random(p.height), p.random(400, 1500));
        }

        p.floodFill(p.width / 2, p.height / 2, p.color(33, 66, 99));
    }
});
```

# Development
$ npm run start

# Build
$ npm run build
