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
// Parent Class
class Person {
    // private to this class
    // private id: number
    // protected to this class and any sub class
    // protected id: number
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
// Subclass
class Member extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const jisoo = new Person(26, 'Jisoo Kim');
const jennie = new Person(25, 'Jennie Kim');
const mem = new Member(24, 'Rose Park', 'main vocal');
console.log(mem.name);
console.log(mem.register());
// Generics - used to build reusable components
// placeholder of the type
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['jisoo', 'jennie', 'rose', 'lisa']);
numArr.push(5);
