// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, color_value)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.color_value = color_value;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    push();
    // Draw target
    let letter = this.label.charAt(0);

    if (letter == '0') 
      fill(color(255,255,255));        
    else if (letter == 'A') 
      fill(color(255,0,0));
    else if (letter == 'B') 
      fill(color(255,191,16));
    else if (letter == 'C') 
      fill(color(255,144,2));
    else if (letter == 'F') 
      fill(color(255,251,14));
    else if (letter == 'G') 
      fill(color(100,255,50));
    else if (letter == 'K') 
      fill(color(0,150,0));
    else if (letter == 'L') 
      fill(color(38,255,205));
    else if (letter == 'M') 
      fill(color(25,222,255));
    else if (letter == 'N') 
      fill(color(28,126,255));
    else if (letter == 'O') 
      fill(color(21,35,255));
    else if (letter == 'P') 
      fill(color(107,22,255));
    else if (letter == 'R') 
      fill(color(178,21,255));
    else if (letter == 'S') 
      fill(color(255,22,250));
    else if (letter == 'T') 
      fill(color(255,130,238));
    else if (letter == 'Z') {
      stroke(255);
      fill(color(0,0,0));
    }      
    else 
      fill(color(155,155,155));

    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    
    if (letter == 'O') 
      fill(color(255,255,255));
    else if (letter == 'Z') 
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label, this.x, this.y+3);
    
    textFont("Arial", 16);

    if (letter == 'O') 
      fill(color(255,255,255));
    else if (letter == 'Z') 
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label.charAt(0), this.x, this.y-10);
    
    pop();
  }
}
