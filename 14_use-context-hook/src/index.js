import React,{createContext} from "react"
import ReactDom from "react-dom/client"
import CompA from "./CompA.js"

const FirstName=createContext()
const LastName=createContext()
const City=createContext()
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(
    <>
        <FirstName.Provider value={"Zain"} >
            <LastName.Provider value={"Sattar"}>
                <City.Provider value={"Pattoki"}>
                    <CompA/>
                </City.Provider>
            </LastName.Provider>
            
        </FirstName.Provider>
    </>
)
// createContext()-> allows use to send data to any componet from parent component in the cpmponet tree without passing that data to each upper component like in case of react-props
export {FirstName,LastName,City}