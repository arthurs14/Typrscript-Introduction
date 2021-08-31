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