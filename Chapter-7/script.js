// Attributes
// getAttribute( attr ) //to get the attribute value
let id = document.querySelector("div")
console.log(id)
let value = id.getAttribute("id")
console.log(value)

// setAttribute( attr, value ) //to set the attribute value
let newValue = id.setAttribute("id","myBox")
console.log(newValue)

// node.style => style ko change krskte hai or ye object dekhata hai isme inline styling hoti hai
id.style.backgroundColor = "pink"
id.style.fontSize = "20px"
console.log(id)

// Insert Elements mtlb new_element add krna 
let heading = document.createElement("h1")
heading.innerText = "Heading"
console.log(heading)

// node.append( el ) //adds at the end of node (inside)
let div = document.querySelector("#box")
div.append(heading)
// node.prepend( el ) //adds at the start of node (inside)
div.prepend(heading)
// node.before( el ) //adds before the node (outside)
div.before(heading)
// node.after( el ) //adds after the node (outside)
div.after(heading)
// node.remove() // remove the element
let btn = document.querySelector("button")
btn.remove()

// Qs. Create a new button element. Give it a text “click me” , background color of red & text color of white.
// Insert the button as the first element inside the body tag.
let newBtn = document.createElement("button")
newBtn.innerText = "click me"
newBtn.style.backgroundColor = "red"
newBtn.style.color = "yellow"
document.querySelector("body").prepend(newBtn)

// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList. Did you notice, how you overwrite
let para = document.querySelector("p")
para.classList.add("my-new-para")