import {Routes,Route} from "react-router-dom"
import Home from "./Home";
import User from "./User";
import About from "./About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name="home"/>}/>
      <Route path="/users/:uname/:email" element={<User name="users"/>}/>
      <Route path="/about" element={<About name="about us"/>}/>
    </Routes>
  );
}

export default App;
