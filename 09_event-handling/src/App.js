import React,{useState} from "react"
import "./App.css"

function App() {
  let backGroundColor="skyblue"
  let[currentBackground,setBackground]=useState(backGroundColor)
  const changeColor=()=>{
    backGroundColor="lightgrey"
    setBackground(backGroundColor)
  }
  return (
    <div className="container" style={{backgroundColor:currentBackground}}> 
    <button className="btn" onClick={changeColor}>Click me</button>
    </div>
  );
}

export default App;
