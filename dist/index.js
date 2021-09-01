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
// Type Assertion
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(`addNum Function:`);
console.log(addNum(1, 2));
// Return nothing -> void
function log(message) {
    console.log(message);
}
console.log('Log Function:');
log('Hello There');
log('22');
;
const user1 = {
    id: 1,
    name: 'Timmy',
};
// Using interface with a function
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const jisoo = new Person(26, 'Jisoo Kim');
const jennie = new Person(25, 'Jennie Kim');
console.log(jisoo, jennie);
