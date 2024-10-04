import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.css"
import img11 from "../img/banner.png"
import About from '../About/About'
import img12 from "../img/img-1.jpeg"
import img13 from "../img/img-4.png"
import icon1 from "../img/icon.png"
import icon3 from "../img/icon-1.png"
import icon4 from "../img/icon-2.png"
import icon5 from "../img/icon-3.png"
import Achievement from '../Achievement/Achievement'
import Skills from '../Skills/Skills'
import Photos from '../Photos/Photos'
import ContactForm from '../ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import { FaAngleUp } from "react-icons/fa";


export default function Home() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <>
<div className='home position-relative'>
  <div className='banner-shape shape-1'></div>
        <div className='banner-shape shape-2'></div>
        <div className='banner-shape shape-3'></div>
    <div className='banner-shape shape-4'></div>
        <div className='banner-shape shape-5'></div>
        <div className='banner-shape shape-6'></div>


         <div className="position-relative" >
 <div className='container'>
 <div className='row'>
 <div className='col-lg-6 p ' data-aos="fade-right">
 <div>
 <h1 className='text-white h1'><span className='text-theme d-block'>i am</span> Asia Bragonzi</h1>
 <Link to="/about" className='custom-button'>
 My Career
 </Link>
 <i className="fi fi-rr-user"></i>
 </div>

 </div>

 <div className='col-lg-6 pt-5' data-aos="fade-up">
 <div className="imga" data-wow-delay=".5s" data-wow-duration="1s">
    <img src={img13} alt="" className='w-100 '/>
            </div>
</div>
 </div>
 </div>
 
   </div>



    
    
{/*  */}

 <div className="scrollBtn"  onClick={scrollToTop}>
                    <i ><FaAngleUp /> </i>
                </div>

</div>
<div className='information-section mt--103 '>
        <div className='container'>
            <div className='row justify-content-center mb-30-none '>
                <div className='col-sm-6 col-xl-3'>
                    <div className='information-item padd'>
                        <div className='info-inner'>
                            <div className='right-icon'>
                            <img src={icon3} alt="" />
                            </div>
                            <div className="icon">
                            <img src={icon3} alt="" />
                            </div>
                            <h5 className="title">Place of Birth</h5>
                            <span className="info">  Italia</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="information-item padd">
                        <div className="info-inner">
                            <div className="right-icon">
                            <img src={icon4} alt="" />
                            </div>
                            <div className="icon">
                                <img src={icon4} alt="" />

                            </div>
                            <h5 className="title">Date of Birth</h5>
                            <span className="info">5 March 2001</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="information-item ">
                        <div className="info-inner">
                            <div className="right-icon">
                            <img src={icon1} alt="" className='' />

                            </div>
                            <div className="icon">
                            <img src={icon1} alt="" className='' />

                                {/* <i class="flaticon-weighing-machine"></i> */}
                                {/* <i class="flaticon-weighing-machine"><img src={icon1} alt="" /></i> */}

                            </div>
                            <h5 className="title">Weight</h5>
                            <span className="info">63kg / 139lb</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="information-item ">
                        <div className="info-inner">
                            <div className="right-icon">
                            <img src={icon5} alt="" />
                            </div>
                            <div className="icon">
                            <img src={icon5} alt="" />
                            </div>
                            <h5 className="title">Height</h5>
                            <span className="info">171cm / 5'7"</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 


<About/>
 <Achievement/> 
 <Photos/>
 <Skills/>
</>
  )
}
