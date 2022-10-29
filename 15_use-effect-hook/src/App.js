import {useState,useEffect} from "react"

function App() {
  let[number,setNumber]=useState(0)
  const onClickEventHandler=()=>{
    setNumber(number+1)
    // alert(number) // first runs alert then update the value
  }

  // useEffect gets called everytime when App componet is rendered
  // like page refresh and setNumber() is called
  useEffect(()=>{
    alert(number) 
  })

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onClickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
