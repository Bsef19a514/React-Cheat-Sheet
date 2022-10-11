import Cards from "./Cards"
import "./App.css"

function App(){
  return(
    <>
    <h1 className="header">Top movie List</h1>
    <Cards/>
    </>
  )
}
// function App() {
//   return(
//     movies.map((val,index)=>{
//       return(
//         <Card
//         key={val.id}
//         imgSrc={val.posterUrl}
//         genere1={val.genres[0]}
//         genere2={val.genres[1]}
//         title={val.title}    
//         />)
//     })
//   )
// }


export default App;
