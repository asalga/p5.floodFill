# p5.floodFill
Flood fill area of a sketch.

<img src="img.png" width="200"/>

## Usage
```js
 new p5(p => {
    let gfx;

    p.setup = _ => {
        p.createCanvas(500, 500);
        p.background(255);

        gfx = p.createGraphics(p.width, p.height);
    }

    p.draw = _ => {
        let c = color(33, 66, 99);
        gfx.flooFill(100, 100, c);
    }

    p.mousePressed = _ => {
        
        gfx.filter(p.BLUR, 1);
    }
});
```

# Development
$ npm run start

# Build
$ npm run build
