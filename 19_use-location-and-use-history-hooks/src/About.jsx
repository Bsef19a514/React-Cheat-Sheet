import {useNavigate} from "react-router-dom"

const About=(props)=>{
    const navigate=useNavigate()
    return(
        <>
            <h1>This is {props.name} page.</h1>
            <button onClick={()=>{ navigate("/")}}>goto Home</button>
            <br/>
            <br/>
            <button onClick={()=>{navigate(-1)}}>go Back</button>
        </>
    )
}

export default About