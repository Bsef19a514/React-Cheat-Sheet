import {NavLink} from "react-router-dom"
import "./style.css"
const Navbar=()=>{
    return(
        <>
            <NavLink className="button" to="/zain/zainsattar17@gmail.com" activeclassname="active">Home</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            <NavLink to="/contact/email" activeclassname="active">Email</NavLink>
        </>
    )
}

export default Navbar