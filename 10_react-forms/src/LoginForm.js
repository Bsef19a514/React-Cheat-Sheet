import React,{useState} from "react"

const LoginForm=()=>{
    let newName
    let newPassword
    let [name,setName]=useState()
    // let [onClickName,setOnClickName]=useState()
    let [password,setPassword]=useState()
    // [onClickPassword,setOnClickPassword]=useState()

    const updateName=(event)=>{
        newName=event.target.value
    }
    const updatePassword=(event)=>{
        newPassword=event.target.value
    }
    const showLoginDetails=(event)=>{
        setName(newName)
        setPassword(newPassword)
        event.preventDefault()
    }

    return(
        <>
        <form onSubmit={showLoginDetails}>
            <label>Name:</label>
            <input type="text" onChange={updateName}/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="text" onChange={updatePassword}/>
            <br/>
            <br/>
            <input type="submit" value="submit"/>
            <br/>
            <br/>
        </form>
        <h1>Name: {name}</h1>
        <h1>Password: {password}</h1>
        </>
    )
}

export default LoginForm