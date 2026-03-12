// Printing statement -> To print something -> console.log();

console.log("Test passed");
console.warn("Too weak");     // YELLOW COLOR
console.error("test failed"); // RED COLOR


// concatination
console.log("hello" +123);
console.log('5'+5);   // 10 ,55 

// template literals ``

console.log(`heloo
world
happy
world
heloo`);


// Variables -> storage container to store the values
// a = 1234567890; 

// var  -> it can be redeclare and reassign
var nithees = "tester";   // assigning
// var nithees = "senior";   // redeclare    // it doesnt change

nithees = "assosiate" ;    // reassign  // it will change

// let  -> it cannot be redeclare can be reassign

let a = 12;
a = 23;  // values updated
console.log(a);

// const  -> it cannot be redeclare and reassign

const s = 23;

// Scope
// 1.Global scope -> It can be used anywhere

// 2.Block scope -> only used inside the block -> {}
// { let a = 123;
// }

// var -> Function scoped
// let & const -> block scoped

let empName = "nithees";
let role ="tester";

console.log(empName);
console.log("name : "+empName+ " Designation: "+role);

console.log(`name : ${empName} Designation : ${role}`);

// name : nithees Designation : tester


// Datatypes -> to define a value/data
// typeof() -> to find out the type of the value

// 1. Primitive   -> single value in a single variable
// let name = "nithees";

// 1. String    -> Collection or Group of characters in quotes

let str = "nithees@1234";
console.log(`String is ${str}`);
console.log(typeof str);


// 2. Number
let num = 12;
console.log(`Number is ${num}`);
console.log(typeof num);

// 3. Boolean  -> true/false
let bool = true;
console.log(`Boolean is ${bool}`);
console.log(typeof bool);

// 4. Undefined
let undef;
console.log(`value is ${undef}`);
console.log(typeof undef);

// 5. Null   -> Empty
let val = null;
console.log(`Value is ${val}`);
console.log(typeof val);


// 2. Non-Primitive -> Multiple values in a single variable
// let subject = "tam,eng,mat,sci,soc";

// 1. Array
// 2. Object
// 3. Function

