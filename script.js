//complete this code

//complete this code
//complete this code
class Rectangle {
	constructor(widths,heights){
		this.widths=widths;
		this.heights=heights;
	}
	get width(){
		return this.widths;
	}
	get height(){
		return this.heights;
	}

	getArea(){
		let area=this.widths*this.heights;
		return area;
	}
}

class Square extends Rectangle {
	constructor(side){
	  super(side, side);
		this.side=side;
	}
	getPerimeter(){
		let perimeter=4*this.side;
		return perimeter;
	}
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
