import Contact from './Contact';
import About from './About';
import Error from "./Error"
import Email from "./Email"
import Navbar from './Navbar';
import Home from "./Home"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/:user/:email" element={<Home name="home page"/>}/>
      <Route path="/about" element={<About name="about us"/>}/>
      <Route path="/contact" element={<Contact name="contact us"/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route path="/contact/email" element={<Email/>}/>
    </Routes>
    </>
  );
}

export default App;

//in react verwsion 5
// exact path was used
// Switch was used instead of Routes
// component={About} was used insted of element={<About/>}