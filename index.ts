import { Person } from './person.model.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';
import * as _ from 'https://cdn.skypack.dev/underscore@^1.10.2';
 
const person1: Person = {
   name: "John",
   surname: "Deer",
   age: 55
};
 
const person2 = person1;

const fileName = parse(Deno.args).fileName;
console.log('Input file name: ' + fileName);

const decoder = new TextDecoder();
const person3: Person = JSON.parse(decoder.decode(await Deno.readFile(fileName)));

console.log('person1 == person2', person1 == person2);
console.log('person2 == person3', person2 == person3);
console.log('person1 == person3', person1 == person3);
 
console.log('Object.is(person1, person2)', Object.is(person1, person2));
console.log('Object.is(person1, person2)', Object.is(person2, person3));
console.log('Object.is(person1, person2)', Object.is(person1, person3));

console.log('_.isEqual(person1, person2)', _.isEqual(person1, person2));
console.log('_.isEqual(person2, person3)', _.isEqual(person2, person3));
console.log('_.isEqual(person1, person3)', _.isEqual(person1, person3));