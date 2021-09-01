// Basic Types
let id: number = 5;
let company: string = 'YG Entertainment';
let isTrainee: boolean = true;
let x: any = 'Hello';
x = 55;

// Arrays
let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'random'];

// Tuple
let person: [number, string, boolean] = [1, 'Jisoo', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Jennie'],
  [2, 'Rose'],
  [3, 'Lisa'],
];

// Union (hold more than one type)
let pid: string | number;
pid = 22;
pid = '22';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
};

console.log('Enum Direction1:')
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
};

console.log('Enum Direction2:')
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

// Objects
type User = {
  id: number,
  name: string,
} 

const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;

//let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number):number {
  return x + y;
}

console.log(`addNum Function:`)
console.log(addNum(1,2));

// Return nothing -> void
function log(message: string | number): void {
  console.log(message);
}

console.log('Log Function:');
log('Hello There');
log('22');

// Interfaces
// Cannot use with primitives or unions
interface UserInterface {
  readonly id: number,  // assign to not be changed
  name: string,
  age?: number,         // optional
};

const user1: UserInterface = {
  id: 1,
  name: 'Timmy',
};

interface MathFunc {
  (x: number, y: number): number;
}

// Using interface with a function
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Using interface with a class
interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  // public - changeable attributes
  id: number
  name: string

  // private to this class
  // private id: number

  // protected to this class and any sub class
  // protected id: number

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const jisoo = new Person(26, 'Jisoo Kim');
const jennie = new Person(25, 'Jennie Kim');

console.log(jisoo.register());