// Primitive types
let num: number = 10;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;

// Arrays
let numArray: number[] = [1, 2, 3, 4];
let strArray: string[] = ["apple", "banana", "cherry"];

// Tuples
let tuple: [string, number] = ["John", 25];

// Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;


interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

let user: Person = {
    name: "Alice",
    age: 30
};

greet(user);


class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barked!`);
    }
}

const dog = new Dog("Buddy");
dog.bark();
dog.move(10);


// Generic function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello, TypeScript!");
console.log(output);

// Generic class
class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}

let box = new Box<number>(10);
console.log(box.value);


// TypeScript infers the types automatically
let num = 10; // num is inferred as number
let str = "Hello, TypeScript!"; // str is inferred as string

function add(a: number, b: number) {
    return a + b; // TypeScript infers the return type as number
}
