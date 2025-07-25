import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const shape = new Shape(10, 20);
const circle = new Circle(5, 10, 20);
const rectangle = new Rectangle(10, 20, 30, 40);

// declare an array of Shapes ... initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(shape);
theShapes.push(circle);
theShapes.push(rectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo())
}
    