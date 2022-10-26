import React,{useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Bootstrap=()=>{
    return(
    <>
        <h1 class="text-capitalize text-md-center m-1">Signup</h1>
        <form >
            <label >First Name:</label>
            <input class="form-control" type="text" name="firstname" placeholder="Enter first name" />
            <br/>
            <br/>
            <label>Last Name:</label>
            <input class="form-control" type="text" name="lastname" placeholder="Enter lname name" />
            <br/>
            <br/>
            <label>Email:</label>
            <input class="form-control" type="text" name="email" placeholder="Enter your email" />
            <br/>
            <br/>
            <label>Password:</label>
            <input class="form-control" type="text" name="password" placeholder="Enter password" />
            <br/>
            <br/>
            <label>Confirm Password:</label>
            <input class="form-control" type="text" name="cPassword" placeholder="Confirm password" />
            <br/>
            <br/>
            <div class="text-center">
            <input type="submit" class="btn btn-outline-success " value="submit"/>
            </div>
            <br/>
            <br/>
        </form>
    </>
    )
}

// How to use bootstrap
// 1) npm i bootstrap
// 2) import node_modules=>bootstarp=>dist=>css=>bootstrap.min.css in your js file
// 3) intall IntelliSense for CSS class extansion in vs code
// 4) install Bootstrap 4, Font awesome 4, extension in vs code
export default Bootstrap