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
    let first_letter = this.label.charAt(0);

    switch(first_letter) {
      case '0':
        fill(color(255,255,255));        
        break;
      case 'A':
        fill(color(255,0,0));
        break;
      case 'B':
        fill(color(255,191,16));
        break;
      case 'C':
        fill(color(255,144,2));
        break;
      case 'F':
        fill(color(255,251,14));
        break;
      case 'G':
        fill(color(100,255,50));
        break;
      case 'K':
        fill(color(0,150,0));
        break;
      case 'L':
        fill(color(38,255,205));
        break;
      case 'M':
        fill(color(25,222,255));
        break;
      case 'N':
        fill(color(28,126,255));
        break;
      case 'O':
        fill(color(21,35,255));
        break;
      case 'P':
        fill(color(107,22,255));
        break;
      case 'R':
        fill(color(178,21,255));
        break;
      case 'S':
        fill(color(255,22,250));
        break;
      case 'T':
        fill(color(255,130,238));
        break;
      case 'Z':
        stroke(255);
        fill(color(0,0,0));
        break;
      default:
        fill(color(155,155,155));
        break;
    }

    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    
    if (first_letter == 'O' || first_letter == 'P' || first_letter == 'Z') 
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label, this.x, this.y+3);
    
    textFont("Arial", 16);

    if (first_letter == 'O' || first_letter == 'P' || first_letter == 'Z') 
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label.charAt(0), this.x, this.y-10);
    
    pop();
  }
}
