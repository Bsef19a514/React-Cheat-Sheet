import { useState } from "react"
import SearchResult from "./SearchResult"

const Search=()=>{
    const [value,setValue]=useState("")
    const onChangeHandler=(event)=>{
        setValue(event.target.value)
        console.log(value);
    }

    var src=`https://source.unsplash.com/400x500/?${value}`
    return(
        <>
            <input type="text" placeholder="Search" onChange={onChangeHandler}/>
            <br/>
            <br/>
            {
                value.length>0? (<SearchResult src={src}/>):null
            }
            
        </>
    )
}

export default Search