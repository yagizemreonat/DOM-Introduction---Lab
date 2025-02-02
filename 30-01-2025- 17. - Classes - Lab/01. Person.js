class Person {
    // firstName;
    // lastName;
    // age;
    // email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        const result = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return result;
    }
}

// Input
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

// Output
// Anna Simpson (age: 22, email: anna@yahoo.com)

// Person

// Write a class that represents a personal record. It has the following properties, all set from the constructor:

// · firstName
// · lastName
// · age
// · email
// And a method toString(), which prints a summary of the information. See the example for formatting details.

// Input
// The constructor function will receive valid parameters.

// Output
// The toString()method should return a string in the following format:
// `{firstName} {lastName} (age: {age}, email: {email})`
// Submit the class definition as is, without wrapping it in any function.

// Input
// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());

// Output
// Anna Simpson (age: 22, email: anna@yahoo.com)