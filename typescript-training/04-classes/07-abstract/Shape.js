"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // Private properties for x and y coordinates with a constructor
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // Getters and setters for x and y properties
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    getInfo() {
        return `Shape at (${this._x}, ${this._y})`;
    }
}
exports.Shape = Shape;
