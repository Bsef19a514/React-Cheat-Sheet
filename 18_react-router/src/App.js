import Contact from './Contact';
import About from './About';
import Error from "./Error"
import Email from "./Email"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
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