function setup() {
  createCanvas(600, 600);
  background("black");
   
    
  }
  
function draw() {
    
   stroke("black");
  fill("red");
   console.log(mouseIsPressed)

   if (mouseIsPressed) {
    circle(mouseX, mouseY, 40, 35);
  }
}

  
  
