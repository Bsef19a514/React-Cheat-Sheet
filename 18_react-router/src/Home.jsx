import { useParams } from "react-router-dom"
 
//old method  (version v5)
// const Home=({match})=>{
//     return(
//         <>
//             <h1>User= {match.params.user}</h1>
//             <h2>Email= {match.params.email}</h2>
//         </>
//     )
// }

// new method (version v6)
const Home=()=>{
    const {user,email}=useParams()
    return(
        <>
            <h1>User= {user}</h1>
            <h2>Email= {email}</h2>
        </>
    )
}

export default Home