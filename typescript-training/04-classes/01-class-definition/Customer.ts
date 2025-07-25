// Acces Modifiers
// public, private, protected
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and subclasses

// Example of a simple class in TypeScript
class Customer {
    // properties
    public firstName: string;
    public lastName: string;


    // constructor
    constructor(theFirstName: string, theLastName: string) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
 
}

// using it
let myCustomer = new Customer("Martin", "Smith");
console.log(myCustomer.firstName); // Martin
console.log(myCustomer.lastName); // Smith