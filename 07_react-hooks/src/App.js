
// method 1 (using pure JS)

// let count=0
// const Increment=()=>{
//   count++
//   console.log(count);
//   const number=document.getElementById("number")
//   number.innerHTML=count
// }


// method 2 (using useState() method)
import React, { useState } from "react"

const App=()=>{
  let[count,addCount]=useState(0)
  const Increment=()=>{
    addCount(count+1)
  }
  // console.log(count);
  return(
    <>
    <h1 id="number">{count}</h1>
    <button onClick={Increment}>Clickme</button>
    </>
  )
}

export default App

