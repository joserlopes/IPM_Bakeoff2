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
    let first_letter = this.label.charAt(0);

    switch(first_letter) {
      case 'R':
        fill(color(255,0,0));        
        break;
      case 'L':
        fill(color(38, 20, 96));
        break;
      case 'T':
        stroke(255);
        fill(color(168,73,15));
        break;
      case 'S':
        fill(color(255,144,2));
        break;
      case 'V':
        fill(color(255,251,14));
        break;
      case 'A':
        fill(color(100,255,50));
        break;
      case '0':
        fill(color(0,150,0));
        break;
      case 'B':
        fill(color(38,255,205));
        break;
      case 'C':
        fill(color(0, 193, 124));//25,222,255));
        break;
      case 'F':
        stroke(255);
        fill(color(28,126,255));
        break;
      case 'G':
        fill(color(21,35,255));
        break;
      case 'K':
        fill(color(107,22,255));
        break;
      case 'M':
        fill(color(178,21,255));
        break;
      case 'P':
        fill(color(155, 0, 166));
        break;
      case 'O':
        fill(color(255,130,238));
        break;
      case 'N':
        stroke(255);
        fill(color(255,22,255));
        break;
      case 'Y':
        fill(color(255,255,255));
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
    
    if (first_letter == 'G' || first_letter == 'S' || first_letter == 'Z'|| first_letter == 'T' || first_letter == 'R' || first_letter == 'N' || first_letter == 'L' || first_letter == 'K' || first_letter == '0' || first_letter == 'F' || first_letter == 'P') 
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label, this.x, this.y+3);
    
    textFont("Arial", 16);
    textStyle(BOLD);

    if (first_letter == 'G' || first_letter == 'S' || first_letter == 'Z' || first_letter == 'T' || first_letter == 'R' || first_letter == 'N' || first_letter == 'L' || first_letter == 'K' || first_letter == '0' || first_letter == 'F' || first_letter == 'P')
      fill(color(255,255,255));
    else
      fill(color(0,0,0));
    
    textAlign(CENTER);
    text(this.label.charAt(0), this.x, this.y-10);
    
    pop();
  }
}
