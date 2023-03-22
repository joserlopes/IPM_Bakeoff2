// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
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
    let id = this.id;

    if (id <= 27)
      fill(color(255,0,0));
    else if (id > 27 && id <= 36)
      fill(color(63,227,255));
    else if ((id > 36 && id <= 42) ||
     id == 44 || id == 47 || id == 50 || id == 51)
      fill(color(255,255,255));
    else if ((id > 51 && id <= 57) ||
     id == 43 || id == 48 || id == 49)
      fill(color(233,206,255));
    else if (id > 44 && id <= 46)
      fill(color(254,255,221));
    else if (id > 57 && id <= 79)
      fill(color(134,255,91));

    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    
   
    fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label, this.x, this.y+3);
    
    textFont("Arial", 16);

    fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label.charAt(0), this.x, this.y-10);
    
    pop();
  }
}
