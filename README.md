# Elasticity Demo

A Matter.js physics demo: a chain of circles linked by springy constraints that you can pull around with the mouse.

## What it does
- Uses [Matter.js](https://brm.io/matter-js/) 0.14.2 (MIT license), a bundled copy is included as `matter.js`.
- Builds a row of circles (radius 15, spaced 50 px apart) and links neighbors with constraints (stiffness 0.4). The first circle is fixed in place as the anchor.
- A flat ground bar sits at the bottom of the canvas.
- Drag circles with the mouse to stretch and swing the chain.

## Run it
Open `physics.html` in a browser. No build step or server needed.

## Files
- `physics.html` - canvas and script tags
- `physics2.js` - world setup, chain, constraints, mouse control
- `box.js` - helper that builds a circle body
- `boundary.js` - helper that builds a static wall/ground body
- `matter.js` - bundled Matter.js 0.14.2

## Notes
- The HTML file also has a `<script>` tag pointing at `../physics/matter-js-0.14.2/build/matter.js` (or `matter-js-0.14.2/build/matter.js`), a path that is not part of this repo. The bundled `matter.js` next to the page is the copy this repo provides, so the extra tag should just log a 404 in the browser console.
