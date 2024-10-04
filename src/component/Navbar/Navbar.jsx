import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import img1 from "../img/logo.png"

export default function Navbar() {
 // sticky nav
 const [stickyClass, setStickyClass] = useState("");

 function stickNavbar() {
     let windowHeight = window.scrollY;
     setStickyClass("sticky-nav") ? windowHeight > 500 : setStickyClass("");
 }

 useEffect(() => {
     window.addEventListener("scroll", stickNavbar);
 }, []);

  
  return (
  

<nav className="navbar navbar-expand-lg navbar-dark z-3">
    <div className="container-fluid text-text-white">
       
          {/* <Link to="/">
          <img src="" height={50} alt="CoolBrand" />
          </Link> */}
          <Link to="/">
          <img src={img1} height={50} alt="CoolBrand"  />

          </Link>

        <button type="button" className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
            <div className="navbar-nav ms-auto  ">
         
            <Link to="/">
<h4 className="nav-item nav-link fw-bold ">Home</h4>
</Link>     
                
                {/* <Link to="/Contactus" className='text-decoration-none'><a href="#" className="nav-item nav-link active">Contact us</a></Link> */}
<Link to="/about">
<h4 className="nav-item nav-link fw-bold">About us</h4>
</Link>
<Link to="/History">
<h4 className="nav-item nav-link fw-bold">History</h4>

</Link>
<Link to="/contact">
<h4 className="nav-item nav-link fw-bold">Contact us</h4>

</Link>
<Link to="/video">
<h4 className="nav-item nav-link fw-bold">Video me</h4>

</Link>
<Link to="/skills">
<h4 className="nav-item nav-link fw-bold">Skills</h4>

</Link>

{/* <Link to="/RecipeCard" className='text-decoration-none'><a href="#" className="nav-item nav-link active">Menu</a></Link> */}

{/* <Link to="/Team" className='text-decoration-none'><a href="#" className="nav-item nav-link active">team</a></Link> */}

                

            </div>
           
        </div>
    </div>
</nav>



    
  )
}
