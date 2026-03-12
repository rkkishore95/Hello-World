// // Operators
// // 1. Arithematic operators -> + , - , * , / , %(Modulo)

// console.log(5+5);    // 10
// console.log(5-3);    // 2
// console.log(5*2);    // 10
// console.log(5/5);    // 1
// console.log(5%5);    // 0

// // 2. Assignment operators -> = , += ,-= , *= , /=

// let a = 10;
// a += 10;  // a = a+10; 
// console.log("the value is ",a);  // 20
// a-= 10;  // a = a-10    
// console.log("the value is " ,a); // 10
// a *= 2;  // a = a*2;
// console.log("the value is " ,a); // 20
// a /= 2;  // a = a/2;
// console.log("the value is " ,a); // 10


// // 3. Comparison Operators -> == , === , != , > ,< ,<= ,>= 
// let a1 = 12;
// let a2 = 13;

// console.log(a1 == a2);   // false
// console.log(a1 === a2);  // false
// console.log(a1 != a2);   // true
// console.log(a1 > a2);    // false
// console.log(a1 < a2);    // true
// console.log(a1 >= a2);   // false
// console.log(a1 <= a2);   // true


// // ==    -> Loose Equality      -> Consider only the values
// // ===   -> Strict Equality     -> Consider both values and datatypes

// let b = 12;
// let b1 = '12';

// console.log("loose equality",b == b1);    // true
// console.log("Strict equality",b === b1);   // false

// // Logical operators  -> &&(AND)  ||(OR)  !(NOT)
// // -----AND-----
// // true    true   --> true
// // true   false   --> false
// // false   true   --> false
// // false  false   --> false

// // --- OR ---
// // true   true  -> true
// // true  false  -> true
// // false true   -> true
// // false false  -> false

// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false


// console.log(true || true);   // true
// console.log(true || false);  // true
// console.log(false || true);  // true
// console.log(false || false); // false
  
// console.log(!true);   // false
// console.log(!false);  // true

// // 5. String Operators --> (+)  --> Concatination

// // 6. typeof operator  -> to find out the type of the data

// // 7. Ternary Operator  
// // Syntax  --> Condition? ifTrue : ifFalse

// console.log(5 > 3? "Greater" : "Smaller");   // Greater

// let salary = 25000;
// console.log(salary > 30000? "OK" : "Denied"); // Denied 

// // 8. Increment(++) / Decrement(--)
// let num = 12;
// num++;  // num + 1;     // post increment
// console.log(num);    // 13
// console.log(num++);  // 13 
// console.log(num);    // 14

// console.log(++num);  // 15   // pre increment

// // 9. Nullish operator --> ??

// console.log(null ?? "nithees");     // nithees
// console.log(undefined ?? "kumar");
// console.log("gpi" ?? "hlo");

// // 10. Optional  -> ?

// let user = {};
// // console.log(user.address.home);  // error
// console.log(user?.address?.home);    // undefined




// Functions --> Block of code for to reuse 
    // ()   --> argument/parameter braces
    // {}   --> Block braces
    // []   --> Array braces

// 1. Function Declaration
// admin(); 
// function admin() {
//     let name = "nithees";
//     let role = "dev"
//     console.log(`employee : ${name} designation : ${role}`);  
// }
 
// // admin();
// // admin();

// // 2. Parameterized function

// function admin1(name , role){
// console.log(`employee : ${name} designation : ${role}`);
// }
// admin1("Nithees" , "tester");
// admin1("kumar" , "assosiate");
// admin1("gopi", "lead");

//3.  Return Type

// function ret(){
//     let a = 12;
//     return a;
// }
// console.log(ret());

// function normal(){
//     let a = 12;
//     console.log(a);
    
// }
// normal();

// let b = 12 + ret();
// console.log(b);      // 24              
// let c = 12+ normal();
// console.log(c);     //  NaN


// 4. Default Parameter
// function def(name = "Default parameter function"){
//     console.log(name);
    
// }def();

// 5. Rest Parameter(...)
// function res(...fruits){
//    console.log(fruits);
   
// }
// res("apple","mango","orange","pine");

// 6. Function Expression
// let a = function greet(){
//     console.log("This is function expression");
    
// }
// a();



// 7. IIFE -> Immedietly Invoked Function Expression ()
// let num = 13;
// (function iife(){
//     console.log("This is IIFE Function");
    
// }) ();

// 8. Arrow Function
// SYNTAX () => {}

    // Short Arrow Function

    // let arr = (a,b) => console.log(a+b);
    // // arr(2,4);
  
    // let arr1 = ()=>{
    //     console.log("This is Arrow Function");
        
    // }
    // arr1();

// SetTimeout
// console.log("start");

// setTimeout(() => {
//     console.log("delayed by 5 secs"); 
// }, 5000);

// console.log("end");

// What is hoisting?






















 




