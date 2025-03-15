// Window Object : Ye Global object hota hai with lots of properties and methods mtlb JS ka sara code aik window me object me hota hai or ye browser automatically isko create krta hai jese console.log ye bh aik winow object ka part hota hai

// What is DOM :
// JS kai ander ham HTML kai elments access krskte hai jese hi ye JS me atai hai wo aik aik object me convert hojate hai or usi ko ham Document kehte hai mtlb window object kai ander aik Document object bh hota hai sub object jisme ham is document kai ander html kai elements access krkste hai

// DOM kai ander html elemnets jinko ham node kehte hai e.g: h1 , div , button like Tree like structure
// DOM Manipulation with Methods :
// 1- Selecting with ID : agr koi id exist nh kri ho to null aiga:
let heading = document.getElementById("heading")
console.log(heading)
console.dir(heading)

// 2- Selecting with className : agr koi class exist nh kri ho to HTML Collection emptyArray aiga [] aiga:
let para = document.getElementsByClassName("myClass")
console.log(para)
console.dir(para)

// 3- Selecting with Tag name : also Return HTML Collection
let buttons = document.getElementsByTagName("button")
console.log(buttons)
console.dir(buttons)

// Level up Method access elemnts 
// Query Selector : document.querySelector(“#myId / .myClass / tag”) returns first element
// document.querySelectorAll(“.myClass / tag”) returns a NodeList
let firstEle = document.querySelector("p")
console.dir(firstEle)
let allEle = document.querySelectorAll("p")
console.dir(allEle)

let firstClass = document.querySelector(".myClass")
console.dir(firstClass) // same for All but id is not for queryselectorall

// DOM Properties = > value get krna or update krna
// 1- tagName : returns tag for element nodes
let spanClass = document.querySelector(".span-class")
console.log(spanClass.tagName)

// 2- innerText : returns the text content of the element and all its children
let textual = document.querySelector(".fruits")
console.dir(textual.innerText)
textual.innerText = "Hello Inner Text" // update 
console.dir(textual)

// 3- innerHTML : returns the plain text or HTML contents in the element
console.dir(textual.innerHTML)
textual.innerHTML = "<i>Javascript</i>"
console.dir(textual)

// 4- textContent : returns textual content even for hidden elements
// agr element hide krdia or agr innerText use kia to empty str aiga lekin textContent use kia to text dekhe ga


// Lets Practice : 
// Qs. Create a H2 heading element with text - “Hello JavaScript” . Append “from Apna College students” to this text using JS.
let myElement = document.querySelector("#myid")
console.dir(myElement.innerText)
myElement.innerText = myElement.innerText + " " + "from Apna College"
console.dir(myElement)

// Qs. Create 3 divs with common class name - “box” . Access them & add some unique text to each of them.
let boxes = document.querySelectorAll(".box")
let idx = 1
for(let box of boxes){
    box.innerText = `Box ${idx}`
    idx++
}