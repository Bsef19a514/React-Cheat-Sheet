import { useContext } from "react"
import { FirstName, LastName,City} from "./index"


const CompC=()=>{
    const fname=useContext(FirstName)
    const lname=useContext(LastName)
    const city=useContext(City)

    return (
        <>
        <h1>This is {fname} {lname} from {city}</h1>    
        </>
    )
}
// useContext()-->provides a better way to handle data that is Provided through createContext() hock in the consumer component as it saves us from callback hell
export default CompC