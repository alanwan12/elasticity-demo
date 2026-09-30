function Box(x, y, r, fixed) {
  var options = {
    friction: 0,
    restitution: 0.6,
    isStatic: fixed
  }
  
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
}