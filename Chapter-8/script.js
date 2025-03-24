// Event => jb event koi occured hota hai or kaam hota hai usko ko kehte hai "Event Handling..."
// Better way to handle events in js file (agr inline event handling kri or js file me kri => to zada priority js file ki hogi...)
// agr same event handle kr rahai hai multiple times to second wale first wale ko over-ride krdega

// Event Handling in JS..
let btn = document.querySelector("#btn1")
btn.onclick = () => {
    console.log("Button was Clicked...")
    let a = 32
    a++
    console.log(a)
}

// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
let btn2 = document.querySelector("#btn2")
btn2.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
}

// Event Listener => ye benefit hota hai isko use krne ka kai same events multiple time use krskte hai
// node.addEventListener( event, callback ) => ye callback hi hamara handler hota hai
let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {
    console.log("Handler 1")
})
btn3.addEventListener("click", () => {
    console.log("Handler 2")
})
// --------------------
const handler = () => {
    console.log("Handler 3")
}
btn3.addEventListener("click" , handler)
// ---------------------
btn3.addEventListener("click", () => {
    console.log("Handler 4")
})

// node.removeEventListener( event, callback )
// *Note : the callback reference should be same to remove
btn3.removeEventListener("click" , handler)

// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let btnMode = document.querySelector("#btn-mode")
let body = document.querySelector("body")
let currMode = "light"
btnMode.addEventListener("click" , () => {
    if(currMode === "light") {
        body.style.backgroundColor = "black"
        currMode = "dark"
    } else {
        body.style.backgroundColor = "white"
        currMode = "light"
    }
    console.log(currMode)
})