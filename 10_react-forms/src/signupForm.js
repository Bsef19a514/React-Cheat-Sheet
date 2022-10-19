import React,{useState} from "react"

const SignupForm=()=>{

    let obj={
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
        cPassword:""
    }
    
    // using single react hook (useState) and single onChangeHandler() for all the inputs
    let [onChangedata,setOnChangeData]=useState(obj)
    let [onClickData,setOnclickData]=useState(obj)
   
    // user defined function
    const onChangeHandler=(event)=>{
        const {name,value}=event.target //object destructuring

        setOnChangeData((prevValue)=>{
            console.log("prev: ",prevValue);
            return({
                ...prevValue,  //using spread opearator
                [name]:value
            })
            // if(name==="fname"){
            //    return {
            //         firstname:value,
            //         lastname:prevValue.lastname,
            //         email:prevValue.email,
            //         password:prevValue.password,
            //         cPassword:prevValue.cPassword
            //     }
            // }else if(name==="lname"){
            //     return {
            //          firstname:prevValue.firstname,
            //          lastname:value,
            //          email:prevValue.email,
            //          password:prevValue.password,
            //          cPassword:prevValue.cPassword
            //      }
            // }else if(name==="email"){
            //     return {
            //          firstname:prevValue.firstname,
            //          lastname:prevValue.lastname,
            //          email:value,
            //          password:prevValue.password,
            //          cPassword:prevValue.cPassword
            //      }
            // }else if(name==="password"){
            //     return {
            //         firstname:prevValue.firstname,
            //          lastname:prevValue.lastname,
            //          email:prevValue.email,
            //          password:value,
            //          cPassword:prevValue.cPassword
            //      }
            // }else if(name==="cPassword"){
            //     return {
            //         firstname:prevValue.firstname,
            //          lastname:prevValue.lastname,
            //          email:prevValue.email,
            //          password:prevValue.password,
            //          cPassword:value
            //      }
            // }

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
            <label>First Name:</label>
            <input type="text" name="firstname" placeholder="Enter first name" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <label>Last Name:</label>
            <input type="text" name="lastname" placeholder="Enter lname name" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Enter your email" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="text" name="password" placeholder="Enter password" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <label>Confirm Password:</label>
            <input type="text" name="cPassword" placeholder="Confirm password" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <input type="submit" value="submit"/>
            <br/>
            <br/>
        </form>
        <h1>First Name: {onClickData.firstname}</h1>
        <h1>Last Name: {onClickData.lastname}</h1>
        <h1>Email: {onClickData.email}</h1>
        <h1>Password: {onClickData.password}</h1>
        <h1>Confirm Password: {onClickData.cPassword}</h1>
        </>
    )
}

export default SignupForm