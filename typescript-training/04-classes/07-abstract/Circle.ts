import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    // Override the getInfo method from Shape
    getInfo(): string {
        return super.getInfo() + ` Circle with radius ${this._radius}`;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);   // Or  Math.PI * this._radius * this._radius.

    }
}
