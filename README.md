# p5.floodFill
Flood fill area of a sketch.

<img src="img.jpg" width="500"/>

## Usage
Add the script tag
```html
<script src="libs/p5.floodFill.js"></script>
```

```js
function setup(){
    createCanvas(500, 500);
    pixelDensity(1);
    randomSeed(0);
    noFill();

    for (let i = 0; i < 20; i++) {
        ellipse(random(width), random(height), random(400, 1500));
    }

    floodFill(width / 2, height / 2, color(33, 66, 99));
}
```

# Development
$ npm run start

# Build
$ npm run build
