import React , { useState } from "react";


function App() {
  let newTime=new Date().toLocaleTimeString()
  let[time,setTime]=useState(newTime)
 
  const getTime=()=>{
    newTime=new Date().toLocaleTimeString()
    setTime(newTime)
  }
  return (
  <>
   <h1>{time}</h1>
   <button onClick={getTime}>Click me</button>
 </>
  );
}

export default App;
