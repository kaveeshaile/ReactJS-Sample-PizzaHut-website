import React, { useState } from 'react'
//import Logo from "../assest/pizza.jpg";
import {Link} from "react-router-dom";
import  "../styles/Navbar.css";

import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
}
  return (
    <div>
          <div className="navbar">
        <div className='leftside' id={openLinks ? "open" : "close"}>
            {/* <img src={Logo} /> */}

            <div className='hiddenLinks'>
            <Link to="/"> Home</Link>
            <Link to="Menu"> Menu</Link>
            <Link to="About"> About</Link>
            <Link to="Contact"> Contact</Link>
        


            </div>




        </div> 
        <div className='rightside'>
          <Link to="/"> Home</Link>
          <Link to="Menu"> Menu</Link>
          <Link to="Aboutus"> About</Link>
          <Link to="Contact"> Contact</Link>
           <button onClick={toggleNavbar}>
            <ReorderIcon  />
           </button>
            
        </div>



    </div>
    </div>
  );

}

export default Navbar