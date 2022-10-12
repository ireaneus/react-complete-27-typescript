// Primatives: number, string, boolean(null, undefined)
// More complex types: array, object,
// Function types: parameters

// Primatives
let age: number = 55;

age = 12;

let userName: string | string[] = 'BWDude';

userName = 'Bwdave';

let isGolfer: boolean;

isGolfer = true;

// More complex types

let hobbies: string[];

hobbies = ['Golfing', 'travel', 'Webpage development'];

// Alias a typescript only
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Dude',
  age: 55,
};
// Not available as the let becomes more constrictive in typescript
// person = {
//  isEmployed: true,
// }

let people: Person[];

// Type inference

let golf: string | number = 'Play golf everyday';

golf = 123;
