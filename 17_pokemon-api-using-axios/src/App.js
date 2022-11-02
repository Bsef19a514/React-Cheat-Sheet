import {useEffect, useState} from "react"
import axiox from "axios"

function App() {
  const [num,setNum]=useState()
  const [name,setName]=useState()
  const [moves,setMoves]=useState()

  const onChangeHandler=(event)=>{
    setNum(event.target.value)
  }
  useEffect(()=>{
     getData()
  })
  const getData=async()=>{
    console.log("getData called");
    const res=await axiox.get(`https://pokeapi.co/api/v2/pokemon/${num}`) 
    console.log(res);
    setName(res.data.name)
    setMoves(res.data.moves.length)
  }
  return (
    <div className="App">
      <select value={num} onChange={onChangeHandler}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <h1>you choose {num} value</h1>
      <h1>I am {name} and i have {moves} moves</h1>
    </div>
  );
}

export default App;
