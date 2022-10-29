import {useState} from "react"

function App() {
  let[number,setNumber]=useState()
  return (
    <div className="App">
      <h1>number</h1>
      <button onClick={onClickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
