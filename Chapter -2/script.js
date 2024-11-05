// Operators
// a + b is a expression
// Arithmetic Operators (Work on 2 Operands)
// let a = 5
// let b = 2
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);

// Unary Operators (Single Operand)
// Increment
let c = 3
c++
console.log(c);

// Pre increment / Post increment
// let d = 23
// console.log(++d) // 24
// console.log(d); // 24

// let e = 56
// console.log(e++); 
// console.log(e);

// Pre increment / Post increment
let d = 23
console.log(--d) // 22
console.log(d); // 22

let e = 56
console.log(e--); // 56
console.log(e); // 55

// Assignment Operators
let price = 23
price+= 2
console.log(price); // same for all -,*,/,%,**

// Comparision Operators
let A = 23
let B = 24
console.log(A==B);
console.log(A!=B);
console.log(A===B);
console.log(A!==B);
console.log(A<B);
console.log(A>B);
console.log(A<=B);
console.log(A>=B);

// Logical Operators (Multiple expression to evaluate and give a result)
// let x = 23
// let y = 23
// let cond1 = x <= y
// let cond2 = x === 23
// console.log(cond1 && cond2);

let x = 23
let y = 23
let cond1 = x < y
let cond2 = x === 23
console.log(cond1 || cond2);

let E = 23
let F = 24
console.log(!(E < F));

// Conditional Statements
let mode = "dark"
let color;
if(mode === "dark"){
    color = "black"
}else if (mode === "light"){
    color = "gray"
}
else{
    color = "white"
}
console.log(color);

// Check Odd and Even Number
let checkNo = 248
if (checkNo % 2 === 0){
    console.log(checkNo , "is an even number")
}else {
    console.log(checkNo , "is a odd number");
}

// Ternary Operators (3 Operands)
let isHungry = "food"
console.log(isHungry === "food" ? true : false);

// switch statements
let days = "Monday"
switch(days){
    case "Friday":
    console.log("Go for Prayer")
    break;
    case "Monday":
    console.log("Go for College")
    break;
    default:
    console.log("Nothing");
    
}

// Pracatice Set
// let user = prompt("Enter a number")
// if (user % 5=== 0){
//     console.log(user , "is a multiple of 5")
// }else{
//     console.log(user , "is not a multiple of 5");
// }

const scores = 54
if (scores >=80 && scores<=100){
    console.log("Grade A")
} else if (scores >=70 && scores<=89) {
    console.log("Grade B")
} else if (scores >=60 && scores<=69) {
    console.log("Grade C")
} else if (scores >=50 && scores<=59) {
    console.log("Garde D")
} else  {
    console.log("Failed")
}