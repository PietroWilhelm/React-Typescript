// Acces Modifiers
// public, private, protected
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and subclasses
// Example of a simple class in TypeScript
var Customer = /** @class */ (function () {
    // constructor
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
// using it
var myCustomer = new Customer("Martin", "Smith");
console.log(myCustomer.firstName); // Martin
console.log(myCustomer.lastName); // Smith
