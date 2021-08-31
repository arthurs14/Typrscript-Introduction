"use strict";
// Basic Types
let id = 5;
let company = 'YG Entertainment';
let isTrainee = true;
let x = 'Hello';
x = 55;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'random'];
// Tuple
let person = [1, 'Jisoo', true];
// Tuple Array
let employee;
employee = [
    [1, 'Jennie'],
    [2, 'Rose'],
    [3, 'Lisa'],
];
// Union (hold more than one type)
let pid;
pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log('Enum Direction1:');
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log('Enum Direction2:');
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'John',
};
