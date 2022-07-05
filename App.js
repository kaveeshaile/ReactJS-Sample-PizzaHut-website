
import './App.css';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import Navbar from "./component/navbar";
import Fotter from  "./component/Fotter";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
  <div className="App">
    <Router>
    < Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
   </Routes>
   <Fotter />
    </Router>
 

  </div>
  );
}

export default App;
