import React,{useState} from "react"
import AddIcon from '@mui/icons-material/Add';

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
            {/* using font awesone icons */}
            <button onClick={increment}><i class="fa-solid fa-plus"></i></button>
            {/* using material ui icons */}
            <button onClick={decrement}><AddIcon/></button>
        </div>
    </>)
}

export default Incrementer
