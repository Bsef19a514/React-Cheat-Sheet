import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
// 2)-----------Redering multiple elements------------------

// ReactDOM.render(<div>
//   <h1>Hello world</h1>
//   <p>Zain ahmad</p>
// </div>,
// document.getElementById("root"))

// In react v16 or above it is possible to render an array of elements
// ReactDOM.render(
//   [
//   <h1>Hello world</h1>,
//   <p>Zain Ahmad</p>,
//   <p>PUCIT, Lahore</p>
//   ],
// document.getElementById("root"))


// 3)---------------React Fragments----------------------------
// Also used to render multiple elements
// -----------------method 1-----------------------------------

ReactDOM.render(<React.Fragment>
  <h1>Hello world</h1>
  <p>Zain ahmad</p>
</React.Fragment>,
document.getElementById("root"))

//-----------------method 2-------------------------------------
// ReactDOM.render(<>
//   <h1>Best Web Series</h1>
//   <p>By Zain ahmad</p>
//   <ol>
//     <li>Game of thrones</li>
//     <li>The last kingdom</li>
//     <li>The witcher</li>
//     <li>Peaky Blinders</li>
//     <li>Dark</li>
//   </ol>
// </>,
// document.getElementById("root")) 


// 4)----------------JS Expression in JSX---------------------
const name="Zain Ahmad"
const email ="zainsattar17@gmail.com"
ReactDOM.render(<>
  <h1>Best Web Series</h1>
  <p>By {`${name} , Email: ${email}`}</p>
  <p>My lucky nymber is : {Math.round( Math.random()*9)}</p>
  <ol>
    <li>Game of thrones</li>
    <li>The last kingdom</li>
    <li>The witcher</li>
    <li>Peaky Blinders</li>
    <li>Dark</li>
  </ol>
</>,
document.getElementById("root")) 

// 5)--------------------JSX attrubutes------------------
// The attrubutes must be in camel case in React like contentEditable
// The attribute "class" does not work in React. We should use "className" instead of "class"

const fname="Zain"
const lname="Ahmad"
const img="https://tse4.mm.bing.net/th?id=OIP.TX3W6t84PTnSdqPwTtM_TQEyDM&pid=Api&P=0"


ReactDOM.render(
  <>
  <h1 contentEditable="true">My name is: {`${fname} ${lname}`}</h1>
  <p>Date is: {new Date().toDateString()}</p>
  <p className='timeParagragh'>Time is:  {new Date().toLocaleTimeString()}</p>
  <a href='https://github.com/bsef19a514'>
    <img src={img} alt='Error: No img found .'/>
  </a>
  <img src={img} alt='Error: No img found.'/>
  <img src={img} alt='Error: No img found.'/>
  </>,
  document.getElementById("root")
)