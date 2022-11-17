import {Routes,Route} from "react-router-dom"
import Search from "./Search";

function App() {
  return (
   <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/search" element={<Search/>}/>
   </Routes>
  )
}

export default App;
