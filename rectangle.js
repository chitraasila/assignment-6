class Rectangle {
  constructor(l, b) {
    this.len = l;
    this.breadth = b;
  }
  area() {
    return this.len * this.breadth;
  }
}

class Square extends Rectangle {
  constructor(s) {
    super(s, s);
    this.side = s;
  }
}

let rect = new Rectangle(8, 10);
document.write("Area of Rectangle : " + rect.area() + "<br/>");

let sq = new Square(10);
document.write("<br/>Area of square : " + sq.area());
