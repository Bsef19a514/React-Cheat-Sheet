import React ,{useState} from "react"

function App() {
  let [name,setName]=useState()

    const onChangeEvent=(event)=>{
      setName(event.target.value)
    }

    let [fullname,setFullname]=useState()
    const onClickEvent=(event)=>{
      setFullname(name)
    }

  return (
    <div className="App">
     <h1>Hi, {fullname}</h1>
     <label>Name:</label>

     {/* <input placeholder="Enter your full name" value=""/> Error :  A component is changing an uncontrolled input to be controlled. */}
     {/* method 1: using defaultValue prop*/}
     {/* <input placeholder="Enter your full name" defaultValue=""/> */}
     {/* methid 2: using controlled input onChange event Handler */}

      <input placeholder="Enter your full name" onChange={onChangeEvent}  />
      <button onClick={onClickEvent}>Click me</button>
    </div>
  );
}

export default App;
