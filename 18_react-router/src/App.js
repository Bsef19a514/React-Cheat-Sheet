import Contact from './Contact';
import About from './About';
import Error from "./Error"
import Email from "./Email"
import Navbar from './Navbar';
import Home from "./Home"
import {Route,Routes,Navigate} from "react-router-dom"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home name="home page"/>}/>
      <Route path="/:user/:email" element={<Home name="home page"/>}/>
      <Route path="/about" element={<About name="about us"/>}/>
      <Route path="/contact" element={<Contact name="contact us"/>}/>
      <Route path="/contact/email" element={<Email/>}/>
      {/* <Route path="/*" element={<Error/>}/> */}
      <Route path="/redirect" element={ <Navigate to="/about" /> }/>
      <Route path="/*" element={ <Navigate to="/" /> }/>
    </Routes>
    </>
  );
}


export default App;

//in react version 5
// exact path was used
// Switch was used instead of Routes
// component={About} was used insted of element={<About/>}
// redirect was replaced by navigate