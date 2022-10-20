import React,{useState} from "react"

const Incrementer=()=>{
    let number=0
    let[newNumber,setNumber]=useState(number)

    const increment=()=>{
        setNumber((prevValue)=>{
            console.log(prevValue);
            return prevValue+1
        })
    }
    const decrement=()=>{
        setNumber((prevValue)=>{
            if(prevValue>0){
                console.log(prevValue);
                return prevValue-1
            }
            else{
                return prevValue
            }
        })
    }
    return(
    <>
        <div>
            <h1>{newNumber}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </>)
}

export default Incrementer
