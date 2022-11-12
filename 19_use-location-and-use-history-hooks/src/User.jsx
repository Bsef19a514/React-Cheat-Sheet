import { useLocation, useParams } from "react-router-dom"


const User=(props)=>{
    const {uname,email}=useParams()
    const location=useLocation()
    return(
        <>
            <h1>This is {props.name} page.</h1>
            <h2>User: {uname}</h2>
            <h2>Email: {email}</h2>
            <h2>URL is: {location.pathname}</h2>
            {
                location.pathname=="/users/zain/zainsattar17@gmail.com" ?
                (<button>Admin</button>):null
            }
        </>
    )
}

export default User