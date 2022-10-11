// var React=require("react")
import React from "react"
// var ReactDOM=require("react-dom")
import ReactDOM from "react-dom"

// ReactDOM.render("what to display","where to display","callback function")
// ReactDOM.render(<h1>Hello World</h1>,
// document.getElementById("root"))

// -----------method 2----------------
ReactDOM.render(React.createElement("h1",null,"Hello world"),
document.getElementById("root"))

// -----------method 3 (using pure JS)----------------
// var h1=document.createElement("h1");
// h1.innerHtml="Hello world !"
// document.getElementById("root").appendChild(h1)