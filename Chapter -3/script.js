// Loops (execute piece of code again and  again)

// For Loop
for(let i = 1; i<=5; i++){
    console.log("Java Script");
}
console.log("loop has ended");

let sum = 0
let n = 100
for (let i = 1 ; i <=100 ; i++) {
    sum = sum + i
}
console.log("sum = ", sum); // sum 1 to 5

for (let j = 1 ; j<=10 ; j++) {
    console.log("j = ", j);
}

// Infinite Loops (Never ends) always condition true

// While Loop
let i = 1
while(i<=5) {
    console.log("Loops");
    i++
}

// Do while Loop
let  j = 1
do {
    console.log("Hello World");
    j++;
} while(j <= 5);

// For of Loop (strings and arrays per loop lagana)
let str = "Hamza"
let size = 0
for(let val of str) {
    console.log("val = ", val);
    size++
}
console.log("string size = ", size);

// For in Loop (used for Objects)
let student = {
    name : "Ali",
    age : 23,
    cgpa : 2.5,
    isPassed : true
}
for (let keys in student) {
    console.log("keys = " , keys , "value = " ,student[keys]);
}

// Practice Set
// Print all even numbers 0 to 100
for(let num = 0 ; num<=100 ; num++) {
    if(num % 2 === 0) {
        console.log("even number = ", num)
    }
}

// guess a number
// let gameNo = 80
// let user = prompt("Guess a number between 0 to 80");
// while(gameNo != user) {
//     user = prompt("You guess wrong number . Guess again")
// }
// console.log("Congratulations You guess right number");

// Strings (strings are immutable)
// Properties
let string = "Akber"
console.log(string.length); // Length
console.log(string[2]); // Index

// Template Lietrals (Embedded Expression => placeholders ${})
const Student = {
    name : "Arif",
    age : 25,
    marks : 25.5
}
console.log(`His name is ${Student.name} and he is ${Student.age} years old.`)

// Escape chracters
let name = "Hafiz\n\tHamza"
console.log(name);
console.log(name.length); // 12

// Strings Methods / Functions
let Name = "kashan"
let newStr = Name.toUpperCase()
console.log(newStr); // lowercase , trim (remove starting and ending space , lowercase)

// Slice
let Slice = "abcdefg"
console.log(Slice.slice(1,4)); // bcd (inclusive , non-inclusive)

// concat
let sent1 = "Hey"
let sent2 = "How are you"
console.log(sent1.concat(sent2));

// replace
let rep = "Hello"
console.log(rep.replace("H","Y"));

// chraAt
let chra = "Jamal"
console.log(chra.charAt(0));

// Practice
let User = prompt("Enter your name")
console.log(`@${User}${User.length}`);
