import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Sign_in from "./pages/Sign_in";
import Signup from "./pages/Signup";
import Getstarted from "./pages/Getstarted";
import Learnmore from "./pages/Learnmore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/react_router_dom" element={<Homepage/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/signin" element={<Sign_in/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/getstarted" element={<Getstarted/>}/>
        <Route path="/learnmore" element={<Learnmore/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
