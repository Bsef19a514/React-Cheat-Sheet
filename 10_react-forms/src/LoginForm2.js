import React,{useState} from "react"

const LoginForm2=()=>{
    let obj={
        fullname:"",
        password:""
    }
    
    // using single reack hook (useState) and single onChangeHandler() for all the inputs
    let [onChangedata,setOnChangeData]=useState(obj)
    let [onClickData,setOnclickData]=useState(obj)
   
    // user defined function
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setOnChangeData((prevValue)=>{
            console.log("prev: ",prevValue);
            if(name==="fname"){
               return {
                    fullname:value,
                    password:prevValue.password
                }
            }else{
                return {
                    fullname:prevValue.fullname,
                    password:value
                }
            }

        })   
    }

    //on Submit function handler
    const showLoginDetails=(event)=>{
        setOnclickData(onChangedata)
        event.preventDefault(); //prevenvents the form from submitting (default behaviour)

        
    }

    return(
        <>
        <form onSubmit={showLoginDetails}>
            <label>Name:</label>
            <input type="text" name="fname" placeholder="Enter full name" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="text" name="password" placeholder="Enter password" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <input type="submit" value="submit"/>
            <br/>
            <br/>
        </form>
        <h1>Name: {onClickData.fullname}</h1>
        <h1>Password: {onClickData.password}</h1>
        </>
    )
}

export default LoginForm2