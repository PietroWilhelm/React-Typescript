"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    // Override the getInfo method from Shape
    getInfo() {
        return super.getInfo() + ` Circle with radius ${this._radius}`;
    }
}
exports.Circle = Circle;
