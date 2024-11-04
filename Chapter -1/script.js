// J.S is a Dynamically Typed Languge
// Our First J.S Code
console.log("Welcome to JavaScript Journey!");
console.log("Hello J.S World!");

// Varibles
age = 23
price = 129.8
x = null // know but empty
y = undefined // dont know what is it
console.log(age);
console.log(price);
console.log(x);
console.log(y);

// Variables are case sensitive and some have Rules
// reserved words cannot as variable name
// only letter , $ , _ shoul be first chracter and allowed
// not even name space
// also have convention for good developer like (Camel Case , Pascal , Snake)

// in 2015 we got ES6 called (New Modern J.S)
// let , const , var => global scope
let name = "ali" // block scope variable
console.log(name);
name = "saqib"
console.log(name);

const aged = 56  // block scope variable
console.log(aged);

let a;
console.log(a); // undefined

// const b;
// console.log(b); // must initializer

// Data Types
// Non-Primitive Data Types ==>> Objects (Arrays , Function)
// Primitive Data Types means fixed (7 primitive data types)

let Price = 234
console.log(Price);
console.log(typeof Price);

let fullName = "Ali Akbar"
console.log(fullName);
console.log(typeof fullName);

const isFollow = true
console.log(isFollow);
console.log(typeof isFollow);

// bydefault all variables are undefined
// bigint , symbol , null , undefined

// Non-Primitive (objects category arrays , functions)
// Obeject (Collection of different variables )
let Student = {
    name : "Amna",
    age : 23,
    isPassed : true
}
console.log(Student);
console.log(Student.isPassed);
console.log(Student['name']);
Student.name = "Ayesha"
console.log(Student.name); // Update by both dot and square notation

"123" + 2 // string concatenation

// Noted : Const variables not changed but const objects keys are changed


// ========>>> Practice Set
const Profile = {
    userName : "Hafiz Hamza",
    isFollow : true,
    Posts : 120,
    Followers : 1000,
    Following : 200,
}
console.log(Profile);
console.log(typeof Profile.Posts);
console.log(typeof Profile['userName']);

