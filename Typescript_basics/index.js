var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Primitive types
var num = 10;
var str = "Hello, TypeScript!";
var bool = true;
// Arrays
var numArray = [1, 2, 3, 4];
var strArray = ["apple", "banana", "cherry"];
// Tuples
var tuple = ["John", 25];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var user = {
    name: "Alice",
    age: 30
};
greet(user);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " barked!"));
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
dog.bark();
dog.move(10);
// Generic function
function identity(arg) {
    return arg;
}
var output = identity("Hello, TypeScript!");
console.log(output);
// Generic class
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
var box = new Box(10);
console.log(box.value);
// TypeScript infers the types automatically
var num = 10; // num is inferred as number
var str = "Hello, TypeScript!"; // str is inferred as string
function add(a, b) {
    return a + b; // TypeScript infers the return type as number
}
