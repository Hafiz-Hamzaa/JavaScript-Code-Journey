// Arrays (Stored in a linear form (same type of information position is matter means index))

let fruits = ["apple" , "mango" , "pear" , "banana"]
console.log(fruits);
console.log(typeof fruits); // object
console.log(fruits[2]); // pear
fruits[1] = "orange" // maniuplate
console.log(fruits);

// Looping over an Array (looping an iterable like => strings , arrays , objects)
let transports = ["car" , "bike" , "bus" , "auto"]
for (let i = 0 ; i < transports.length ; i++) {
    console.log(transports[i].toUpperCase());
}
// for of 
for (let transport of transports) {
    console.log(transport);
}


// Practice Set
// FIND AVERAGE MARKS OF GIVEN ARRAY
let marks = [85,97,44,37,76,60]
let sum = 0
for (let val of marks) {
    sum = sum + val
}
console.log(sum);
let length = marks.length
console.log(length);
console.log(sum / length);

// Find 10% off this given array and showing after applying offer 10%

let Price = [250,645,300,900,50]
for(let i = 0 ; i < Price.length ; i++) {
    let offer = Price[i] / 10
    Price[i] = Price[i] - offer
}
console.log(Price);


// Array Methods
// push , pop , shift , unshift , tostring , concat

let names = ['ali' , 'hamza' , 'hassan' , 'umer']
console.log(names.push('aman'));
console.log(names);
console.log(names.pop());

let Names = ['ali' , 'hamza' , 'hassan' , 'umer']
console.log(Names.unshift('adeel'));
console.log(Names);
console.log(Names.shift());

let arr = ["ayesha" , "laiba" , "aman" , "areeba"]
let newArr = arr.toString()
console.log(newArr);

let concat1 = ["Apple" , "Mango" , "Pear"]
let concat2 = ["Litchi" , "Grapes" , "Orange"]
let newCommon = concat1.concat(concat2);
console.log(newCommon);

// slice
let Slice = ['carrot' , 'turnip' , 'onion' , 'tomato' , 'ladyfinger']
console.log(Slice);
console.log(Slice.slice()); // when you no pass any no so it return same original array like a copy
console.log(Slice.slice(1,4));

// splice (add , remove , replace)
// // Add 
// let Programming = ["HTML" , "CSS" , "J.S" , "PHP" , "NODE.JS"]
// Programming.splice(2,0,"JAVA");
// console.log(Programming);

// Remove 
// let Programming = ["HTML" , "CSS" , "J.S" , "PHP" , "NODE.JS"]
// Programming.splice(3,2);
// console.log(Programming);

// Replace 
let Programming = ["HTML" , "CSS" , "J.S" , "PHP" , "NODE.JS"]
Programming.splice(2,1,"JAVA");
console.log(Programming);


// Practice Set
let Companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]
// console.log(Companies.shift());
// console.log(Companies);
// console.log(Companies.push("Amazon"));
Companies.splice(2 , 1 , "Ola");
console.log(Companies);