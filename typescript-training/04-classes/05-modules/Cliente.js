"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    // constructor with parameter properties
    function Cliente(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Cliente.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        //getters and setters
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
