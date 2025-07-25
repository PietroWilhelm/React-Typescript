export abstract class Shape {
    // Private properties for x and y coordinates with a constructor
    constructor(private _x: number, private _y: number) {
    }

    // Getters and setters for x and y properties
    public set x(value: number) {
        this._x = value;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public getInfo(): string {
        return `Shape at (${this._x}, ${this._y})`;
    }

    abstract calculateArea(): number; // Abstract method to be implemented by subclasses
}
