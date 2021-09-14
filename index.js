// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

get countSides() {return this.sides.length}

get perimeter() {return this.sides.reduce(function(sum, side) {return sum + side})
}

}
class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return false;
    if (this.count !== 3) return false;
    return this.hasThreeValidSides ? true : false;
  }

 get hasThreeValidSides() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {

get isValid() {
  if (!Array.isArray(this.sides)) return false;
  if (this.count !== 4) return false;
  return this.hasFourValidSides ? true : false;
}

get area() {
  if (this.isValid) {
    let side = this.sides[0]
    return side ** 2
  } else {
    return 'This is not a valid square'
  }
}
get hasFourValidSides() {
 const sidesArray = this.sides
return sidesArray.every(side => side === sidesArray[0])
}

}


