import React , { useState } from "react";


function App() {
  let newTime=new Date().toLocaleTimeString()
  let[time,setTime]=useState(newTime)
  

  const getTime=()=>{
    newTime=new Date().toLocaleTimeString()
    setTime(newTime)
  }

  setInterval(getTime,1000)
  
  return (
  <>
   <h1>{time}</h1>
   <button onClick={getTime}>Click me</button>
 </>
  );
}

export default App;
