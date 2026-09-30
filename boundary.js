function Boundary(x, y, w, h, a) {
  var options = {
    friction: 0,
    restitution: 0.6,
    angle: a,
    isStatic: true
  }
  
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
}