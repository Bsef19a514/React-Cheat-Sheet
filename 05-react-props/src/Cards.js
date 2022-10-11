import Card from "./Card"
import movieList from "./movieList.json"


const movies=movieList.movies

const favouriteMovie="Inception"
// function Cards() {
//   return(
//   <div className="Cards">
//     {movies.map((val,index)=>{

//         return(<Card
//           key={val.id}
//           imgSrc={val.posterUrl}
//           genere1={val.genres[0]}
//           genere2={val.genres[1]}
//           title={val.title}/>)
//       })}
//   </div>    
//   )
// }

function Cards() {
  return(
  <div className="Cards">
    {movies.map(mapCallbackFunc)}
  </div>    
  )
}

const mapCallbackFunc=(val)=>{ 
  val=movies.filter(filterCallbackFunc)
  console.log("val is: ");
  console.log(val);
  return(<Card
    key={val.id}
    imgSrc={val.posterUrl}
    genere1={val.genres[0]}
    genere2={val.genres[1]}
    title={val.title}/>)
}

const filterCallbackFunc=(val)=>{
  console.log(val.title);
  return val.title=="Inception"
}
export default Cards;