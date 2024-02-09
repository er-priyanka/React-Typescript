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
