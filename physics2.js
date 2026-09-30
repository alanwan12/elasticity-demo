window.onload = function() {
  canv=document.getElementById("world");
  ctx = canv.getContext("2d");
  /*
  canv.addEventListener("mousemove", mouseDragged);
  document.body.onmousedown = function() {
    mouseDown=1;
  }
  document.body.onmouseup = function() {
    mouseDown=0;
  }
  */
  
  setup();
}

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Constraint = Matter.Constraint;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;
var engine;
var world;
var boxes = [];
var boundaries = [];
var ground;
var mConstraint;
//var mouseDown=0;

function setup() {
  engine = Engine.create();
  var render = Render.create({
    element: document.body,
    engine: engine,
    canvas: canv,
    options: {
      width: canv.width,
      height: canv.height,
      wireframes: false
    }
  });
  
  world = engine.world;
  Engine.run(engine);
  Render.run(render);
  
  var options = {
    isStatic: true
    
  }
  
  var prev = null;
  
  for (var x = 675; x<1200; x+=50) {
    var fixed = false;
    
    if (!prev) {
      fixed =true;
    }
    
    var p = new Box(x, 100, 15, fixed);
    boxes.push(p);
    World.add(world, p.body);
    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 50,
        stiffness: 0.4
      }
      
      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    prev = p;
  }
  /*
  var ramp=new Boundary(550, 200, 50, canv.height+100, -1.3);
  var ramp2=new Boundary(750, 550, 50, canv.height+100, 1.3);
  World.add(world, ramp.body);
  World.add(world, ramp2.body);
  */
  
  ground=new Boundary(675, 655, 50, canv.width, 90/180*Math.PI);
  World.add(world, ground.body);
  
  var canvasmouse = Mouse.create(canv.elt);
  var options = {
    mouse: canvasmouse
  }
  
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(this.r, 0);
  ctx.stroke();
}

/*
function mouseDragged(evt) {
  if (mouseDown) {
    var circle=new Box(evt.offsetX, evt.offsetY, Math.floor(Math.random() * 20) + 10);
    World.add(world, circle.body);
    boxes.push(circle.body);
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].position.y > canv.height) {
          World.remove(world, boxes[i]);
          boxes.splice(i, 1);
          i--;
        }
      }
  }
};
*/