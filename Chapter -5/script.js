// Functions (resuable block of code that perform specfic task whenver you indded to invoke)
// Function redundancy se bachate hai

function myFunc(){
    console.log("I am learning J.S");
}
myFunc(); // invoke

// parameters , arguments => part of local variables
// return always give one value return of functions
function sum(a , b){
    sum = a + b
    console.log("before return");
    return sum;
    console.log("after return"); // beacuse after return codde in not rechable
}
let res = sum(25 , 45)
console.log(sum);

// arrow function (compact way)
const arrowSum = (x , y) => {
    sum = x * y
    return sum;
}
let val = arrowSum(10 , 10)
console.log(val);


// Practice Set
function countVowels(str) {
    let count = 0
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    return count++
}
let value = countVowels("Asma laibaa");
console.log(value);

// same task using arrow function
const vowelCount = (str) => {
    let count = 0
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    return count;
}
let result = vowelCount("Alimighty Allah")
console.log(result);


// For each Loop in Array (use for array not string)
// It takes call back func (passsed an argument another function)
// For each => it execute each element in the array
// HOF => It takes another function as a parameter or it return a function

let arr = ["ali" , "amjad" , "saqib"]
arr.forEach((val , index , arr)=>{
    console.log(val,index,arr);
})

// Practice Set
let numbers = [2 , 4 , 6 , 8]
numbers.forEach((num)=>{
    console.log(num * num)
})

// Map => similar as for each loop but that creates a nwe arr and returns the arr on some based calculations
let fruits = ["apple" , "pear" , "mango" , "banana"]
let outut = fruits.map((val)=>{
    return val
})
console.log(fruits);

// Filer (creates also new array to perform calc on some true condition)
let evenNo = [1, 2 , 3 , 4 , 5 , 6 , 7]
let Output = evenNo.filter((val) => {
    return val % 2 === 0
})
console.log(Output);

// reduce (alot of val of input and return a single value)
let Sum = [1 , 2 , 3 , 4 , 5]
let Result = Sum.reduce((res , curr) => {
    return res > curr ? res : curr
})
console.log(Result);

// Practice Set
let marks = [87 , 98 , 93 , 78 , 91]
let scored = marks.filter((val) => {
    return val > 90 
})
console.log(scored);


// Practice Set
let n = prompt ("Enter a number")
let Arr = []
for (let i = 1; i<=n ; i++) {
    Arr[i-1] = i
}
console.log(Arr);
let ADD = Arr.reduce((res , curr) => {
    return res + curr
})
console.log(ADD);