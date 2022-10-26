import React,{useState} from "react"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import "./App.css"

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
            <Tooltip title="Increment">
                <Button className="addButton" onClick={increment}><AddIcon/></Button>
            </Tooltip>
            {/* using material ui icons */}
            <Tooltip title="Decrement">
                <Button className="subtractButton" onClick={decrement}><RemoveIcon/></Button>
            </Tooltip>
        </div>
    </>)
}

export default Incrementer
