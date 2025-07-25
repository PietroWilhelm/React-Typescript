"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const shape = new Shape_1.Shape(10, 20);
const circle = new Circle_1.Circle(5, 10, 20);
const rectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
// declare an array of Shapes ... initially empty
let theShapes = [];
// add the shapes to the array
theShapes.push(shape);
theShapes.push(circle);
theShapes.push(rectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
