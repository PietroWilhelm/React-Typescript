var Cliente = /** @class */ (function () {
    function Cliente() {
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
// let use it
var meuCliente = new Cliente();
meuCliente.firstName = "Martin";
meuCliente.lastName = "Smith";
console.log(meuCliente.firstName); // Martin
console.log(meuCliente.lastName); // Smith
