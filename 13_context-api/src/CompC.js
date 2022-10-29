import { FirstName, LastName,City} from "./index"


const CompC=()=>{
    return (
        <>
        <FirstName.Consumer>
            {(fname)=>{
            return(<LastName.Consumer>
                {
                    (lname)=>{
                        return(<City.Consumer>
                            {
                                (city)=>{
                                    return(<h1>This is {fname} {lname} from {city}.</h1>)
                                }
                            }
                        </City.Consumer>)
                    }
                }
            </LastName.Consumer>)
        }}
        </FirstName.Consumer>
        </>
    )
}

export default CompC