import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Feedback from "./pages/feedback/Feedback";
<<<<<<< HEAD
import About from"./pages/about/About";

=======
import Gallery from "./pages/gallery/Gallery";
import Registration from "./pages/registration/Registration";
>>>>>>> ef86aa15c1aa6859b2870bbe8974ac3ac9eff8c3
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
<<<<<<< HEAD
        <Route path="/about" element={<About/>}></Route>

=======
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        
>>>>>>> ef86aa15c1aa6859b2870bbe8974ac3ac9eff8c3

      </Routes>
    </BrowserRouter>
  );
}

export default App;
